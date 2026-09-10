'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import V2Countdown from '@/components/hero/v2/V2Countdown';
import { V2Button, V2Badge, V2TechLabel, V2Metadata } from '@/components/ui/v2';
import { TransformationTimelineValues } from './V3Scene';
import { ARENA_NODES_CONFIG } from './V3ArenaNodes';
import { EVENTS_DATA, EventArena } from '@/data/events';
import { getArenaById } from '@/data/arenas';

// Dynamic import of 3D Scene with SSR disabled
const V3Scene = dynamic(() => import('./V3Scene'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--v2-font-mono)',
          fontSize: '0.75rem',
          color: 'var(--v2-text-muted)',
          letterSpacing: '0.15em',
        }}
      >
        INITIALIZING 3D TELEMETRY...
      </div>
    </div>
  ),
});

interface V3HeroProps {
  onOpenModal: (modalId: string) => void;
  onScrollTo: (sectionId: string) => void;
  onSelectEvent?: (event: EventArena) => void;
  onIntroStateChange?: (isActive: boolean) => void;
}

export default function V3Hero({
  onOpenModal,
  onScrollTo,
  onSelectEvent,
  onIntroStateChange,
}: V3HeroProps) {
  const [swamijiExpanded, setSwamijiExpanded] = useState(false);
  const [phaseState, setPhaseState] = useState<'jubilee' | 'deconstruct' | 'forming' | 'complete'>('complete');
  const [viewMode, setViewMode] = useState<'monument' | 'arenas'>('monument');
  const [hoveredArenaId, setHoveredArenaId] = useState<string | null>(null);
  const [evolveCueReady, setEvolveCueReady] = useState(false);

  // Authoritative Intro State & Narrative
  const [isIntroActive, setIsIntroActive] = useState(false);
  const [introScene, setIntroScene] = useState<{
    eyebrow: string;
    title: string;
    sub: string;
  }>({
    eyebrow: 'SJBIT // EST. 2001 • BENGALURU',
    title: '25 YEARS OF EXCELLENCE',
    sub: 'SILVER JUBILEE HERITAGE',
  });
  const masterTlRef = useRef<gsap.core.Timeline | null>(null);

  // Sequential Staggered Card Reveal Tracking (0 to 7)
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [justLockedCards, setJustLockedCards] = useState<number[]>([]);
  const activeEvolveTlRef = useRef<gsap.core.Timeline | null>(null);

  // DOM element refs for typography & UI priority gating
  const topTelemetryRef = useRef<HTMLDivElement>(null);
  const bottomFooterRef = useRef<HTMLElement>(null);
  const finalMetaRef = useRef<HTMLDivElement>(null);
  const prizePoolRef = useRef<HTMLDivElement>(null);

  // Live timeline properties shared with the Three.js canvas (defaulting to fresh entry state)
  const timelineValuesRef = useRef<TransformationTimelineValues>({
    cameraDist: 5.2,
    cameraTargetZ: 0,
    jubileeDeconstruct: 0,
    jubileeOpacity: 1,
    fragmentProgress: 0,
    fragmentOpacity: 0,
    vigyantraFormation: 0,
    vigyantraOpacity: 0,
    evolveProgress: 0,
    isTransforming: true,
  });

  // =========================================================================
  // SKIP INTRO HANDLER: Instant clean settlement into final hero posture
  // =========================================================================
  const handleSkipIntro = () => {
    if (masterTlRef.current) {
      masterTlRef.current.kill();
      masterTlRef.current = null;
    }
    const tv = timelineValuesRef.current;
    tv.cameraDist = 6.8;
    tv.cameraTargetZ = 0;
    tv.jubileeDeconstruct = 1;
    tv.jubileeOpacity = 0;
    tv.fragmentProgress = 1;
    tv.fragmentOpacity = 0;
    tv.vigyantraFormation = 1;
    tv.vigyantraOpacity = 1;
    tv.evolveProgress = 0;
    tv.isTransforming = false;

    setPhaseState('complete');
    setEvolveCueReady(true);
    setIsIntroActive(false);
    try {
      sessionStorage.setItem('vgy_intro_seen', 'true');
    } catch {}
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    onIntroStateChange?.(false);

    if (topTelemetryRef.current) {
      gsap.to(topTelemetryRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' });
    }
    if (finalMetaRef.current) {
      gsap.to(finalMetaRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    }
    if (bottomFooterRef.current) {
      gsap.to(bottomFooterRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' });
    }
    if (prizePoolRef.current) {
      gsap.fromTo(
        prizePoolRef.current,
        { opacity: 0, y: 8, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  };

  // =========================================================================
  // CONTROLLED TRANSITION: MONUMENT ↔ 8 ARENAS
  // Communicates: VIGYANTRA → DECONSTRUCTION → 8 COMPONENTS → TRAVEL → 8 CARDS
  // =========================================================================
  const handleToggleView = (mode: 'monument' | 'arenas') => {
    if (mode === viewMode) return;
    setViewMode(mode);
    const tv = timelineValuesRef.current;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cleanly kill any in-flight transition timeline to prevent race conditions or stuck objects
    if (activeEvolveTlRef.current) {
      activeEvolveTlRef.current.kill();
      activeEvolveTlRef.current = null;
    }

    if (mode === 'arenas') {
      if (prefersReducedMotion) {
        tv.evolveProgress = 1;
        tv.cameraDist = 7.8;
        setRevealedCards([0, 1, 2, 3, 4, 5, 6, 7]);
        return;
      }

      setRevealedCards([]);
      setJustLockedCards([]);

      const tl = gsap.timeline({
        onComplete: () => {
          activeEvolveTlRef.current = null;
        },
      });
      activeEvolveTlRef.current = tl;

      // 0.0s to 2.1s: Components separate from VIGYANTRA letters, travel outward along arched trajectories
      tl.to(tv, {
        evolveProgress: 1,
        cameraDist: 7.8,
        duration: 2.1,
        ease: 'power2.inOut',
      });

      // Sequential staggered card reveal
      for (let i = 0; i < 8; i++) {
        const revealTime = 1.85 + i * 0.085;
        tl.call(
          () => {
            setRevealedCards((prev) => (prev.includes(i) ? prev : [...prev, i]));
            setJustLockedCards((prev) => (prev.includes(i) ? prev : [...prev, i]));
            setTimeout(() => {
              setJustLockedCards((prev) => prev.filter((id) => id !== i));
            }, 400);
          },
          [],
          revealTime
        );
      }
    } else {
      // Transition back to Monolithic Monument View
      setRevealedCards([]);
      setJustLockedCards([]);

      if (prefersReducedMotion) {
        tv.evolveProgress = 0;
        tv.cameraDist = 6.8;
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          activeEvolveTlRef.current = null;
        },
      });
      activeEvolveTlRef.current = tl;

      // Retract components smoothly back into the monument letters
      tl.to(tv, {
        evolveProgress: 0,
        cameraDist: 6.8,
        duration: 1.3,
        ease: 'power2.inOut',
      });
    }
  };

  const router = useRouter();

  // Navigate directly to the official Arena Dossier route when an arena is selected
  const handleArenaClick = (id: string) => {
    const arena = getArenaById(id);
    if (arena) {
      router.push(`/arenas/${arena.slug}`);
    } else {
      onScrollTo('arenas');
    }
  };

  // =========================================================================
  // AUTHORITATIVE LIFECYCLE: Fresh Entry Cinematic vs Immediate Stable Hero
  // =========================================================================
  useEffect(() => {
    const isSeen = typeof window !== 'undefined' && sessionStorage.getItem('vgy_intro_seen') === 'true';
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tv = timelineValuesRef.current;

    if (masterTlRef.current) {
      masterTlRef.current.kill();
      masterTlRef.current = null;
    }

    setViewMode('monument');
    setRevealedCards([]);
    setJustLockedCards([]);

    if (isSeen || prefersReducedMotion) {
      // Settle immediately into final hero posture without replay
      setIsIntroActive(false);
      setPhaseState('complete');
      setEvolveCueReady(true);
      tv.cameraDist = 6.8;
      tv.cameraTargetZ = 0;
      tv.jubileeDeconstruct = 1;
      tv.jubileeOpacity = 0;
      tv.fragmentProgress = 1;
      tv.fragmentOpacity = 0;
      tv.vigyantraFormation = 1;
      tv.vigyantraOpacity = 1;
      tv.evolveProgress = 0;
      tv.isTransforming = false;

      if (topTelemetryRef.current) gsap.set(topTelemetryRef.current, { opacity: 1 });
      if (finalMetaRef.current) gsap.set(finalMetaRef.current, { opacity: 1, y: 0 });
      if (bottomFooterRef.current) gsap.set(bottomFooterRef.current, { opacity: 1 });
      if (prizePoolRef.current) gsap.set(prizePoolRef.current, { opacity: 1, y: 0, scale: 1 });

      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
      onIntroStateChange?.(false);
      return;
    }

    // Fresh session: Initial opening ceremony begins
    setIsIntroActive(true);
    setPhaseState('jubilee');
    setEvolveCueReady(false);
    tv.cameraDist = 5.2;
    tv.cameraTargetZ = 0;
    tv.jubileeDeconstruct = 0;
    tv.jubileeOpacity = 1;
    tv.fragmentProgress = 0;
    tv.fragmentOpacity = 0;
    tv.vigyantraFormation = 0;
    tv.vigyantraOpacity = 0;
    tv.evolveProgress = 0;
    tv.isTransforming = true;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    onIntroStateChange?.(true);

    if (topTelemetryRef.current) gsap.set(topTelemetryRef.current, { opacity: 0 });
    if (finalMetaRef.current) gsap.set(finalMetaRef.current, { opacity: 0, y: 15 });
    if (bottomFooterRef.current) gsap.set(bottomFooterRef.current, { opacity: 0 });

    setIntroScene({
      eyebrow: 'SJBIT // EST. 2001 • BENGALURU',
      title: '25 YEARS OF EXCELLENCE',
      sub: 'SILVER JUBILEE HERITAGE',
    });

    // 6.8s Unified Cinematic Master Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        tv.isTransforming = false;
        setPhaseState('complete');
        setEvolveCueReady(true);
        setIsIntroActive(false);
        try {
          sessionStorage.setItem('vgy_intro_seen', 'true');
        } catch {}
        if (typeof document !== 'undefined') {
          document.body.style.overflow = '';
        }
        onIntroStateChange?.(false);

        // Surface hero UI elements with silky ease
        if (topTelemetryRef.current) {
          gsap.to(topTelemetryRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' });
        }
        if (finalMetaRef.current) {
          gsap.to(finalMetaRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' });
        }
        if (bottomFooterRef.current) {
          gsap.to(bottomFooterRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' });
        }
        if (prizePoolRef.current) {
          gsap.fromTo(
            prizePoolRef.current,
            { opacity: 0, y: 10, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
          );
        }
      },
    });
    masterTlRef.current = tl;

    // Act I: 0.0s – 1.6s (Heritage & 25 Years)
    tl.to(tv, {
      cameraDist: 4.8,
      duration: 1.6,
      ease: 'power1.inOut',
    });

    // Act II: 1.6s – 3.4s (Mechanical Metamorphosis & Fragment Surge)
    tl.call(() => {
      setIntroScene({
        eyebrow: 'CATALYZING THE FUTURE',
        title: 'THE ARCHITECTURE OF TRANSFORMATION',
        sub: 'CONVERGING 8 TECHNICAL ARENAS',
      });
      setPhaseState('deconstruct');
    }, [], 1.6);

    tl.to(
      tv,
      {
        jubileeDeconstruct: 1,
        jubileeOpacity: 0.1,
        cameraDist: 4.0,
        duration: 1.8,
        ease: 'power2.inOut',
      },
      1.6
    );

    tl.to(
      tv,
      {
        fragmentOpacity: 1,
        fragmentProgress: 0.65,
        duration: 1.4,
        ease: 'power2.out',
      },
      1.8
    );

    // Act III: 3.4s – 5.2s (VIGYANTRA Monument Docking)
    tl.call(() => {
      setIntroScene({
        eyebrow: 'NATIONAL SYMPOSIUM MONUMENT',
        title: 'VIGYANTRA 2026',
        sub: 'A NATIONAL-LEVEL TECHNICAL SYMPOSIUM',
      });
      setPhaseState('forming');
    }, [], 3.4);

    tl.to(
      tv,
      {
        jubileeOpacity: 0,
        cameraDist: 6.8,
        fragmentProgress: 1,
        duration: 1.8,
        ease: 'power3.inOut',
      },
      3.4
    );

    tl.to(
      tv,
      {
        vigyantraOpacity: 1,
        vigyantraFormation: 1,
        duration: 1.8,
        ease: 'power2.out',
      },
      3.6
    );

    tl.to(
      tv,
      {
        fragmentOpacity: 0,
        duration: 0.6,
        ease: 'power2.in',
      },
      4.4
    );

    // Act IV: 5.2s – 6.2s (Philosophy & Motto)
    tl.call(() => {
      setIntroScene({
        eyebrow: 'THE PHILOSOPHY',
        title: '“Ideas Today • Solutions Tomorrow”',
        sub: '30 OCTOBER 2026 • SJBIT BENGALURU',
      });
    }, [], 5.2);

    tl.to({}, { duration: 1.0 });

    return () => {
      tl.kill();
      activeEvolveTlRef.current?.kill();
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  const leftArenas = ARENA_NODES_CONFIG.slice(0, 4);
  const rightArenas = ARENA_NODES_CONFIG.slice(4, 8);

  return (
    <section
      id="command-deck"
      className="v3-hero-stage"
      aria-label="VIGYANTRA 2026 3D Symposium Command Deck"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        width: '100%',
        overflow: 'hidden',
        background: '#050507',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '80px',
        paddingBottom: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* 0. SKIP INTRO BUTTON (Available immediately on initial opening ceremony) */}
      {isIntroActive && (
        <button
          onClick={handleSkipIntro}
          className="v3-cinematic-skip-btn"
          aria-label="Skip Cinematic Intro to Homepage"
        >
          SKIP INTRO →
        </button>
      )}

      {/* 0.1 CINEMATIC NARRATIVE DISPLAY (Choreographed across the 5 Acts) */}
      {isIntroActive && (
        <div className="v3-cinematic-narrative-box">
          <div className="v3-cinematic-eyebrow">{introScene.eyebrow}</div>
          <div className="v3-cinematic-title">{introScene.title}</div>
          <div className="v3-cinematic-sub">{introScene.sub}</div>
        </div>
      )}

      {/* 3D Scene Layer with 8 Arenas and Central Power Hub */}
      <V3Scene
        timelineValues={timelineValuesRef}
        hoveredArenaId={hoveredArenaId}
        onHoverArena={setHoveredArenaId}
        onSelectArena={handleArenaClick}
      />

      {/* Ultra-subtle engineering grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.008) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.008) 1px, transparent 1px)
          `,
          backgroundSize: '90px 90px',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Radial Focus Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 45%, rgba(5,5,7,0.7) 85%, #050507 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* =========================================================================
          V3.3.1 8 ARENAS INTERACTIVE HTML DISCOVERY FLANKS (Sequential Reveal)
          ========================================================================= */}
      {viewMode === 'arenas' && !isIntroActive && (
        <div className="v3-evolve-overlay" aria-label="8 Flagship Arenas Matrix">
          {/* Left Flank: Arenas 01 - 04 */}
          <div className="v3-evolve-flank left-flank">
            {leftArenas.map((arena, i) => {
              const isHovered = hoveredArenaId === arena.id;
              const isRevealed = revealedCards.includes(i);
              const isJustLocked = justLockedCards.includes(i);

              return (
                <div
                  key={arena.id}
                  className={`v3-arena-card ${isRevealed ? 'revealed' : ''} ${isJustLocked ? 'just-locked' : ''} ${isHovered ? 'active-hover' : ''}`}
                  onMouseEnter={() => setHoveredArenaId(arena.id)}
                  onMouseLeave={() => setHoveredArenaId(null)}
                  onClick={() => handleArenaClick(arena.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleArenaClick(arena.id);
                  }}
                  aria-label={`Open Dossier for Arena ${arena.number}: ${arena.name}`}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.62rem',
                        color: 'var(--v2-gold)',
                        letterSpacing: '0.14em',
                      }}
                    >
                      ARENA {arena.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.58rem',
                        color: 'var(--v2-silver-200)',
                        letterSpacing: '0.08em',
                        background: 'rgba(255, 255, 255, 0.06)',
                        padding: '1px 6px',
                        borderRadius: '3px',
                      }}
                    >
                      ₹50,000
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--v2-font-heading)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--v2-ivory)',
                      letterSpacing: '0.04em',
                      lineHeight: 1.25,
                      marginTop: '2px',
                    }}
                  >
                    {arena.name}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.55rem',
                        color: 'var(--v2-text-tertiary)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {arena.id} // {arena.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.58rem',
                        color: isHovered ? 'var(--v2-gold)' : 'var(--v2-text-muted)',
                        letterSpacing: '0.06em',
                        fontWeight: 500,
                      }}
                    >
                      DOSSIER →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Flank: Arenas 05 - 08 */}
          <div className="v3-evolve-flank right-flank">
            {rightArenas.map((arena, rIdx) => {
              const globalIdx = 4 + rIdx;
              const isHovered = hoveredArenaId === arena.id;
              const isRevealed = revealedCards.includes(globalIdx);
              const isJustLocked = justLockedCards.includes(globalIdx);

              return (
                <div
                  key={arena.id}
                  className={`v3-arena-card ${isRevealed ? 'revealed' : ''} ${isJustLocked ? 'just-locked' : ''} ${isHovered ? 'active-hover' : ''}`}
                  onMouseEnter={() => setHoveredArenaId(arena.id)}
                  onMouseLeave={() => setHoveredArenaId(null)}
                  onClick={() => handleArenaClick(arena.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleArenaClick(arena.id);
                  }}
                  aria-label={`Open Dossier for Arena ${arena.number}: ${arena.name}`}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.62rem',
                        color: 'var(--v2-gold)',
                        letterSpacing: '0.14em',
                      }}
                    >
                      ARENA {arena.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.58rem',
                        color: 'var(--v2-silver-200)',
                        letterSpacing: '0.08em',
                        background: 'rgba(255, 255, 255, 0.06)',
                        padding: '1px 6px',
                        borderRadius: '3px',
                      }}
                    >
                      ₹50,000
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--v2-font-heading)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--v2-ivory)',
                      letterSpacing: '0.04em',
                      lineHeight: 1.25,
                      marginTop: '2px',
                    }}
                  >
                    {arena.name}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.55rem',
                        color: 'var(--v2-text-tertiary)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {arena.id} // {arena.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.58rem',
                        color: isHovered ? 'var(--v2-gold)' : 'var(--v2-text-muted)',
                        letterSpacing: '0.06em',
                        fontWeight: 500,
                      }}
                    >
                      DOSSIER →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content Container Overlaid on 3D Canvas */}
      <div
        className="v2-container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          flex: 1,
          justifyContent: 'space-between',
          pointerEvents: isIntroActive ? 'none' : 'auto',
        }}
      >
        {/* 1. Top Identity & Institutional Telemetry Row (Subtle, non-competing) */}
        <div
          ref={topTelemetryRef}
          className="v2-hero-top-row"
          style={{
            opacity: isIntroActive ? 0 : 1,
            pointerEvents: isIntroActive ? 'none' : 'auto',
            transition: 'opacity 0.6s ease',
          }}
        >
          <div className="v2-inst-block">
            <span className="v2-inst-trust">Sri Adichunchanagiri Shikshana Trust®</span>
            <span className="v2-inst-college">SJB INSTITUTE OF TECHNOLOGY</span>
            <div className="v2-inst-badge-row">
              <V2Badge variant="gold">SILVER JUBILEE • 25 YRS</V2Badge>
              <V2Badge variant="steel">BENGALURU • EST. 2001</V2Badge>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {viewMode === 'monument' && phaseState === 'complete' && !isIntroActive && (
              <button
                onClick={() => handleToggleView('arenas')}
                style={{
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--v2-gold)',
                  fontFamily: 'var(--v2-font-mono)',
                  fontSize: '0.64rem',
                  letterSpacing: '0.12em',
                  padding: '4px 12px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--v2-gold)';
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)';
                }}
              >
                EXPLORE 8 ARENAS ⊞
              </button>
            )}
          </div>
        </div>

        {/* 2. Center Stage: Dual-State Architecture */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto 0',
            padding: '1rem 0',
            minHeight: '430px',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Spatial Spacer for the Elevated 3D Object */}
          <div
            style={{
              height: viewMode === 'arenas' ? 'clamp(100px, 14vw, 150px)' : 'clamp(120px, 19vw, 185px)',
              width: '100%',
              pointerEvents: 'none',
              transition: 'height 0.4s ease',
            }}
          />

          {/* =========================================================================
              VIEW MODE A: MONUMENT VIEW EDITORIAL (Sovereign VIGYANTRA focus)
              Strict Hierarchy:
              1. 3D VIGYANTRA (Dominant visual)
              2. 2026
              3. A NATIONAL-LEVEL TECHNICAL SYMPOSIUM
              4. Ideas Today • Solutions Tomorrow
              5. 30 OCTOBER 2026 • SJBIT BENGALURU
              6. ₹4,00,000 TOTAL PRIZE POOL
              7. Action CTAs
              8. Subordinated Countdown
              ========================================================================= */}
          {viewMode === 'monument' && (
            <div
              ref={finalMetaRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '820px',
                opacity: isIntroActive ? 0 : 1,
                pointerEvents: isIntroActive || phaseState !== 'complete' ? 'none' : 'auto',
                marginTop: '0.25rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '8px',
                background: 'radial-gradient(ellipse at center, rgba(5,5,7,0.78) 0%, rgba(5,5,7,0.4) 60%, transparent 100%)',
              }}
            >
              {/* 1. 2026 Badge */}
              <div style={{ marginBottom: '6px' }}>
                <span
                  style={{
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: 'clamp(0.72rem, 1vw, 0.84rem)',
                    fontWeight: 700,
                    color: 'var(--v2-gold)',
                    letterSpacing: '0.28em',
                    padding: '2px 10px',
                    borderRadius: '3px',
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                  }}
                >
                  EDITION 2026
                </span>
              </div>

              {/* 2. Subtitle & Motto */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--v2-font-heading)',
                    fontSize: 'clamp(0.96rem, 1.6vw, 1.24rem)',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    color: 'var(--v2-ivory)',
                    textTransform: 'uppercase',
                    maxWidth: '92vw',
                    lineHeight: 1.3,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                    textAlign: 'center',
                  }}
                >
                  A NATIONAL-LEVEL TECHNICAL SYMPOSIUM
                </div>

                <div
                  style={{
                    fontFamily: 'var(--v2-font-body)',
                    fontSize: 'clamp(0.85rem, 1.2vw, 1.02rem)',
                    fontStyle: 'italic',
                    color: '#e2d9c8',
                    letterSpacing: '0.04em',
                    opacity: 0.95,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)',
                    marginTop: '2px',
                    textAlign: 'center',
                  }}
                >
                  “Ideas Today • Solutions Tomorrow”
                </div>
              </div>

              {/* 3. Event Metadata Horizon (Date & Location) */}
              <div
                className="v2-hero-meta-horizon"
                style={{
                  marginTop: '0.55rem',
                  color: 'var(--v2-silver-200)',
                  fontSize: 'clamp(0.68rem, 0.88vw, 0.80rem)',
                  letterSpacing: '0.12em',
                }}
              >
                <span style={{ color: 'var(--v2-ivory)', fontWeight: 600 }}>30 OCTOBER 2026</span>
                <span className="sep">•</span>
                <span style={{ color: 'var(--v2-silver-200)' }}>SJBIT BENGALURU</span>
              </div>

              {/* 4. Dedicated Hero Prize Pool Plaque Artifact */}
              <div
                ref={prizePoolRef}
                style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0.55rem 1.6rem',
                  borderRadius: '6px',
                  background: 'linear-gradient(180deg, rgba(28, 30, 36, 0.85) 0%, rgba(13, 14, 18, 0.92) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.28)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.2)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: 'clamp(0.56rem, 0.7vw, 0.64rem)',
                    letterSpacing: '0.22em',
                    color: 'var(--v2-silver-200)',
                    textTransform: 'uppercase',
                    opacity: 0.85,
                    marginBottom: '1px',
                  }}
                >
                  TOTAL PRIZE POOL
                </div>

                <div
                  style={{
                    fontFamily: 'var(--v2-font-display)',
                    fontSize: 'clamp(1.5rem, 2.7vw, 2.15rem)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: 'var(--v2-gold)',
                    lineHeight: 1.1,
                    textShadow: '0 2px 12px rgba(212, 175, 55, 0.25)',
                  }}
                >
                  ₹ 4,00,000
                </div>

                <div
                  style={{
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: 'clamp(0.54rem, 0.65vw, 0.60rem)',
                    letterSpacing: '0.16em',
                    color: 'var(--v2-text-tertiary)',
                    textTransform: 'uppercase',
                    marginTop: '1px',
                  }}
                >
                  ACROSS 08 NATIONAL FLAGSHIP ARENAS
                </div>
              </div>

              {/* 5. Subordinated Live Countdown Timer */}
              <div style={{ marginTop: '0.75rem', width: '100%', display: 'flex', justifyContent: 'center', transform: 'scale(0.92)' }}>
                <V2Countdown />
              </div>

              {/* 6. Primary Action CTA Group */}
              <div className="v2-hero-cta-group" style={{ marginTop: '0.85rem' }}>
                <V2Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenModal('registration')}
                  aria-label="Open Cadet Registration Terminal"
                >
                  REGISTER NOW ⚡
                </V2Button>

                <V2Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onScrollTo('arenas')}
                  aria-label="Explore 8 Flagship Arenas"
                >
                  EXPLORE 8 ARENAS →
                </V2Button>

                <V2Button
                  variant="tertiary"
                  size="lg"
                  onClick={() => onOpenModal('brochure')}
                  aria-label="Open Digital Brochure Dossier"
                >
                  VIEW DOSSIER ↗
                </V2Button>
              </div>
            </div>
          )}

          {/* =========================================================================
              VIEW MODE B: 8 ARENAS CONSTELLATION EDITORIAL
              ========================================================================= */}
          {viewMode === 'arenas' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '680px',
                zIndex: 12,
                marginTop: '0.25rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '8px',
                background: 'radial-gradient(ellipse at center, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0.5) 70%, transparent 100%)',
              }}
            >
              {/* Institutional Horizon Notation */}
              <div
                style={{
                  fontFamily: 'var(--v2-font-mono)',
                  fontSize: 'clamp(0.62rem, 0.8vw, 0.72rem)',
                  letterSpacing: '0.22em',
                  color: 'var(--v2-gold)',
                  textTransform: 'uppercase',
                }}
              >
                VIGYANTRA // 8 TECHNICAL ARENAS
              </div>

              {/* Center Prize Pool Plaque Artifact */}
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0.5rem 1.4rem',
                  borderRadius: '6px',
                  background: 'linear-gradient(180deg, rgba(28, 30, 36, 0.9) 0%, rgba(13, 14, 18, 0.95) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.32)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.2)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: '0.56rem',
                    letterSpacing: '0.2em',
                    color: 'var(--v2-silver-200)',
                    textTransform: 'uppercase',
                  }}
                >
                  TOTAL PRIZE POOL
                </div>
                <div
                  style={{
                    fontFamily: 'var(--v2-font-display)',
                    fontSize: 'clamp(1.4rem, 2.4vw, 1.95rem)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: 'var(--v2-gold)',
                    lineHeight: 1.1,
                  }}
                >
                  ₹ 4,00,000
                </div>
                <div
                  style={{
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: '0.54rem',
                    letterSpacing: '0.14em',
                    color: 'var(--v2-text-tertiary)',
                    textTransform: 'uppercase',
                  }}
                >
                  ₹50,000 PER ARENA • 30 OCTOBER 2026
                </div>
              </div>

              {/* Action Buttons in Arenas View */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '0.85rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <V2Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenModal('registration')}
                  aria-label="Register for an Arena"
                >
                  REGISTER NOW ⚡
                </V2Button>

                <button
                  onClick={() => handleToggleView('monument')}
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                    color: 'var(--v2-ivory)',
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--v2-gold)';
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.16)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)';
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)';
                  }}
                >
                  ← RETURN TO MONUMENT
                </button>

                <V2Button
                  variant="tertiary"
                  size="md"
                  onClick={() => onOpenModal('brochure')}
                  aria-label="View Full Brochure Dossier"
                >
                  DOSSIER ↗
                </V2Button>
              </div>
            </div>
          )}
        </div>

        {/* 3. Swamiji Institutional Layer */}
        <footer
          ref={bottomFooterRef}
          className="v2-swamiji-strip"
          aria-label="Divine Blessings and Patronage"
          style={{
            opacity: isIntroActive ? 0 : 1,
            pointerEvents: isIntroActive ? 'none' : 'auto',
            transition: 'opacity 0.6s ease',
          }}
        >
          <div className="v2-swamiji-summary-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <V2TechLabel style={{ color: 'var(--v2-gold)', fontSize: '0.68rem' }}>
                || JAI SRI GURUDEV ||
              </V2TechLabel>
              <span style={{ color: 'var(--v2-steel-100)', fontSize: '0.75rem' }}>•</span>
              <span style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.65rem', color: 'var(--v2-text-tertiary)' }}>
                WITH THE DIVINE BLESSINGS OF OUR REVERED SWAMIJIS
              </span>
            </div>

            <button
              onClick={() => setSwamijiExpanded(!swamijiExpanded)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--v2-text-muted)',
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.65rem',
                cursor: 'pointer',
                letterSpacing: '0.08em',
              }}
              aria-expanded={swamijiExpanded}
            >
              {swamijiExpanded ? '[HIDE DETAILS ▲]' : '[DETAILS ▼]'}
            </button>
          </div>

          {swamijiExpanded && (
            <div className="v2-swamiji-expanded-panel">
              <div className="v2-swamiji-grid">
                <div className="v2-swamiji-card">
                  <div className="v2-swamiji-card-role">FOUNDER PRESIDENT</div>
                  <div className="v2-swamiji-card-name">
                    His Holiness Jagadguru Padmabhushana
                    <br />
                    Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji
                  </div>
                  <div className="v2-swamiji-card-sub">Adichunchanagiri Mahasamsthana Math</div>
                </div>

                <div className="v2-swamiji-card">
                  <div className="v2-swamiji-card-role">DIVINE BLESSINGS</div>
                  <div className="v2-swamiji-card-name">
                    His Holiness Jagadguru
                    <br />
                    Sri Sri Sri Dr. Nirmalanandanatha Maha Swamiji
                  </div>
                  <div className="v2-swamiji-card-sub">President, Sri Adichunchanagiri Shikshana Trust®</div>
                </div>

                <div className="v2-swamiji-card">
                  <div className="v2-swamiji-card-role">PATRON &amp; GUIDANCE</div>
                  <div className="v2-swamiji-card-name">
                    Revered Sri Sri
                    <br />
                    Dr. Prakashnath Swamiji
                  </div>
                  <div className="v2-swamiji-card-sub">Managing Director, BGS &amp; SJBIT Group of Institutions</div>
                </div>
              </div>
            </div>
          )}
        </footer>
      </div>
    </section>
  );
}

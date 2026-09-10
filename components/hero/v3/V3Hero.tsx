'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import V2Countdown from '@/components/hero/v2/V2Countdown';
import { V2Button, V2Badge, V2TechLabel, V2Metadata } from '@/components/ui/v2';
import { TransformationTimelineValues } from './V3Scene';
import { ARENA_NODES_CONFIG } from './V3ArenaNodes';
import { EVENTS_DATA, EventArena } from '@/data/events';

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
}

export default function V3Hero({ onOpenModal, onScrollTo, onSelectEvent }: V3HeroProps) {
  const [swamijiExpanded, setSwamijiExpanded] = useState(false);
  const [phaseState, setPhaseState] = useState<'jubilee' | 'deconstruct' | 'forming' | 'complete'>('jubilee');
  const [viewMode, setViewMode] = useState<'monument' | 'arenas'>('monument');
  const [hoveredArenaId, setHoveredArenaId] = useState<string | null>(null);
  const [evolveCueReady, setEvolveCueReady] = useState(false);

  // Sequential Staggered Card Reveal Tracking (0 to 7)
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [justLockedCards, setJustLockedCards] = useState<number[]>([]);
  const activeEvolveTlRef = useRef<gsap.core.Timeline | null>(null);

  // DOM element refs for typography & UI priority gating
  const topTelemetryRef = useRef<HTMLDivElement>(null);
  const bottomFooterRef = useRef<HTMLElement>(null);
  const jubileeMetaRef = useRef<HTMLDivElement>(null);
  const finalMetaRef = useRef<HTMLDivElement>(null);
  const prizePoolRef = useRef<HTMLDivElement>(null);

  // Live timeline properties shared with the Three.js canvas
  const timelineValuesRef = useRef<TransformationTimelineValues>({
    cameraDist: 5.8,
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

  const [replayCount, setReplayCount] = useState(0);

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
      // Camera pulls back to 7.8 to frame the 8 arenas
      tl.to(tv, {
        evolveProgress: 1,
        cameraDist: 7.8,
        duration: 2.1,
        ease: 'power2.inOut',
      });

      // 1.85s to 2.5s: As components arrive and lock into destination points,
      // reveal corresponding HTML arena cards sequentially with 85ms stagger
      // 01 APB -> 02 CR -> 03 HNH -> 04 ADC -> 05 ZCTF -> 06 INM -> 07 GTC -> 08 RBI
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

  // Open the official Event Dossier Modal when an arena is selected
  const handleArenaClick = (id: string) => {
    const event = EVENTS_DATA.find((e) => e.id === id || e.shortName === id || e.code === id);
    if (event && onSelectEvent) {
      onSelectEvent(event as unknown as EventArena);
    } else {
      onScrollTo('arenas');
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tv = timelineValuesRef.current;
    const tl = gsap.timeline();

    setViewMode('monument');
    setEvolveCueReady(false);
    setRevealedCards([]);
    setJustLockedCards([]);

    if (prefersReducedMotion) {
      tv.cameraDist = 6.8;
      tv.evolveProgress = 0;
      tv.isTransforming = false;
      setPhaseState('jubilee');

      tl.to({}, { duration: 1.5 })
        .to(tv, {
          jubileeOpacity: 0,
          duration: 1.2,
          ease: 'power2.inOut',
          onStart: () => setPhaseState('deconstruct'),
        })
        .to(tv, {
          vigyantraOpacity: 1,
          vigyantraFormation: 1,
          duration: 1.2,
          ease: 'power2.inOut',
          onStart: () => {
            setPhaseState('complete');
            setEvolveCueReady(true);
          },
        });

      if (jubileeMetaRef.current && finalMetaRef.current) {
        gsap.to(jubileeMetaRef.current, { opacity: 0, duration: 1.0, delay: 1.5 });
        gsap.to(finalMetaRef.current, { opacity: 1, duration: 1.2, delay: 2.5 });
      }
      return;
    }

    // Reset initial values
    tv.cameraDist = 5.8;
    tv.cameraTargetZ = 0;
    tv.jubileeDeconstruct = 0;
    tv.jubileeOpacity = 1;
    tv.fragmentProgress = 0;
    tv.fragmentOpacity = 0;
    tv.vigyantraFormation = 0;
    tv.vigyantraOpacity = 0;
    tv.evolveProgress = 0;
    tv.isTransforming = true;
    setPhaseState('jubilee');

    // UI Priority: Subdue top and bottom UI during the transformation sequence (object is hero)
    if (topTelemetryRef.current) {
      gsap.set(topTelemetryRef.current, { opacity: 0.35 });
    }
    if (bottomFooterRef.current) {
      gsap.set(bottomFooterRef.current, { opacity: 0.35 });
    }
    if (jubileeMetaRef.current) {
      gsap.set(jubileeMetaRef.current, { opacity: 1, y: 0 });
    }
    if (finalMetaRef.current) {
      gsap.set(finalMetaRef.current, { opacity: 0, y: 15 });
    }

    // =========================================================================
    // REFINED CINEMATIC TRANSFORMATION TIMELINE (~8.2 seconds)
    // 25 Years -> Engineering -> Structural Fragments -> VIGYANTRA Monument
    // =========================================================================

    // Beat 1: Initial Presentation of 25 Artifact (0 to 1.6s)
    tl.to(tv, {
      cameraDist: 4.8,
      duration: 1.6,
      ease: 'power1.inOut',
    });

    // Beat 2: Mechanical Uncoupling & Disassembly (1.6s to 3.6s)
    tl.to(
      tv,
      {
        jubileeDeconstruct: 1,
        jubileeOpacity: 0.15,
        cameraDist: 3.8,
        duration: 1.8,
        ease: 'power2.inOut',
        onStart: () => {
          setPhaseState('deconstruct');
          if (jubileeMetaRef.current) {
            gsap.to(jubileeMetaRef.current, { opacity: 0, y: -10, duration: 0.8 });
          }
        },
      },
      '+=0.1'
    );

    // Components emerge with clear trajectory toward letter docking zones
    tl.to(
      tv,
      {
        fragmentOpacity: 1,
        fragmentProgress: 0.45,
        duration: 1.2,
        ease: 'power2.out',
      },
      '-=1.4'
    );

    // Beat 3: Reconfiguration & Camera Pull to Intimate VIGYANTRA Framing (3.6s to 5.4s)
    tl.to(tv, {
      jubileeOpacity: 0,
      duration: 0.5,
      ease: 'power1.out',
    });

    tl.to(
      tv,
      {
        cameraDist: 6.8,
        fragmentProgress: 1,
        duration: 2.0,
        ease: 'power3.inOut',
        onStart: () => setPhaseState('forming'),
      },
      '-=0.3'
    );

    // Beat 4: Mechanical Docking & Solidification of VIGYANTRA (4.8s to 6.8s)
    tl.to(
      tv,
      {
        vigyantraOpacity: 1,
        vigyantraFormation: 1,
        duration: 2.0,
        ease: 'power2.out',
      },
      '-=1.4'
    );

    // Structural fragments snap into letter alignment and fade smoothly
    tl.to(
      tv,
      {
        fragmentOpacity: 0,
        duration: 0.7,
        ease: 'power2.in',
      },
      '-=0.8'
    );

    // Beat 5: Arrival, Hold & Full UI Restoration (6.8s+)
    tl.call(() => {
      tv.isTransforming = false;
      setPhaseState('complete');
      setEvolveCueReady(true);

      // Restore UI elements to full prominence
      if (topTelemetryRef.current) {
        gsap.to(topTelemetryRef.current, { opacity: 1, duration: 1.0, ease: 'power2.out' });
      }
      if (bottomFooterRef.current) {
        gsap.to(bottomFooterRef.current, { opacity: 1, duration: 1.0, ease: 'power2.out' });
      }
      if (finalMetaRef.current) {
        gsap.to(finalMetaRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
        });
      }
      if (prizePoolRef.current) {
        gsap.fromTo(
          prizePoolRef.current,
          { opacity: 0, y: 10, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, delay: 0.35, ease: 'power2.out' }
        );
      }
    });

    return () => {
      tl.kill();
      activeEvolveTlRef.current?.kill();
    };
  }, [replayCount]);

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
      {viewMode === 'arenas' && (
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
          pointerEvents: 'auto',
        }}
      >
        {/* 1. Top Identity & Institutional Telemetry Row */}
        <div
          ref={topTelemetryRef}
          className="v2-hero-top-row"
          style={{ transition: 'opacity 0.6s ease' }}
        >
          <div className="v2-inst-block">
            <span className="v2-inst-trust">Sri Adichunchanagiri Shikshana Trust®</span>
            <span className="v2-inst-college">SJB INSTITUTE OF TECHNOLOGY</span>
            <div className="v2-inst-badge-row">
              <V2Badge variant="gold">SILVER JUBILEE • 25 YRS</V2Badge>
              <V2Badge variant="steel">BENGALURU • EST. 2001</V2Badge>
            </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <V2Badge variant="crimson" pulseDot>
                SYSTEM ONLINE
              </V2Badge>
              <V2Metadata>ARENAS: 08 // ACTIVE</V2Metadata>
            </div>
            {phaseState === 'complete' && (
              <button
                onClick={() => setReplayCount((c) => c + 1)}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(198, 160, 82, 0.25)',
                  color: 'var(--v2-gold)',
                  fontFamily: 'var(--v2-font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  padding: '2px 8px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  marginTop: '4px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--v2-gold)';
                  e.currentTarget.style.background = 'rgba(198, 160, 82, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198, 160, 82, 0.25)';
                  e.currentTarget.style.background = 'transparent';
                }}
                title="Replay the 25 to VIGYANTRA cinematic transformation"
                aria-label="Replay transformation sequence"
              >
                ↻ REPLAY SEQUENCE
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

          {/* INITIAL STATE SUBORDINATE EDITORIAL */}
          <div
            ref={jubileeMetaRef}
            style={{
              position: 'absolute',
              bottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: phaseState === 'jubilee' ? 'auto' : 'none',
              transition: 'opacity 0.4s ease',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.80rem',
                letterSpacing: '0.25em',
                color: 'var(--v2-gold)',
                marginBottom: '4px',
              }}
            >
              2001 — 2026
            </div>
            <div
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                letterSpacing: '0.22em',
                fontWeight: 600,
                color: 'var(--v2-ivory)',
              }}
            >
              SILVER JUBILEE HERITAGE
            </div>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                color: 'var(--v2-text-muted)',
                marginTop: '4px',
              }}
            >
              [ A QUARTER CENTURY OF ENGINEERING EXCELLENCE ]
            </div>
          </div>

          {/* =========================================================================
              VIEW MODE A: MONUMENT VIEW EDITORIAL (Sovereign VIGYANTRA focus)
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
                opacity: 0,
                pointerEvents: phaseState === 'complete' ? 'auto' : 'none',
                marginTop: '0.25rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '8px',
                background: 'radial-gradient(ellipse at center, rgba(5,5,7,0.78) 0%, rgba(5,5,7,0.4) 60%, transparent 100%)',
              }}
            >
              {/* Subtitle & Motto */}
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
                  }}
                >
                  “Ideas Today • Solutions Tomorrow”
                </div>
              </div>

              {/* Event Metadata Horizon (Date & Location) */}
              <div
                className="v2-hero-meta-horizon"
                style={{
                  marginTop: '0.55rem',
                  color: 'var(--v2-silver-200)',
                  fontSize: 'clamp(0.68rem, 0.88vw, 0.80rem)',
                  letterSpacing: '0.12em',
                }}
              >
                <span style={{ color: 'var(--v2-ivory)' }}>30 OCTOBER 2026 (FRIDAY)</span>
                <span className="sep">•</span>
                <span style={{ color: 'var(--v2-silver-200)' }}>SJBIT CAMPUS • BENGALURU</span>
              </div>

              {/* Dedicated Hero Prize Pool Plaque Artifact */}
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

              {/* Live Countdown Timer */}
              <div style={{ marginTop: '0.85rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <V2Countdown />
              </div>

              {/* Primary 3-Tier Action CTA Group */}
              <div className="v2-hero-cta-group" style={{ marginTop: '0.95rem' }}>
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
          style={{ transition: 'opacity 0.6s ease' }}
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

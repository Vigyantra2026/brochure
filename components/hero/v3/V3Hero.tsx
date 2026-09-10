'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import V2Countdown from '@/components/hero/v2/V2Countdown';
import { V2Button, V2Badge, V2TechLabel, V2Metadata } from '@/components/ui/v2';
import { TransformationTimelineValues } from './V3Scene';

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
}

export default function V3Hero({ onOpenModal, onScrollTo }: V3HeroProps) {
  const [swamijiExpanded, setSwamijiExpanded] = useState(false);
  const [phaseState, setPhaseState] = useState<'jubilee' | 'deconstruct' | 'forming' | 'complete'>('jubilee');

  // DOM element refs for typography & UI priority gating
  const topTelemetryRef = useRef<HTMLDivElement>(null);
  const bottomFooterRef = useRef<HTMLElement>(null);
  const jubileeMetaRef = useRef<HTMLDivElement>(null);
  const finalMetaRef = useRef<HTMLDivElement>(null);
  const prizePoolRef = useRef<HTMLDivElement>(null);

  // Live timeline properties shared with the Three.js canvas
  // Refined camera distances: 5.8 for 25, 4.0 for mechanical fly-through, 6.8 for final VIGYANTRA reveal
  const timelineValuesRef = useRef<TransformationTimelineValues>({
    cameraDist: 5.8,
    cameraTargetZ: 0,
    jubileeDeconstruct: 0,
    jubileeOpacity: 1,
    fragmentProgress: 0,
    fragmentOpacity: 0,
    vigyantraFormation: 0,
    vigyantraOpacity: 0,
    isTransforming: true,
  });

  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tv = timelineValuesRef.current;
    const tl = gsap.timeline();

    if (prefersReducedMotion) {
      tv.cameraDist = 6.8;
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
          onStart: () => setPhaseState('complete'),
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
    // Disciplined, mechanically intentional pacing
    // =========================================================================

    // Beat 1: Initial Presentation of 25 Artifact (0 to 1.6s)
    tl.to(tv, {
      cameraDist: 4.8,
      duration: 1.6,
      ease: 'power1.inOut',
    });

    // Beat 2: Mechanical Uncoupling & Disassembly (1.6s to 3.6s)
    // Gold bevels detach, numerals split laterally, structural components uncouple
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
        cameraDist: 6.8, // Intimate, dominant presentation (~70% visual area)
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
    };
  }, [replayCount]);

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
      {/* 3D Scene Layer */}
      <V3Scene timelineValues={timelineValuesRef} />

      {/* Ultra-subtle engineering grid overlay (reduced to 0.008 opacity) */}
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

      {/* Radial Focus Vignette keeping pure obsidian focus on the 3D monument */}
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
          {/* Spatial Spacer for the Elevated 3D Object (Calibrated for comfortable 100dvh fit) */}
          <div
            style={{
              height: 'clamp(120px, 19vw, 185px)',
              width: '100%',
              pointerEvents: 'none',
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

          {/* FINAL STATE COMPREHENSIVE EDITORIAL (Placed cleanly below 3D VIGYANTRA with 100dvh fit) */}
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
              {/* National-Level Statement */}
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

              {/* Motto: Warm ivory/gold-tinted italic */}
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
              {/* Muted Uppercase Header */}
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

              {/* Dominant Antique Gold Amount */}
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

              {/* Supporting Category Notation */}
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
              {/* 1. Register Now */}
              <V2Button
                variant="primary"
                size="lg"
                onClick={() => onOpenModal('registration')}
                aria-label="Open Cadet Registration Terminal"
              >
                REGISTER NOW ⚡
              </V2Button>

              {/* 2. Explore 8 Arenas */}
              <V2Button
                variant="secondary"
                size="lg"
                onClick={() => onScrollTo('arenas')}
                aria-label="Scroll to 8 Flagship Arenas"
              >
                EXPLORE 8 ARENAS →
              </V2Button>

              {/* 3. View Dossier */}
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

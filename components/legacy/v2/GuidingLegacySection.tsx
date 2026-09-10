'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { V2TechLabel } from '@/components/ui/v2';
import { ScrollTrigger } from '@/lib/gsap';

export default function GuidingLegacySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Dedicated GSAP ScrollTrigger pinning engine
  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !stageRef.current) return;

    let triggerInstance: ScrollTrigger | null = null;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !stageRef.current) return;

      triggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1800', // Pinned scroll distance for the 5-phase choreography
        pin: stageRef.current,
        pinSpacing: true,
        scrub: 0.25,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(Math.max(0, Math.min(1, self.progress)));
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (triggerInstance) {
        triggerInstance.kill();
      }
    };
  }, [prefersReducedMotion]);

  // =========================================================================
  // CONTINUOUS SCROLL TIMELINE CHOREOGRAPHY:
  // 0.00 -> 0.15: Phase 1 — Dark empty stage, THE GUIDING LEGACY emerges
  // 0.15 -> 0.40: Phase 2 — Card 1 physically enters, scales, and settles
  // 0.40 -> 0.65: Phase 3 — Card 2 enters from direction, composition transforms
  // 0.65 -> 0.85: Phase 4 — Card 3 enters and anchors
  // 0.85 -> 0.95: Phase 5 — All three cards form a balanced triumvirate composition
  // 0.95 -> 1.00: Smooth release into next section (The 8 Arenas)
  // =========================================================================

  // Header Animation calculations
  const headerOpacity = useMemo(() => {
    if (prefersReducedMotion) return 1;
    if (progress <= 0.02) return 0.2;
    if (progress <= 0.15) return 0.2 + (progress - 0.02) / 0.13 * 0.8;
    if (progress >= 0.95) return Math.max(0, 1 - (progress - 0.95) / 0.05);
    return 1;
  }, [progress, prefersReducedMotion]);

  const headerTranslateY = useMemo(() => {
    if (prefersReducedMotion) return 0;
    if (progress <= 0.15) return (1 - progress / 0.15) * 25;
    if (progress >= 0.95) return -((progress - 0.95) / 0.05) * 20;
    return 0;
  }, [progress, prefersReducedMotion]);

  // Card 1 Calculations (enters 0.15 -> 0.38, stays visible)
  const card1State = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, translateY: 0, scale: 1 };
    if (progress < 0.12) return { opacity: 0, translateY: 40, scale: 0.88 };
    if (progress < 0.38) {
      const t = (progress - 0.12) / 0.26;
      return {
        opacity: t,
        translateY: (1 - t) * 40,
        scale: 0.88 + t * 0.12,
      };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, translateY: -exitT * 25, scale: 1 };
    }
    return { opacity: 1, translateY: 0, scale: 1 };
  }, [progress, prefersReducedMotion]);

  // Card 2 Calculations (enters 0.38 -> 0.62, stays visible)
  const card2State = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, translateY: 0, scale: 1 };
    if (progress < 0.38) return { opacity: 0, translateY: 40, scale: 0.88 };
    if (progress < 0.62) {
      const t = (progress - 0.38) / 0.24;
      return {
        opacity: t,
        translateY: (1 - t) * 40,
        scale: 0.88 + t * 0.12,
      };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, translateY: -exitT * 25, scale: 1 };
    }
    return { opacity: 1, translateY: 0, scale: 1 };
  }, [progress, prefersReducedMotion]);

  // Card 3 Calculations (enters 0.62 -> 0.85, stays visible)
  const card3State = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, translateY: 0, scale: 1 };
    if (progress < 0.62) return { opacity: 0, translateY: 40, scale: 0.88 };
    if (progress < 0.85) {
      const t = (progress - 0.62) / 0.23;
      return {
        opacity: t,
        translateY: (1 - t) * 40,
        scale: 0.88 + t * 0.12,
      };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, translateY: -exitT * 25, scale: 1 };
    }
    return { opacity: 1, translateY: 0, scale: 1 };
  }, [progress, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="guiding-legacy"
      className="legacy-scroll-scene"
      aria-label="The Guiding Legacy — Sri Adichunchanagiri Shikshana Trust"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#08090C',
      }}
    >
      {/* 100vh Sticky Viewport Stage */}
      <div
        ref={stageRef}
        className="legacy-scroll-stage"
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#08090C',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxSizing: 'border-box',
          padding: '24px 0',
        }}
      >
        {/* Subtle Ambient Radial Lighting for Physical Stage Atmosphere */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(400px, 70vw, 900px)',
            height: 'clamp(350px, 60vh, 600px)',
            background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.06) 0%, rgba(14, 16, 21, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        <div
          className="v2-container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Header Block — Stays in Viewport */}
          <div
            className="v2-guiding-header"
            style={{
              textAlign: 'center',
              maxWidth: '740px',
              margin: '0 auto clamp(20px, 3.5vh, 40px)',
              opacity: headerOpacity,
              transform: `translateY(${headerTranslateY}px)`,
              transition: prefersReducedMotion ? 'none' : 'opacity 0.1s linear, transform 0.1s linear',
            }}
          >
            <V2TechLabel style={{ color: 'var(--v2-gold)', letterSpacing: '0.2em' }}>
              || JAI SRI GURUDEV ||
            </V2TechLabel>
            <h2
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--v2-text-primary)',
                letterSpacing: '0.04em',
                marginTop: '8px',
              }}
            >
              THE GUIDING LEGACY
            </h2>
            <p
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: 'clamp(0.68rem, 0.9vw, 0.74rem)',
                color: 'var(--v2-text-tertiary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '8px',
              }}
            >
              Sri Adichunchanagiri Shikshana Trust® • With the Divine Blessings of Our Revered Poojya Swamijis
            </p>
          </div>

          {/* Cards Composition Container */}
          <div
            className="v2-guiding-grid"
            style={{
              width: '100%',
              maxWidth: '1080px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(16px, 2.5vw, 28px)',
              justifyContent: 'center',
            }}
          >
            {/* Swamiji 1 */}
            <div
              className="v2-guiding-card"
              style={{
                opacity: card1State.opacity,
                transform: `translateY(${card1State.translateY}px) scale(${card1State.scale})`,
                pointerEvents: card1State.opacity > 0.5 ? 'auto' : 'none',
                boxShadow: card1State.opacity > 0.8 ? '0 12px 36px -8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.05)' : 'none',
                transition: prefersReducedMotion ? 'none' : 'box-shadow 0.3s ease',
              }}
            >
              <div className="v2-guiding-avatar-frame">
                <img
                  src="/assets/swamiji_1.png"
                  alt="Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji"
                  className="v2-guiding-img"
                />
              </div>
              <h3 className="v2-guiding-name">
                Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji
              </h3>
              <span className="v2-guiding-designation">Founder President</span>
            </div>

            {/* Swamiji 2 */}
            <div
              className="v2-guiding-card"
              style={{
                opacity: card2State.opacity,
                transform: `translateY(${card2State.translateY}px) scale(${card2State.scale})`,
                pointerEvents: card2State.opacity > 0.5 ? 'auto' : 'none',
                boxShadow: card2State.opacity > 0.8 ? '0 12px 36px -8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.05)' : 'none',
                transition: prefersReducedMotion ? 'none' : 'box-shadow 0.3s ease',
              }}
            >
              <div className="v2-guiding-avatar-frame">
                <img
                  src="/assets/swamiji_2.png"
                  alt="Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji"
                  className="v2-guiding-img"
                />
              </div>
              <h3 className="v2-guiding-name">
                Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji
              </h3>
              <span className="v2-guiding-designation">President, BGS &amp; SJBIT</span>
            </div>

            {/* Swamiji 3 */}
            <div
              className="v2-guiding-card"
              style={{
                opacity: card3State.opacity,
                transform: `translateY(${card3State.translateY}px) scale(${card3State.scale})`,
                pointerEvents: card3State.opacity > 0.5 ? 'auto' : 'none',
                boxShadow: card3State.opacity > 0.8 ? '0 12px 36px -8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.05)' : 'none',
                transition: prefersReducedMotion ? 'none' : 'box-shadow 0.3s ease',
              }}
            >
              <div className="v2-guiding-avatar-frame">
                <img
                  src="/assets/swamiji_3.png"
                  alt="Poojya Sri Sri Prakashanatha Swamiji"
                  className="v2-guiding-img"
                />
              </div>
              <h3 className="v2-guiding-name">
                Poojya Sri Sri Prakashanatha Swamiji
              </h3>
              <span className="v2-guiding-designation">Managing Director</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

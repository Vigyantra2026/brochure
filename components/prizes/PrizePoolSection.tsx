import React, { useState, useEffect, useRef, useMemo } from 'react';
import { V2Badge, V2Eyebrow } from '@/components/ui/v2';
import { ScrollTrigger } from '@/lib/gsap';

export default function PrizePoolSection() {
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
        end: '+=1800', // Pinned scroll distance for numerical reveal
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
  // CINEMATIC PRIZE CHOREOGRAPHY:
  // State 1 (0.00 -> 0.20): Header & Eyebrow establish national recognition
  // State 2 (0.20 -> 0.45): Monumental ₹ 4,00,000 hero card expands to center stage
  // State 3 (0.45 -> 0.65): Breakdown metrics (08 Arenas • ₹50,000 per Arena • 16 Teams) emerge
  // State 4 (0.65 -> 0.88): Champion (₹30,000) & Runner-Up (₹20,000) cards rise into focus
  // State 5 (0.88 -> 1.00): Full composition locks before releasing into Brochure
  // =========================================================================

  const headerOpacity = useMemo(() => {
    if (prefersReducedMotion) return 1;
    if (progress <= 0.03) return 0.2;
    if (progress <= 0.20) return 0.2 + (progress - 0.03) / 0.17 * 0.8;
    if (progress >= 0.95) return Math.max(0, 1 - (progress - 0.95) / 0.05);
    return 1;
  }, [progress, prefersReducedMotion]);

  const heroCardState = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, scale: 1, translateY: 0 };
    if (progress < 0.18) {
      const t = Math.max(0, progress / 0.18);
      return { opacity: 0.2 + t * 0.8, scale: 0.88 + t * 0.12, translateY: (1 - t) * 35 };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, scale: 1, translateY: -exitT * 20 };
    }
    return { opacity: 1, scale: 1, translateY: 0 };
  }, [progress, prefersReducedMotion]);

  const metricsOpacity = useMemo(() => {
    if (prefersReducedMotion) return 1;
    if (progress < 0.35) return 0;
    if (progress < 0.55) return (progress - 0.35) / 0.20;
    if (progress >= 0.95) return Math.max(0, 1 - (progress - 0.95) / 0.05);
    return 1;
  }, [progress, prefersReducedMotion]);

  const breakdownState = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, translateY: 0 };
    if (progress < 0.55) return { opacity: 0, translateY: 35 };
    if (progress < 0.80) {
      const t = (progress - 0.55) / 0.25;
      return { opacity: t, translateY: (1 - t) * 35 };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, translateY: -exitT * 20 };
    }
    return { opacity: 1, translateY: 0 };
  }, [progress, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="v2-prizes-scroll-scene"
      aria-label="Symposium Prize Pool and Awards"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#08090C',
      }}
    >
      {/* 100vh Sticky Viewport Stage */}
      <div
        ref={stageRef}
        className="v2-prizes-scroll-stage"
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
          padding: 'clamp(20px, 3vh, 36px) 0',
        }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(450px, 75vw, 950px)',
            height: 'clamp(350px, 60vh, 650px)',
            background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.07) 0%, rgba(8, 9, 12, 0) 70%)',
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
            maxHeight: '92vh',
            overflowY: 'auto',
            paddingRight: '4px',
          }}
        >
          {/* Section Header */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '780px',
              margin: '0 auto clamp(20px, 3vh, 32px)',
              opacity: headerOpacity,
              transition: prefersReducedMotion ? 'none' : 'opacity 0.1s linear',
            }}
          >
            <V2Eyebrow accent="gold">HONOR &amp; EXCELLENCE // NATIONAL RECOGNITION</V2Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--v2-text-primary)',
                letterSpacing: '0.03em',
                marginTop: '8px',
              }}
            >
              AWARDS &amp; PRIZE POOL
            </h2>
          </div>

          {/* Primary Monolithic Prize Feature Card (₹ 4,00,000) */}
          <div
            style={{
              maxWidth: '880px',
              margin: '0 auto clamp(20px, 2.8vh, 32px)',
              backgroundColor: 'rgba(14, 16, 21, 0.9)',
              border: '1.5px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '12px',
              padding: 'clamp(24px, 3.5vw, 44px) clamp(20px, 3vw, 36px)',
              textAlign: 'center',
              boxShadow: heroCardState.opacity > 0.8 ? '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.08)' : 'none',
              position: 'relative',
              overflow: 'hidden',
              opacity: heroCardState.opacity,
              transform: `translateY(${heroCardState.translateY}px) scale(${heroCardState.scale})`,
              transition: prefersReducedMotion ? 'none' : 'box-shadow 0.3s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              }}
              aria-hidden="true"
            />

            <div style={{ marginBottom: '10px' }}>
              <V2Badge variant="gold">COMMEMORATIVE SILVER JUBILEE PURSE</V2Badge>
            </div>

            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.76rem',
                letterSpacing: '0.2em',
                color: 'var(--v2-text-tertiary)',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              TOTAL NATIONAL PRIZE POOL
            </div>

            <div
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
                fontWeight: 800,
                color: 'var(--v2-gold)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
                textShadow: '0 0 30px rgba(212, 175, 55, 0.25)',
              }}
            >
              ₹ 4,00,000
            </div>

            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: 'clamp(0.88rem, 1vw, 0.98rem)',
                color: 'var(--v2-text-secondary)',
                maxWidth: '640px',
                margin: '0 auto 20px',
                lineHeight: 1.55,
              }}
            >
              Evenly distributed across all 8 Flagship Arenas to recognize both deep specialized mastery and cross-disciplinary technical engineering.
            </p>

            {/* Metrics Row */}
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                opacity: metricsOpacity,
                transition: prefersReducedMotion ? 'none' : 'opacity 0.1s linear',
              }}
            >
              <div style={{ textAlign: 'center', minWidth: '130px' }}>
                <div style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--v2-text-primary)' }}>
                  08
                </div>
                <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.68rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em' }}>
                  TECHNICAL ARENAS
                </div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '32px' }} aria-hidden="true" />
              <div style={{ textAlign: 'center', minWidth: '130px' }}>
                <div style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--v2-gold)' }}>
                  ₹ 50,000
                </div>
                <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.68rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em' }}>
                  ALLOCATED PER ARENA
                </div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '32px' }} aria-hidden="true" />
              <div style={{ textAlign: 'center', minWidth: '130px' }}>
                <div style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--v2-text-primary)' }}>
                  16
                </div>
                <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.68rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em' }}>
                  WINNING TEAMS
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Structured Distribution: Champion vs Runner-Up */}
          <div
            style={{
              maxWidth: '880px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              opacity: breakdownState.opacity,
              transform: `translateY(${breakdownState.translateY}px)`,
              pointerEvents: breakdownState.opacity > 0.4 ? 'auto' : 'none',
            }}
          >
            {/* Champion Breakdown Card */}
            <div
              style={{
                backgroundColor: 'rgba(14, 16, 21, 0.75)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                padding: 'clamp(18px, 2.2vw, 24px)',
                boxShadow: breakdownState.opacity > 0.8 ? '0 10px 30px -8px rgba(0, 0, 0, 0.6)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.74rem', color: 'var(--v2-gold)', letterSpacing: '0.12em' }}>
                  FIRST PLACE (x8 ARENAS)
                </span>
                <V2Badge variant="gold">CHAMPION</V2Badge>
              </div>
              <div
                style={{
                  fontFamily: 'var(--v2-font-heading)',
                  fontSize: '1.95rem',
                  fontWeight: 700,
                  color: 'var(--v2-text-primary)',
                  marginBottom: '6px',
                }}
              >
                ₹ 30,000
              </div>
              <p style={{ fontFamily: 'var(--v2-font-body)', fontSize: '0.86rem', color: 'var(--v2-text-secondary)', lineHeight: 1.55 }}>
                Awarded to the championship squad in each of the 8 arenas + custom Silver Jubilee Trophy + Merit Distinction Credentials.
              </p>
            </div>

            {/* Runner-Up Breakdown Card */}
            <div
              style={{
                backgroundColor: 'rgba(14, 16, 21, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: 'clamp(18px, 2.2vw, 24px)',
                boxShadow: breakdownState.opacity > 0.8 ? '0 10px 30px -8px rgba(0, 0, 0, 0.6)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.74rem', color: 'var(--v2-text-tertiary)', letterSpacing: '0.12em' }}>
                  SECOND PLACE (x8 ARENAS)
                </span>
                <V2Badge variant="steel">RUNNER-UP</V2Badge>
              </div>
              <div
                style={{
                  fontFamily: 'var(--v2-font-heading)',
                  fontSize: '1.95rem',
                  fontWeight: 700,
                  color: 'var(--v2-text-primary)',
                  marginBottom: '6px',
                }}
              >
                ₹ 20,000
              </div>
              <p style={{ fontFamily: 'var(--v2-font-body)', fontSize: '0.86rem', color: 'var(--v2-text-secondary)', lineHeight: 1.55 }}>
                Awarded to the runner-up squad in each of the 8 arenas + Silver Jubilee Medallion + Certificates of Technical Merit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
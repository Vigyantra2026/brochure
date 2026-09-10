import React, { useState, useEffect, useRef, useMemo } from 'react';
import { V2Badge, V2Button } from '@/components/ui/v2';
import { ScrollTrigger } from '@/lib/gsap';

interface FinalCtaSectionProps {
  onOpenRegistration: () => void;
  onScrollToArenas: () => void;
}

export default function FinalCtaSection({
  onOpenRegistration,
  onScrollToArenas,
}: FinalCtaSectionProps) {
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

  // Dedicated GSAP ScrollTrigger pinning engine (compact scroll distance)
  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !stageRef.current) return;

    let triggerInstance: ScrollTrigger | null = null;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !stageRef.current) return;

      triggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1100', // Compact scroll distance so reaching footer is effortless
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
  // CINEMATIC FINAL CTA RHYTHM:
  // Beat 1 (0.00 -> 0.25): Final CTA enters quietly with gold radial glow
  // Beat 2 (0.25 -> 0.50): "READY TO BUILD WHAT'S NEXT?" expands into command focus
  // Beat 3 (0.50 -> 0.75): REGISTER NOW & EXPLORE ARENAS actions activate
  // Beat 4 (0.75 -> 0.95): Final institutional branding telemetry locks
  // Beat 5 (0.95 -> 1.00): Subtle upward transition releasing directly into Footer
  // =========================================================================

  const glowScale = useMemo(() => {
    if (prefersReducedMotion) return 1;
    return 0.85 + progress * 0.25;
  }, [progress, prefersReducedMotion]);

  const contentState = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, scale: 1, translateY: 0 };
    if (progress < 0.25) {
      const t = progress / 0.25;
      return { opacity: 0.25 + t * 0.75, scale: 0.92 + t * 0.08, translateY: (1 - t) * 35 };
    }
    if (progress >= 0.92) {
      const exitT = (progress - 0.92) / 0.08;
      return { opacity: 1 - exitT * 0.7, scale: 1, translateY: -exitT * 20 };
    }
    return { opacity: 1, scale: 1, translateY: 0 };
  }, [progress, prefersReducedMotion]);

  const actionsOpacity = useMemo(() => {
    if (prefersReducedMotion) return 1;
    if (progress < 0.35) return 0.2;
    if (progress < 0.60) return 0.2 + (progress - 0.35) / 0.25 * 0.8;
    return 1;
  }, [progress, prefersReducedMotion]);

  const badgesOpacity = useMemo(() => {
    if (prefersReducedMotion) return 1;
    if (progress < 0.55) return 0;
    if (progress < 0.75) return (progress - 0.55) / 0.20;
    return 1;
  }, [progress, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="v2-final-cta-scroll-scene"
      aria-label="Register for Vigyantra 2026"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#08090C',
      }}
    >
      {/* 100vh Sticky Viewport Stage */}
      <div
        ref={stageRef}
        className="v2-final-cta-scroll-stage"
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
          padding: 'clamp(24px, 4vh, 48px) 0',
        }}
      >
        {/* Background Radial Glow Driven by Scroll */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${glowScale})`,
            width: 'clamp(350px, 65vw, 750px)',
            height: 'clamp(350px, 65vw, 750px)',
            background: 'radial-gradient(circle, rgba(186, 30, 56, 0.14) 0%, rgba(212, 175, 55, 0.07) 45%, transparent 70%)',
            pointerEvents: 'none',
            transition: prefersReducedMotion ? 'none' : 'transform 0.1s linear',
          }}
          aria-hidden="true"
        />

        <div
          className="v2-container"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '840px',
            margin: '0 auto',
            textAlign: 'center',
            opacity: contentState.opacity,
            transform: `translateY(${contentState.translateY}px) scale(${contentState.scale})`,
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <V2Badge variant="gold">THE CONVERGENCE CALLS</V2Badge>
          </div>

          <h2
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--v2-text-primary)',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            READY TO BUILD <br />
            <span className="v2-text-gold-gradient">WHAT’S NEXT?</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--v2-font-body)',
              fontSize: 'clamp(0.98rem, 1.15vw, 1.12rem)',
              color: 'var(--v2-text-secondary)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 32px',
            }}
          >
            8 Technical Arenas. ₹ 4,00,000 Total Prize Pool. Over 1,500 collegiate innovators converging on 30 October 2026 at SJBIT Bengaluru.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '36px',
              opacity: actionsOpacity,
              transition: prefersReducedMotion ? 'none' : 'opacity 0.1s linear',
            }}
          >
            <V2Button variant="primary" size="lg" onClick={onOpenRegistration}>
              REGISTER NOW ⚡
            </V2Button>
            <V2Button variant="secondary" size="lg" onClick={onScrollToArenas}>
              EXPLORE THE 8 ARENAS ↑
            </V2Button>
          </div>

          {/* Key Information Badges */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(12px, 2vw, 24px)',
              fontFamily: 'var(--v2-font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.12em',
              color: 'var(--v2-text-tertiary)',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              opacity: badgesOpacity,
              transition: prefersReducedMotion ? 'none' : 'opacity 0.1s linear',
            }}
          >
            <span>📅 30 OCTOBER 2026</span>
            <span>•</span>
            <span>📍 SJBIT BENGALURU</span>
            <span>•</span>
            <span>🏆 ₹4,00,000 PURSE</span>
            <span>•</span>
            <span>🎓 SILVER JUBILEE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
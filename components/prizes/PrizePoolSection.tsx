'use client';

import React, { useEffect, useRef } from 'react';
import { V2Badge, V2Eyebrow } from '@/components/ui/v2';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function PrizePoolSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const breakdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero ₹4,00,000 card enters with substantial monumental authority
      gsap.fromTo(
        heroCardRef.current,
        { opacity: 0.25, scale: 0.92, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 35%',
            scrub: 0.6,
          },
        }
      );

      // 2. Champion & Runner-Up breakdown cards rise into sharp focus
      const breakdownCards = breakdownRef.current?.children;
      if (breakdownCards && breakdownCards.length > 0) {
        gsap.fromTo(
          breakdownCards,
          { opacity: 0.3, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: breakdownRef.current,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="v2-prizes-section"
      aria-label="Symposium Prize Pool and Awards"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#08090C',
        padding: 'clamp(64px, 9vh, 96px) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="v2-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(36px, 5vh, 52px)' }}>
          <V2Eyebrow accent="gold">HONOR &amp; EXCELLENCE // NATIONAL RECOGNITION</V2Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              fontWeight: 700,
              color: 'var(--v2-text-primary)',
              letterSpacing: '0.03em',
              marginTop: '10px',
            }}
          >
            AWARDS &amp; PRIZE POOL
          </h2>
          <p
            style={{
              fontFamily: 'var(--v2-font-body)',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              color: 'var(--v2-text-secondary)',
              lineHeight: 1.6,
              marginTop: '10px',
            }}
          >
            Celebrating the brightest collegiate engineering talents across India with merit cash awards, commemorative Silver Jubilee trophies, and verified distinction credentials.
          </p>
        </div>

        {/* Primary Monolithic Prize Feature Card (₹ 4,00,000) */}
        <div
          ref={heroCardRef}
          style={{
            maxWidth: '880px',
            margin: '0 auto clamp(36px, 5vh, 48px)',
            backgroundColor: 'rgba(14, 16, 21, 0.9)',
            border: '1.5px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '12px',
            padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 44px)',
            textAlign: 'center',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle gold highlight line at top */}
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

          <div style={{ marginBottom: '14px' }}>
            <V2Badge variant="gold">COMMEMORATIVE SILVER JUBILEE PURSE</V2Badge>
          </div>

          <div
            style={{
              fontFamily: 'var(--v2-font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              color: 'var(--v2-text-tertiary)',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            TOTAL NATIONAL PRIZE POOL
          </div>

          <div
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              color: 'var(--v2-gold)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            ₹ 4,00,000
          </div>

          <p
            style={{
              fontFamily: 'var(--v2-font-body)',
              fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
              color: 'var(--v2-text-secondary)',
              maxWidth: '640px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            Evenly distributed across all 8 Flagship Arenas to recognize both deep specialized mastery and cross-disciplinary technical engineering.
          </p>

          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ textAlign: 'center', minWidth: '130px' }}>
              <div style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--v2-text-primary)' }}>
                08
              </div>
              <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.7rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em' }}>
                TECHNICAL ARENAS
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '36px' }} aria-hidden="true" />
            <div style={{ textAlign: 'center', minWidth: '130px' }}>
              <div style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--v2-gold)' }}>
                ₹ 50,000
              </div>
              <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.7rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em' }}>
                ALLOCATED PER ARENA
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '36px' }} aria-hidden="true" />
            <div style={{ textAlign: 'center', minWidth: '130px' }}>
              <div style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--v2-text-primary)' }}>
                16
              </div>
              <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.7rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em' }}>
                WINNING TEAMS
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Structured Distribution: Champion vs Runner-Up */}
        <div
          ref={breakdownRef}
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Champion Breakdown Card */}
          <div
            style={{
              backgroundColor: 'rgba(14, 16, 21, 0.65)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
              padding: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.75rem', color: 'var(--v2-gold)', letterSpacing: '0.12em' }}>
                FIRST PLACE (x8 ARENAS)
              </span>
              <V2Badge variant="gold">CHAMPION</V2Badge>
            </div>
            <div
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '2.1rem',
                fontWeight: 700,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              ₹ 30,000
            </div>
            <p style={{ fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', color: 'var(--v2-text-secondary)', lineHeight: 1.6 }}>
              Awarded to the championship squad in each of the 8 arenas + custom Silver Jubilee Trophy + Merit Distinction Credentials.
            </p>
          </div>

          {/* Runner-Up Breakdown Card */}
          <div
            style={{
              backgroundColor: 'rgba(14, 16, 21, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.75rem', color: 'var(--v2-text-tertiary)', letterSpacing: '0.12em' }}>
                SECOND PLACE (x8 ARENAS)
              </span>
              <V2Badge variant="steel">RUNNER-UP</V2Badge>
            </div>
            <div
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '2.1rem',
                fontWeight: 700,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              ₹ 20,000
            </div>
            <p style={{ fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', color: 'var(--v2-text-secondary)', lineHeight: 1.6 }}>
              Awarded to the runner-up squad in each of the 8 arenas + Silver Jubilee Medallion + Certificates of Technical Merit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
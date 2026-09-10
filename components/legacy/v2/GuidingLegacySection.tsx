'use client';

import React, { useEffect, useRef } from 'react';
import { V2TechLabel } from '@/components/ui/v2';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function GuidingLegacySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      // PHASE 1: Header subtly arrives
      gsap.fromTo(
        headerRef.current,
        { opacity: 0.2, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // PHASE 2, 3, 4: Swamiji cards enter in choreographed progression and gain focus
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          {
            opacity: 0.35,
            y: 40,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${65 - i * 15}%`,
              end: `top ${35 - i * 15}%`,
              scrub: 0.6,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="guiding-legacy"
      className="v2-guiding-legacy-standalone"
      aria-label="The Guiding Legacy — Sri Adichunchanagiri Shikshana Trust"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#08090C',
        padding: 'clamp(56px, 8vh, 88px) 0 clamp(48px, 7vh, 80px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="v2-container">
        <div
          ref={headerRef}
          className="v2-guiding-header"
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(28px, 4.5vh, 44px)' }}
        >
          <V2TechLabel style={{ color: 'var(--v2-gold)', letterSpacing: '0.2em' }}>
            || JAI SRI GURUDEV ||
          </V2TechLabel>
          <h2
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.3rem)',
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
              fontSize: '0.74rem',
              color: 'var(--v2-text-tertiary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            Sri Adichunchanagiri Shikshana Trust® • With the Divine Blessings of Our Revered Poojya Swamijis
          </p>
        </div>

        <div className="v2-guiding-grid">
          {/* Swamiji 1 */}
          <div ref={card1Ref} className="v2-guiding-card">
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
          <div ref={card2Ref} className="v2-guiding-card">
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
          <div ref={card3Ref} className="v2-guiding-card">
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
    </section>
  );
}

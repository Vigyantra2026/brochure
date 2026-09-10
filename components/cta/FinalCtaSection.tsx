'use client';

import React from 'react';
import { V2Badge, V2Button } from '@/components/ui/v2';

interface FinalCtaSectionProps {
  onOpenRegistration: () => void;
  onScrollToArenas: () => void;
}

export default function FinalCtaSection({
  onOpenRegistration,
  onScrollToArenas,
}: FinalCtaSectionProps) {
  return (
    <section
      id="final-cta"
      className="v2-final-cta-section"
      aria-label="Register for Vigyantra 2026"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#08090C',
        padding: 'clamp(80px, 12vh, 120px) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 60vw, 700px)',
          height: 'clamp(300px, 60vw, 700px)',
          background: 'radial-gradient(circle, rgba(186, 30, 56, 0.12) 0%, rgba(212, 175, 55, 0.06) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="v2-container" style={{ position: 'relative', zIndex: 2, maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ marginBottom: '18px' }}>
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
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            color: 'var(--v2-text-secondary)',
            lineHeight: 1.65,
            maxWidth: '680px',
            margin: '0 auto 36px',
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
            marginBottom: '40px',
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
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
    </section>
  );
}
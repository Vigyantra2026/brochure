'use client';

import React from 'react';
import { V2TechLabel } from '@/components/ui/v2';

export default function GuidingLegacySection() {
  return (
    <section
      id="guiding-legacy"
      className="v2-guiding-legacy-standalone"
      aria-label="The Guiding Legacy — Sri Adichunchanagiri Shikshana Trust"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#08090C',
        padding: 'clamp(48px, 7vh, 72px) 0 clamp(40px, 6vh, 64px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="v2-container">
        <div className="v2-guiding-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(24px, 4vh, 36px)' }}>
          <V2TechLabel style={{ color: 'var(--v2-gold)', letterSpacing: '0.2em' }}>
            || JAI SRI GURUDEV ||
          </V2TechLabel>
          <h2
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontSize: 'clamp(1.4rem, 2.4vw, 2.1rem)',
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
          <div className="v2-guiding-card">
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
          <div className="v2-guiding-card">
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
          <div className="v2-guiding-card">
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

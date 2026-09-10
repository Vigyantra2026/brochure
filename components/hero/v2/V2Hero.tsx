'use client';

import React, { useState } from 'react';
import V2Countdown from './V2Countdown';
import { V2Button, V2Badge, V2TechLabel, V2Metadata } from '@/components/ui/v2';

interface V2HeroProps {
  onOpenModal: (modalId: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export default function V2Hero({ onOpenModal, onScrollTo }: V2HeroProps) {
  const [swamijiExpanded, setSwamijiExpanded] = useState(false);

  return (
    <section id="command-deck" className="v2-hero-stage" aria-label="Symposium Command Deck Hero">
      {/* Background Subtle Grid & Atmospheric Illumination */}
      <div className="v2-hero-grid" aria-hidden="true" />

      <div className="v2-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
        {/* Top Identity & Institutional Telemetry Row */}
        <div className="v2-hero-top-row">
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
            <V2Metadata style={{ opacity: 0.6 }}>GEO: 12.9081° N, 77.4980° E</V2Metadata>
          </div>
        </div>

        {/* Center Stage Dominant Editorial Landmark */}
        <div className="v2-hero-center">
          {/* Holographic 25 Watermark Backdrop */}
          <div className="v2-hero-watermark-25" aria-hidden="true">
            25
          </div>

          {/* Main Title Group */}
          <div className="v2-hero-title-group">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h1 className="v2-hero-wordmark">VIGYANTRA</h1>
              <span className="v2-hero-year-badge">2026</span>
            </div>

            <div className="v2-hero-subtitle">
              NATIONAL TECHNICAL SYMPOSIUM
            </div>

            <div className="v2-hero-motto">
              “Ideas Today • Solutions Tomorrow”
            </div>
          </div>

          {/* Event Metadata Horizon */}
          <div className="v2-hero-meta-horizon">
            <span>30 OCTOBER 2026 (FRIDAY)</span>
            <span className="sep">•</span>
            <span>SJBIT CAMPUS, BENGALURU</span>
            <span className="sep">•</span>
            <span className="gold-txt">₹ 4,00,000 PRIZE POOL</span>
          </div>

          {/* Redesigned Live Event Countdown Timer */}
          <V2Countdown />

          {/* Primary 3-Tier Action CTA Group */}
          <div className="v2-hero-cta-group">
            {/* 1. Register Now (Primary Crimson - Highest Hierarchy) */}
            <V2Button
              variant="primary"
              size="lg"
              onClick={() => onOpenModal('registration')}
              aria-label="Open Cadet Registration Terminal"
            >
              REGISTER NOW ⚡
            </V2Button>

            {/* 2. Explore 8 Arenas (Secondary Graphite) */}
            <V2Button
              variant="secondary"
              size="lg"
              onClick={() => onScrollTo('arenas')}
              aria-label="Scroll to 8 Flagship Arenas"
            >
              EXPLORE 8 ARENAS →
            </V2Button>

            {/* 3. View Dossier (Restrained Outline - Triggers Digital Brochure) */}
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

        {/* Swamiji Institutional Layer (Restrained & Prestigious) */}
        <footer className="v2-swamiji-strip" aria-label="Divine Blessings and Patronage">
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

          <div
            className="v2-swamiji-avatars-row"
            style={{
              marginTop: '10px',
              display: swamijiExpanded ? 'flex' : 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            {/* Swamiji 1 */}
            <div className="v2-swamiji-avatar-item">
              <img
                src="/assets/swamiji_1.png"
                alt="Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji"
                className="v2-swamiji-thumb"
              />
              <div className="v2-swamiji-text">
                <span className="v2-swamiji-name">
                  Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji
                </span>
                <span className="v2-swamiji-role">Founder President</span>
              </div>
            </div>

            {/* Swamiji 2 */}
            <div className="v2-swamiji-avatar-item">
              <img
                src="/assets/swamiji_2.png"
                alt="Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji"
                className="v2-swamiji-thumb"
              />
              <div className="v2-swamiji-text">
                <span className="v2-swamiji-name">
                  Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji
                </span>
                <span className="v2-swamiji-role">President, BGS &amp; SJBIT</span>
              </div>
            </div>

            {/* Swamiji 3 */}
            <div className="v2-swamiji-avatar-item">
              <img
                src="/assets/swamiji_3.png"
                alt="Poojya Sri Sri Prakashanatha Swamiji"
                className="v2-swamiji-thumb"
              />
              <div className="v2-swamiji-text">
                <span className="v2-swamiji-name">
                  Poojya Sri Sri Prakashanatha Swamiji
                </span>
                <span className="v2-swamiji-role">Managing Director</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import V2Countdown from '@/components/hero/v2/V2Countdown';
import { V2Button, V2Badge, V2TechLabel, V2Metadata } from '@/components/ui/v2';

// Dynamic import of 3D Scene with SSR disabled to guarantee zero hydration mismatch
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
        paddingBottom: '24px',
        boxSizing: 'border-box',
      }}
    >
      {/* 3D Scene Layer (Absolute, fills background behind UI) */}
      <V3Scene />

      {/* Subtle Engineering Grid & Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Radial Vignette to keep focus on the centerpiece */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,7,0.75) 85%, #050507 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Main Content Container (Overlaid on 3D canvas) */}
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

        {/* 2. Center Stage: Architectural 3D Monument Horizon */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto 0',
            padding: '2rem 0',
          }}
        >
          {/* Top Architectural Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--v2-font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              color: 'var(--v2-gold)',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--v2-gold)', opacity: 0.6 }} />
            25TH SILVER JUBILEE EDITION // 2026
            <span style={{ width: '24px', height: '1px', background: 'var(--v2-gold)', opacity: 0.6 }} />
          </div>

          {/* Spatial Spacer for the 3D Object (Height reserved in canvas) */}
          <div
            style={{
              height: 'clamp(140px, 26vw, 240px)',
              width: '100%',
              pointerEvents: 'none',
            }}
          />

          {/* Subtitle & Motto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '0.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                fontWeight: 600,
                letterSpacing: '0.16em',
                color: 'var(--v2-text-secondary)',
                textTransform: 'uppercase',
              }}
            >
              NATIONAL TECHNICAL SYMPOSIUM
            </div>
            <div
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
                fontStyle: 'italic',
                color: 'var(--v2-text-tertiary)',
                letterSpacing: '0.04em',
              }}
            >
              “Ideas Today • Solutions Tomorrow”
            </div>
          </div>

          {/* Event Metadata Horizon */}
          <div className="v2-hero-meta-horizon" style={{ marginTop: '1.25rem' }}>
            <span>30 OCTOBER 2026 (FRIDAY)</span>
            <span className="sep">•</span>
            <span>SJBIT CAMPUS, BENGALURU</span>
            <span className="sep">•</span>
            <span className="gold-txt">₹ 4,00,000 PRIZE POOL</span>
          </div>

          {/* Live Countdown Timer */}
          <div style={{ marginTop: '1.25rem' }}>
            <V2Countdown />
          </div>

          {/* Primary 3-Tier Action CTA Group */}
          <div className="v2-hero-cta-group" style={{ marginTop: '1.75rem' }}>
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

        {/* 3. Swamiji Institutional Layer */}
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

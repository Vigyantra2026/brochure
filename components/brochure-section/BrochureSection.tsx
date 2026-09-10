'use client';

import React from 'react';
import { V2Badge, V2Eyebrow, V2Button } from '@/components/ui/v2';

interface BrochureSectionProps {
  onOpenBrochureModal: () => void;
}

export default function BrochureSection({ onOpenBrochureModal }: BrochureSectionProps) {
  return (
    <section
      id="brochure"
      className="v2-brochure-section"
      aria-label="Symposium Digital Brochure and Event Dossier"
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
          <V2Eyebrow accent="gold">OFFICIAL PUBLICATION // SILVER JUBILEE EDITION</V2Eyebrow>
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
            SYMPOSIUM BROCHURE
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
            Access the official VIGYANTRA 2026 digital dossier featuring the 8 flagship arenas, institutional benediction, campus guidelines, and complete event specifications.
          </p>
        </div>

        {/* Brochure Showcase Card */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: 'rgba(14, 16, 21, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            borderRadius: '12px',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 40px)',
            alignItems: 'center',
          }}
        >
          {/* Left: Document Artifact Preview */}
          <div
            style={{
              backgroundColor: 'rgba(8, 9, 12, 0.95)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
              padding: 'clamp(20px, 3vw, 28px)',
              position: 'relative',
              boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <V2Badge variant="gold">OFFICIAL DOCUMENT</V2Badge>
              <span style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.7rem', color: 'var(--v2-text-muted)' }}>
                PDF / INTERACTIVE FLIPBOOK
              </span>
            </div>

            <div style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.72rem', color: 'var(--v2-gold)', letterSpacing: '0.14em', marginBottom: '6px' }}>
              || JAI SRI GURUDEV ||
            </div>
            <h3 style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--v2-text-primary)', marginBottom: '4px' }}>
              VIGYANTRA 2026
            </h3>
            <div style={{ fontFamily: 'var(--v2-font-body)', fontSize: '0.85rem', color: 'var(--v2-text-secondary)', marginBottom: '16px' }}>
              National Technical Symposium • 25th Silver Jubilee Celebrations • SJBIT Bengaluru
            </div>

            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.74rem',
                color: 'var(--v2-text-tertiary)',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>8 ARENAS COVERED</span>
              <span>₹4,00,000 PURSE</span>
            </div>
          </div>

          {/* Right: Actions and Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--v2-text-primary)',
              }}
            >
              EXPLORE THE OFFICIAL PUBLICATION
            </h4>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.9rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Flip through our interactive 10-page digital brochure or access full event rules, evaluation criteria, and institutional credentials directly from your browser.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
              <V2Button variant="primary" size="lg" onClick={onOpenBrochureModal}>
                VIEW DIGITAL BROCHURE 📖
              </V2Button>
              <button
                type="button"
                onClick={onOpenBrochureModal}
                style={{
                  fontFamily: 'var(--v2-font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  color: 'var(--v2-text-secondary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                OPEN EVENT INTEL ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
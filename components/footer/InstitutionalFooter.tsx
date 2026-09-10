'use client';

import React from 'react';

interface InstitutionalFooterProps {
  onOpenModal?: (modalId: string) => void;
  onScrollTo?: (sectionId: string) => void;
}

export default function InstitutionalFooter({
  onOpenModal,
  onScrollTo,
}: InstitutionalFooterProps) {
  const handleNavClick = (sectionId: string) => {
    if (onScrollTo) {
      onScrollTo(sectionId);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className="v2-institutional-footer"
      role="contentinfo"
      aria-label="Symposium Institutional Footer"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#050608',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'clamp(56px, 8vh, 80px) 0 36px',
      }}
    >
      <div className="v2-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(32px, 4vw, 48px)',
            marginBottom: 'clamp(36px, 5vh, 52px)',
          }}
        >
          {/* Column 1: Institutional Core Signature */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.72rem',
                color: 'var(--v2-gold)',
                letterSpacing: '0.14em',
                marginBottom: '8px',
              }}
            >
              || JAI SRI GURUDEV ||
            </div>
            <h3
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--v2-text-primary)',
                letterSpacing: '0.04em',
                marginBottom: '6px',
              }}
            >
              VIGYANTRA 2026
            </h3>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.75rem',
                color: 'var(--v2-text-tertiary)',
                letterSpacing: '0.06em',
                marginBottom: '14px',
              }}
            >
              25TH SILVER JUBILEE NATIONAL TECHNICAL SYMPOSIUM
            </div>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.86rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              SJB Institute of Technology<br />
              Sri Adichunchanagiri Shikshana Trust®<br />
              BGS Health &amp; Education City, Kengeri, Bengaluru 560060
            </p>
          </div>

          {/* Column 2: Symposium Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                color: 'var(--v2-gold)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              NAVIGATION
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('guiding-legacy')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  The Guiding Legacy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('arenas')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  The 8 Arenas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('schedule')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Symposium Schedule
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('silver-jubilee')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  25 Years Silver Jubilee
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('institution')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  SJBIT Institution
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('campus')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Campus &amp; Venue
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('prizes')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  ₹4,00,000 Prize Pool
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Modals */}
          <div>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                color: 'var(--v2-gold)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              PORTALS &amp; ASSETS
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('brochure')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Interactive Digital Brochure 📖
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('registration')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Cadet Registration Deck ⚡
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('venue')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Campus Venue Dossier 📍
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('guidelines')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Rules of Engagement 📜
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('faq')}
                  style={{ background: 'none', border: 'none', color: 'var(--v2-text-secondary)', fontFamily: 'var(--v2-font-body)', fontSize: '0.88rem', cursor: 'pointer', padding: 0 }}
                >
                  Frequently Asked Questions ❓
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Date & Accreditations */}
          <div>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                color: 'var(--v2-gold)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              ACCREDITATION
            </div>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.74rem',
                color: 'var(--v2-text-tertiary)',
                lineHeight: 1.8,
                letterSpacing: '0.06em',
              }}
            >
              ★ VTU AUTONOMOUS INSTITUTION<br />
              ★ NAAC A+ ACCREDITED GRADE<br />
              ★ NBA ACCREDITED DEPARTMENTS<br />
              ★ AICTE APPROVED &amp; ISO CERTIFIED<br />
              ★ IEEE CS BENGALURU CHAPTER
            </div>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--v2-font-mono)',
            fontSize: '0.72rem',
            color: 'var(--v2-text-muted)',
            letterSpacing: '0.06em',
          }}
        >
          <div>
            © 2026 VIGYANTRA • SJB INSTITUTE OF TECHNOLOGY. ALL RIGHTS RESERVED.
          </div>
          <div>
            BENGALURU, KARNATAKA, INDIA • 30 OCTOBER 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';

import React from 'react';
import { V2Badge, V2Eyebrow } from '@/components/ui/v2';

interface CampusSectionProps {
  onOpenVenueModal?: () => void;
}

export default function CampusSection({ onOpenVenueModal }: CampusSectionProps) {
  return (
    <section
      id="campus"
      className="v2-campus-section"
      aria-label="SJBIT Campus Venue & Telemetry"
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
          <V2Eyebrow accent="gold">CAMPUS TELEMETRY &amp; VENUE // BENGALURU, INDIA</V2Eyebrow>
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
            VISIT SJBIT
          </h2>
          <p
            style={{
              fontFamily: 'var(--v2-font-body)',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              color: 'var(--v2-text-secondary)',
              lineHeight: 1.65,
              marginTop: '10px',
            }}
          >
            A 50-acre verdant campus situated in Bengaluru&apos;s southern technological corridor. Equipped with Tier-1 engineering centers of excellence, state-of-the-art computational infrastructure, and modern transit connectivity.
          </p>
        </div>

        {/* 4 Campus Amenities & Logistics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
            marginBottom: 'clamp(32px, 4vh, 48px)',
          }}
        >
          {/* Card 1: Venue */}
          <div
            style={{
              backgroundColor: 'rgba(14, 16, 21, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <V2Badge variant="gold">CAMPUS VENUE</V2Badge>
            </div>
            <h3
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              BGS Health &amp; Education City
            </h3>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.88rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              No. 67, Dr. Vishnuvardhan Road, Kengeri, Bengaluru 560060, Karnataka, India.<br />
              Spanning the Central Auditorium, R&amp;D Block, and Departmental Testing Grounds.
            </p>
          </div>

          {/* Card 2: Transit */}
          <div
            style={{
              backgroundColor: 'rgba(14, 16, 21, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <V2Badge variant="steel">TRANSIT ACCESS</V2Badge>
            </div>
            <h3
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              Metro &amp; Road Connectivity
            </h3>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.88rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Kengeri Metro Station (Namma Metro Purple Line) is located ~4 km from campus. Dedicated symposium shuttle buses and BMTC transit routes connect directly to the main campus gates.
            </p>
          </div>

          {/* Card 3: Labs & Infrastructure */}
          <div
            style={{
              backgroundColor: 'rgba(14, 16, 21, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <V2Badge variant="steel">INFRASTRUCTURE</V2Badge>
            </div>
            <h3
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              Laboratories &amp; High-Speed Wi-Fi
            </h3>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.88rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Dedicated workstation nodes, isolated robotics test arenas, and secure symposium Wi-Fi network credentials provisioned to all registered cadet squads upon check-in.
            </p>
          </div>

          {/* Card 4: Protocol & Check-in */}
          <div
            style={{
              backgroundColor: 'rgba(14, 16, 21, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <V2Badge variant="steel">DELEGATE PROTOCOL</V2Badge>
            </div>
            <h3
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              Arrival &amp; Credential Check-in
            </h3>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.88rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Credential verification commences at 08:30 AM on 30 October 2026 at the Main Reception Deck. Valid institutional photo identification is mandatory for entry.
            </p>
          </div>
        </div>

        {/* Telemetry Card with Map Coordinates & Directions */}
        <div
          style={{
            backgroundColor: 'rgba(14, 16, 21, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '8px',
            padding: 'clamp(24px, 3vw, 36px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.72rem',
                color: 'var(--v2-gold)',
                letterSpacing: '0.12em',
                marginBottom: '6px',
              }}
            >
              COORDINATES: 12.9056° N, 77.4984° E // BENGALURU
            </div>
            <h3
              style={{
                fontFamily: 'var(--v2-font-heading)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--v2-text-primary)',
                marginBottom: '8px',
              }}
            >
              SJB INSTITUTE OF TECHNOLOGY
            </h3>
            <p
              style={{
                fontFamily: 'var(--v2-font-body)',
                fontSize: '0.9rem',
                color: 'var(--v2-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              No. 67, BGS Health &amp; Education City, Dr. Vishnuvardhan Rd, Kengeri, Bengaluru, Karnataka 560060.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <a
              href="https://maps.google.com/?q=SJB+Institute+of+Technology+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                color: 'var(--v2-text-primary)',
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--v2-gold)',
                padding: '10px 22px',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
              }}
            >
              <span>📍 OPEN IN GOOGLE MAPS</span>
              <span>↗</span>
            </a>

            {onOpenVenueModal && (
              <button
                type="button"
                onClick={onOpenVenueModal}
                style={{
                  fontFamily: 'var(--v2-font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  color: 'var(--v2-text-secondary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>VIEW VENUE DOSSIER →</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

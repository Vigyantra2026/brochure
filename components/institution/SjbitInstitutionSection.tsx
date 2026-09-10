'use client';

import React from 'react';
import { V2Badge, V2Eyebrow } from '@/components/ui/v2';

interface InstitutionalPillar {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

const INSTITUTIONAL_PILLARS: InstitutionalPillar[] = [
  {
    title: 'ACADEMIC AUTONOMY',
    subtitle: 'Affiliated with VTU, Belagavi',
    description: 'Autonomous engineering framework enabling dynamic curriculum alignment with global computing and industrial standards.',
    badge: 'VTU AUTONOMOUS',
  },
  {
    title: 'NAAC A+ DISTINCTION',
    subtitle: 'National Assessment & Accreditation',
    description: 'Awarded highest institutional grade in recognition of comprehensive research output, incubation initiatives, and faculty distinction.',
    badge: 'NAAC A+ GRADE',
  },
  {
    title: 'NBA ACCREDITED PROGRAMS',
    subtitle: 'Tier-1 Pedagogical Standards',
    description: 'Core engineering programs accredited for outcome-based educational excellence and high professional competency.',
    badge: 'NBA ACCREDITED',
  },
  {
    title: 'FOUNDATION HERITAGE',
    subtitle: 'Sri Adichunchanagiri Shikshana Trust®',
    description: 'Established in 2001 under divine spiritual leadership, nurturing ethical engineering visionaries for a quarter century.',
    badge: 'EST. 2001',
  },
];

export default function SjbitInstitutionSection() {
  return (
    <section
      id="institution"
      className="v2-institution-section"
      aria-label="SJB Institute of Technology Institutional Profile"
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
          <V2Eyebrow accent="gold">INSTITUTIONAL BENCHMARK // BENGALURU, INDIA</V2Eyebrow>
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
            SJB INSTITUTE OF TECHNOLOGY
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
            A premier technological institution rooted in spiritual values, academic rigor, and research innovation. Spanning 25 years of engineering leadership across Bengaluru&apos;s technological corridor.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
            marginBottom: 'clamp(36px, 5vh, 48px)',
          }}
        >
          {INSTITUTIONAL_PILLARS.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(14, 16, 21, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: 'clamp(20px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ marginBottom: '14px' }}>
                  <V2Badge variant="gold">{p.badge}</V2Badge>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v2-font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--v2-text-primary)',
                    letterSpacing: '0.04em',
                    marginBottom: '6px',
                  }}
                >
                  {p.title}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--v2-font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--v2-gold)',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.subtitle}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--v2-font-body)',
                    fontSize: '0.88rem',
                    color: 'var(--v2-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
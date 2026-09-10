'use client';

import React from 'react';
import { V2Badge, V2Eyebrow, V2TechLabel, V2Metadata, V2Button } from '@/components/ui/v2';

interface V2LegacySectionProps {
  onScrollToArenas?: () => void;
}

const MILESTONES = [
  {
    year: '2001',
    title: 'Foundation Consecration',
    desc: 'SJB Institute of Technology established under the divine vision of Sri Adichunchanagiri Shikshana Trust®.',
  },
  {
    year: '2006',
    title: 'Campus Expansion',
    desc: 'Inauguration of advanced research blocks, engineering computing complexes, and IEEE student branch.',
  },
  {
    year: '2012',
    title: 'NBA & NAAC Recognition',
    desc: 'Attainment of prime institutional quality accreditations and outstanding national placement records.',
  },
  {
    year: '2018',
    title: 'Autonomous Status (VTU)',
    desc: 'Granted autonomous academic privileges by UGC & VTU for modern dynamic engineering pedagogy.',
  },
  {
    year: '2023',
    title: 'NAAC A+ Distinction',
    desc: 'Highest grade assessment recognizing research citations, technology incubation centers, and faculty excellence.',
  },
  {
    year: '2026',
    title: 'Silver Jubilee & Vigyantra',
    desc: '25 years of engineering leadership celebrated with the National Technical Symposium and ₹4,00,000 prize pool.',
  },
];

export default function V2LegacySection({ onScrollToArenas }: V2LegacySectionProps) {
  const handleScrollArenas = () => {
    if (onScrollToArenas) {
      onScrollToArenas();
    } else {
      const target = document.getElementById('arenas');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="legacy" className="v2-legacy-section" aria-label="25 Years SJBIT Legacy and Heritage">
      {/* Subdued Subtle Background Grid (Graphite / Gold tint, zero cyan) */}
      <div className="v2-legacy-grid" aria-hidden="true" />

      <div className="v2-container">
        {/* Eyebrow */}
        <div style={{ marginBottom: '16px' }}>
          <V2Eyebrow accent="gold">SJBIT // SILVER JUBILEE HERITAGE • EST. 2001</V2Eyebrow>
        </div>

        {/* 1. Header Grid: Silver Jubilee 25 Artifact + Editorial Narrative Column */}
        <div className="v2-legacy-monument-grid">
          {/* Silver Jubilee Commemorative Plaque Artifact */}
          <div className="v2-legacy-25-artifact">
            <span className="v2-corner-marker tl" aria-hidden="true" />
            <span className="v2-corner-marker tr" aria-hidden="true" />
            <span className="v2-corner-marker bl" aria-hidden="true" />
            <span className="v2-corner-marker br" aria-hidden="true" />

            <span className="v2-legacy-25-top-meta">EST. 2001 // BENGALURU</span>
            <span className="v2-legacy-25-num" aria-label="25 Years">
              25
            </span>
            <span className="v2-legacy-25-bottom-meta">2001 — 2026 // SILVER JUBILEE</span>
          </div>

          {/* Narrative & Credentials */}
          <div className="v2-legacy-narrative">
            <h2 className="v2-legacy-heading">
              A QUARTER CENTURY OF{' '}
              <span className="v2-text-gold-gradient">ENGINEERING EXCELLENCE</span>
            </h2>

            <p className="v2-legacy-lead">
              Established under the divine aegis of <strong>Sri Adichunchanagiri Shikshana Trust®</strong>, SJB Institute of Technology has spent 25 years shaping the next generation of engineers, technologists, and innovators.
            </p>

            <p className="v2-legacy-body-editorial">
              As an <strong>Autonomous Institute affiliated with Visvesvaraya Technological University (VTU)</strong>, accredited with <strong>NAAC A+</strong> and <strong>NBA</strong> credentials, SJBIT unites academic rigor with industry-standard laboratories and research incubation. VIGYANTRA 2026 marks the triumphant culmination of this 25-year Silver Jubilee legacy.
            </p>

            {/* Accreditation Badges */}
            <div className="v2-legacy-pills">
              <V2Badge variant="gold">★ NAAC A+ ACCREDITED</V2Badge>
              <V2Badge variant="steel">★ NBA ACCREDITED PROGRAMS</V2Badge>
              <V2Badge variant="steel">★ VTU AUTONOMOUS INSTITUTION</V2Badge>
              <V2Badge variant="steel">★ AICTE &amp; ISO CERTIFIED</V2Badge>
              <V2Badge variant="steel">★ IEEE CS BENGALURU CHAPTER</V2Badge>
            </div>
          </div>
        </div>

        {/* 2. Structural 25-Year Timeline (2001 ─── 2026) */}
        <div className="v2-timeline-container">
          <div className="v2-timeline-header">
            <div>
              <V2TechLabel style={{ color: 'var(--v2-gold)' }}>CHRONOLOGY OF EXCELLENCE</V2TechLabel>
              <h3 style={{ fontFamily: 'var(--v2-font-heading)', fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', fontWeight: 700, color: 'var(--v2-text-primary)', marginTop: '4px' }}>
                The 25-Year Milestone Trajectory (2001 — 2026)
              </h3>
            </div>
            <V2Metadata>ESTABLISHED: 2001 // JUBILEE: 2026</V2Metadata>
          </div>

          {/* Desktop Horizontal Rail */}
          <div className="v2-timeline-rail-desktop">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className={`v2-timeline-node-desktop ${idx === MILESTONES.length - 1 ? 'active' : ''}`}>
                <div className="v2-timeline-dot" aria-hidden="true" />
                <div className="v2-timeline-card">
                  <span className="v2-timeline-year">{m.year}</span>
                  <h4 className="v2-timeline-title">{m.title}</h4>
                  <p className="v2-timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Vertical Timeline */}
          <div className="v2-timeline-rail-mobile">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="v2-timeline-node-mobile">
                <div className="v2-timeline-card">
                  <span className="v2-timeline-year">{m.year}</span>
                  <h4 className="v2-timeline-title">{m.title}</h4>
                  <p className="v2-timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Guiding Legacy: Integrated Institutional Signature */}
        <div className="v2-guiding-legacy-wrap">
          <div className="v2-guiding-header">
            <V2TechLabel style={{ color: 'var(--v2-gold)' }}>|| JAI SRI GURUDEV ||</V2TechLabel>
            <h3 style={{ fontFamily: 'var(--v2-font-heading)', fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)', fontWeight: 700, color: 'var(--v2-text-primary)', marginTop: '6px' }}>
              THE GUIDING LEGACY
            </h3>
            <p style={{ fontFamily: 'var(--v2-font-mono)', fontSize: '0.72rem', color: 'var(--v2-text-tertiary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '6px' }}>
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
              <h4 className="v2-guiding-name">
                Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji
              </h4>
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
              <h4 className="v2-guiding-name">
                Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji
              </h4>
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
              <h4 className="v2-guiding-name">
                Poojya Sri Sri Prakashanatha Swamiji
              </h4>
              <span className="v2-guiding-designation">Managing Director</span>
            </div>
          </div>
        </div>

        {/* 4. Visual Transition Handoff into the 08 Flagship Arenas */}
        <div className="v2-legacy-handoff-banner">
          <div>
            <V2TechLabel style={{ color: 'var(--v2-crimson-vibrant)' }}>THE NEXT HORIZON</V2TechLabel>
            <h4 style={{ fontFamily: 'var(--v2-font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--v2-text-primary)', marginTop: '4px' }}>
              25 Years of Legacy → 08 Flagship Arenas → The Future of Technology
            </h4>
            <V2Metadata>NATIONAL PRIZE POOL: ₹ 4,00,000 // 1,500+ CADETS CONVENING</V2Metadata>
          </div>

          <V2Button variant="primary" size="lg" onClick={handleScrollArenas}>
            ENTER THE 8 ARENAS ↓
          </V2Button>
        </div>
      </div>
    </section>
  );
}

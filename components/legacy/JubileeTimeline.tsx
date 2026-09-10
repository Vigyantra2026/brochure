'use client';

import React from 'react';

const JUBILEE_MILESTONES = [
  { year: '2001', title: 'Foundation Consecration', desc: 'SJB Institute of Technology established under the divine vision of Sri Adichunchanagiri Shikshana Trust®.' },
  { year: '2006', title: 'Campus Expansion', desc: 'Inauguration of advanced research blocks, engineering computing complexes and IEEE student branch.' },
  { year: '2012', title: 'NBA & NAAC Accreditations', desc: 'Attainment of prime institutional quality recognitions and national placement records.' },
  { year: '2018', title: 'Autonomous Status under VTU', desc: 'Granted autonomous academic privileges by UGC & VTU for dynamic engineering pedagogy.' },
  { year: '2023', title: 'NAAC A+ Distinction', desc: 'Highest grade assessment recognizing research citations, incubators and academic leadership.' },
  { year: '2026', title: 'Silver Jubilee & Vigyantra 2026', desc: '25 years of engineering mastery marked by the national symposium with ₹4,00,000 in rewards.' },
];

export default function JubileeTimeline() {
  return (
    <section id="legacy" className="info-section">
      <div className="hud-scanline-beam" aria-hidden="true" />
      <div className="info-section-inner">
        <div className="info-section-header">
          <span className="info-badge gold">✦ 02 // INSTITUTIONAL CONTEXT ✦</span>
          <h2 className="info-title">25 YEARS OF SJBIT EXCELLENCE</h2>
          <div className="info-subtitle">
            A Quarter Century of Technical Empowerment &amp; Research Leadership
          </div>
        </div>

        <div className="info-text-block">
          <p>
            Established under the divine aegis of <strong>Sri Adichunchanagiri Shikshana Trust®</strong>, SJB Institute of Technology has spent 25 years shaping the next generation of engineers, technologists, and entrepreneurs.
          </p>
          <p>
            As an <strong>Autonomous Institute affiliated with Visvesvaraya Technological University (VTU), Belagavi</strong>, accredited with <strong>NAAC A+</strong> and <strong>NBA</strong> credentials, SJBIT is committed to providing industry-standard laboratory environments, research incubation centers, and globally recognized engineering education.
          </p>
        </div>

        {/* Milestone Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            margin: '28px 0',
          }}
        >
          {JUBILEE_MILESTONES.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(8, 12, 24, 0.75)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '8px',
                padding: '16px 20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: 'var(--gold)',
                  marginBottom: '4px',
                }}
              >
                {m.year}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '6px',
                }}
              >
                {m.title}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--silver-400)', lineHeight: 1.6 }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="legacy-credentials-row">
          <div className="cred-pill"><span className="cred-icon">★</span> NAAC A+ Accredited</div>
          <div className="cred-pill"><span className="cred-icon">★</span> NBA Accredited Programs</div>
          <div className="cred-pill"><span className="cred-icon">★</span> Autonomous VTU Institution</div>
          <div className="cred-pill"><span className="cred-icon">★</span> AICTE &amp; ISO Certified</div>
          <div className="cred-pill"><span className="cred-icon">★</span> IEEE CS Bengaluru Chapter</div>
        </div>
      </div>
    </section>
  );
}

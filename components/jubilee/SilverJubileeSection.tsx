'use client';

import React, { useEffect, useRef } from 'react';
import { V2Badge, V2Eyebrow, V2TechLabel, V2Metadata } from '@/components/ui/v2';
import { gsap, ScrollTrigger } from '@/lib/gsap';

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

export default function SilverJubileeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const monumentRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Monument 25 Artifact enters with controlled scale and weight
      gsap.fromTo(
        monumentRef.current,
        { opacity: 0.3, scale: 0.88, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 0.5,
          },
        }
      );

      // 2. Editorial narrative fades in with crisp focus
      gsap.fromTo(
        narrativeRef.current,
        { opacity: 0.3, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'top 35%',
            scrub: 0.5,
          },
        }
      );

      // 3. Timeline nodes reveal sequentially along the rail
      const nodes = timelineRef.current?.querySelectorAll('.v2-timeline-node-desktop, .v2-timeline-node-mobile');
      if (nodes && nodes.length > 0) {
        gsap.fromTo(
          nodes,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 0.4,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="silver-jubilee"
      className="v2-legacy-section"
      aria-label="25 Years SJBIT Silver Jubilee Heritage"
    >
      {/* Subdued Subtle Background Grid */}
      <div className="v2-legacy-grid" aria-hidden="true" />

      <div className="v2-container">
        {/* Eyebrow */}
        <div style={{ marginBottom: '16px' }}>
          <V2Eyebrow accent="gold">SJBIT // SILVER JUBILEE HERITAGE • 2001 — 2026</V2Eyebrow>
        </div>

        {/* 1. Header Grid: Silver Jubilee 25 Artifact + Editorial Narrative Column */}
        <div className="v2-legacy-monument-grid">
          {/* Silver Jubilee Commemorative Plaque Artifact */}
          <div ref={monumentRef} className="v2-legacy-25-artifact">
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
          <div ref={narrativeRef} className="v2-legacy-narrative">
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
        <div ref={timelineRef} className="v2-timeline-container">
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
      </div>
    </section>
  );
}

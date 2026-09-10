import React, { useState, useEffect, useRef, useMemo } from 'react';
import { V2Badge, V2Eyebrow, V2TechLabel, V2Metadata } from '@/components/ui/v2';
import { ScrollTrigger } from '@/lib/gsap';

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
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Dedicated GSAP ScrollTrigger pinning engine
  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !stageRef.current) return;

    let triggerInstance: ScrollTrigger | null = null;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !stageRef.current) return;

      triggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1900', // Pinned scroll distance for monumental progression
        pin: stageRef.current,
        pinSpacing: true,
        scrub: 0.25,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(Math.max(0, Math.min(1, self.progress)));
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (triggerInstance) {
        triggerInstance.kill();
      }
    };
  }, [prefersReducedMotion]);

  // =========================================================================
  // MONUMENTAL PROGRESSION STATES:
  // State 1 (0.00 -> 0.20): Monumental "25" Artifact appears centered and scales into focus
  // State 2 (0.20 -> 0.45): "2001 — 2026 // EST. 2001" telemetry aligns with the artifact
  // State 3 (0.45 -> 0.70): Narrative column arrives with NAAC A+ / NBA / VTU credentials
  // State 4 (0.70 -> 0.90): Structural 25-Year milestone trajectory rail activates
  // State 5 (0.90 -> 1.00): Full Jubilee composition locks before smooth release
  // =========================================================================

  // Monument Artifact transformation
  const monumentState = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, scale: 1, translateY: 0 };
    if (progress < 0.20) {
      const t = Math.max(0, progress / 0.20);
      return { opacity: 0.3 + t * 0.7, scale: 0.85 + t * 0.15, translateY: (1 - t) * 30 };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, scale: 1, translateY: -exitT * 20 };
    }
    return { opacity: 1, scale: 1, translateY: 0 };
  }, [progress, prefersReducedMotion]);

  // Narrative block entrance
  const narrativeState = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, translateY: 0 };
    if (progress < 0.25) return { opacity: 0, translateY: 35 };
    if (progress < 0.55) {
      const t = (progress - 0.25) / 0.30;
      return { opacity: t, translateY: (1 - t) * 35 };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, translateY: -exitT * 20 };
    }
    return { opacity: 1, translateY: 0 };
  }, [progress, prefersReducedMotion]);

  // Milestone timeline entrance
  const timelineState = useMemo(() => {
    if (prefersReducedMotion) return { opacity: 1, translateY: 0 };
    if (progress < 0.55) return { opacity: 0, translateY: 30 };
    if (progress < 0.80) {
      const t = (progress - 0.55) / 0.25;
      return { opacity: t, translateY: (1 - t) * 30 };
    }
    if (progress >= 0.95) {
      const exitT = (progress - 0.95) / 0.05;
      return { opacity: 1 - exitT * 0.8, translateY: -exitT * 20 };
    }
    return { opacity: 1, translateY: 0 };
  }, [progress, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="silver-jubilee"
      className="v2-legacy-scroll-scene"
      aria-label="25 Years SJBIT Silver Jubilee Heritage"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#08090C',
      }}
    >
      {/* 100vh Sticky Viewport Stage */}
      <div
        ref={stageRef}
        className="v2-legacy-scroll-stage"
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#08090C',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxSizing: 'border-box',
          padding: 'clamp(20px, 3vh, 32px) 0',
        }}
      >
        {/* Subtle Background Radial Atmosphere */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(500px, 80vw, 1000px)',
            height: 'clamp(350px, 60vh, 700px)',
            background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.05) 0%, rgba(8, 9, 12, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        <div
          className="v2-container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1200px',
            maxHeight: '90vh',
            overflowY: 'auto',
            paddingRight: '4px',
          }}
        >
          {/* Eyebrow */}
          <div style={{ marginBottom: '14px', textAlign: 'center' }}>
            <V2Eyebrow accent="gold">SJBIT // SILVER JUBILEE HERITAGE • 2001 — 2026</V2Eyebrow>
          </div>

          {/* 1. Monument Grid: Silver Jubilee 25 Artifact + Editorial Narrative Column */}
          <div className="v2-legacy-monument-grid" style={{ marginBottom: 'clamp(20px, 3vh, 32px)' }}>
            {/* Silver Jubilee Commemorative Plaque Artifact */}
            <div
              className="v2-legacy-25-artifact"
              style={{
                opacity: monumentState.opacity,
                transform: `translateY(${monumentState.translateY}px) scale(${monumentState.scale})`,
                boxShadow: monumentState.opacity > 0.8 ? '0 16px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.08)' : 'none',
                transition: prefersReducedMotion ? 'none' : 'box-shadow 0.3s ease',
              }}
            >
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
            <div
              className="v2-legacy-narrative"
              style={{
                opacity: narrativeState.opacity,
                transform: `translateY(${narrativeState.translateY}px)`,
                pointerEvents: narrativeState.opacity > 0.4 ? 'auto' : 'none',
              }}
            >
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
          <div
            className="v2-timeline-container"
            style={{
              opacity: timelineState.opacity,
              transform: `translateY(${timelineState.translateY}px)`,
              pointerEvents: timelineState.opacity > 0.4 ? 'auto' : 'none',
            }}
          >
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
      </div>
    </section>
  );
}

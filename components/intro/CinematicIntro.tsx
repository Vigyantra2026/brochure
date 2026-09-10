'use client';

import React, { useEffect, useState } from 'react';

export default function CinematicIntro() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // 7 phases duration total ~3.6s
    const timer = setTimeout(() => {
      setActive(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <aside
      id="cinematic-intro-overlay"
      className="cinematic-intro"
      role="region"
      aria-label="Cinematic Introduction"
      onClick={() => setActive(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Phase 1 & 2: Deep Dark Abyss, Ignition Core & Horizon Energy */}
      <div className="intro-abyss" aria-hidden="true" />
      <div className="intro-ignition-point" aria-hidden="true" />
      <div className="intro-energy-streaks" aria-hidden="true" />

      {/* Phase 3: Digital Universe Mesh, Orbital Rings & HUD Geometry */}
      <div className="intro-grid-warp" aria-hidden="true" />
      <div className="intro-orbital-rings" aria-hidden="true">
        <div className="intro-ring ring-outer" />
        <div className="intro-ring ring-inner" />
      </div>
      <div className="intro-hud-telemetry" aria-hidden="true">
        <span className="tele-top-left">// VIGYANTRA.CORE: INITIATING</span>
        <span className="tele-bottom-right">SYS.25TH_JUBILEE // SYNCHRONIZED</span>
      </div>

      {/* Stage for Phase 4 (Giant 25), Phase 5 (Particle Transformation), Phase 6 (Title Reveal), Phase 7 (Shockwave) */}
      <div className="intro-stage" aria-hidden="true">
        {/* Phase 4: Holographic 25 with Laser Scanlines */}
        <div className="intro-holo-25-wrap">
          <div className="intro-holo-25-giant">25</div>
          <div className="intro-holo-25-scanline" />
          <div className="intro-holo-sub">25 YEARS • SILVER JUBILEE</div>
        </div>

        {/* Phase 5: High-Speed Particle Transformation Cloud */}
        <div className="intro-particle-stream">
          <span className="p-streak s1" />
          <span className="p-streak s2" />
          <span className="p-streak s3" />
          <span className="p-streak s4" />
          <span className="p-streak s5" />
          <span className="p-streak s6" />
          <span className="p-streak s7" />
          <span className="p-streak s8" />
        </div>

        {/* Phase 6: Heroic VIGYANTRA 2026 Title Reveal & Motto */}
        <div className="intro-vigyantra-reveal">
          <div className="intro-inst-crest">SJB INSTITUTE OF TECHNOLOGY</div>
          <div className="intro-hero-title-box">
            <div className="intro-hero-title">VIGYANTRA 2026</div>
            <div className="intro-hero-glare" />
          </div>
          <div className="intro-hero-motto">“Ideas Today Solutions Tomorrow”</div>
        </div>

        {/* Phase 7: Outward Energy Shockwave */}
        <div className="intro-shockwave-ring" />
      </div>
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
        [CLICK ANYWHERE TO SKIP]
      </div>
    </aside>
  );
}

'use client';

import React from 'react';
import { V2Eyebrow } from '@/components/ui/v2';

export default function V4ArenasHeader() {
  return (
    <header className="v4-arenas-header" aria-label="Arenas Section Introduction">
      {/* 1. Section Eyebrow Label */}
      <div className="v4-header-eyebrow-wrap">
        <V2Eyebrow accent="gold">01 // THE FLAGSHIP ARENAS</V2Eyebrow>
      </div>

      {/* 2. Main Institutional Headline */}
      <h2 className="v4-header-title">
        THE 8 ARENAS
      </h2>

      {/* 3. Purpose Statement */}
      <div className="v4-header-subtitle">
        BUILT FOR THE NEXT GENERATION OF ENGINEERS
      </div>

      {/* 4. Editorial Philosophy Text */}
      <p className="v4-header-lead">
        Eight national-level technical arenas. Eight ways to compete, build, break, solve, and innovate under real-world engineering constraints.
      </p>

      {/* 5. Supporting Telemetry Strip */}
      <div className="v4-header-telemetry-bar">
        <div className="v4-telemetry-item">
          <span className="v4-tel-label">PRIZE DISTRIBUTION</span>
          <span className="v4-tel-value gold">₹50,000 PER ARENA</span>
        </div>
        <div className="v4-telemetry-sep">•</div>
        <div className="v4-telemetry-item">
          <span className="v4-tel-label">AGGREGATE PURSE</span>
          <span className="v4-tel-value">₹4,00,000 TOTAL</span>
        </div>
        <div className="v4-telemetry-sep">•</div>
        <div className="v4-telemetry-item">
          <span className="v4-tel-label">DATE & VENUE</span>
          <span className="v4-tel-value">30 OCT 2026 • SJBIT BENGALURU</span>
        </div>
      </div>
    </header>
  );
}

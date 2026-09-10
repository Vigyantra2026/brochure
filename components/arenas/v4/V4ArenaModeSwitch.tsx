'use client';

import React from 'react';

export type ArenaSectionMode = 'scroll' | 'grid' | 'monument';

interface V4ArenaModeSwitchProps {
  viewMode: ArenaSectionMode;
  onToggleView: (mode: ArenaSectionMode) => void;
}

export default function V4ArenaModeSwitch({
  viewMode,
  onToggleView,
}: V4ArenaModeSwitchProps) {
  return (
    <div className="v4-mode-switch-wrapper">
      <div className="v4-mode-switch-bar" role="tablist" aria-label="Arenas Section Experience Mode">
        <button
          type="button"
          className={`v4-mode-btn ${viewMode === 'scroll' ? 'active' : ''}`}
          onClick={() => onToggleView('scroll')}
          role="tab"
          aria-selected={viewMode === 'scroll'}
          title="Cinematic scroll-driven arena storytelling journey"
        >
          <span className="v4-mode-icon">✦</span>
          <span>SCROLL JOURNEY</span>
          <span className="v4-mode-badge">01→08</span>
        </button>

        <button
          type="button"
          className={`v4-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => onToggleView('grid')}
          role="tab"
          aria-selected={viewMode === 'grid'}
          title="Browse all 8 flagship arena dossiers in a 2-column editorial grid"
        >
          <span className="v4-mode-icon">⊞</span>
          <span>ALL 8 GRID</span>
          <span className="v4-mode-badge">08</span>
        </button>

        <button
          type="button"
          className={`v4-mode-btn ${viewMode === 'monument' ? 'active' : ''}`}
          onClick={() => onToggleView('monument')}
          role="tab"
          aria-selected={viewMode === 'monument'}
          title="View architectural monument matrix connecting VIGYANTRA to the 8 arenas"
        >
          <span className="v4-mode-icon">◈</span>
          <span>MONUMENT MATRIX</span>
        </button>
      </div>
    </div>
  );
}

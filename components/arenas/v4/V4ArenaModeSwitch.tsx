'use client';

import React from 'react';

interface V4ArenaModeSwitchProps {
  viewMode: 'arenas' | 'monument';
  onToggleView: (mode: 'arenas' | 'monument') => void;
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
          className={`v4-mode-btn ${viewMode === 'arenas' ? 'active' : ''}`}
          onClick={() => onToggleView('arenas')}
          role="tab"
          aria-selected={viewMode === 'arenas'}
          title="Browse all 8 flagship arena dossiers and requirements"
        >
          <span className="v4-mode-icon">✦</span>
          <span>ARENAS DISCOVERY</span>
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

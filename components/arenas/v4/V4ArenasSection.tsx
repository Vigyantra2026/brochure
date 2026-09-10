'use client';

import React, { useState } from 'react';
import { EventArena } from '@/data/events';
import V4ArenasHeader from './V4ArenasHeader';
import V4ArenaModeSwitch from './V4ArenaModeSwitch';
import V4ArenaGrid from './V4ArenaGrid';
import V4ArenaMonumentMode from './V4ArenaMonumentMode';

interface V4ArenasSectionProps {
  onSelectEvent?: (event: EventArena) => void;
  onRegisterEvent?: (eventId: string) => void;
  onOpenModal?: (modalId: string) => void;
}

export default function V4ArenasSection({
  onSelectEvent,
  onRegisterEvent,
  onOpenModal,
}: V4ArenasSectionProps) {
  const [viewMode, setViewMode] = useState<'arenas' | 'monument'>('arenas');

  return (
    <section
      id="arenas"
      className="v4-arenas-section"
      aria-label="The 8 Flagship Arenas — VIGYANTRA 2026"
    >
      {/* 1. Subtle Engineering Ambient Background Grid */}
      <div className="v4-arenas-bg-grid" aria-hidden="true" />
      <div className="v4-arenas-radial-vignette" aria-hidden="true" />

      <div className="v2-container v4-section-inner">
        {/* 2. Editorial Header Opening */}
        <V4ArenasHeader />

        {/* 3. Refined Section-Level Experience Switcher ([ ARENAS ] ↔ [ MONUMENT ]) */}
        <V4ArenaModeSwitch
          viewMode={viewMode}
          onToggleView={setViewMode}
        />

        {/* 4. Experience Modes: Mode B (Arenas Discovery Grid) or Mode A (Monument Matrix) */}
        {viewMode === 'arenas' ? (
          <V4ArenaGrid
            onSelectEvent={onSelectEvent}
            onRegisterEvent={onRegisterEvent}
          />
        ) : (
          <V4ArenaMonumentMode
            onSelectEvent={onSelectEvent}
            onRegisterEvent={onRegisterEvent}
            onSwitchToGrid={() => setViewMode('arenas')}
          />
        )}

        {/* 5. Bottom Call-To-Action Ribbon */}
        <div className="v4-arenas-bottom-bar">
          <div className="v4-bottom-info">
            <span className="v4-bottom-gold">READY TO PARTICIPATE?</span>
            <span className="v4-bottom-desc">
              Direct registrations open across all 8 technical arenas. Multi-arena pass available.
            </span>
          </div>
          <div className="v4-bottom-actions">
            <button
              type="button"
              className="v4-bottom-btn-reg"
              onClick={() => onOpenModal?.('registration')}
            >
              REGISTER FOR AN ARENA ⚡
            </button>
            <button
              type="button"
              className="v4-bottom-btn-doc"
              onClick={() => onOpenModal?.('brochure')}
            >
              DOWNLOAD BROCHURE ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { ARENAS_V4, ArenaV4Data } from '@/data/arenas';
import { EventArena } from '@/data/events';
import { V2Badge } from '@/components/ui/v2';

interface V4ArenaMonumentModeProps {
  onSelectEvent?: (event: EventArena) => void;
  onRegisterEvent?: (eventId: string) => void;
  onSwitchToGrid?: () => void;
}

export default function V4ArenaMonumentMode({
  onSelectEvent,
  onRegisterEvent,
  onSwitchToGrid,
}: V4ArenaMonumentModeProps) {
  const [activeArenaId, setActiveArenaId] = useState<string>('APB');
  const activeArena = ARENAS_V4.find((a) => a.id === activeArenaId) || ARENAS_V4[0];

  return (
    <div className="v4-monument-mode-container" aria-label="Architectural Monument Matrix Mode">
      {/* 1. Header Prompt & View Description */}
      <div className="v4-monument-header-bar">
        <div className="v4-monument-header-left">
          <span className="v4-mono-gold">◈ SYSTEM BLUEPRINT</span>
          <span className="v4-mono-sep">•</span>
          <span className="v4-mono-muted">THE VIGYANTRA ARCHITECTURAL MATRIX</span>
        </div>
        <button
          type="button"
          className="v4-monument-switch-btn"
          onClick={onSwitchToGrid}
        >
          SWITCH TO ARENAS LIST →
        </button>
      </div>

      {/* 2. Central Monument Architectural Diagram */}
      <div className="v4-monument-stage">
        {/* SVG Architectural Vector Tethers radiating from core */}
        <svg
          className="v4-monument-svg-tethers"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldTetherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Central Radial Rings */}
          <circle cx="500" cy="300" r="180" fill="none" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="500" cy="300" r="280" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <circle cx="500" cy="300" r="80" fill="url(#hubGlow)" />

          {/* 8 Radial Vector Tethers */}
          <line x1="500" y1="300" x2="180" y2="120" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="500" y1="300" x2="130" y2="240" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="500" y1="300" x2="130" y2="360" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="500" y1="300" x2="180" y2="480" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />

          <line x1="500" y1="300" x2="820" y2="120" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="500" y1="300" x2="870" y2="240" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="500" y1="300" x2="870" y2="360" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="500" y1="300" x2="820" y2="480" stroke="url(#goldTetherGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        </svg>

        {/* Central Sovereign VIGYANTRA Core Hub */}
        <div className="v4-monument-hub">
          <div className="v4-hub-tag">SOVEREIGN CORE</div>
          <div className="v4-hub-title">VIGYANTRA</div>
          <div className="v4-hub-prize">₹ 4,00,000 PURSE</div>
          <div className="v4-hub-sub">08 ACTIVE ARENA VECTORS</div>
        </div>

        {/* The 8 Surrounding Arena Interactive Nodes */}
        <div className="v4-monument-nodes-layer">
          {ARENAS_V4.map((arena, idx) => {
            const isSelected = activeArenaId === arena.id;
            return (
              <div
                key={arena.id}
                className={`v4-monument-node-chip node-${idx} ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveArenaId(arena.id)}
                onMouseEnter={() => setActiveArenaId(arena.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveArenaId(arena.id);
                }}
              >
                <div className="v4-chip-num">{arena.number}</div>
                <div className="v4-chip-info">
                  <div className="v4-chip-name">{arena.name}</div>
                  <div className="v4-chip-code">{arena.code} // ₹50,000</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Architectural Inspection Card for Active Node */}
      {activeArena && (
        <div className="v4-monument-inspection-panel">
          <div className="v4-inspect-left">
            <div className="v4-inspect-badge-row">
              <V2Badge variant="gold">SELECTED // ARENA {activeArena.number}</V2Badge>
              <span className="v4-inspect-cat">{activeArena.categoryLabel}</span>
            </div>
            <h4 className="v4-inspect-title">{activeArena.name}</h4>
            <div className="v4-inspect-sub">“{activeArena.subName}”</div>
            <p className="v4-inspect-desc">{activeArena.shortDescription}</p>
          </div>

          <div className="v4-inspect-right">
            <div className="v4-inspect-specs">
              <div className="v4-ins-spec">
                <span className="v4-ins-lbl">PRIZE SHARE</span>
                <span className="v4-ins-val gold">{activeArena.prizePool}</span>
              </div>
              <div className="v4-ins-spec">
                <span className="v4-ins-lbl">TEAM FORMATION</span>
                <span className="v4-ins-val">{activeArena.teamSize}</span>
              </div>
              <div className="v4-ins-spec">
                <span className="v4-ins-lbl">VENUE HUB</span>
                <span className="v4-ins-val">{activeArena.venue}</span>
              </div>
            </div>

            <div className="v4-inspect-actions">
              <button
                type="button"
                className="v4-btn-dossier"
                onClick={() => onSelectEvent?.(activeArena.rawEvent)}
              >
                <span>OPEN EVENT DOSSIER</span>
                <span>→</span>
              </button>
              <button
                type="button"
                className="v4-btn-register-quick"
                onClick={() => onRegisterEvent?.(activeArena.id)}
              >
                <span>REGISTER TEAM ⚡</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

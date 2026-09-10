'use client';

import React from 'react';
import { ArenaV4Data } from '@/data/arenas';
import { EventArena } from '@/data/events';
import { V2Badge } from '@/components/ui/v2';
import V4ArenaVisual from './V4ArenaVisual';

interface V4ArenaCardProps {
  arena: ArenaV4Data;
  onSelectEvent?: (event: EventArena) => void;
  onRegisterEvent?: (eventId: string) => void;
}

export default function V4ArenaCard({
  arena,
  onSelectEvent,
  onRegisterEvent,
}: V4ArenaCardProps) {
  const handleCardClick = () => {
    onSelectEvent?.(arena.rawEvent);
  };

  return (
    <article
      className="v4-arena-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`Arena ${arena.number}: ${arena.name} — ${arena.categoryLabel}`}
    >
      {/* 1. Header Row: Number Badge, Category & Arena Code */}
      <div className="v4-card-header">
        <div className="v4-card-header-left">
          <V2Badge variant="gold">ARENA {arena.number}</V2Badge>
          <span className="v4-card-category">{arena.categoryLabel}</span>
        </div>
        <div className="v4-card-code-pill">{arena.code}</div>
      </div>

      {/* 2. Title */}
      <div className="v4-card-title-group">
        <h3 className="v4-card-title">{arena.name}</h3>
      </div>

      {/* 3. Technical Visual / Engineering Blueprint */}
      <V4ArenaVisual
        visualType={arena.visualType}
        number={arena.number}
        code={arena.code}
        spec={arena.blueprintSpec}
        name={arena.name}
      />

      {/* 4. Subtitle / Tagline */}
      {arena.subName && (
        <div className="v4-card-subname">“{arena.subName}”</div>
      )}

      {/* 5. Technical Architectural Motif Tag */}
      <div className="v4-card-motif-bar">
        <span className="v4-motif-dot" aria-hidden="true" />
        <span className="v4-motif-text">{arena.technicalMotif}</span>
      </div>

      {/* 4. Short Narrative Description */}
      <p className="v4-card-desc">{arena.shortDescription}</p>

      {/* 5. Structured Engineering Specs Ribbon */}
      <div className="v4-card-specs-grid">
        <div className="v4-spec-item">
          <span className="v4-spec-label">PRIZE POOL</span>
          <span className="v4-spec-value gold-accent">{arena.prizePool}</span>
        </div>
        <div className="v4-spec-item">
          <span className="v4-spec-label">TEAM SIZE</span>
          <span className="v4-spec-value">{arena.teamSize}</span>
        </div>
        <div className="v4-spec-item">
          <span className="v4-spec-label">ENTRY FEE</span>
          <span className="v4-spec-value">{arena.registrationFee}</span>
        </div>
        <div className="v4-spec-item">
          <span className="v4-spec-label">STAGES</span>
          <span className="v4-spec-value">{arena.roundsCount} ROUNDS</span>
        </div>
      </div>

      {/* 6. Action Footer: Explore Dossier & Direct Register */}
      <div className="v4-card-footer">
        <button
          type="button"
          className="v4-btn-dossier"
          onClick={(e) => {
            e.stopPropagation();
            onSelectEvent?.(arena.rawEvent);
          }}
          aria-label={`Explore full dossier for ${arena.name}`}
        >
          <span>EXPLORE DOSSIER</span>
          <span className="v4-btn-arrow" aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          className="v4-btn-register-quick"
          onClick={(e) => {
            e.stopPropagation();
            onRegisterEvent?.(arena.id);
          }}
          aria-label={`Register team for ${arena.name}`}
        >
          <span>REGISTER ⚡</span>
        </button>
      </div>
    </article>
  );
}

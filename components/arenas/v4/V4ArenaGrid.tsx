'use client';

import React, { useState } from 'react';
import { ARENAS_V4, ArenaV4Data } from '@/data/arenas';
import { EventArena } from '@/data/events';
import V4ArenaCard from './V4ArenaCard';

interface V4ArenaGridProps {
  onSelectEvent?: (event: EventArena) => void;
  onRegisterEvent?: (eventId: string) => void;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'ALL ARENAS (08)' },
  { id: 'ai', label: 'AI & PROMPT' },
  { id: 'coding', label: 'CODING & RELAY' },
  { id: 'cyber', label: 'CYBER & CTF' },
  { id: 'app', label: 'FULL-STACK' },
  { id: 'hardware', label: 'HARDWARE & IOT' },
  { id: 'robotics', label: 'ROBOTICS' },
];

export default function V4ArenaGrid({
  onSelectEvent,
  onRegisterEvent,
}: V4ArenaGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArenas = ARENAS_V4.filter((arena) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') return arena.id === 'APB';
    if (activeCategory === 'coding') return arena.id === 'CR';
    if (activeCategory === 'cyber') return arena.id === 'HNH' || arena.id === 'ZCTF';
    if (activeCategory === 'app') return arena.id === 'ADC';
    if (activeCategory === 'hardware') return arena.id === 'INM' || arena.id === 'GTC';
    if (activeCategory === 'robotics') return arena.id === 'RBI';
    return true;
  });

  return (
    <div className="v4-arenas-grid-container">
      {/* Category Filter Toolbar */}
      <div className="v4-category-filter-bar" role="tablist" aria-label="Filter arenas by category">
        {CATEGORY_FILTERS.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`v4-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            role="tab"
            aria-selected={activeCategory === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Spacious 2-Column Editorial Grid */}
      <div className="v4-arena-editorial-grid">
        {filteredArenas.map((arena) => (
          <V4ArenaCard
            key={arena.id}
            arena={arena}
            onSelectEvent={onSelectEvent}
            onRegisterEvent={onRegisterEvent}
          />
        ))}
      </div>
    </div>
  );
}

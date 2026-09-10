'use client';

import React, { useState } from 'react';
import { EVENTS_DATA, EventArena } from '@/data/events';

interface ArenasMatrixProps {
  onSelectEvent: (event: EventArena) => void;
  onRegisterEvent: (eventId: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'ALL (08)' },
  { id: 'ai', label: 'AI & PROMPT' },
  { id: 'coding', label: 'CODING' },
  { id: 'puzzle', label: 'PUZZLE & HUNT' },
  { id: 'app', label: 'APP DEV' },
  { id: 'cybersecurity', label: 'CTF & SECURITY' },
  { id: 'innovation', label: 'INNOVATION' },
  { id: 'greentech', label: 'GREEN TECH' },
  { id: 'robotics', label: 'ROBOTICS' }
];

export default function ArenasMatrix({ onSelectEvent, onRegisterEvent }: ArenasMatrixProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory =
      activeCategory === 'all' ||
      event.category?.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      !searchQuery.trim() ||
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.subName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="arenas-matrix-block">
      {/* Search & Filter Toolbar */}
      <div className="hud-controls-toolbar">
        <div className="hud-search-box-wrap">
          <input
            type="text"
            className="hud-search-input"
            placeholder="🔍 Search arenas, technologies (e.g. AI, Python, CTF, Robotics)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="events-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 8 Flagship Arenas Grid */}
      <div className="hud-events-grid" style={{ marginTop: '20px' }}>
        {filteredEvents.map((event) => (
          <div key={event.id} className="hud-event-card">
            <div className="card-thumb-wrap">
              <img
                src={event.image.startsWith('/') ? event.image : `/${event.image}`}
                alt={event.name}
                className="card-thumb-img"
              />
              <span className="card-badge-num">{event.number || event.id}</span>
              <span className="card-badge-prize">{event.prizePool || '₹ 50,000'}</span>
            </div>

            <div className="card-content-body">
              <div className="card-tag-row">
                <span className="event-cat-tag">{event.categoryLabel || event.category}</span>
                <span className="event-team-pill">
                  {event.teamSize || `${event.minTeam} - ${event.maxTeam} Cadets`}
                </span>
              </div>

              <h3 className="card-event-title">{event.name}</h3>
              <div className="card-event-sub">{event.subName}</div>
              <p className="card-event-desc">{event.shortDescription}</p>

              <div className="card-meta-row">
                <div className="meta-item">
                  <span className="meta-lbl">REG. FEE:</span>
                  <span className="meta-val">{event.registrationFee || `₹${event.fee} / Team`}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">VENUE:</span>
                  <span className="meta-val">{event.venue}</span>
                </div>
              </div>

              <div className="card-actions-row">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onSelectEvent(event)}
                >
                  <span>INTEL DOSSIER →</span>
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onRegisterEvent(event.id)}
                >
                  <span>REGISTER NOW ⚡</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

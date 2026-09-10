'use client';

import React, { useState } from 'react';

interface CyberHeaderProps {
  onOpenModal: (modalId: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export default function CyberHeader({ onOpenModal, onScrollTo }: CyberHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    setMenuOpen(false);
    if (option === 'events') {
      onScrollTo('arenas');
    } else if (option === 'schedule') {
      onScrollTo('schedule');
    } else if (option === 'prizes') {
      onScrollTo('prizes');
    } else if (option === 'brochure') {
      onScrollTo('brochure');
    } else if (option === 'legacy') {
      onScrollTo('guiding-legacy');
    } else if (option === 'jubilee') {
      onScrollTo('silver-jubilee');
    } else if (option === 'institution') {
      onScrollTo('institution');
    } else if (option === 'campus') {
      onScrollTo('campus');
    } else if (['guidelines', 'faq', 'venue'].includes(option)) {
      onOpenModal(option);
    } else if (option === 'register') {
      onOpenModal('registration');
    }
  };

  const handleScroll = (sectionId: string) => {
    setMenuOpen(false);
    onScrollTo(sectionId);
  };

  return (
    <header className="cyber-header" role="banner">
      <div className="header-brand">
        <div className="brand-cyber-badge">SJBIT</div>
        <div className="brand-text-col">
          <span className="brand-title">VIGYANTRA 2026</span>
          <span className="brand-edition">25th SILVER JUBILEE • BENGALURU</span>
        </div>
      </div>

      <div className="header-actions">
        {/* Three-Lines Cyber Hamburger Dropdown Trigger at Top Right */}
        <button
          id="cyber-menu-toggle"
          className={`cyber-hamburger-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Command Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-bar bar-top" />
          <span className="hamburger-bar bar-mid" />
          <span className="hamburger-bar bar-bot" />
        </button>
      </div>

      {/* Holographic Cyber Dropdown Menu (Top-Right Flyout) */}
      <div
        id="cyber-dropdown-menu"
        className={`cyber-dropdown-menu ${menuOpen ? 'open' : ''}`}
        role="menu"
      >
        <div className="dropdown-header">
          <span className="dropdown-radar-dot" />
          <span className="dropdown-title">// NAVIGATION CONSOLE //</span>
        </div>

        <ul className="dropdown-items-list">
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('events')}>
              <span className="item-icon">❖</span>
              <span className="item-text">08 FLAGSHIP ARENAS</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('schedule')}>
              <span className="item-icon">⏱</span>
              <span className="item-text">EVENT TIMELINE (SCHEDULE)</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('prizes')}>
              <span className="item-icon">🏆</span>
              <span className="item-text">₹ 4,00,000 PRIZE POOL</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('brochure')}>
              <span className="item-icon">📖</span>
              <span className="item-text">DIGITAL BROCHURE</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('guidelines')}>
              <span className="item-icon">📜</span>
              <span className="item-text">RULES OF ENGAGEMENT</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('faq')}>
              <span className="item-icon">❓</span>
              <span className="item-text">FREQUENTLY ASKED QUESTIONS</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li className="dropdown-divider" />
          <li className="dropdown-section-label"><span>// SECTIONS //</span></li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('guiding-legacy')}>
              <span className="item-icon">✨</span>
              <span className="item-text">THE GUIDING LEGACY</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('silver-jubilee')}>
              <span className="item-icon">⭐</span>
              <span className="item-text">25 YEARS SILVER JUBILEE</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('institution')}>
              <span className="item-icon">🏛️</span>
              <span className="item-text">SJBIT INSTITUTION</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('campus')}>
              <span className="item-icon">📍</span>
              <span className="item-text">CAMPUS &amp; VENUE</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li className="dropdown-divider" />
          <li>
            <button className="dropdown-item-btn highlight-cyan" onClick={() => handleSelectOption('register')}>
              <span className="item-icon">⚡</span>
              <span className="item-text">CADET REGISTRATION</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn highlight-gold" onClick={() => handleSelectOption('brochure')}>
              <span className="item-icon">📖</span>
              <span className="item-text">DIGITAL BROCHURE</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
        </ul>

        <div className="dropdown-footer">
          <span>SYS.CORE: ACTIVE // OCT 30, 2026</span>
        </div>
      </div>
    </header>
  );
}

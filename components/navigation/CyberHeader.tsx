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
    if (['events', 'schedule', 'prizes', 'guidelines', 'faq', 'venue'].includes(option)) {
      onOpenModal(option);
    } else if (option === 'register') {
      onOpenModal('registration');
    } else if (option === 'brochure') {
      onOpenModal('brochure');
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
              <span className="item-text">SYMPOSIUM TIMELINE</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('prizes')}>
              <span className="item-icon">🏆</span>
              <span className="item-text">₹ 4,00,000 PRIZES</span>
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
          <li>
            <button className="dropdown-item-btn" onClick={() => handleSelectOption('venue')}>
              <span className="item-icon">📍</span>
              <span className="item-text">CAMPUS TELEMETRY & VENUE</span>
              <span className="item-arrow">→</span>
            </button>
          </li>
          <li className="dropdown-divider" />
          <li className="dropdown-section-label"><span>// DOSSIER SECTIONS //</span></li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('about')}>
              <span className="item-icon">ℹ️</span>
              <span className="item-text">ABOUT VIGYANTRA</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('coordinators')}>
              <span className="item-icon">👥</span>
              <span className="item-text">EVENT COORDINATORS</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('campus')}>
              <span className="item-icon">🏛️</span>
              <span className="item-text">VISIT SJBIT</span>
              <span className="item-arrow">↓</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item-btn" onClick={() => handleScroll('contact')}>
              <span className="item-icon">📞</span>
              <span className="item-text">CONTACT DESK</span>
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

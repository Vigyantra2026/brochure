'use client';

import React, { useState } from 'react';

interface CyberHeaderProps {
  onOpenModal: (modalId: string) => void;
  onScrollTo: (sectionId: string) => void;
  introActive?: boolean;
}

export default function CyberHeader({ onOpenModal, onScrollTo, introActive = false }: CyberHeaderProps) {
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
    <header
      className={`cyber-header ${introActive ? 'header-intro-hidden' : ''}`}
      style={{
        transform: introActive ? 'translateY(-100%)' : 'translateY(0)',
        opacity: introActive ? 0 : 1,
        pointerEvents: introActive ? 'none' : 'auto',
        transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease',
      }}
      role="banner"
    >
      <div className="header-brand">
        <a
          href="#command-deck"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo('command-deck');
          }}
          className="header-brand-link"
          aria-label="SJB Institute of Technology, Bengaluru — Return to Top"
        >
          <img
            src="/assets/sjbit_logo.png"
            alt="SJB Institute of Technology Official Seal"
            className="header-sjbit-logo"
            width={48}
            height={48}
          />
          <span className="header-brand-divider" aria-hidden="true" />
          <span className="header-brand-inst-label">SJBIT • BENGALURU</span>
        </a>
      </div>

      <div className="header-actions">
        {/* Custom VIGYANTRA 2026 Header Brand Mark */}
        <div className="header-vigyantra-brand">
          <img
            src="/assets/vigyantra_header_logo.png"
            alt="VIGYANTRA 2026"
            className="header-vigyantra-logo"
            width={148}
            height={45}
          />
        </div>

        {/* Three-Lines Cyber Hamburger Dropdown Trigger (Mobile Only) */}
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

'use client';

import React from 'react';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import CircuitSchematic from './CircuitSchematic';

interface CommandDeckHeroProps {
  onOpenModal: (modalId: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export default function CommandDeckHero({ onOpenModal, onScrollTo }: CommandDeckHeroProps) {
  return (
    <main className="command-deck-stage" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top Invocatory & Institute Tag */}
      <div className="deck-trust-banner">
        <div className="deck-invocatory">|| JAI SRI GURUDEV ||</div>
        <div className="deck-trust-name">Sri Adichunchanagiri Shikshana Trust®</div>
        <div className="deck-institute-title">SJB INSTITUTE OF TECHNOLOGY</div>
        <div className="deck-institute-accredit">AN AUTONOMOUS INSTITUTE UNDER VTU • NAAC A+ • NBA ACCREDITED</div>
      </div>

      {/* With Divine Blessings of Revered Swamijis */}
      <section className="blessings-panel" aria-label="Divine Blessings">
        <div className="blessings-title-badge">
          ✦ WITH THE DIVINE BLESSINGS OF OUR REVERED POOJYA SWAMIJIS ✦
        </div>
        <div className="swamijis-row">
          {/* Swamiji 1 */}
          <div className="swamiji-avatar-card">
            <div className="swamiji-avatar-wrapper">
              <img
                src="/assets/swamiji_1.png"
                alt="Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji"
                className="swamiji-img"
              />
            </div>
            <div className="swamiji-name">Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji</div>
            <div className="swamiji-designation">Founder President</div>
          </div>

          {/* Swamiji 2 */}
          <div className="swamiji-avatar-card">
            <div className="swamiji-avatar-wrapper">
              <img
                src="/assets/swamiji_2.png"
                alt="Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji"
                className="swamiji-img"
              />
            </div>
            <div className="swamiji-name">Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji</div>
            <div className="swamiji-designation">President, BGS & SJBIT</div>
          </div>

          {/* Swamiji 3 */}
          <div className="swamiji-avatar-card">
            <div className="swamiji-avatar-wrapper">
              <img
                src="/assets/swamiji_3.png"
                alt="Poojya Sri Sri Prakashanatha Swamiji"
                className="swamiji-img"
              />
            </div>
            <div className="swamiji-name">Poojya Sri Sri Prakashanatha Swamiji</div>
            <div className="swamiji-designation">Managing Director</div>
          </div>
        </div>
      </section>

      {/* Center Stage Landmark & Hologram */}
      <div className="deck-center-landmark">
        {/* Restrained Atmospheric Energy Field Behind Hero Title */}
        <div className="deck-hero-aura" aria-hidden="true" />

        <div className="deck-jubilee-eyebrow">
          <span>✦ 25 YEARS SILVER JUBILEE CELEBRATIONS ✦</span>
        </div>

        {/* Holographic Number 25 Backdrop */}
        <div className="deck-hologram-number">25</div>

        <h1 className="deck-title">VIGYANTRA 2026</h1>

        <div className="deck-theme-motto">
          “Ideas Today Solutions Tomorrow”
        </div>

        <div className="deck-subtitle">
          <span className="deck-tag-highlight">NATIONAL TECHNICAL SYMPOSIUM</span>
          <span className="deck-separator">•</span>
          <span className="deck-date-highlight">30 OCTOBER 2026 (FRIDAY)</span>
          <span className="deck-separator">•</span>
          <span className="deck-prize-highlight">₹ 4,00,000 PRIZE POOL</span>
        </div>

        {/* Live Dynamic Countdown */}
        <CountdownTimer />
      </div>

      {/* Interactive Circuit Schematic Backdrop */}
      <CircuitSchematic />

      {/* The 3 Primary Cyber Action Triggers */}
      <div className="deck-action-triggers" style={{ position: 'relative', zIndex: 10 }}>
        {/* 1. Explore Events */}
        <button className="cyber-btn cyber-btn-events" onClick={() => onOpenModal('events')}>
          <span className="cyber-btn-glare" />
          <span className="cyber-btn-content">
            <span className="cyber-btn-icon">❖</span>
            <span className="cyber-btn-label">EXPLORE 8 ARENAS</span>
          </span>
        </button>

        {/* 2. Register Now */}
        <button className="cyber-btn cyber-btn-register" onClick={() => onOpenModal('registration')}>
          <span className="cyber-btn-glare" />
          <span className="cyber-btn-content">
            <span className="cyber-btn-icon">⚡</span>
            <span className="cyber-btn-label">REGISTER NOW</span>
          </span>
        </button>

        {/* 3. View Brochure */}
        <button className="cyber-btn cyber-btn-brochure" onClick={() => onOpenModal('brochure')}>
          <span className="cyber-btn-glare" />
          <span className="cyber-btn-content">
            <span className="cyber-btn-icon">📖</span>
            <span className="cyber-btn-label">VIEW BROCHURE</span>
          </span>
        </button>
      </div>

      {/* Cyber Scroll Indicator */}
      <button
        onClick={() => onScrollTo('about')}
        className="deck-scroll-indicator"
        aria-label="Scroll to symposium information sections"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        <span className="scroll-cue-text">SYMPOSIUM DOSSIER &amp; INTEL</span>
        <span className="scroll-cue-chevron">↓</span>
      </button>
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArenaV4Data, getAdjacentArenas } from '@/data/arenas';
import V4ArenaVisual from './V4ArenaVisual';
import { V2Badge, V2Button, V2Card } from '@/components/ui/v2';

interface ArenaDossierProps {
  arena: ArenaV4Data;
  onOpenRegistration?: (arenaId: string) => void;
}

export default function ArenaDossier({ arena, onOpenRegistration }: ArenaDossierProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { prev, next } = getAdjacentArenas(arena.id);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prevIdx) => (prevIdx === index ? null : index));
  };

  const handleRegister = () => {
    if (onOpenRegistration) {
      onOpenRegistration(arena.id);
    } else if (arena.registrationUrl) {
      window.open(arena.registrationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className="v4-dossier-document" aria-label={`Technical Dossier: Arena ${arena.number} — ${arena.name}`}>
      {/* -------------------------------------------------------------------- */}
      {/* 00. TOP NAVIGATION & SYSTEM BREADCRUMB */}
      {/* -------------------------------------------------------------------- */}
      <nav className="v4-dossier-nav-bar" aria-label="Dossier Navigation">
        <div className="v4-dossier-nav-inner">
          <Link href="/#arenas" className="v4-dossier-back-link">
            <span className="v4-dnav-arrow" aria-hidden="true">←</span>
            <span>BACK TO ARENAS</span>
          </Link>

          <div className="v4-dossier-adjacent-group">
            <Link
              href={`/arenas/${prev.slug}`}
              className="v4-dossier-adj-btn"
              title={`Previous: Arena ${prev.number} — ${prev.name}`}
              aria-label={`Previous Arena: ${prev.name}`}
            >
              <span className="v4-adj-chev" aria-hidden="true">‹</span>
              <span className="v4-adj-text">ARENA {prev.number}</span>
            </Link>
            <span className="v4-dossier-adj-sep" aria-hidden="true">/</span>
            <Link
              href={`/arenas/${next.slug}`}
              className="v4-dossier-adj-btn"
              title={`Next: Arena ${next.number} — ${next.name}`}
              aria-label={`Next Arena: ${next.name}`}
            >
              <span className="v4-adj-text">ARENA {next.number}</span>
              <span className="v4-adj-chev" aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* -------------------------------------------------------------------- */}
      {/* 01. DOSSIER HERO BANNER */}
      {/* -------------------------------------------------------------------- */}
      <header className="v4-dossier-hero">
        <div className="v4-dossier-hero-inner">
          {/* Telemetry Tagline */}
          <div className="v4-dossier-eyebrow-row">
            <V2Badge variant="gold">ARENA {arena.number}</V2Badge>
            <span className="v4-dossier-cat">{arena.categoryLabel}</span>
            <span className="v4-dossier-code-chip">{arena.code}</span>
          </div>

          {/* Main Title & Subname */}
          <h1 className="v4-dossier-main-title">{arena.name}</h1>
          {arena.subName && (
            <div className="v4-dossier-subtitle">“{arena.subName}”</div>
          )}

          {/* Technical Visual Identity */}
          <div className="v4-dossier-visual-frame">
            <V4ArenaVisual
              visualType={arena.visualType}
              number={arena.number}
              code={arena.code}
              spec={arena.blueprintSpec}
              name={arena.name}
            />
          </div>

          {/* Core Telemetry Specs Ribbon */}
          <div className="v4-dossier-spec-ribbon" aria-label="Arena Key Parameters">
            <div className="v4-dspec-cell">
              <span className="v4-dspec-k">PRIZE POOL</span>
              <span className="v4-dspec-v gold">{arena.prizePool}</span>
            </div>
            <div className="v4-dspec-cell">
              <span className="v4-dspec-k">TEAM SIZE</span>
              <span className="v4-dspec-v">{arena.teamSize}</span>
            </div>
            <div className="v4-dspec-cell">
              <span className="v4-dspec-k">ENTRY FEE</span>
              <span className="v4-dspec-v">{arena.registrationFee}</span>
            </div>
            <div className="v4-dspec-cell">
              <span className="v4-dspec-k">STAGES</span>
              <span className="v4-dspec-v">{arena.roundsCount} ROUNDS</span>
            </div>
            <div className="v4-dspec-cell">
              <span className="v4-dspec-k">TARGET DATE</span>
              <span className="v4-dspec-v">30 OCT 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* 02. EDITORIAL BODY CONTENT SECTIONS */}
      {/* -------------------------------------------------------------------- */}
      <div className="v4-dossier-body">
        {/* SECTION 01: OVERVIEW */}
        <section className="v4-dossier-section" id="dossier-overview">
          <div className="v4-dsection-header">
            <span className="v4-dsection-index">01 // OVERVIEW</span>
            <h2 className="v4-dsection-title">EXECUTIVE BRIEF</h2>
          </div>
          <div className="v4-dossier-text-block">
            <p className="v4-dossier-paragraph">{arena.description}</p>
            {arena.venue && (
              <div className="v4-dossier-meta-callout">
                <span className="v4-callout-icon">📍</span>
                <div>
                  <div className="v4-callout-lbl">DESIGNATED VENUE & LAB</div>
                  <div className="v4-callout-val">{arena.venue}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 02: THE CHALLENGE & TECHNICAL TASKS */}
        {arena.tasks && arena.tasks.length > 0 && (
          <section className="v4-dossier-section" id="dossier-challenge">
            <div className="v4-dsection-header">
              <span className="v4-dsection-index">02 // THE CHALLENGE</span>
              <h2 className="v4-dsection-title">TECHNICAL EXPECTATIONS & TASKS</h2>
            </div>
            <div className="v4-tasks-stack">
              {arena.tasks.map((task, idx) => (
                <div key={idx} className="v4-task-card">
                  <div className="v4-task-index">VEC 0{idx + 1}</div>
                  <div className="v4-task-content">
                    <p className="v4-task-desc">{task}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 03: ROUNDS STRUCTURE */}
        {arena.rounds && arena.rounds.length > 0 && (
          <section className="v4-dossier-section" id="dossier-rounds">
            <div className="v4-dsection-header">
              <span className="v4-dsection-index">03 // STAGES & ROUNDS</span>
              <h2 className="v4-dsection-title">TOURNAMENT PROGRESSION</h2>
            </div>
            <div className="v4-rounds-grid">
              {arena.rounds.map((round, idx) => (
                <div key={idx} className="v4-round-card">
                  <div className="v4-rcard-header">
                    <span className="v4-rcard-badge">{round.roundNumber || `STAGE 0${idx + 1}`}</span>
                    {round.duration && (
                      <span className="v4-rcard-dur">{round.duration}</span>
                    )}
                  </div>
                  <h3 className="v4-rcard-title">{round.title}</h3>
                  {round.format && (
                    <div className="v4-rcard-format">FORMAT: {round.format}</div>
                  )}
                  <p className="v4-rcard-task">{round.task}</p>
                  {round.scoring && (
                    <div className="v4-rcard-scoring">
                      <span className="v4-rscore-lbl">EVALUATION:</span>
                      <span className="v4-rscore-val">{round.scoring}</span>
                    </div>
                  )}
                  {round.qualification && (
                    <div className="v4-rcard-qual">
                      <span className="v4-rqual-lbl">ADVANCEMENT:</span>
                      <span className="v4-rqual-val">{round.qualification}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 04: RULES & ELIGIBILITY */}
        <section className="v4-dossier-section" id="dossier-rules">
          <div className="v4-dsection-header">
            <span className="v4-dsection-index">04 // RULES & COMPLIANCE</span>
            <h2 className="v4-dsection-title">REGULATIONS & ELIGIBILITY</h2>
          </div>
          <div className="v4-rules-layout">
            <div className="v4-rules-left">
              <h3 className="v4-rules-subhead">ARENA OPERATIONAL RULES</h3>
              {arena.rules && arena.rules.length > 0 ? (
                <ul className="v4-rules-list">
                  {arena.rules.map((rule, idx) => (
                    <li key={idx} className="v4-rule-item">
                      <span className="v4-rule-num" aria-hidden="true">§{idx + 1}</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="v4-dossier-muted">[RULES TO BE FINALIZED BY ARENA JURY]</p>
              )}
            </div>

            <div className="v4-rules-right">
              <h3 className="v4-rules-subhead">ELIGIBILITY & SQUAD REQUIREMENTS</h3>
              {arena.eligibility && arena.eligibility.length > 0 ? (
                <ul className="v4-rules-list">
                  {arena.eligibility.map((item, idx) => (
                    <li key={idx} className="v4-rule-item">
                      <span className="v4-rule-num" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="v4-dossier-muted">[ELIGIBILITY TO BE FINALIZED]</p>
              )}

              {arena.submissionRequirements && arena.submissionRequirements.length > 0 && (
                <div className="v4-submissions-block">
                  <h4 className="v4-subm-subhead">REQUIRED SUBMISSIONS</h4>
                  <ul className="v4-subm-list">
                    {arena.submissionRequirements.map((req, idx) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 05: PRIZE PURSE */}
        <section className="v4-dossier-section" id="dossier-prize">
          <div className="v4-dsection-header">
            <span className="v4-dsection-index">05 // PRIZE ALLOCATION</span>
            <h2 className="v4-dsection-title">HONORS & PURSE BREAKDOWN</h2>
          </div>
          <div className="v4-prize-deck">
            <div className="v4-prize-summary-banner">
              <span className="v4-psum-k">AGGREGATE ARENA PURSE</span>
              <span className="v4-psum-v">{arena.prizePool}</span>
              <span className="v4-psum-sub">PART OF THE VIGYANTRA 2026 ₹4,00,000 NATIONAL PRIZE POOL</span>
            </div>

            <div className="v4-prize-breakdown-row">
              <div className="v4-prize-award-card champion">
                <div className="v4-paward-rank">1ST PLACE // CHAMPION</div>
                <div className="v4-paward-amount">₹ {arena.prizeWinner.toLocaleString('en-IN')}</div>
                <div className="v4-paward-label">Cash Honorarium + Trophy + Certificate of Technical Mastery</div>
              </div>

              <div className="v4-prize-award-card runner-up">
                <div className="v4-paward-rank">2ND PLACE // RUNNER-UP</div>
                <div className="v4-paward-amount">₹ {arena.prizeRunnerUp.toLocaleString('en-IN')}</div>
                <div className="v4-paward-label">Cash Honorarium + Silver Plaque + Certificate of Merit</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: EXPANDABLE FAQ */}
        {arena.faqs && arena.faqs.length > 0 && (
          <section className="v4-dossier-section" id="dossier-faq">
            <div className="v4-dsection-header">
              <span className="v4-dsection-index">06 // FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="v4-dsection-title">ARENA INTEL & CLARIFICATIONS</h2>
            </div>
            <div className="v4-faq-accordion">
              {arena.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`v4-faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="v4-faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="v4-faq-q">{faq.q}</span>
                      <span className="v4-faq-toggle-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="v4-faq-body">
                        <p className="v4-faq-a">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 07: COORDINATOR & DESK */}
        <section className="v4-dossier-section" id="dossier-coordinator">
          <div className="v4-dsection-header">
            <span className="v4-dsection-index">07 // COORDINATORS & DESK</span>
            <h2 className="v4-dsection-title">POINT OF CONTACT</h2>
          </div>
          <div className="v4-coord-grid">
            <div className="v4-coord-box">
              <div className="v4-coord-badge">FACULTY LEAD</div>
              <div className="v4-coord-name">{arena.coordinator.faculty}</div>
              <div className="v4-coord-dept">Arena Evaluation Convenor</div>
              {arena.coordinator.facultyContact && (
                <div className="v4-coord-phone">
                  <span className="v4-coord-lbl">CONTACT:</span> {arena.coordinator.facultyContact}
                </div>
              )}
            </div>

            <div className="v4-coord-box">
              <div className="v4-coord-badge gold">STUDENT LEAD</div>
              <div className="v4-coord-name">{arena.coordinator.student}</div>
              <div className="v4-coord-dept">Arena Operations Coordinator</div>
              {arena.coordinator.studentContact && (
                <div className="v4-coord-phone">
                  <span className="v4-coord-lbl">CONTACT:</span> {arena.coordinator.studentContact}
                </div>
              )}
            </div>

            <div className="v4-coord-box full">
              <div className="v4-coord-badge">OFFICIAL DESK</div>
              <div className="v4-coord-name">VIGYANTRA 2026 Secretariat</div>
              <div className="v4-coord-dept">SJB Institute of Technology, BGS Health & Education City, Bengaluru</div>
              <div className="v4-coord-phone">
                <span className="v4-coord-lbl">EMAIL:</span> {arena.coordinator.email || 'vigyantra@sjbit.edu.in'}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 08: REGISTRATION CTA */}
        <section className="v4-dossier-cta-section" id="dossier-register">
          <div className="v4-dossier-cta-inner">
            <span className="v4-cta-eyebrow">✦ READY TO PARTICIPATE? ✦</span>
            <h2 className="v4-cta-heading">REGISTER FOR ARENA {arena.number}</h2>
            <p className="v4-cta-lead">
              Secure your team’s slot in {arena.name}. Standard squad entry fee is {arena.registrationFee} with multi-arena passes available.
            </p>

            <div className="v4-cta-actions">
              <button
                type="button"
                className="v4-dossier-register-btn"
                onClick={handleRegister}
              >
                <span>REGISTER FOR ARENA {arena.number} ⚡</span>
              </button>
              <Link href="/#arenas" className="v4-dossier-return-btn">
                <span>VIEW ALL 8 ARENAS ↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

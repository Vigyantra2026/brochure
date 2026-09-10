'use client';

import React, { useState } from 'react';
import { SCHEDULE_DATA } from '@/data/schedule';
import { PRIZES_DATA } from '@/data/prizes';
import { GUIDELINES_DATA } from '@/data/guidelines';
import { FAQ_DATA } from '@/data/faq';
import ArenasMatrix from '@/components/arenas/ArenasMatrix';
import { EventArena } from '@/data/events';

interface HudModalProps {
  modalId: string | null;
  onClose: () => void;
  onSelectEvent: (event: EventArena) => void;
  onRegisterEvent: (eventId: string) => void;
}

export default function HudModal({
  modalId,
  onClose,
  onSelectEvent,
  onRegisterEvent
}: HudModalProps) {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openGuidelineIndex, setOpenGuidelineIndex] = useState<number | null>(null);

  if (!modalId) return null;

  return (
    <div
      className={`hud-modal-overlay active`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="hud-dialog-window">
        {/* MODAL: 08 FLAGSHIP ARENAS */}
        {modalId === 'events' && (
          <>
            <div className="hud-dialog-header">
              <div className="hud-dialog-title">
                <span className="hud-pulse-radar" />
                <h2>THE 8 FLAGSHIP ARENAS</h2>
                <span className="hud-dialog-tag">COMPETITIVE MATRIX // ₹4,00,000 PRIZE POOL</span>
              </div>
              <button className="hud-close-btn" onClick={onClose} aria-label="Close Arenas Window">
                ✕
              </button>
            </div>
            <div className="hud-dialog-body">
              <ArenasMatrix
                onSelectEvent={(ev) => {
                  onClose();
                  onSelectEvent(ev);
                }}
                onRegisterEvent={(id) => {
                  onClose();
                  onRegisterEvent(id);
                }}
              />
            </div>
          </>
        )}

        {/* MODAL: SCHEDULE / TIMELINE */}
        {modalId === 'schedule' && (
          <>
            <div className="hud-dialog-header">
              <div className="hud-dialog-title">
                <span className="hud-pulse-radar" />
                <h2>SYMPOSIUM TIMELINE</h2>
                <span className="hud-dialog-tag">OCTOBER 30 &amp; 31, 2026 // SJBIT CAMPUS</span>
              </div>
              <button className="hud-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="hud-dialog-body">
              <div className="schedule-tabs-container">
                <button
                  className={`schedule-tab-btn ${activeDay === 'day1' ? 'active' : ''}`}
                  onClick={() => setActiveDay('day1')}
                >
                  <span>DAY 01 (OCT 30, 2026)</span>
                  <span className="tab-sub">LAUNCH &amp; 8 ARENAS COMBAT</span>
                </button>
                <button
                  className={`schedule-tab-btn ${activeDay === 'day2' ? 'active' : ''}`}
                  onClick={() => setActiveDay('day2')}
                >
                  <span>DAY 02 (OCT 31, 2026)</span>
                  <span className="tab-sub">FINALS &amp; ₹4,00,000 AWARDS GALA</span>
                </button>
              </div>

              <div className="timeline-flow" style={{ marginTop: '20px' }}>
                {SCHEDULE_DATA[activeDay].events.map((ev: any, idx: number) => (
                  <div key={idx} className="timeline-card" style={{ marginBottom: '16px' }}>
                    <div className="timeline-time-badge">{ev.time}</div>
                    <div className="timeline-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 className="timeline-title" style={{ fontSize: '1rem', color: '#ffffff' }}>
                          {ev.title}
                        </h4>
                        <span className="timeline-tag" style={{ fontSize: '0.68rem', color: 'var(--cyan)' }}>
                          {ev.tag}
                        </span>
                      </div>
                      <p className="timeline-desc" style={{ fontSize: '0.82rem', color: 'var(--silver-300)', margin: '6px 0' }}>
                        {ev.description}
                      </p>
                      <div className="timeline-venue" style={{ fontSize: '0.74rem', color: 'var(--gold)' }}>
                        📍 {ev.venue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* MODAL: PRIZES & HALL OF GLORY */}
        {modalId === 'prizes' && (
          <>
            <div className="hud-dialog-header">
              <div className="hud-dialog-title">
                <span className="hud-pulse-radar" />
                <h2>HALL OF GLORY &amp; RECOGNITION</h2>
                <span className="hud-dialog-tag gold">₹ 4,00,000 TOTAL PRIZE POOL</span>
              </div>
              <button className="hud-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="hud-dialog-body">
              <div className="prizes-banner-hero">
                <div className="trophy-hologram-visual">🏆</div>
                <div className="prizes-hero-details">
                  <span className="prizes-hero-eyebrow">SILVER JUBILEE GRAND REWARDS MATRIX</span>
                  <h3 className="prizes-hero-title">₹ 4,00,000 IN CASH REWARDS &amp; GRANTS</h3>
                  <p className="prizes-hero-desc">
                    Every one of our 8 Flagship Arenas awards ₹30,000 to the Champions and ₹20,000 to Runners-Up, plus incubation access and IEEE certificates.
                  </p>
                </div>
              </div>

              <div className="prizes-grid" style={{ marginTop: '20px' }}>
                {PRIZES_DATA.map((p, idx) => (
                  <div key={idx} className={`prize-card ${p.highlight ? 'highlight' : ''}`}>
                    <span className="prize-tag">{p.tag}</span>
                    <div className="prize-amount">{p.amount}</div>
                    <div className="prize-title">{p.title}</div>
                    <div className="prize-sub">{p.subtitle}</div>
                    <p className="prize-desc">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* MODAL: GUIDELINES & PROTOCOLS */}
        {modalId === 'guidelines' && (
          <>
            <div className="hud-dialog-header">
              <div className="hud-dialog-title">
                <span className="hud-pulse-radar" />
                <h2>RULES OF ENGAGEMENT</h2>
                <span className="hud-dialog-tag">ETHICS &amp; TECHNICAL PROTOCOLS</span>
              </div>
              <button className="hud-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="hud-dialog-body">
              <div className="accordion-wrapper">
                {GUIDELINES_DATA.map((item, idx) => {
                  const isOpen = openGuidelineIndex === idx;
                  return (
                    <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                      <div
                        className="accordion-header"
                        onClick={() => setOpenGuidelineIndex(isOpen ? null : idx)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="accordion-title">{item.title}</span>
                        <span className="accordion-arrow">{isOpen ? '▲' : '▼'}</span>
                      </div>
                      {isOpen && (
                        <div className="accordion-body">
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* MODAL: FREQUENTLY ASKED QUESTIONS */}
        {modalId === 'faq' && (
          <>
            <div className="hud-dialog-header">
              <div className="hud-dialog-title">
                <span className="hud-pulse-radar" />
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <span className="hud-dialog-tag">DELEGATE KNOWLEDGE BASE</span>
              </div>
              <button className="hud-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="hud-dialog-body">
              <div className="accordion-wrapper">
                {FAQ_DATA.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                      <div
                        className="accordion-header"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="accordion-title">{item.q}</span>
                        <span className="accordion-arrow">{isOpen ? '▲' : '▼'}</span>
                      </div>
                      {isOpen && (
                        <div className="accordion-body">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* MODAL: CAMPUS TELEMETRY & VENUE */}
        {modalId === 'venue' && (
          <>
            <div className="hud-dialog-header">
              <div className="hud-dialog-title">
                <span className="hud-pulse-radar" />
                <h2>CAMPUS TELEMETRY &amp; VENUE</h2>
                <span className="hud-dialog-tag">SJB INSTITUTE OF TECHNOLOGY</span>
              </div>
              <button className="hud-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="hud-dialog-body">
              <div className="venue-contact-grid">
                <div className="venue-card">
                  <div className="venue-card-badge">CAMPUS LOCATION</div>
                  <h3 className="venue-campus-name">SJB INSTITUTE OF TECHNOLOGY</h3>
                  <p className="venue-address-line">
                    No.67, BGS Health &amp; Education City, Dr. Vishnuvardhan Rd, Kengeri
                  </p>
                  <p className="venue-city-line">Bengaluru, Karnataka 560060, India</p>

                  <div className="venue-features-box">
                    <div className="feature-row">
                      <span className="feat-icon">🏛️</span>
                      <span>Autonomous Institute affiliated with VTU, Belagavi</span>
                    </div>
                    <div className="feature-row">
                      <span className="feat-icon">⭐</span>
                      <span>NAAC A+ Accredited Campus with Advanced Innovation Centers</span>
                    </div>
                    <div className="feature-row">
                      <span className="feat-icon">🚇</span>
                      <span>Kengeri Metro Station (~4 km away, direct shuttle available)</span>
                    </div>
                    <div className="feature-row">
                      <span className="feat-icon">🌐</span>
                      <span>High-Speed Fiber Connectivity &amp; Secured Arena Wi-Fi</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=SJB+Institute+of+Technology+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-full"
                    style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
                  >
                    <span>📍 OPEN CAMPUS IN GOOGLE MAPS</span>
                  </a>
                </div>

                <div className="contact-card">
                  <div className="venue-card-badge">CENTRAL COORDINATING COMMITTEE</div>
                  <h3 className="venue-campus-name">SYMPOSIUM HELPDESK</h3>
                  <div className="contact-roles-grid">
                    <div>
                      <div className="role-block-title">STUDENT CONVENORS</div>
                      <div className="contact-person">
                        <div className="contact-name">Lead Student Coordinator</div>
                        <a href="tel:+91XXXXXXXXXX" className="contact-detail">
                          +91 XXXXX XXXXX
                        </a>
                      </div>
                      <div className="contact-person">
                        <div className="contact-name">Technical Operations Lead</div>
                        <a href="tel:+91XXXXXXXXXX" className="contact-detail">
                          +91 XXXXX XXXXX
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="role-block-title">FACULTY CONVENORS</div>
                      <div className="contact-person">
                        <div className="contact-name">Chief Faculty Convenor</div>
                        <div className="contact-detail">Department of Technical Studies</div>
                      </div>
                      <div className="contact-person">
                        <div className="contact-name">Head of Technical Council</div>
                        <div className="contact-detail">SJB Institute of Technology</div>
                      </div>
                    </div>
                  </div>

                  <div className="official-inquiry-box" style={{ marginTop: '16px' }}>
                    <span>Official Symposium Correspondence:</span>
                    <a href="mailto:example@gmail.com" className="official-email-link">
                      example@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

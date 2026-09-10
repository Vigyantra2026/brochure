'use client';

import React from 'react';

export default function CoordinatorsDesk() {
  return (
    <section id="coordinators" className="info-section">
      <div className="hud-scanline-beam" aria-hidden="true" />
      <div className="info-section-inner">
        <div className="info-section-header">
          <span className="info-badge">✦ 03 // LEADERSHIP DESK ✦</span>
          <h2 className="info-title">EVENT COORDINATORS</h2>
          <div className="info-subtitle">Symposium Convenors, Arena Leads &amp; Technical Council</div>
        </div>

        {/* Faculty Coordinators */}
        <div className="coordinators-group">
          <h3 className="coordinators-group-title">FACULTY CONVENORS &amp; ADVISORS</h3>
          <div className="coordinators-grid">
            <div className="coordinator-card">
              <div className="coord-avatar-placeholder">FC</div>
              <div className="coord-info">
                <div className="coord-name">Prof. Chief Faculty Convenor</div>
                <div className="coord-role">General Symposium Oversight</div>
                <div className="coord-dept">SJB Institute of Technology</div>
                <div className="coord-contact">
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="coordinator-card">
              <div className="coord-avatar-placeholder">FC</div>
              <div className="coord-info">
                <div className="coord-name">Prof. Technical Arena Convenor</div>
                <div className="coord-role">Arenas &amp; Evaluation Chair</div>
                <div className="coord-dept">Technical Advisory Council</div>
                <div className="coord-contact">
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Coordinators */}
        <div className="coordinators-group" style={{ marginTop: '28px' }}>
          <h3 className="coordinators-group-title">STUDENT CORE CONVENORS</h3>
          <div className="coordinators-grid">
            <div className="coordinator-card">
              <div className="coord-avatar-placeholder student">SC</div>
              <div className="coord-info">
                <div className="coord-name">Student Lead Coordinator</div>
                <div className="coord-role">Symposium Logistics &amp; Operations</div>
                <div className="coord-dept">Student Council Lead</div>
                <div className="coord-contact">
                  <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
                </div>
              </div>
            </div>
            <div className="coordinator-card">
              <div className="coord-avatar-placeholder student">SC</div>
              <div className="coord-info">
                <div className="coord-name">Technical Operations Lead</div>
                <div className="coord-role">Hackathons &amp; Laboratory Infrastructure</div>
                <div className="coord-dept">Arena Technical Desk</div>
                <div className="coord-contact">
                  <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="coordinator-note" style={{ marginTop: '20px' }}>
          * Specific individual arena faculty and student coordinator contacts are detailed inside each arena&apos;s <strong>Event Dossier</strong>.
        </p>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

export default function ContactTerminal() {
  return (
    <section id="contact" className="info-section">
      <div className="hud-scanline-beam" aria-hidden="true" />
      <div className="info-section-inner">
        <div className="info-section-header">
          <span className="info-badge gold">✦ 06 // OFFICIAL DESK ✦</span>
          <h2 className="info-title">CONTACT VIGYANTRA</h2>
          <div className="info-subtitle">Official Inquiries, Delegations &amp; Helpdesk</div>
        </div>

        <div className="contact-channels-grid">
          <div className="contact-channel-card">
            <div className="channel-icon">✉️</div>
            <div className="channel-title">OFFICIAL CORRESPONDENCE</div>
            <div className="channel-val">
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            <div className="channel-sub">Direct queries to the Central Symposium Committee</div>
          </div>

          <div className="contact-channel-card">
            <div className="channel-icon">📞</div>
            <div className="channel-title">CENTRAL HELPDESK</div>
            <div className="channel-val">
              <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
            </div>
            <div className="channel-sub">Operating Hours: 09:00 AM - 05:00 PM IST</div>
          </div>

          <div className="contact-channel-card">
            <div className="channel-icon">🌐</div>
            <div className="channel-title">COMMUNICATION CHANNELS</div>
            <div className="channel-val">Instagram • LinkedIn • YouTube</div>
            <div className="channel-sub">Official symposium media announcements</div>
          </div>
        </div>
      </div>
    </section>
  );
}

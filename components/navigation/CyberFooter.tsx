'use client';

import React from 'react';

interface CyberFooterProps {
  onOpenModal: (modalId: string) => void;
}

export default function CyberFooter({ onOpenModal }: CyberFooterProps) {
  return (
    <footer className="cyber-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="footer-badge">SJBIT • 25 YEARS</div>
          <div className="footer-title">VIGYANTRA 2026</div>
          <div className="footer-theme">“Ideas Today Solutions Tomorrow”</div>
          <div className="footer-desc">
            SJB Institute of Technology — 25th Silver Jubilee National Technical Symposium.<br />
            Sri Adichunchanagiri Shikshana Trust®
          </div>
        </div>

        <div className="footer-links-col">
          <div className="footer-col-title">QUICK ACCESS</div>
          <ul className="footer-links-list">
            <li><a href="#about">About Symposium</a></li>
            <li><a href="#legacy">SJBIT Legacy</a></li>
            <li><a href="#coordinators">Coordinators</a></li>
            <li><a href="#campus">Visit SJBIT</a></li>
            <li><a href="#directions">Location Telemetry</a></li>
            <li><a href="#contact">Contact Desk</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <div className="footer-col-title">HUD INTERFACES</div>
          <ul className="footer-links-list">
            <li>
              <button
                onClick={() => onOpenModal('events')}
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                08 Flagship Arenas
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenModal('schedule')}
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                Symposium Timeline
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenModal('prizes')}
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                ₹4,00,000 Prizes
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenModal('registration')}
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                Cadet Registration
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenModal('brochure')}
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                Digital Brochure
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-copy">
          © 2026 VIGYANTRA • SJB Institute of Technology. All Rights Reserved.
        </div>
        <div className="footer-status">
          <span className="hud-status-dot green" /> SYS.CORE: ONLINE // 30 OCTOBER 2026
        </div>
      </div>
    </footer>
  );
}

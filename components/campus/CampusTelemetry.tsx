'use client';

import React from 'react';

interface CampusTelemetryProps {
  onOpenVenueModal: () => void;
}

export default function CampusTelemetry({ onOpenVenueModal }: CampusTelemetryProps) {
  return (
    <>
      {/* 4. CAMPUS / VISIT SJBIT */}
      <section id="campus" className="info-section">
        <div className="hud-scanline-beam" aria-hidden="true" />
        <div className="info-section-inner">
          <div className="info-section-header">
            <span className="info-badge gold">✦ 04 // ON-SITE INFORMATION ✦</span>
            <h2 className="info-title">VISIT SJBIT</h2>
            <div className="info-subtitle">Campus Amenities, Technical Facilities &amp; Arrival Protocol</div>
          </div>

          <div className="campus-blocks-grid">
            <div className="campus-block">
              <div className="campus-block-icon">🏛️</div>
              <h4 className="campus-block-title">CAMPUS VENUE</h4>
              <p className="campus-block-desc">
                SJB Institute of Technology<br />
                No.67, BGS Health &amp; Education City, Dr. Vishnuvardhan Rd, Kengeri, Bengaluru, Karnataka 560060
              </p>
            </div>

            <div className="campus-block">
              <div className="campus-block-icon">🚇</div>
              <h4 className="campus-block-title">TRANSIT &amp; CONNECTIVITY</h4>
              <p className="campus-block-desc">
                Kengeri Metro Station (Purple Line) is situated ~4 km from the campus. City transit buses and symposium campus shuttles operate regularly along Dr. Vishnuvardhan Road.
              </p>
            </div>

            <div className="campus-block">
              <div className="campus-block-icon">⚡</div>
              <h4 className="campus-block-title">LABORATORIES &amp; WI-FI</h4>
              <p className="campus-block-desc">
                Dedicated high-performance workstations, cloud instances, and secured Wi-Fi credentials will be provisioned to verified cadet teams at registration check-in.
              </p>
            </div>

            <div className="campus-block">
              <div className="campus-block-icon">🎫</div>
              <h4 className="campus-block-title">CHECK-IN DESK</h4>
              <p className="campus-block-desc">
                Delegate credential check-in commences at 08:30 AM at the Main Reception Deck. Valid collegiate photo identification is mandatory for all participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECTIONS / MAP */}
      <section id="directions" className="info-section">
        <div className="hud-scanline-beam" aria-hidden="true" />
        <div className="info-section-inner">
          <div className="info-section-header">
            <span className="info-badge">✦ 05 // LOCATION TELEMETRY ✦</span>
            <h2 className="info-title">CAMPUS TELEMETRY &amp; DIRECTIONS</h2>
            <div className="info-subtitle">Navigate to SJBIT, Bengaluru</div>
          </div>

          <div className="telemetry-banner-card">
            <div className="telemetry-banner-content">
              <div className="telemetry-coords">COORDINATES: 12.9056° N, 77.4984° E &nbsp;|&nbsp; BENGALURU</div>
              <h3 className="telemetry-inst-name">SJB INSTITUTE OF TECHNOLOGY</h3>
              <p className="telemetry-address">
                No.67, BGS Health &amp; Education City, Dr. Vishnuvardhan Rd, Kengeri, Bengaluru 560060
              </p>

              <div className="telemetry-actions">
                <a
                  href="https://maps.google.com/?q=SJB+Institute+of+Technology+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>📍 OPEN IN GOOGLE MAPS</span>
                </a>
                <button className="btn btn-secondary" onClick={onOpenVenueModal}>
                  <span>VIEW COMPLETE VENUE DOSSIER →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

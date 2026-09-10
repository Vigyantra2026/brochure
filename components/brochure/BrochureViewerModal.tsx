'use client';

import React, { useState } from 'react';
import { BROCHURE_PAGES } from '@/data/brochure';

interface BrochureViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegistration: () => void;
}

export default function BrochureViewerModal({
  isOpen,
  onClose,
  onOpenRegistration
}: BrochureViewerModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = BROCHURE_PAGES.length;
  const currentData = BROCHURE_PAGES.find((p) => p.page === currentPage) || BROCHURE_PAGES[0];

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'active' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container brochure-modal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close brochure modal">
          ✕
        </button>

        <div className="brochure-viewer-deck">
          {/* Flip Page Card */}
          <div className="brochure-page-card">
            <div
              dangerouslySetInnerHTML={{ __html: currentData.content }}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest('button')) {
                  onClose();
                  onOpenRegistration();
                }
              }}
            />
          </div>

          {/* Brochure Controls Deck */}
          <div className="brochure-controls-deck">
            <button
              className="btn btn-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={handlePrev}
            >
              ← PREVIOUS
            </button>

            <div className="brochure-page-indicator">
              <span>PAGE {currentPage} OF {totalPages}</span>
              <div className="brochure-dots-wrap">
                {BROCHURE_PAGES.map((p) => (
                  <span
                    key={p.page}
                    className={`brochure-dot ${p.page === currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(p.page)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>

            <div className="brochure-right-actions">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => window.print()}
                title="Print this page or full brochure"
              >
                <span>🖨️ PRINT DOSSIER</span>
              </button>
              <button
                className="btn btn-primary btn-sm"
                disabled={currentPage === totalPages}
                onClick={handleNext}
              >
                <span>NEXT PAGE →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

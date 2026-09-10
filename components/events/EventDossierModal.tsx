'use client';

import React from 'react';
import { EventArena } from '@/data/events';

interface EventDossierModalProps {
  event: EventArena | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export default function EventDossierModal({
  event,
  isOpen,
  onClose,
  onRegister
}: EventDossierModalProps) {
  if (!isOpen || !event) return null;

  const imgSrc = event.image.startsWith('/') ? event.image : `/${event.image}`;

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'active' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container event-detail-container">
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close event modal"
        >
          ✕
        </button>

        <div className="event-modal-content">
          {/* Header Banner */}
          <div
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '20px',
              border: '1px solid var(--cyan-border)',
              height: '180px',
            }}
          >
            <img
              src={imgSrc}
              alt={event.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(3,7,18,0.3) 0%, rgba(3,7,18,0.92) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    color: 'var(--cyan)',
                    background: 'rgba(0,240,255,0.15)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  ARENA {event.number || event.id}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--gold)',
                    fontWeight: 700,
                  }}
                >
                  {event.categoryLabel || event.category}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                {event.name}
              </h2>
              <div style={{ fontSize: '0.85rem', color: 'var(--silver-300)' }}>
                {event.subName}
              </div>
            </div>
          </div>

          {/* Key Parameters Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--silver-400)' }}>PRIZE ALLOCATION</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--gold)', marginTop: '2px' }}>
                {event.prizePool || '₹50,000'}
              </div>
            </div>
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--silver-400)' }}>SQUAD CAPACITY</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--cyan)', marginTop: '2px' }}>
                {event.teamSize || `${event.minTeam} - ${event.maxTeam} Cadets`}
              </div>
            </div>
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--silver-400)' }}>REGISTRATION FEE</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                {event.registrationFee || `₹${event.fee} / Team`}
              </div>
            </div>
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--silver-400)' }}>TARGET TIMELINE</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                {event.date || '30 OCT 2026'}
              </div>
            </div>
          </div>

          {/* Description Block */}
          <div style={{ marginBottom: '20px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                color: 'var(--cyan)',
                marginBottom: '8px',
                letterSpacing: '0.08em',
              }}
            >
              // OPERATIONAL BRIEF
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--silver-200)',
                lineHeight: 1.7,
              }}
            >
              {event.description || event.shortDescription}
            </p>
          </div>

          {/* Tasks & Rules */}
          {event.tasks && event.tasks.length > 0 && (
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '8px',
                padding: '18px',
                border: '1px solid var(--border-subtle)',
                marginBottom: '20px',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  color: 'var(--gold)',
                  marginBottom: '10px',
                }}
              >
                ARENA FORMAT &amp; PHASES
              </h4>
              <ul
                style={{
                  paddingLeft: '18px',
                  fontSize: '0.82rem',
                  color: 'var(--silver-300)',
                  lineHeight: 1.7,
                }}
              >
                {event.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Coordinator Contacts Box */}
          <div
            style={{
              marginTop: '20px',
              background: 'rgba(0,240,255,0.04)',
              border: '1px solid var(--cyan-border)',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--cyan)',
                marginBottom: '6px',
              }}
            >
              ARENA CONVENORS &amp; DESK
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                fontSize: '0.82rem',
                color: 'var(--silver-300)',
              }}
            >
              <div>
                <strong>Faculty Lead:</strong> {event.facultyCoordinator} ({event.contactPhone})
              </div>
              <div>
                <strong>Student Lead:</strong> {event.studentCoordinator} ({event.contactPhone})
              </div>
            </div>
            {event.contactEmail && (
              <div
                style={{
                  marginTop: '8px',
                  fontSize: '0.78rem',
                  color: 'var(--silver-400)',
                }}
              >
                <strong>Official Desk Email:</strong> {event.contactEmail}
              </div>
            )}
          </div>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '14px',
              marginTop: '28px',
              paddingTop: '18px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <button className="btn btn-secondary" onClick={onClose}>
              CLOSE INTEL
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onRegister(event.id);
              }}
            >
              <span>INITIALIZE SQUAD ENROLLMENT ⚡</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

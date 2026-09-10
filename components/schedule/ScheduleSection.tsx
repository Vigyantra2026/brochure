'use client';

import React, { useState } from 'react';
import { SCHEDULE_DATA } from '@/data/schedule';
import { V2Badge, V2Eyebrow } from '@/components/ui/v2';

export default function ScheduleSection() {
  const [activeDayKey, setActiveDayKey] = useState<'day1' | 'day2'>('day1');
  const activeDay = SCHEDULE_DATA[activeDayKey];

  return (
    <section
      id="schedule"
      className="v2-schedule-section"
      aria-label="Symposium Schedule and Timeline"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#08090C',
        padding: 'clamp(56px, 8vh, 88px) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="v2-container">
        {/* Editorial Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto clamp(32px, 5vh, 48px)' }}>
          <V2Eyebrow accent="gold">SYMPOSIUM CHRONOLOGY // 30 &amp; 31 OCTOBER 2026</V2Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              fontWeight: 700,
              color: 'var(--v2-text-primary)',
              letterSpacing: '0.03em',
              marginTop: '10px',
            }}
          >
            SCHEDULE OF ENGAGEMENT
          </h2>
          <p
            style={{
              fontFamily: 'var(--v2-font-body)',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              color: 'var(--v2-text-secondary)',
              lineHeight: 1.6,
              marginTop: '10px',
            }}
          >
            Two intensive days uniting 8 competitive arenas, national keynotes, live technical demonstrations, and the ₹4,00,000 grand awards gala.
          </p>

          {/* Explicit Placeholder Notice Tag */}
          <div style={{ marginTop: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--v2-font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                color: 'var(--v2-gold)',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                padding: '4px 12px',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              ⚠ {SCHEDULE_DATA.statusNotice}
            </span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: 'clamp(28px, 4vh, 40px)',
          }}
          role="tablist"
          aria-label="Select symposium day"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeDayKey === 'day1'}
            onClick={() => setActiveDayKey('day1')}
            style={{
              fontFamily: 'var(--v2-font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              padding: '10px 22px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeDayKey === 'day1' ? '1px solid var(--v2-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: activeDayKey === 'day1' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(14, 16, 21, 0.7)',
              color: activeDayKey === 'day1' ? 'var(--v2-gold)' : 'var(--v2-text-secondary)',
            }}
          >
            DAY 01 // 30 OCT (LAUNCH &amp; ARENAS)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeDayKey === 'day2'}
            onClick={() => setActiveDayKey('day2')}
            style={{
              fontFamily: 'var(--v2-font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              padding: '10px 22px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeDayKey === 'day2' ? '1px solid var(--v2-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: activeDayKey === 'day2' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(14, 16, 21, 0.7)',
              color: activeDayKey === 'day2' ? 'var(--v2-gold)' : 'var(--v2-text-secondary)',
            }}
          >
            DAY 02 // 31 OCT (FINALS &amp; AWARDS)
          </button>
        </div>

        {/* Editorial Vertical Timeline */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingLeft: 'clamp(24px, 4vw, 40px)', borderLeft: '1px solid rgba(212, 175, 55, 0.25)' }}>
            {activeDay.events.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  marginBottom: idx === activeDay.events.length - 1 ? 0 : 'clamp(24px, 3vh, 32px)',
                }}
              >
                {/* Milestone Node Marker on the left axis */}
                <span
                  style={{
                    position: 'absolute',
                    left: 'calc(-1 * clamp(24px, 4vw, 40px) - 5px)',
                    top: '6px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--v2-gold)',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                  }}
                  aria-hidden="true"
                />

                {/* Timeline Card */}
                <div
                  style={{
                    backgroundColor: 'rgba(14, 16, 21, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '8px',
                    padding: 'clamp(16px, 2vw, 22px)',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                >
                  {/* Top Bar: Time Pill + Tag */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--v2-gold)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      ⏱ {item.time}
                    </span>
                    <V2Badge variant={item.tag === 'COMPETITION' || item.tag === 'AWARDS' ? 'crimson' : 'steel'}>
                      {item.tag}
                    </V2Badge>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--v2-font-heading)',
                      fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                      fontWeight: 600,
                      color: 'var(--v2-text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--v2-font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--v2-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Venue */}
                  <div
                    style={{
                      fontFamily: 'var(--v2-font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--v2-text-tertiary)',
                      letterSpacing: '0.06em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>📍</span>
                    <span>{item.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

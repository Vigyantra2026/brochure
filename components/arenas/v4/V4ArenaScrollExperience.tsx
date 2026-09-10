'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ARENAS_V4, ArenaV4Data } from '@/data/arenas';
import { EventArena } from '@/data/events';
import V4ArenaCard from './V4ArenaCard';
import { V2Badge } from '@/components/ui/v2';
import { ScrollTrigger } from '@/lib/gsap';

interface V4ArenaScrollExperienceProps {
  onSelectEvent?: (event: EventArena) => void;
  onRegisterEvent?: (eventId: string) => void;
  onOpenModal?: (modalId: string) => void;
}

export default function V4ArenaScrollExperience({
  onSelectEvent,
  onRegisterEvent,
  onOpenModal,
}: V4ArenaScrollExperienceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Dedicated GSAP ScrollTrigger pinning engine
  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !viewportRef.current) return;

    let triggerInstance: ScrollTrigger | null = null;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !viewportRef.current) return;

      triggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2600', // Exact scroll distance for the entire journey
        pin: viewportRef.current,
        pinSpacing: true,
        scrub: 0.25,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(Math.max(0, Math.min(1, self.progress)));
        },
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      if (triggerInstance) {
        triggerInstance.kill();
      }
    };
  }, [prefersReducedMotion]);

  // =========================================================================
  // TIMELINE SEGMENTATION:
  // 0.00 -> 0.10: INTRO
  // 0.10 -> 0.90: 8 ARENAS (0.10 each: 0.08 focus + 0.02 vertical transition)
  // 0.90 -> 1.00: FINAL OVERVIEW
  // 1.00: PIN RELEASES IMMEDIATELY INTO NEXT SECTION
  // =========================================================================
  const isIntroPhase = progress < 0.10;
  const isOverviewPhase = progress >= 0.90;

  const introOpacity = useMemo(() => {
    if (progress <= 0.04) return 1;
    if (progress >= 0.10) return 0;
    return 1 - (progress - 0.04) / 0.06;
  }, [progress]);

  const overviewOpacity = useMemo(() => {
    if (progress < 0.89) return 0;
    if (progress >= 0.93) return 1;
    return (progress - 0.89) / 0.04;
  }, [progress]);

  // Active arena index for progress indicator
  const activeArenaIndex = useMemo(() => {
    if (progress < 0.10) return 0;
    if (progress >= 0.90) return 7;
    const idx = Math.floor((progress - 0.10) / 0.10);
    return Math.max(0, Math.min(7, idx));
  }, [progress]);

  // Render the current active arena and any transition pair cleanly (NO multi-card overlap)
  const renderActiveArenaStage = () => {
    if (progress < 0.08 || progress >= 0.92) {
      return null;
    }

    const cardsToRender: React.ReactNode[] = [];

    ARENAS_V4.forEach((arena, index) => {
      const slotStart = 0.10 + index * 0.10;
      const slotEnd = slotStart + 0.10;
      const transitionStart = slotStart + 0.08; // 8% steady focus, 2% transition

      // 1. Card is entering from below (from previous arena)
      if (index > 0 && progress >= slotStart - 0.02 && progress < slotStart) {
        const t = (progress - (slotStart - 0.02)) / 0.02; // 0 -> 1
        const translateY = (1 - t) * 32;
        const scale = 0.92 + t * 0.08;
        cardsToRender.push(
          <div
            key={arena.id}
            className="v4-focal-card-box entering"
            style={{
              transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
              opacity: t,
              pointerEvents: t > 0.6 ? 'auto' : 'none',
              zIndex: 10,
            }}
          >
            <V4ArenaCard
              arena={arena}
              onSelectEvent={onSelectEvent}
              onRegisterEvent={onRegisterEvent}
            />
          </div>
        );
      }

      // 2. Card is in steady focus
      else if (progress >= slotStart && progress < transitionStart) {
        cardsToRender.push(
          <div
            key={arena.id}
            className="v4-focal-card-box focused"
            style={{
              transform: 'translate(-50%, -50%) scale(1.0)',
              opacity: 1,
              pointerEvents: 'auto',
              zIndex: 12,
            }}
          >
            <V4ArenaCard
              arena={arena}
              onSelectEvent={onSelectEvent}
              onRegisterEvent={onRegisterEvent}
            />
          </div>
        );
      }

      // 3. Card is transitioning out to the next arena
      else if (progress >= transitionStart && progress < slotEnd) {
        const t = (progress - transitionStart) / 0.02; // 0 -> 1
        const translateY = -t * 32;
        const scale = 1.0 - t * 0.08;
        cardsToRender.push(
          <div
            key={arena.id}
            className="v4-focal-card-box exiting"
            style={{
              transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
              opacity: Math.max(0, 1.0 - t * 0.95),
              pointerEvents: 'none',
              zIndex: 8,
            }}
          >
            <V4ArenaCard
              arena={arena}
              onSelectEvent={onSelectEvent}
              onRegisterEvent={onRegisterEvent}
            />
          </div>
        );
      }
    });

    return cardsToRender;
  };

  return (
    <div
      ref={sectionRef}
      className="v4-arenas-scroll-engine"
      aria-label="The 8 Flagship Arenas — Scroll Journey"
    >
      {/* THE SINGLE PINNED VIEWPORT (100vh) */}
      <div ref={viewportRef} className="v4-pinned-viewport">
        {/* Subtle Background Architectural Grid & Radial Glow */}
        <div className="v4-pinned-bg-grid" aria-hidden="true" />
        <div className="v4-pinned-radial-glow" aria-hidden="true" />

        {/* Subtle Non-Clickable Floating Status Indicator (Visible ONLY during active arena scrolling) */}
        {progress >= 0.10 && progress < 0.90 && (
          <div className="v4-subtle-indicator-pill" aria-hidden="true">
            <span className="v4-sind-gold">ARENA 0{activeArenaIndex + 1} / 08</span>
            <span className="v4-sind-sep">•</span>
            <span className="v4-sind-code">{ARENAS_V4[activeArenaIndex]?.code}</span>
          </div>
        )}

        {/* CENTER STAGE FILM FRAME */}
        <div className="v4-pinned-stage-center">
          {/* SCREEN 1: INTRO (0.00 -> 0.10) */}
          {progress < 0.12 && (
            <div
              className="v4-stage-screen v4-intro-screen"
              style={{
                opacity: introOpacity,
                transform: `translateY(-${(1 - introOpacity) * 24}px)`,
                pointerEvents: isIntroPhase ? 'auto' : 'none',
              }}
            >
              <div className="v4-intro-tag">
                <V2Badge variant="gold">VIGYANTRA 2026 // FLAGSHIP ARENAS</V2Badge>
              </div>
              <h2 className="v4-intro-title">THE 8 ARENAS</h2>
              <div className="v4-intro-subtitle">BUILT FOR THE NEXT GENERATION OF ENGINEERS</div>
              <div className="v4-intro-meta-row">
                <span>8 DISCIPLINES</span>
                <span className="v4-intro-dot">•</span>
                <span className="v4-intro-gold">₹ 4,00,000 PRIZE POOL</span>
                <span className="v4-intro-dot">•</span>
                <span>30 OCTOBER 2026</span>
              </div>
              <div className="v4-intro-scroll-cue">
                <span>SCROLL DOWN TO EXPLORE ARENA 01 → 08</span>
                <span className="v4-cue-arrow">↓</span>
              </div>
            </div>
          )}

          {/* SCREEN 2: ACTIVE FOCAL ARENA (0.10 -> 0.90) */}
          {progress >= 0.08 && progress < 0.92 && (
            <div className="v4-stage-screen v4-arena-focal-screen">
              {/* Subtle background telemetry */}
              <div className="v4-focal-backdrop-cue" aria-hidden="true">
                <span className="v4-backdrop-sys">
                  VIGYANTRA // ARENA 0{activeArenaIndex + 1} OF 08 // {ARENAS_V4[activeArenaIndex]?.name.toUpperCase()}
                </span>
              </div>

              {/* Focal card container */}
              <div className="v4-focal-card-container">
                {renderActiveArenaStage()}
              </div>
            </div>
          )}

          {/* SCREEN 3: FINAL 8-ARENA OVERVIEW (0.90 -> 1.00) */}
          {progress >= 0.88 && (
            <div
              className="v4-stage-screen v4-overview-screen"
              style={{
                opacity: overviewOpacity,
                transform: `translateY(${(1 - overviewOpacity) * 20}px)`,
                pointerEvents: isOverviewPhase ? 'auto' : 'none',
              }}
            >
              <div className="v4-ov-header">
                <span className="v4-ov-tag">✦ 08 ARENAS COMPLETE ✦</span>
                <h3 className="v4-ov-title">THE 8 FLAGSHIP ARENAS</h3>
                <div className="v4-ov-prizes">
                  <div className="v4-ov-pill">
                    <span className="v4-ov-lbl">TOTAL PRIZE POOL</span>
                    <span className="v4-ov-val">₹ 4,00,000</span>
                  </div>
                  <div className="v4-ov-pill">
                    <span className="v4-ov-lbl">PER ARENA</span>
                    <span className="v4-ov-val gold">₹ 50,000</span>
                  </div>
                  <div className="v4-ov-pill">
                    <span className="v4-ov-lbl">VENUE</span>
                    <span className="v4-ov-val">SJBIT • BENGALURU</span>
                  </div>
                </div>
              </div>

              {/* 8 Arenas Matrix Grid */}
              <div className="v4-ov-grid">
                {ARENAS_V4.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    className="v4-ov-card-btn"
                    onClick={() => onSelectEvent?.(a.rawEvent)}
                  >
                    <div className="v4-ov-top">
                      <span className="v4-ov-num">{a.number}</span>
                      <span className="v4-ov-code">{a.code}</span>
                    </div>
                    <span className="v4-ov-name">{a.name}</span>
                    <span className="v4-ov-link">EXPLORE DOSSIER →</span>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="v4-ov-actions">
                <button
                  type="button"
                  className="v4-ov-btn-reg"
                  onClick={() => onOpenModal?.('registration')}
                >
                  <span>REGISTER FOR AN ARENA ⚡</span>
                </button>
                <button
                  type="button"
                  className="v4-ov-btn-doc"
                  onClick={() => onOpenModal?.('brochure')}
                >
                  <span>DOWNLOAD BROCHURE ↗</span>
                </button>
              </div>

              {/* Release Scroll Prompt */}
              <div className="v4-ov-release-prompt">
                <span>CONTINUE SCROLLING FOR SJBIT 25 YRS LEGACY & SCHEDULE</span>
                <span className="v4-ov-arrow">↓</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

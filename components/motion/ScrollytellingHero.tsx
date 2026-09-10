'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

interface ScrollytellingHeroProps {
  onScrollToCommandDeck?: () => void;
}

const TOTAL_FRAMES = 120;

export default function ScrollytellingHero({ onScrollToCommandDeck }: ScrollytellingHeroProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Render a specific frame with Retina DPR and object-fit: cover
    const renderFrame = (index: number) => {
      const img = framesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvasW = canvas.width / dpr;
      const canvasH = canvas.height / dpr;

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvasW / canvasH;

      let drawW: number;
      let drawH: number;
      let offsetX: number;
      let offsetY: number;

      if (canvasRatio > imgRatio) {
        drawW = canvasW;
        drawH = canvasW / imgRatio;
        offsetX = 0;
        offsetY = (canvasH - drawH) / 2;
      } else {
        drawW = canvasH * imgRatio;
        drawH = canvasH;
        offsetX = (canvasW - drawW) / 2;
        offsetY = 0;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvasW, canvasH);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      ctx.restore();
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      renderFrame(currentFrame);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Preload 120 WebP video frames
    let loaded = 0;
    const frames: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const padded = i.toString().padStart(4, '0');
      img.src = `/assets/frames/frame_${padded}.webp`;

      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsReady(true);
          renderFrame(0);
        }
      };

      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsReady(true);
          renderFrame(0);
        }
      };

      frames.push(img);
    }
    framesRef.current = frames;

    // Set up GSAP ScrollTrigger pinning and scrubbing
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=2400px',
      pin: true,
      scrub: 0.4,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const targetIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

        setCurrentFrame(targetIndex);
        setProgressPercent(Math.round(progress * 100));
        renderFrame(targetIndex);

        // Update active milestone phase based on progress
        if (progress >= 0.75) {
          setActivePhase(3);
        } else if (progress >= 0.5) {
          setActivePhase(2);
        } else if (progress >= 0.25) {
          setActivePhase(1);
        } else {
          setActivePhase(0);
        }
      },
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      trigger.kill();
    };
  }, []);

  const handleSkip = () => {
    if (onScrollToCommandDeck) {
      onScrollToCommandDeck();
    } else {
      const target = document.getElementById('command-deck') || document.getElementById('about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const bufferPct = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

  return (
    <section
      ref={containerRef}
      id="scrolly-hero"
      className="scrolly-section"
      aria-label="3D Quantum Core Scrollytelling Experience"
    >
      {/* HTML5 Scrollytelling Canvas Engine */}
      <canvas ref={canvasRef} id="scrolly-canvas" aria-hidden="true" />

      {/* Scanline & Vignette Shaders */}
      <div className="scrolly-vignette-overlay" aria-hidden="true" />
      <div className="scrolly-scanline-overlay" aria-hidden="true" />

      {/* Themed Preloader Badge */}
      {!isReady && (
        <div id="scrolly-loader" className="scrolly-loader-badge" role="status" aria-live="polite">
          <div className="loader-spinner" />
          <div id="scrolly-loader-text" className="loader-label">
            VIGYANTRA.CORE: INITIATING [{bufferPct}%]
          </div>
          <div className="loader-track">
            <div id="scrolly-loader-fill" className="loader-fill" style={{ width: `${bufferPct}%` }} />
          </div>
          <div className="loader-sub">BUFFERING 120 QUANTUM RENDER SLICES // 60 FPS</div>
        </div>
      )}

      {/* Fixed Interactive HUD Telemetry Overlay */}
      <div className="scrolly-hud-overlay" aria-hidden="true">
        {/* Top HUD Header & Geographic Coordinates */}
        <div className="scrolly-hud-top">
          <div className="hud-top-col">
            <div className="hud-top-title">
              <span className="hud-pulse-dot" />
              // SJBIT VIGYANTRA 2026 // 25TH SILVER JUBILEE
            </div>
            <div className="hud-top-sub">NATIONAL TECHNICAL SYMPOSIUM • ISE DEPARTMENT</div>
          </div>

          <div className="hud-top-right">
            <div className="hud-top-geo">
              <div className="geo-coord">GEO.POS: 12.9056° N, 77.4984° E</div>
              <div className="geo-city">[BENGALURU, INDIA]</div>
            </div>
            <button
              className="hud-skip-btn"
              onClick={handleSkip}
              aria-label="Skip to Command Deck"
              style={{ pointerEvents: 'auto' }}
            >
              SKIP FLIGHT INTRO ↓
            </button>
          </div>
        </div>

        {/* Center Dynamic Storytelling Milestone Cards (Updated by ScrollTrigger) */}
        <div className="scrolly-hud-center">
          {/* Phase 1: 0% - 25% (Approach) */}
          <div className={`hud-milestone-panel ${activePhase === 0 ? 'active' : ''}`}>
            <div className="hud-stage-badge">APPROACH VECTOR // ACTIVE</div>
            <h2 className="hud-headline">
              IDEAS TODAY,<br />
              <span className="gradient-text">SOLUTIONS TOMORROW</span>
            </h2>
            <p className="hud-desc">
              Scroll to scrub flight trajectory through the cybernetic quantum nexus.
            </p>
            <div className="hud-scroll-prompt">
              <span className="hud-arrow-pulse">▼</span> SCROLL TO INITIATE DESCENT
            </div>
          </div>

          {/* Phase 2: 25% - 50% (Milestone & Legacy) */}
          <div className={`hud-milestone-panel ${activePhase === 1 ? 'active' : ''}`}>
            <div className="hud-stage-badge gold">SECTOR 01: 25 YEARS OF EXCELLENCE</div>
            <h2 className="hud-headline">A LEGACY OF DISTINCTION</h2>
            <p className="hud-desc">
              SJB Institute of Technology celebrates 25 years of engineering leadership.
            </p>
            <div className="hud-tags-row">
              <span className="hud-pill">NAAC A+ GRADE</span>
              <span className="hud-pill">NBA ACCREDITED</span>
              <span className="hud-pill">VTU AUTONOMOUS</span>
            </div>
          </div>

          {/* Phase 3: 50% - 75% (Target Acquired: 8 Arenas) */}
          <div className={`hud-milestone-panel ${activePhase === 2 ? 'active' : ''}`}>
            <div className="hud-stage-badge">SECTOR 02: 8 FLAGSHIP ARENAS</div>
            <h2 className="hud-headline">
              ₹4,00,000 <span className="gradient-text">PRIZE POOL</span>
            </h2>
            <p className="hud-desc">
              AI Prompt Battle, Code Relay, Hack &amp; Hunt, App Dev, ZeroCrypt, RoboInnovate &amp; more.
            </p>
            <div className="hud-tags-row">
              <span className="hud-pill gold">₹50,000 / ARENA</span>
              <span className="hud-pill">1,500+ CADETS</span>
              <span className="hud-pill">OCTOBER 30, 2026</span>
            </div>
          </div>

          {/* Phase 4: 75% - 100% (Arrival at Command Deck) */}
          <div className={`hud-milestone-panel ${activePhase === 3 ? 'active' : ''}`}>
            <div className="hud-stage-badge green">TARGET ACQUIRED // DOCKING READY</div>
            <h2 className="hud-headline">WELCOME TO VIGYANTRA 2026</h2>
            <p className="hud-desc">
              Hardware initialized. Engage with the central command deck and secure entry pass.
            </p>
            <div style={{ marginTop: '16px', pointerEvents: 'auto' }}>
              <button className="btn btn-primary" onClick={handleSkip}>
                <span>ENTER COMMAND DECK &amp; ARENAS ↓</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom HUD Telemetry / Scrubber State */}
        <div className="scrolly-hud-bottom">
          <div className="hud-frame-counter">
            <span className="text-cyan font-bold">FRAME:</span>{' '}
            <span id="scrolly-frame-val">{currentFrame.toString().padStart(4, '0')}</span> / 0119
          </div>

          <div className="hud-progress-wrap">
            <div className="hud-progress-bar">
              <div
                id="scrolly-progress-fill"
                className="hud-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span id="scrolly-progress-text" className="hud-progress-pct">
              {progressPercent}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

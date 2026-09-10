'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

interface GlyphParticle {
  // Current position
  x: number;
  y: number;
  // Starting scattered position
  startX: number;
  startY: number;
  // Formed 25 position
  glyphX: number;
  glyphY: number;
  // Fragment / VIGYANTRA destination
  destX: number;
  destY: number;
  // Particle attributes
  size: number;
  alpha: number;
  color: string;
  speed: number;
}

interface AmbientSpeck {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export default function V2CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [telemetryText, setTelemetryText] = useState('// VIGYANTRA.CORE: INITIATING');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const handleDismiss = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setDismissed(true);
    if (onComplete) onComplete();
    setTimeout(() => {
      setVisible(false);
    }, 600);
  };

  useEffect(() => {
    // 1. Reduced motion preference check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, 1200);
      return () => clearTimeout(timer);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    // 2. Sample points for the "25" glyph from an off-screen canvas
    const sampleGlyphPoints = (targetCount: number, fontSize: number): { x: number; y: number }[] => {
      const offCanvas = document.createElement('canvas');
      const offW = Math.round(fontSize * 1.5);
      const offH = Math.round(fontSize * 1.3);
      offCanvas.width = offW;
      offCanvas.height = offH;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return [];

      offCtx.fillStyle = '#000000';
      offCtx.fillRect(0, 0, offW, offH);

      offCtx.font = `800 ${fontSize}px 'Plus Jakarta Sans', system-ui, sans-serif`;
      offCtx.fillStyle = '#FFFFFF';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillText('25', offW / 2, offH / 2);

      const imgData = offCtx.getImageData(0, 0, offW, offH);
      const data = imgData.data;
      const whitePixels: { x: number; y: number }[] = [];

      const step = isMobile ? 5 : 4;
      for (let y = 0; y < offH; y += step) {
        for (let x = 0; x < offW; x += step) {
          const idx = (y * offW + x) * 4;
          if (data[idx] > 160) {
            whitePixels.push({
              x: x - offW / 2,
              y: y - offH / 2,
            });
          }
        }
      }

      // Sample evenly to targetCount
      const sampled: { x: number; y: number }[] = [];
      if (whitePixels.length <= targetCount) {
        return whitePixels;
      }
      const stride = whitePixels.length / targetCount;
      for (let i = 0; i < targetCount; i++) {
        const p = whitePixels[Math.floor(i * stride)];
        if (p) sampled.push(p);
      }
      return sampled;
    };

    const fontSize25 = Math.min(width * 0.28, isMobile ? 130 : 210);
    const targetParticleCount = isMobile ? 38 : isTablet ? 55 : 75;
    const glyphCoords = sampleGlyphPoints(targetParticleCount, fontSize25);

    // 3. Initialize Constructive Particles (Gold palette)
    const goldPalette = ['#FFF4D0', '#F3E5AB', '#D4AF37', '#E2BA48', '#AA820A'];
    const cx = width / 2;
    const cy = height / 2;

    const glyphParticles: GlyphParticle[] = glyphCoords.map((coord, i) => {
      // Scatter points start clustered near center with gentle offset
      const angle = (i / glyphCoords.length) * Math.PI * 2 + Math.random() * 0.5;
      const initialRadius = Math.random() * (fontSize25 * 0.7) + 20;
      const startX = cx + Math.cos(angle) * initialRadius;
      const startY = cy + Math.sin(angle) * initialRadius;

      // Final horizontal beam destination (where VIGYANTRA forms)
      const hSpan = Math.min(width * 0.7, 450);
      const destX = cx + ((i / glyphCoords.length) - 0.5) * hSpan + (Math.random() - 0.5) * 20;
      const destY = cy + (Math.random() - 0.5) * 16;

      return {
        x: startX,
        y: startY,
        startX,
        startY,
        glyphX: cx + coord.x,
        glyphY: cy + coord.y - 12,
        destX,
        destY,
        size: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.5 + 0.5,
        color: goldPalette[i % goldPalette.length],
        speed: Math.random() * 0.4 + 0.8,
      };
    });

    // 4. Distant Ambient Specks (Extremely minimal, 10–14 specks, no starfield noise)
    const ambientCount = isMobile ? 8 : 14;
    const ambientSpecks: AmbientSpeck[] = [];
    for (let i = 0; i < ambientCount; i++) {
      ambientSpecks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.2 + 0.1,
      });
    }

    // 5. Animation State Object driven by GSAP
    const anim = {
      // Ambient atmospheric warmth
      ambientGlow: 0,

      // Scene 02: Particle assembly into 25
      assemblyProgress: 0,  // 0 -> 1 (particles converge to 25)
      solid25Alpha: 0,      // 0 -> 1 (metallic gold resolves over particles)
      sheenProgress: 0,     // 0 -> 1 (directional specular highlight sweep)
      label25Alpha: 0,      // 0 -> 1 (Silver Jubilee typography below 25)

      // Scene 03: Fragmentation
      instability: 0,       // 0 -> 1 (edge jitter)
      fragProgress: 0,      // 0 -> 1 (particles peel away to center horizon)

      // Scene 04: VIGYANTRA 2026 Reveal
      vigyantraAlpha: 0,
      vigyantraScale: 0.94,
      yearAlpha: 0,

      // Scene 05: Motto
      mottoAlpha: 0,

      // Scene 06: Final Horizon Expansion & Fade
      expansion: 0,
      masterAlpha: 1,
    };

    // 6. Construct Master GSAP Timeline (Total ~5.4s)
    const tl = gsap.timeline({
      onComplete: () => {
        handleDismiss();
      },
    });
    timelineRef.current = tl;

    // SCENE 01: 0.0s -> 0.8s (Black / Silence / Anticipation)
    tl.to(anim, {
      ambientGlow: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      onStart: () => setTelemetryText('// VIGYANTRA.CORE: INITIATING'),
    });

    // SCENE 02: 0.8s -> 2.1s (Construction of the 25)
    // Step A: Particles converge onto the shape of "25" (0.8s -> 1.4s)
    tl.to(
      anim,
      {
        assemblyProgress: 1,
        duration: 0.7,
        ease: 'power3.out',
        onStart: () => setTelemetryText('// CONSTRUCTING: SILVER_JUBILEE_25'),
      },
      '+=0.0'
    );

    // Step B: Solid metallic gold 25 resolves (1.3s -> 1.8s)
    tl.to(
      anim,
      {
        solid25Alpha: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      '-=0.2'
    );

    // Step C: Specular metallic sheen passes across surface + secondary labels appear (1.6s -> 2.1s)
    tl.to(
      anim,
      {
        sheenProgress: 1,
        label25Alpha: 1,
        duration: 0.5,
        ease: 'power2.out',
        onStart: () => setTelemetryText('// 25 YEARS OF ENGINEERING DISTINCTION'),
      },
      '-=0.2'
    );

    // Rest moment for 25 to breathe (2.1s -> 2.4s)
    tl.to({}, { duration: 0.3 });

    // SCENE 03: 2.4s -> 3.3s (25 Fragments with Purpose into Center Horizon)
    // Step A: Surface destabilizes
    tl.to(
      anim,
      {
        instability: 1,
        solid25Alpha: 0,
        label25Alpha: 0,
        duration: 0.35,
        ease: 'power1.in',
        onStart: () => setTelemetryText('// 25 YEARS → KNOWLEDGE → TECHNOLOGY'),
      },
      '+=0.0'
    );

    // Step B: Particles stream towards horizontal center axis
    tl.to(
      anim,
      {
        fragProgress: 1,
        duration: 0.65,
        ease: 'power3.inOut',
      },
      '-=0.1'
    );

    // SCENE 04: 3.3s -> 4.4s (Particles reorganize into VIGYANTRA 2026)
    tl.to(
      anim,
      {
        vigyantraAlpha: 1,
        vigyantraScale: 1,
        duration: 0.65,
        ease: 'power3.out',
        onStart: () => setTelemetryText('// VIGYANTRA 2026 // NATIONAL SYMPOSIUM'),
      },
      '-=0.15'
    );

    tl.to(
      anim,
      {
        yearAlpha: 1,
        duration: 0.45,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    // SCENE 05: 4.4s -> 5.0s (Motto Reveal with Breathing Room)
    tl.to(
      anim,
      {
        mottoAlpha: 1,
        duration: 0.6,
        ease: 'power2.out',
        onStart: () => setTelemetryText('// PHILOSOPHY: IDEAS TODAY • SOLUTIONS TOMORROW'),
      },
      '+=0.0'
    );

    // SCENE 06: 5.0s -> 5.5s (Expansion into Website Hero)
    tl.to(
      anim,
      {
        expansion: width * 0.85,
        masterAlpha: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        onStart: () => setTelemetryText('// TRANSITIONING TO COMMAND DECK'),
      },
      '+=0.1'
    );

    // 7. High-Performance Canvas Rendering Loop
    const render = () => {
      ctx.fillStyle = '#08090C';
      ctx.fillRect(0, 0, width, height);

      const curCx = width / 2;
      const curCy = height / 2;

      // A. Ambient Radial Illumination (Soft, controlled, non-neon)
      if (anim.ambientGlow > 0 && anim.masterAlpha > 0) {
        const glowRad = Math.min(width, height) * 0.38;
        const grad = ctx.createRadialGradient(curCx, curCy, 0, curCx, curCy, glowRad);
        grad.addColorStop(0, `rgba(186, 30, 56, ${anim.ambientGlow * 0.14 * anim.masterAlpha})`);
        grad.addColorStop(0.55, `rgba(212, 175, 55, ${anim.ambientGlow * 0.08 * anim.masterAlpha})`);
        grad.addColorStop(1, 'rgba(8, 9, 12, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(curCx, curCy, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // B. Distant Ambient Specks (10–14 specks, subtle drift in periphery)
      for (let i = 0; i < ambientSpecks.length; i++) {
        const sp = ambientSpecks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        if (sp.x < 0) sp.x = width;
        if (sp.x > width) sp.x = 0;
        if (sp.y < 0) sp.y = height;
        if (sp.y > height) sp.y = 0;

        ctx.fillStyle = '#D4AF37';
        ctx.globalAlpha = sp.alpha * anim.masterAlpha;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // C. Constructive Glyph Particles (The core matter that builds "25" and transforms)
      const pCount = glyphParticles.length;
      for (let i = 0; i < pCount; i++) {
        const p = glyphParticles[i];

        if (anim.fragProgress > 0) {
          // Fragment phase: Particles peel away from 25 and stream toward horizontal center horizon
          const t = anim.fragProgress;
          const jitterX = (Math.random() - 0.5) * 8 * (1 - t);
          const jitterY = (Math.random() - 0.5) * 8 * (1 - t);
          p.x = p.glyphX + (p.destX - p.glyphX) * t + jitterX;
          p.y = p.glyphY + (p.destY - p.glyphY) * t + jitterY;
        } else if (anim.assemblyProgress > 0) {
          // Assembly phase: Particles converge from start cluster onto glyph coordinates
          const t = anim.assemblyProgress;
          const jitter = (1 - t) * (Math.sin(i * 3 + t * 5) * 4);
          p.x = p.startX + (p.glyphX - p.startX) * t + jitter;
          p.y = p.startY + (p.glyphY - p.startY) * t + jitter;
        } else {
          // Anticipation phase: subtle breathing around starting position
          p.x = p.startX + Math.sin(Date.now() * 0.002 + i) * 1.5;
          p.y = p.startY + Math.cos(Date.now() * 0.002 + i) * 1.5;
        }

        // Particle visibility fades as solid 25 appears, and returns as 25 fragments
        const particleAlpha =
          anim.solid25Alpha > 0.8 && anim.fragProgress === 0
            ? 0.15 * anim.masterAlpha
            : p.alpha * anim.masterAlpha;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = particleAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // D. Solid Metallic Gold "25" (With Directional Specular Sheen & Depth)
      if (anim.solid25Alpha > 0 && anim.masterAlpha > 0) {
        ctx.save();
        ctx.translate(curCx, curCy - 12);

        // Subtly jitter if destabilizing during fragmentation onset
        if (anim.instability > 0) {
          const jX = (Math.random() - 0.5) * 3 * anim.instability;
          const jY = (Math.random() - 0.5) * 3 * anim.instability;
          ctx.translate(jX, jY);
        }

        ctx.globalAlpha = anim.solid25Alpha * anim.masterAlpha;

        // Giant "25" font setup
        ctx.font = `800 ${fontSize25}px 'Plus Jakarta Sans', system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // 1. Subtle soft depth shadow behind metallic face
        ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;

        // 2. Commemorative Metallic Gold Gradient
        const goldGrad = ctx.createLinearGradient(0, -fontSize25 * 0.5, 0, fontSize25 * 0.5);
        goldGrad.addColorStop(0.0, '#FFF9E5'); // Specular highlight rim
        goldGrad.addColorStop(0.2, '#E8CA6B'); // Champagne gold
        goldGrad.addColorStop(0.5, '#D4AF37'); // Classic metallic gold
        goldGrad.addColorStop(0.8, '#9E7719'); // Deep antique bronze-gold
        goldGrad.addColorStop(1.0, '#5E4407'); // Rich shadow base
        ctx.fillStyle = goldGrad;
        ctx.fillText('25', 0, 0);

        // 3. Directional Specular Sheen Sweep (1.6s -> 2.1s)
        if (anim.sheenProgress > 0 && anim.sheenProgress < 1) {
          ctx.shadowBlur = 0;
          ctx.globalCompositeOperation = 'source-atop';
          const sheenX = (-fontSize25 * 0.9) + anim.sheenProgress * (fontSize25 * 1.8);
          const sheenGrad = ctx.createLinearGradient(sheenX - 35, 0, sheenX + 35, 0);
          sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
          sheenGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.45)');
          sheenGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = sheenGrad;
          ctx.fillRect(-fontSize25, -fontSize25 * 0.6, fontSize25 * 2, fontSize25 * 1.2);
          ctx.globalCompositeOperation = 'source-over';
        }

        ctx.restore();
      }

      // E. Supporting Typography During 25 Scene (SPATIALLY SEPARATED - NO COLLISION)
      if (anim.label25Alpha > 0 && anim.masterAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = anim.label25Alpha * anim.masterAlpha;
        ctx.textAlign = 'center';

        const labelY = curCy + fontSize25 * 0.55;

        // Line 1: SILVER JUBILEE (Restrained antique gold, technical tracking)
        ctx.font = `600 ${Math.max(11, width * 0.012)}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = '#D4AF37';
        ctx.letterSpacing = '0.24em';
        ctx.fillText('✦ SILVER JUBILEE ✦', curCx, labelY);

        // Line 2: SJBIT • BENGALURU (Subtle neutral slate, separated)
        ctx.font = `500 ${Math.max(10, width * 0.01)}px 'Inter', system-ui, sans-serif`;
        ctx.fillStyle = '#8A909E';
        ctx.letterSpacing = '0.16em';
        ctx.fillText('SJB INSTITUTE OF TECHNOLOGY • BENGALURU', curCx, labelY + 22);

        ctx.restore();
      }

      // F. Scene 04: VIGYANTRA 2026 Wordmark Reveal
      if (anim.vigyantraAlpha > 0 && anim.masterAlpha > 0) {
        ctx.save();
        ctx.translate(curCx, curCy);
        ctx.scale(anim.vigyantraScale, anim.vigyantraScale);
        ctx.globalAlpha = anim.vigyantraAlpha * anim.masterAlpha;

        // Main Title: VIGYANTRA (Dominant, authoritative, warm ivory)
        const fontV = Math.min(width * 0.11, isMobile ? 48 : 96);
        ctx.font = `800 ${fontV}px 'Plus Jakarta Sans', system-ui, sans-serif`;
        ctx.fillStyle = '#F4F3EF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.letterSpacing = '-0.03em';
        ctx.fillText('VIGYANTRA', 0, -22);

        // 2026 Badge
        if (anim.yearAlpha > 0) {
          ctx.globalAlpha = anim.yearAlpha * anim.masterAlpha;
          const fontY = Math.min(width * 0.038, isMobile ? 22 : 32);
          ctx.font = `700 ${fontY}px 'JetBrains Mono', monospace`;
          ctx.fillStyle = '#BA1E38'; // Vibrant crimson
          ctx.letterSpacing = '0.14em';
          ctx.fillText('2026', 0, fontV * 0.42);
        }

        // Scene 05: Motto
        if (anim.mottoAlpha > 0) {
          ctx.globalAlpha = anim.mottoAlpha * anim.masterAlpha;
          const fontM = Math.max(11, Math.min(width * 0.016, 16));
          ctx.font = `italic 500 ${fontM}px 'Plus Jakarta Sans', system-ui, sans-serif`;
          ctx.fillStyle = '#F3E5AB';
          ctx.letterSpacing = '0.04em';
          ctx.fillText('“Ideas Today • Solutions Tomorrow”', 0, fontV * 0.88);
        }

        ctx.restore();
      }

      // G. Scene 06: Outward Subtle Shockwave Horizon
      if (anim.expansion > 0 && anim.masterAlpha > 0) {
        ctx.strokeStyle = `rgba(212, 175, 55, ${anim.masterAlpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(curCx, curCy, anim.expansion, 0, Math.PI * 2);
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timelineRef.current) timelineRef.current.kill();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside
      id="cinematic-intro-overlay"
      className={`v2-intro-overlay ${dismissed ? 'dismissed' : ''}`}
      role="region"
      aria-label="Cinematic Opening Experience"
    >
      <canvas ref={canvasRef} className="v2-intro-canvas" />

      {/* Top Telemetry Micro-Bar */}
      <div className="v2-intro-telemetry-top">
        <span
          style={{
            fontFamily: 'var(--v2-font-mono)',
            fontSize: '0.72rem',
            color: 'var(--v2-text-tertiary)',
            letterSpacing: '0.14em',
          }}
        >
          {telemetryText}
        </span>

        {/* Skip Intro Button */}
        <button
          onClick={handleDismiss}
          className="v2-intro-skip-btn"
          aria-label="Skip cinematic introduction and enter symposium command deck"
        >
          SKIP INTRO →
        </button>
      </div>
    </aside>
  );
}

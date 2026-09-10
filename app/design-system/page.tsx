'use client';

import React from 'react';
import Link from 'next/link';
import {
  V2Button,
  V2Card,
  V2Heading,
  V2Text,
  V2TechLabel,
  V2Metadata,
  V2Badge,
  V2Eyebrow,
  V2Divider,
} from '@/components/ui/v2';

export default function DesignSystemPage() {
  return (
    <main className="v2-bg-obsidian v2-atmosphere-radial" style={{ minHeight: '100vh', padding: '60px 0 120px' }}>
      <div className="v2-container">
        {/* Navigation Breadcrumb / Return */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--v2-font-mono)',
              fontSize: '0.8rem',
              color: 'var(--v2-text-secondary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            ← RETURN TO HOMEPAGE (UNTOUCHED)
          </Link>
          <V2Badge variant="crimson" pulseDot>
            PHASE 1 SPECIFICATION
          </V2Badge>
        </div>

        {/* Header Title Block */}
        <div style={{ marginBottom: '56px' }}>
          <V2Eyebrow>SJBIT // SILVER JUBILEE • EST. 2001</V2Eyebrow>
          <V2Heading level="display-l">
            VIGYANTRA 2026 <span className="v2-text-crimson-gradient">V2 DESIGN SYSTEM</span>
          </V2Heading>
          <V2Text size="large" style={{ marginTop: '12px', maxWidth: '780px' }}>
            Official architectural design system foundation for the 25th Silver Jubilee National Technical
            Symposium at SJB Institute of Technology, Bengaluru.
          </V2Text>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 1. COLOR PALETTE */}
        {/* ---------------------------------------------------------------- */}
        <section style={{ marginBottom: '64px' }}>
          <V2Eyebrow accent="gold">01 // COLOR TOKENS & SURFACE HIERARCHY</V2Eyebrow>
          <V2Heading level="h2" style={{ marginBottom: '24px' }}>
            Palette Architecture
          </V2Heading>
          <V2Text size="base" muted style={{ marginBottom: '28px', maxWidth: '740px' }}>
            Carefully desaturated, institutional, and cinematic. Neutral dark canvas (65–75%),
            graphite/steel UI (15–20%), deep crimson energy (5–10%), and selective antique gold for 25th Silver Jubilee milestones.
          </V2Text>

          <div className="v2-grid-4">
            {/* Obsidian Canvas */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#08090C',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <V2TechLabel>Base Obsidian</V2TechLabel>
              <V2Metadata>#08090C • 65–75% Base Canvas</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-bg-base</span>
            </div>

            {/* Surface */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#0E1015',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <V2TechLabel>Architectural Surface</V2TechLabel>
              <V2Metadata>#0E1015 • Component Base</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-bg-surface</span>
            </div>

            {/* Elevated */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#141720',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
              <V2TechLabel>Elevated Surface</V2TechLabel>
              <V2Metadata>#141720 • Floating Panels</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-bg-elevated</span>
            </div>

            {/* Warm Ivory */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#F4F3EF',
                }}
              />
              <V2TechLabel>Warm Ivory</V2TechLabel>
              <V2Metadata>#F4F3EF • 15–20% Major Titles</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-text-primary</span>
            </div>

            {/* Steel Graphite */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#282C37',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              />
              <V2TechLabel>Graphite Steel</V2TechLabel>
              <V2Metadata>#282C37 • Hairline Borders</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-steel-200</span>
            </div>

            {/* Deep Crimson Accent */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#9B1B30',
                }}
              />
              <V2TechLabel>Deep Crimson</V2TechLabel>
              <V2Metadata>#9B1B30 • 5–10% Energy Accent</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-crimson</span>
            </div>

            {/* Vibrant Crimson */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#BA1E38',
                }}
              />
              <V2TechLabel>Vibrant Crimson</V2TechLabel>
              <V2Metadata>#BA1E38 • Active & Primary CTA</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-crimson-vibrant</span>
            </div>

            {/* Metallic Gold */}
            <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  height: '60px',
                  borderRadius: '4px',
                  backgroundColor: '#D4AF37',
                }}
              />
              <V2TechLabel>Antique Gold</V2TechLabel>
              <V2Metadata>#D4AF37 • Silver Jubilee 25 Yrs</V2Metadata>
              <span style={{ fontSize: '0.75rem', color: 'var(--v2-text-tertiary)' }}>--v2-gold</span>
            </div>
          </div>
        </section>

        <V2Divider variant="tech" label="TYPOGRAPHY HIERARCHY" />

        {/* ---------------------------------------------------------------- */}
        {/* 2. TYPOGRAPHY SYSTEM */}
        {/* ---------------------------------------------------------------- */}
        <section style={{ marginBottom: '64px' }}>
          <V2Eyebrow>02 // EDITORIAL TYPOGRAPHY HIERARCHY</V2Eyebrow>
          <V2Heading level="h2" style={{ marginBottom: '24px' }}>
            Type Scale & Hierarchy (Levels 1 to 4)
          </V2Heading>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Level 1 */}
            <div className="v2-card">
              <V2TechLabel style={{ color: 'var(--v2-crimson-vibrant)' }}>
                LEVEL 1 // EDITORIAL LANDMARKS & JUBILEE TITLE
              </V2TechLabel>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <V2Heading level="display-xl">VIGYANTRA 2026</V2Heading>
                  <V2Metadata>Display XL • clamp(2.75rem, 6.5vw, 5.5rem) • Plus Jakarta Sans 800</V2Metadata>
                </div>
                <div>
                  <V2Heading level="display-l" gradient="gold">
                    25 YEARS OF EXCELLENCE
                  </V2Heading>
                  <V2Metadata>Display L (Gold) • clamp(2.25rem, 4.5vw, 3.75rem) • Plus Jakarta Sans 700</V2Metadata>
                </div>
                <div>
                  <V2Heading level="h1">National Technical Symposium</V2Heading>
                  <V2Metadata>H1 • clamp(1.75rem, 3.2vw, 2.75rem) • Plus Jakarta Sans 700</V2Metadata>
                </div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="v2-card">
              <V2TechLabel style={{ color: 'var(--v2-gold)' }}>
                LEVEL 2 // SECTION HEADINGS & EVENT NAMES
              </V2TechLabel>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <V2Heading level="h2">The 8 Flagship Arenas Matrix</V2Heading>
                  <V2Metadata>H2 • clamp(1.35rem, 2.4vw, 2rem) • Plus Jakarta Sans 600</V2Metadata>
                </div>
                <div>
                  <V2Heading level="h3">ARENA 01: AI PROMPT BATTLE ROYALE</V2Heading>
                  <V2Metadata>H3 • clamp(1.15rem, 1.8vw, 1.5rem) • Plus Jakarta Sans 600</V2Metadata>
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="v2-card">
              <V2TechLabel style={{ color: 'var(--v2-text-secondary)' }}>
                LEVEL 3 // BODY TEXT & DESCRIPTIONS
              </V2TechLabel>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <V2Text size="large">
                    VIGYANTRA 2026 unites over 1,500 collegiate innovators, engineers, ethical hackers, and visionary developers across India.
                  </V2Text>
                  <V2Metadata>Body Large • clamp(1.05rem, 1.2vw, 1.15rem) • Inter 400 • Line Height 1.65</V2Metadata>
                </div>
                <div>
                  <V2Text size="base">
                    Organized by the Department of Computer Science & Engineering in commemoration of the Silver Jubilee of SJB Institute of Technology.
                  </V2Text>
                  <V2Metadata>Body Base • clamp(0.925rem, 1vw, 1rem) • Inter 400 • Line Height 1.6</V2Metadata>
                </div>
                <div>
                  <V2Text size="small">
                    Participants must present valid institutional credentials during on-campus physical verification at the security desk.
                  </V2Text>
                  <V2Metadata>Body Small • clamp(0.8125rem, 0.9vw, 0.875rem) • Inter 400 • Line Height 1.5</V2Metadata>
                </div>
              </div>
            </div>

            {/* Level 4 */}
            <div className="v2-card">
              <V2TechLabel style={{ color: 'var(--v2-text-muted)' }}>
                LEVEL 4 // TECHNICAL METADATA & MICRO-LABELS
              </V2TechLabel>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                  <V2TechLabel>VIGYANTRA // 2026</V2TechLabel>
                  <span style={{ color: 'var(--v2-steel-100)' }}>•</span>
                  <V2TechLabel>SJBIT // BENGALURU</V2TechLabel>
                  <span style={{ color: 'var(--v2-steel-100)' }}>•</span>
                  <V2TechLabel>30.10.2026</V2TechLabel>
                  <span style={{ color: 'var(--v2-steel-100)' }}>•</span>
                  <V2TechLabel>ARENA 01 / 08</V2TechLabel>
                  <span style={{ color: 'var(--v2-steel-100)' }}>•</span>
                  <V2TechLabel>EST. 2001</V2TechLabel>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <V2Metadata>COORD: 12.9081° N, 77.4980° E</V2Metadata>
                  <V2Metadata>STATUS: SYSTEM NOMINAL</V2Metadata>
                  <V2Metadata>EVENT ID: #VG26-A01-AI</V2Metadata>
                </div>
              </div>
            </div>
          </div>
        </section>

        <V2Divider variant="tech" label="BUTTON ARCHITECTURE" />

        {/* ---------------------------------------------------------------- */}
        {/* 3. BUTTON SYSTEM */}
        {/* ---------------------------------------------------------------- */}
        <section style={{ marginBottom: '64px' }}>
          <V2Eyebrow>03 // BUTTON SYSTEM & TOUCH INTERACTIONS</V2Eyebrow>
          <V2Heading level="h2" style={{ marginBottom: '24px' }}>
            Interactive States (≥44px Touch Targets)
          </V2Heading>

          <div className="v2-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <V2Button variant="primary">
                PRIMARY ACTION →
              </V2Button>

              <V2Button variant="secondary">
                SECONDARY DOSSIER
              </V2Button>

              <V2Button variant="gold">
                SILVER JUBILEE PASS ✦
              </V2Button>

              <V2Button variant="tertiary">
                TERTIARY ACTION ↗
              </V2Button>

              <V2Button variant="primary" disabled>
                DISABLED
              </V2Button>
            </div>

            <V2Metadata>
              All buttons enforce a minimum 44px touch target on mobile viewports, high-contrast focus rings for accessibility, and hover effects that gracefully degrade on touchscreens.
            </V2Metadata>
          </div>
        </section>

        <V2Divider variant="tech" label="CARD & PANEL PRIMITIVES" />

        {/* ---------------------------------------------------------------- */}
        {/* 4. CARD & PANEL SYSTEM */}
        {/* ---------------------------------------------------------------- */}
        <section style={{ marginBottom: '64px' }}>
          <V2Eyebrow>04 // CARD ARCHITECTURES</V2Eyebrow>
          <V2Heading level="h2" style={{ marginBottom: '24px' }}>
            Panel Primitives & Depth Language
          </V2Heading>

          <div className="v2-grid-2">
            {/* Standard Architectural Card */}
            <V2Card variant="standard">
              <V2TechLabel>CARD // STANDARD</V2TechLabel>
              <V2Heading level="h3" style={{ margin: '12px 0 8px' }}>
                Architectural Surface
              </V2Heading>
              <V2Text size="base">
                Subtle hairline graphite border, dark obsidian backdrop, smooth elevation hover. Clean and distraction-free.
              </V2Text>
            </V2Card>

            {/* Elevated Panel */}
            <V2Card variant="elevated">
              <V2TechLabel style={{ color: 'var(--v2-crimson-vibrant)' }}>CARD // ELEVATED</V2TechLabel>
              <V2Heading level="h3" style={{ margin: '12px 0 8px' }}>
                Floating Modal / Focus Layer
              </V2Heading>
              <V2Text size="base">
                Higher z-index depth with multi-stop deep shadow and high-contrast graphite outline.
              </V2Text>
            </V2Card>

            {/* Event Dossier Foundation Card */}
            <V2Card variant="event">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <V2Badge variant="crimson">ARENA 03</V2Badge>
                  <V2Metadata>₹50,000 POOL</V2Metadata>
                </div>
                <V2Heading level="h3" style={{ margin: '8px 0 4px' }}>
                  Zerocrypt CTF Matrix
                </V2Heading>
                <V2Text size="small">
                  National cybersecurity capture-the-flag tournament testing cryptography, reverse engineering, and network penetration.
                </V2Text>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <V2TechLabel>OCT 30 // 10:00 AM</V2TechLabel>
                <V2Button variant="primary" size="sm">
                  REGISTER →
                </V2Button>
              </div>
            </V2Card>

            {/* Technical Telemetry Panel with Precision Corner Markers */}
            <V2Card variant="tech" showCorners>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <V2TechLabel>TELEMETRY PANEL // SJBIT.SYS</V2TechLabel>
                <V2Badge variant="gold">25 YEARS</V2Badge>
              </div>
              <V2Heading level="h3" style={{ margin: '8px 0' }}>
                Institutional Legacy & Milestone
              </V2Heading>
              <V2Text size="small">
                Precision hairline corners without over-the-top HUD effects. Engineered for institutional prestige and technical authenticity.
              </V2Text>
              <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                <V2Metadata>LAT: 12.9081° N</V2Metadata>
                <V2Metadata>LONG: 77.4980° E</V2Metadata>
              </div>
            </V2Card>
          </div>

          {/* Statistics Grid */}
          <div className="v2-grid-4" style={{ marginTop: '24px' }}>
            <div className="v2-card-stat">
              <V2TechLabel>FLAGSHIP ARENAS</V2TechLabel>
              <div className="v2-stat-value crimson">08</div>
              <V2Metadata>National Competitions</V2Metadata>
            </div>

            <div className="v2-card-stat">
              <V2TechLabel>NATIONAL PRIZE POOL</V2TechLabel>
              <div className="v2-stat-value gold">₹ 4,00,000</div>
              <V2Metadata>Cash Awards & Citations</V2Metadata>
            </div>

            <div className="v2-card-stat">
              <V2TechLabel>SILVER JUBILEE</V2TechLabel>
              <div className="v2-stat-value gold">25 YRS</div>
              <V2Metadata>Engineering Excellence</V2Metadata>
            </div>

            <div className="v2-card-stat">
              <V2TechLabel>SYMPOSIUM DATE</V2TechLabel>
              <div className="v2-stat-value">30 OCT</div>
              <V2Metadata>Friday // 2026</V2Metadata>
            </div>
          </div>
        </section>

        <V2Divider variant="tech" label="MOTION & RESPONSIVE BREAKPOINTS" />

        {/* ---------------------------------------------------------------- */}
        {/* 5. MOTION PRINCIPLES & BREAKPOINTS */}
        {/* ---------------------------------------------------------------- */}
        <section>
          <V2Eyebrow>05 // MOTION & RESPONSIVE STANDARDS</V2Eyebrow>
          <V2Heading level="h2" style={{ marginBottom: '24px' }}>
            Cinematic Motion Principles & Device Breakpoints
          </V2Heading>

          <div className="v2-grid-2">
            <div className="v2-card">
              <V2TechLabel style={{ color: 'var(--v2-crimson-vibrant)' }}>MOTION QUAD-PILLARS</V2TechLabel>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>1. BUILD:</strong>
                  <V2Text size="small">Gradual architectural component assembly using cubic-bezier(0.16, 1, 0.3, 1).</V2Text>
                </div>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>2. TRANSFORM:</strong>
                  <V2Text size="small">Seamless geometric morphs without jump cuts or abrupt scaling.</V2Text>
                </div>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>3. REVEAL:</strong>
                  <V2Text size="small">Curtain & clip-path editorial unveils using cubic-bezier(0.22, 1, 0.36, 1).</V2Text>
                </div>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>4. DECONSTRUCT:</strong>
                  <V2Text size="small">Orderly disciplined exits without lingering particle dust.</V2Text>
                </div>
              </div>
            </div>

            <div className="v2-card">
              <V2TechLabel style={{ color: 'var(--v2-gold)' }}>BREAKPOINT ARCHITECTURE</V2TechLabel>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>MOBILE (&lt; 640px):</strong>
                  <V2Text size="small">Touch targets $\ge 44$px, single-column fluid stacking, zero horizontal overflow, preserved flicker fix.</V2Text>
                </div>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>TABLET (640px – 1023px):</strong>
                  <V2Text size="small">Two-column symmetric cards, fluid typography clamping, comfortable reading length.</V2Text>
                </div>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>LAPTOP (1024px – 1279px):</strong>
                  <V2Text size="small">Compact desktop layout with persistent navigation and balanced margins.</V2Text>
                </div>
                <div>
                  <strong style={{ color: 'var(--v2-text-primary)' }}>DESKTOP (&ge; 1280px):</strong>
                  <V2Text size="small">Maximum 1280px centered container, generous editorial whitespace, cinematic backdrop depth.</V2Text>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

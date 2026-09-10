'use client';

import React from 'react';
import { ArenaVisualType } from '@/data/arenas';

interface V4ArenaVisualProps {
  visualType: ArenaVisualType;
  number: string;
  code: string;
  spec: string;
  name: string;
}

export default function V4ArenaVisual({
  visualType,
  number,
  code,
  spec,
  name,
}: V4ArenaVisualProps) {
  return (
    <div
      className={`v4-arena-visual-container visual-${visualType}`}
      aria-hidden="true"
    >
      {/* 1. Precision Blueprint Corner Reticles */}
      <span className="v4-reticle reticle-tl" />
      <span className="v4-reticle reticle-tr" />
      <span className="v4-reticle reticle-bl" />
      <span className="v4-reticle reticle-br" />

      {/* 2. Telemetry Header Bar */}
      <div className="v4-visual-telemetry">
        <span className="v4-tel-spec">{spec}</span>
        <span className="v4-tel-coord">FIG 4.{number} // {code}</span>
      </div>

      {/* 3. Mathematical Vector Blueprint SVG */}
      <svg
        className="v4-visual-svg"
        viewBox="0 0 380 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Institutional Gradients */}
          <linearGradient id={`goldGrad-${code}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f3e5ab" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id={`crimsonGrad-${code}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9b1b30" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
          </linearGradient>

          <radialGradient id={`glowGrad-${code}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          {/* Blueprint Grid Pattern */}
          <pattern id={`bpGrid-${code}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212, 175, 55, 0.05)" strokeWidth="0.5" />
            <circle cx="20" cy="0" r="0.75" fill="rgba(212, 175, 55, 0.15)" />
          </pattern>
        </defs>

        {/* Ambient Grid Layer */}
        <rect width="380" height="115" fill={`url(#bpGrid-${code})`} />

        {/* Center Glow Focus */}
        <circle cx="190" cy="58" r="55" fill={`url(#glowGrad-${code})`} />

        {/* Architectural Baseline Axes */}
        <line x1="20" y1="102" x2="360" y2="102" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="20" y1="12" x2="360" y2="12" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="35" y1="12" x2="35" y2="102" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="0.5" />
        <line x1="345" y1="12" x2="345" y2="102" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="0.5" />

        {/* Distinctive Technical Blueprint by Discipline */}
        {renderDisciplineBlueprint(visualType, code)}
      </svg>
    </div>
  );
}

// =========================================================================
// EIGHT DISTINCTIVE ENGINEERING BLUEPRINT SCHEMATICS
// =========================================================================

function renderDisciplineBlueprint(type: ArenaVisualType, code: string) {
  switch (type) {
    case 'neural':
      // 01 — AI PROMPT BATTLE: Multilayer Attention Lattice & Synaptic Tensor
      return (
        <g className="v4-schematic-neural">
          {/* Input Embedding Vectors (Left) */}
          <g className="v4-neural-inputs">
            <circle cx="65" cy="30" r="4" stroke="#d4af37" strokeWidth="1" fill="#0b0c10" />
            <circle cx="65" cy="50" r="4" stroke="#d4af37" strokeWidth="1" fill="#0b0c10" />
            <circle cx="65" cy="70" r="4" stroke="#d4af37" strokeWidth="1" fill="#0b0c10" />
            <circle cx="65" cy="90" r="4" stroke="#d4af37" strokeWidth="1" fill="#0b0c10" />
            <text x="45" y="33" fill="rgba(212, 175, 55, 0.6)" fontSize="6" fontFamily="var(--v2-font-mono)">x[0]</text>
            <text x="45" y="53" fill="rgba(212, 175, 55, 0.6)" fontSize="6" fontFamily="var(--v2-font-mono)">x[1]</text>
            <text x="45" y="73" fill="rgba(212, 175, 55, 0.6)" fontSize="6" fontFamily="var(--v2-font-mono)">x[2]</text>
            <text x="45" y="93" fill="rgba(212, 175, 55, 0.6)" fontSize="6" fontFamily="var(--v2-font-mono)">x[3]</text>
          </g>

          {/* Latent Projection Synaptic Network */}
          <g stroke="rgba(212, 175, 55, 0.22)" strokeWidth="0.75">
            <line x1="69" y1="30" x2="145" y2="40" />
            <line x1="69" y1="30" x2="145" y2="60" />
            <line x1="69" y1="50" x2="145" y2="40" />
            <line x1="69" y1="50" x2="145" y2="80" />
            <line x1="69" y1="70" x2="145" y2="60" />
            <line x1="69" y1="70" x2="145" y2="80" />
            <line x1="69" y1="90" x2="145" y2="60" />
            <line x1="69" y1="90" x2="145" y2="80" />
          </g>

          {/* Transformer Attention Core Block (Center) */}
          <g className="v4-neural-core">
            <polygon points="145,28 235,28 245,38 245,88 155,88 145,78" stroke="#d4af37" strokeWidth="1.2" fill="rgba(20,22,28,0.7)" />
            {/* Internal Attention Weights Lattice */}
            <line x1="165" y1="28" x2="165" y2="88" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="0.5" />
            <line x1="190" y1="28" x2="190" y2="88" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="0.5" />
            <line x1="215" y1="28" x2="215" y2="88" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="0.5" />
            <line x1="145" y1="48" x2="245" y2="48" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="0.5" />
            <line x1="145" y1="68" x2="245" y2="68" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="0.5" />

            {/* Diamond Attention Nodes */}
            <polygon points="190,44 194,48 190,52 186,48" fill="#d4af37" />
            <polygon points="215,64 219,68 215,72 211,68" fill="#f3e5ab" />
            <polygon points="165,64 169,68 165,72 161,68" fill="#9b1b30" />

            <text x="190" y="38" textAnchor="middle" fill="#d4af37" fontSize="5.5" fontFamily="var(--v2-font-mono)" letterSpacing="0.1em">ATTN::Q·Kᵀ</text>
          </g>

          {/* Output Probability Softmax Distribution (Right) */}
          <g className="v4-neural-outputs">
            <line x1="245" y1="45" x2="315" y2="35" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />
            <line x1="245" y1="58" x2="315" y2="58" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />
            <line x1="245" y1="72" x2="315" y2="82" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />

            {/* Target Output Peak Node */}
            <circle cx="315" cy="35" r="5" stroke="#d4af37" strokeWidth="1.2" fill="rgba(212, 175, 55, 0.25)" />
            <circle cx="315" cy="35" r="2" fill="#d4af37" />
            <circle cx="315" cy="58" r="3.5" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="0.8" fill="#0b0c10" />
            <circle cx="315" cy="82" r="3.5" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="0.8" fill="#0b0c10" />

            <text x="325" y="38" fill="#d4af37" fontSize="6.5" fontWeight="600" fontFamily="var(--v2-font-mono)">P(ŷ)=0.984</text>
          </g>

          {/* Animated Active Synaptic Signal Trace on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 65 50 L 145 40 L 190 48 L 245 45 L 315 35"
            stroke="#f3e5ab"
            strokeWidth="1.6"
            strokeDasharray="6 120"
            strokeLinecap="round"
          />
        </g>
      );

    case 'algorithm':
      // 02 — CODE RELAY: Cascading Algorithmic DAG & Synchronized Execution
      return (
        <g className="v4-schematic-algo">
          {/* Main Execution Flow Spine */}
          <g stroke="rgba(212, 175, 55, 0.35)" strokeWidth="0.9" fill="none">
            {/* Input Baton */}
            <rect x="45" y="46" width="36" height="24" rx="2" stroke="#d4af37" strokeWidth="1.2" fill="rgba(20,22,28,0.8)" />
            <text x="63" y="61" textAnchor="middle" fill="#d4af37" fontSize="6" fontFamily="var(--v2-font-mono)">INIT::01</text>

            {/* Fork to 2 Parallel Worker Threads */}
            <path d="M 81 58 L 125 58 L 145 35 L 185 35" />
            <path d="M 81 58 L 125 58 L 145 81 L 185 81" />

            {/* Thread Worker 01 Block */}
            <rect x="185" y="23" width="50" height="24" rx="2" stroke="rgba(212, 175, 55, 0.6)" fill="rgba(20,22,28,0.8)" />
            <text x="210" y="38" textAnchor="middle" fill="#f3e5ab" fontSize="5.5" fontFamily="var(--v2-font-mono)">REFACTOR</text>

            {/* Thread Worker 02 Block */}
            <rect x="185" y="69" width="50" height="24" rx="2" stroke="rgba(212, 175, 55, 0.6)" fill="rgba(20,22,28,0.8)" />
            <text x="210" y="84" textAnchor="middle" fill="#f3e5ab" fontSize="5.5" fontFamily="var(--v2-font-mono)">OPTIMIZE</text>

            {/* Join Synchronization Barrier */}
            <path d="M 235 35 L 265 35 L 280 58 L 300 58" />
            <path d="M 235 81 L 265 81 L 280 58" />

            {/* Sync Barrier Gate */}
            <line x1="280" y1="20" x2="280" y2="96" stroke="#9b1b30" strokeWidth="1" strokeDasharray="2 2" />
            <text x="282" y="18" fill="#9b1b30" fontSize="5" fontFamily="var(--v2-font-mono)">BARRIER</text>

            {/* Merged Exit Terminal */}
            <polygon points="300,50 335,50 345,58 335,66 300,66" stroke="#d4af37" strokeWidth="1.2" fill="rgba(212, 175, 55, 0.2)" />
            <text x="320" y="61" textAnchor="middle" fill="#d4af37" fontSize="5.5" fontWeight="600" fontFamily="var(--v2-font-mono)">PASS // 0x00</text>
          </g>

          {/* Stepped Instruction Counter Ticks */}
          <g fill="rgba(212, 175, 55, 0.5)" fontSize="5" fontFamily="var(--v2-font-mono)">
            <text x="130" y="48">T₁: RELAY</text>
            <text x="130" y="74">T₂: RELAY</text>
            <circle cx="145" cy="35" r="2" fill="#d4af37" />
            <circle cx="145" cy="81" r="2" fill="#d4af37" />
            <circle cx="280" cy="58" r="3" fill="#d4af37" />
          </g>

          {/* Execution Pulse Path on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 45 58 L 125 58 L 145 35 L 235 35 L 280 58 L 345 58"
            stroke="#f3e5ab"
            strokeWidth="1.5"
            strokeDasharray="8 160"
            strokeLinecap="round"
          />
        </g>
      );

    case 'cyber':
      // 03 — HACK & HUNT: Tactical Reconnaissance Radar & Vulnerability Harvest
      return (
        <g className="v4-schematic-cyber">
          {/* Tactical Radar Center Target */}
          <g transform="translate(190, 58)">
            {/* Concentric Calibration Circles */}
            <circle cx="0" cy="0" r="18" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="36" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="50" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="0.5" />

            {/* Radar Crosshairs */}
            <line x1="-54" y1="0" x2="54" y2="0" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.5" />
            <line x1="0" y1="-52" x2="0" y2="52" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.5" />

            {/* Defensive Hexagonal Firewall Perimeter */}
            <polygon
              points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16"
              stroke="#d4af37"
              strokeWidth="1.2"
              fill="rgba(20,22,28,0.5)"
            />

            {/* Infiltration Breach Vector Arrow */}
            <line x1="-48" y1="-38" x2="-14" y2="-8" stroke="#9b1b30" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="-14" cy="-8" r="3.5" stroke="#9b1b30" strokeWidth="1.2" fill="rgba(155, 27, 48, 0.4)" />
            <text x="-48" y="-42" fill="#9b1b30" fontSize="5.5" fontFamily="var(--v2-font-mono)">BREACH // PORT 8080</text>

            {/* Target Reticle Core */}
            <circle cx="0" cy="0" r="3" fill="#d4af37" />
          </g>

          {/* Left Wing: Reconnaissance Frame */}
          <g className="v4-recon-left">
            <path d="M 50 35 L 42 35 L 42 80 L 50 80" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" fill="none" />
            <text x="48" y="46" fill="rgba(212, 175, 55, 0.6)" fontSize="5.5" fontFamily="var(--v2-font-mono)">RECON::01</text>
            <text x="48" y="58" fill="rgba(212, 175, 55, 0.4)" fontSize="5" fontFamily="var(--v2-font-mono)">IP: 192.168.0.1</text>
            <text x="48" y="70" fill="rgba(212, 175, 55, 0.4)" fontSize="5" fontFamily="var(--v2-font-mono)">STATUS: PROBING</text>
          </g>

          {/* Right Wing: Packet Hash Frame */}
          <g className="v4-recon-right">
            <path d="M 330 35 L 338 35 L 338 80 L 330 80" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" fill="none" />
            <text x="295" y="46" fill="#d4af37" fontSize="5.5" fontFamily="var(--v2-font-mono)">VULN_FLAG</text>
            <text x="295" y="58" fill="rgba(212, 175, 55, 0.6)" fontSize="5" fontFamily="var(--v2-font-mono)">SHA256::C4A8</text>
            <text x="295" y="70" fill="#9b1b30" fontSize="5" fontFamily="var(--v2-font-mono)">ROOT ACCESS</text>
          </g>

          {/* Radar Sweep Arc on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 190 58 L 225 25 A 46 46 0 0 1 236 58 Z"
            fill="rgba(212, 175, 55, 0.12)"
            stroke="#d4af37"
            strokeWidth="0.8"
          />
        </g>
      );

    case 'modular':
      // 04 — APP DEVELOPMENT CHALLENGE: 3-Tier Isometric Application Architecture Stack
      return (
        <g className="v4-schematic-modular">
          {/* Tier 1: Presentation & Client UI Layer (Top Isometric Rhombus) */}
          <g transform="translate(190, 26)">
            <polygon
              points="0,-16 64,0 0,16 -64,0"
              stroke="#d4af37"
              strokeWidth="1.2"
              fill="rgba(20,22,28,0.85)"
            />
            {/* UI Component Wireframe Grid on Plane */}
            <line x1="-36" y1="-3" x2="-8" y2="4" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.75" />
            <line x1="8" y1="-4" x2="36" y2="3" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.75" />
            <circle cx="-22" cy="0.5" r="2" fill="#d4af37" />
            <circle cx="22" cy="-0.5" r="2" fill="#f3e5ab" />
            <text x="75" y="3" fill="#d4af37" fontSize="5.5" fontFamily="var(--v2-font-mono)">TIER 1 // CLIENT UI</text>
          </g>

          {/* Tier 2: Microservices & API Gateway Layer (Middle Isometric Rhombus) */}
          <g transform="translate(190, 58)">
            <polygon
              points="0,-16 64,0 0,16 -64,0"
              stroke="rgba(212, 175, 55, 0.6)"
              strokeWidth="1"
              fill="rgba(20,22,28,0.7)"
            />
            {/* API Endpoints Routing Grid */}
            <circle cx="-25" cy="0" r="3" stroke="#d4af37" strokeWidth="0.8" fill="#0b0c10" />
            <circle cx="0" cy="0" r="3" stroke="#d4af37" strokeWidth="0.8" fill="#0b0c10" />
            <circle cx="25" cy="0" r="3" stroke="#d4af37" strokeWidth="0.8" fill="#0b0c10" />
            <line x1="-22" y1="0" x2="-3" y2="0" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="0.75" />
            <line x1="3" y1="0" x2="22" y2="0" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="0.75" />
            <text x="75" y="3" fill="rgba(212, 175, 55, 0.7)" fontSize="5.5" fontFamily="var(--v2-font-mono)">TIER 2 // GRAPHQL GATEWAY</text>
          </g>

          {/* Tier 3: Distributed State & Database Layer (Bottom Isometric Rhombus) */}
          <g transform="translate(190, 90)">
            <polygon
              points="0,-16 64,0 0,16 -64,0"
              stroke="rgba(212, 175, 55, 0.4)"
              strokeWidth="1"
              fill="rgba(20,22,28,0.85)"
            />
            {/* Partition Slices */}
            <line x1="-40" y1="0" x2="0" y2="10" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.75" />
            <line x1="40" y1="0" x2="0" y2="10" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.75" />
            <text x="75" y="3" fill="rgba(212, 175, 55, 0.5)" fontSize="5.5" fontFamily="var(--v2-font-mono)">TIER 3 // DISTRIBUTED STORE</text>
          </g>

          {/* Vertical Bus Interconnects Linking Tiers */}
          <g stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.75" strokeDasharray="2 2">
            <line x1="126" y1="26" x2="126" y2="90" />
            <line x1="254" y1="26" x2="254" y2="90" />
            <line x1="190" y1="42" x2="190" y2="74" />
          </g>

          {/* Active Data Packet Bus on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 126 26 L 190 42 L 254 58 L 190 74 L 126 90"
            stroke="#f3e5ab"
            strokeWidth="1.5"
            strokeDasharray="6 120"
            strokeLinecap="round"
          />
        </g>
      );

    case 'cipher':
      // 05 — ZEROCRYPT CTF: Cryptographic Cryptex Tumbler & Zero-Knowledge Matrix
      return (
        <g className="v4-schematic-cipher">
          {/* Left Wing: Elliptic Curve Function Graph */}
          <g className="v4-ecc-curve" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.8">
            <line x1="40" y1="58" x2="115" y2="58" stroke="rgba(212, 175, 55, 0.15)" />
            <line x1="60" y1="20" x2="60" y2="96" stroke="rgba(212, 175, 55, 0.15)" />
            <path d="M 50 25 C 80 40 80 76 50 91" fill="none" stroke="#d4af37" strokeWidth="1" />
            <path d="M 65 20 C 110 40 110 76 65 96" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeDasharray="2 2" />
            <circle cx="75" cy="58" r="2.5" fill="#d4af37" />
            <text x="40" y="16" fill="rgba(212, 175, 55, 0.6)" fontSize="5.5" fontFamily="var(--v2-font-mono)">y² ≡ x³+7 [SECP256K1]</text>
          </g>

          {/* Center Concentric Rotating Key Tumbler (Cryptex) */}
          <g transform="translate(190, 58)">
            {/* Outer Geared Cryptographic Rotor */}
            <circle cx="0" cy="0" r="42" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.8" />
            {/* Notched Calibrated Perimeter */}
            <circle cx="0" cy="0" r="35" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="8 4" />
            {/* Inner Ring with Calibrated Keyway */}
            <circle cx="0" cy="0" r="24" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" />
            {/* Lock Core */}
            <circle cx="0" cy="0" r="14" stroke="#d4af37" strokeWidth="1.5" fill="rgba(20,22,28,0.9)" />

            {/* Cryptographic Keyhole Bit */}
            <path d="M -3 3 L -3 -6 L 3 -6 L 3 3 L 5 8 L -5 8 Z" fill="#d4af37" />

            {/* Calibrated Rotation Ticks */}
            <line x1="0" y1="-42" x2="0" y2="-35" stroke="#d4af37" strokeWidth="1.2" />
            <line x1="42" y1="0" x2="35" y2="0" stroke="#d4af37" strokeWidth="1.2" />
            <line x1="0" y1="42" x2="0" y2="35" stroke="#d4af37" strokeWidth="1.2" />
            <line x1="-42" y1="0" x2="-35" y2="0" stroke="#d4af37" strokeWidth="1.2" />
          </g>

          {/* Right Wing: Zero-Knowledge Hash Telemetry */}
          <g className="v4-zk-telemetry" fill="rgba(212, 175, 55, 0.6)" fontSize="5.5" fontFamily="var(--v2-font-mono)">
            <text x="260" y="38">ZK-SNARK // PROVER</text>
            <text x="260" y="52" fill="#f3e5ab">HASH: 0x7E3F...91CA</text>
            <text x="260" y="66" fill="#9b1b30">STATUS: VERIFIED</text>
            <text x="260" y="80" fill="rgba(212, 175, 55, 0.4)">BIT-DEPTH: 256</text>
          </g>

          {/* Active Unlock Alignment Flash on Hover */}
          <circle
            className="v4-active-signal-path"
            cx="190"
            cy="58"
            r="35"
            stroke="#f3e5ab"
            strokeWidth="1.5"
            strokeDasharray="20 180"
            fill="none"
          />
        </g>
      );

    case 'hardware':
      // 06 — INNOVATION MARATHON: Multi-Layer PCB Motherboard Schematic & Embedded Microcontroller
      return (
        <g className="v4-schematic-hardware">
          {/* Central QFP Surface-Mount IC (Microcontroller MCU) */}
          <g transform="translate(190, 58)">
            {/* Square Package Body */}
            <rect x="-24" y="-24" width="48" height="48" rx="2" stroke="#d4af37" strokeWidth="1.2" fill="rgba(20,22,28,0.9)" />
            {/* Pin 1 Notch */}
            <circle cx="-16" cy="-16" r="2" fill="#9b1b30" />
            {/* Chip Label */}
            <text x="0" y="-3" textAnchor="middle" fill="#d4af37" fontSize="5.5" fontFamily="var(--v2-font-mono)" letterSpacing="0.05em">ARM-M4</text>
            <text x="0" y="7" textAnchor="middle" fill="rgba(212, 175, 55, 0.6)" fontSize="4.5" fontFamily="var(--v2-font-mono)">168MHz</text>

            {/* IC Lead Pins (Top, Bottom, Left, Right) */}
            {[-18, -10, -2, 6, 14].map((coord, i) => (
              <React.Fragment key={i}>
                <line x1={coord} y1="-24" x2={coord} y2="-29" stroke="#d4af37" strokeWidth="1" />
                <line x1={coord} y1="24" x2={coord} y2="29" stroke="#d4af37" strokeWidth="1" />
                <line x1="-24" y1={coord} x2="-29" y2={coord} stroke="#d4af37" strokeWidth="1" />
                <line x1="24" y1={coord} x2="29" y2={coord} stroke="#d4af37" strokeWidth="1" />
              </React.Fragment>
            ))}
          </g>

          {/* 45-Degree Copper PCB Traces */}
          <g stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" fill="none">
            {/* North-West Trace to SMD Resistor */}
            <path d="M 166 40 L 140 40 L 120 20 L 80 20" />
            <circle cx="80" cy="20" r="2.5" stroke="#d4af37" strokeWidth="0.8" fill="#0b0c10" />
            <text x="55" y="22" fill="rgba(212, 175, 55, 0.6)" fontSize="5" fontFamily="var(--v2-font-mono)">TP1 [SPI]</text>

            {/* South-West Trace to Serpentine Differential Pair */}
            <path d="M 166 76 L 135 76 L 120 91 L 65 91" />
            <circle cx="65" cy="91" r="2.5" stroke="#d4af37" strokeWidth="0.8" fill="#0b0c10" />
            <text x="40" y="93" fill="rgba(212, 175, 55, 0.6)" fontSize="5" fontFamily="var(--v2-font-mono)">TP2 [I2C]</text>

            {/* North-East Trace to Crystal Oscillator */}
            <path d="M 214 40 L 240 40 L 260 20 L 310 20" />
            <rect x="310" y="14" width="22" height="12" stroke="#d4af37" strokeWidth="0.8" fill="rgba(20,22,28,0.8)" />
            <text x="321" y="22" textAnchor="middle" fill="#d4af37" fontSize="4.5" fontFamily="var(--v2-font-mono)">XTAL</text>

            {/* South-East Trace to Decoupling Cap */}
            <path d="M 214 76 L 245 76 L 265 96 L 315 96" />
            <line x1="315" y1="92" x2="315" y2="100" stroke="#d4af37" strokeWidth="1" />
            <line x1="318" y1="92" x2="318" y2="100" stroke="#d4af37" strokeWidth="1" />
            <text x="324" y="98" fill="rgba(212, 175, 55, 0.6)" fontSize="5" fontFamily="var(--v2-font-mono)">C0402</text>
          </g>

          {/* High-Speed Signal Transmission Packet on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 80 20 L 120 20 L 140 40 L 166 40 L 214 40 L 240 40 L 260 20 L 310 20"
            stroke="#f3e5ab"
            strokeWidth="1.6"
            strokeDasharray="8 160"
            strokeLinecap="round"
          />
        </g>
      );

    case 'energy':
      // 07 — GREEN TECH CHALLENGE: Clean Architectural Photovoltaic Honeycomb & Circular Thermodynamic Loop
      return (
        <g className="v4-schematic-energy">
          {/* Hexagonal Photovoltaic Matrix Tessellation (Center) */}
          <g transform="translate(190, 58)">
            {/* Central Hexagon */}
            <polygon points="0,-18 15.6,-9 15.6,9 0,18 -15.6,9 -15.6,-9" stroke="#d4af37" strokeWidth="1.2" fill="rgba(20,22,28,0.8)" />
            {/* Top-Right Hexagon */}
            <polygon points="27,-33.5 42.6,-24.5 42.6,-6.5 27,2.5 11.4,-6.5 11.4,-24.5" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" fill="rgba(20,22,28,0.6)" />
            {/* Top-Left Hexagon */}
            <polygon points="-27,-33.5 -11.4,-24.5 -11.4,-6.5 -27,2.5 -42.6,-6.5 -42.6,-24.5" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" fill="rgba(20,22,28,0.6)" />
            {/* Bottom-Right Hexagon */}
            <polygon points="27,33.5 42.6,24.5 42.6,6.5 27,-2.5 11.4,6.5 11.4,24.5" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" fill="rgba(20,22,28,0.6)" />
            {/* Bottom-Left Hexagon */}
            <polygon points="-27,33.5 -11.4,24.5 -11.4,6.5 -27,-2.5 -42.6,6.5 -42.6,24.5" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" fill="rgba(20,22,28,0.6)" />

            {/* Micro-collector Photovoltaic Busbars */}
            <line x1="0" y1="-18" x2="0" y2="18" stroke="#d4af37" strokeWidth="0.8" />
            <line x1="-10" y1="-5" x2="10" y2="-5" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.5" />
            <line x1="-10" y1="5" x2="10" y2="5" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.5" />
          </g>

          {/* Thermodynamic Closed-Loop Circular Regeneration Paths */}
          <g stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.8" fill="none">
            {/* Left Energy Regeneration Orbit */}
            <ellipse cx="120" cy="58" rx="65" ry="32" strokeDasharray="3 3" />
            {/* Right Energy Harvest Orbit */}
            <ellipse cx="260" cy="58" rx="65" ry="32" strokeDasharray="3 3" />
          </g>

          {/* Left Wing Architectural Telemetry */}
          <g className="v4-energy-telemetry-left" fill="rgba(212, 175, 55, 0.6)" fontSize="5.5" fontFamily="var(--v2-font-mono)">
            <text x="45" y="45">THERMAL // FLOW</text>
            <text x="45" y="58" fill="#d4af37">EFF: 98.4% [CARNOT]</text>
            <text x="45" y="71" fill="rgba(212, 175, 55, 0.4)">ΔT = 4.2 K</text>
          </g>

          {/* Right Wing Sustainable Metrics */}
          <g className="v4-energy-telemetry-right" fill="rgba(212, 175, 55, 0.6)" fontSize="5.5" fontFamily="var(--v2-font-mono)">
            <text x="295" y="45">CLOSED-LOOP</text>
            <text x="295" y="58" fill="#f3e5ab">CARBON // 0.00g</text>
            <text x="295" y="71" fill="#9b1b30">REGEN: ACTIVE</text>
          </g>

          {/* Kinetic Energy Flux Pulse on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 120 26 C 160 26 190 58 260 26 C 310 26 330 58 260 90 C 190 58 160 90 120 90 Z"
            stroke="#f3e5ab"
            strokeWidth="1.5"
            strokeDasharray="12 240"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      );

    case 'robotics':
      // 08 — ROBOTINNOVATE: 6-Axis Robotic Articulation Joint & Planetary Kinematics
      return (
        <g className="v4-schematic-robotics">
          {/* Main Articulated Servo Resolver Hub (Center) */}
          <g transform="translate(180, 58)">
            {/* Outer Bearing Ring */}
            <circle cx="0" cy="0" r="38" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.8" />
            {/* Planetary Gear Ring with Teeth Notches */}
            <circle cx="0" cy="0" r="30" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="6 3" />
            {/* Inner Race */}
            <circle cx="0" cy="0" r="18" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="0.8" fill="rgba(20,22,28,0.85)" />

            {/* Ball Bearings */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const bx = Math.cos(rad) * 24;
              const by = Math.sin(rad) * 24;
              return <circle key={i} cx={bx} cy={by} r="2" fill="#d4af37" />;
            })}

            {/* Center Drive Shaft */}
            <circle cx="0" cy="0" r="6" stroke="#d4af37" strokeWidth="1.2" fill="#0b0c10" />
            <circle cx="0" cy="0" r="2" fill="#9b1b30" />
          </g>

          {/* Robotic Articulation Arm Vector (Extending to Right) */}
          <g stroke="#d4af37" strokeWidth="1" fill="none">
            {/* Primary Linkage Arm */}
            <line x1="180" y1="58" x2="280" y2="30" strokeWidth="1.6" />
            <circle cx="280" cy="30" r="8" stroke="#d4af37" strokeWidth="1.2" fill="rgba(20,22,28,0.9)" />
            <circle cx="280" cy="30" r="3" fill="#f3e5ab" />

            {/* End Effector Wrist Mount */}
            <line x1="280" y1="30" x2="330" y2="45" strokeWidth="1.2" strokeDasharray="2 2" />
            <polygon points="330,41 342,45 330,49" fill="#d4af37" />

            {/* Angular Arc Measurement (θ = 135°) */}
            <path d="M 215 58 A 35 35 0 0 0 208 42" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="0.8" strokeDasharray="2 2" />
            <text x="222" y="46" fill="#d4af37" fontSize="5.5" fontFamily="var(--v2-font-mono)">θ: 135.0°</text>
          </g>

          {/* Left Wing: Kinematic Telemetry */}
          <g className="v4-robot-telemetry" fill="rgba(212, 175, 55, 0.6)" fontSize="5.5" fontFamily="var(--v2-font-mono)">
            <text x="45" y="42">ACTUATOR // J1</text>
            <text x="45" y="56" fill="#d4af37">TORQUE: 68 N·m</text>
            <text x="45" y="70" fill="rgba(212, 175, 55, 0.4)">BACKLASH: &lt;1 ARC-MIN</text>
            <text x="45" y="84" fill="#9b1b30">ENCODER: 24-BIT ABS</text>
          </g>

          {/* Active Torque Vector Pulse on Hover */}
          <path
            className="v4-active-signal-path"
            d="M 180 58 L 280 30 L 342 45"
            stroke="#f3e5ab"
            strokeWidth="1.8"
            strokeDasharray="8 160"
            strokeLinecap="round"
          />
        </g>
      );

    default:
      return null;
  }
}

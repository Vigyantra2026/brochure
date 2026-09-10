'use client';

import React, { useState } from 'react';

interface CircuitNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  status: string;
  freq: string;
}

const CIRCUIT_NODES: CircuitNode[] = [
  { id: 'APB', name: 'AI PROMPT CORE', category: 'NEURAL LOGIC', x: 220, y: 140, status: 'ONLINE', freq: '2.4 GHz' },
  { id: 'CR', name: 'CODE RELAY BUS', category: 'ALGORITHMIC', x: 780, y: 140, status: 'SYNCHRONIZED', freq: '5.0 GHz' },
  { id: 'HNH', name: 'HACK & HUNT MATRIX', category: 'CRYPTIC CYPHER', x: 180, y: 380, status: 'ENCRYPTED', freq: '3.8 GHz' },
  { id: 'ADC', name: 'APP DEV SUB-PLANE', category: 'HYPER-APP', x: 820, y: 380, status: 'ACTIVE', freq: '4.2 GHz' },
  { id: 'ZCTF', name: 'ZEROCRYPT SHIELD', category: 'CYBER DEFENSE', x: 300, y: 520, status: 'SECURE', freq: '10 Gbps' },
  { id: 'INM', name: 'INNOVATION HUB', category: 'ACCELERATOR', x: 700, y: 520, status: 'OPERATIONAL', freq: '60 FPS' },
  { id: 'GTC', name: 'GREEN TECH CO-PROC', category: 'SUSTAINABLE', x: 420, y: 220, status: 'ECO-BOOST', freq: '0.9 W' },
  { id: 'RBI', name: 'ROBO-INNOVATE KERNEL', category: 'KINETIC MECHATRONICS', x: 580, y: 220, status: 'CALIBRATED', freq: '100 Hz' },
];

export default function CircuitSchematic() {
  const [activeNode, setActiveNode] = useState<CircuitNode | null>(null);

  return (
    <div
      className="circuit-schematic-wrapper"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 1000 650"
        style={{ width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '700px' }}
      >
        <defs>
          <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Motherboard Boundary Bus */}
        <path
          d="M 100,50 L 900,50 L 950,100 L 950,550 L 900,600 L 100,600 L 50,550 L 50,100 Z"
          fill="none"
          stroke="rgba(0, 240, 255, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />

        {/* Bus Traces between Nodes */}
        <path
          d="M 220,140 L 420,220 L 580,220 L 780,140"
          fill="none"
          stroke="url(#cyanLineGrad)"
          strokeWidth="1.5"
        />
        <path
          d="M 180,380 L 300,520 L 500,560 L 700,520 L 820,380"
          fill="none"
          stroke="url(#goldLineGrad)"
          strokeWidth="1.5"
        />
        <path
          d="M 420,220 L 300,520 M 580,220 L 700,520"
          fill="none"
          stroke="rgba(0, 240, 255, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M 220,140 L 180,380 M 780,140 L 820,380"
          fill="none"
          stroke="rgba(245, 158, 11, 0.25)"
          strokeWidth="1.2"
        />

        {/* Animated Pulse Lines */}
        <circle r="3" fill="#00f0ff" filter="url(#glow)">
          <animateMotion
            path="M 220,140 L 420,220 L 580,220 L 780,140"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#f59e0b" filter="url(#glow)">
          <animateMotion
            path="M 820,380 L 700,520 L 500,560 L 300,520 L 180,380"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Interactive PCB Nodes */}
        {CIRCUIT_NODES.map((node) => (
          <g
            key={node.id}
            transform={`translate(${node.x}, ${node.y})`}
            style={{ pointerEvents: 'all', cursor: 'crosshair' }}
            onMouseEnter={() => setActiveNode(node)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Pulsing Target Ring */}
            <circle
              r="14"
              fill="none"
              stroke={activeNode?.id === node.id ? '#00f0ff' : 'rgba(0, 240, 255, 0.3)'}
              strokeWidth="1.5"
              strokeDasharray={activeNode?.id === node.id ? 'none' : '3 3'}
            />
            <circle
              r="6"
              fill={activeNode?.id === node.id ? '#00f0ff' : '#f59e0b'}
              filter="url(#glow)"
            />
            {/* Micro Node Labels */}
            <text
              y="-20"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
              fontFamily="var(--font-mono)"
              letterSpacing="0.1em"
            >
              [{node.id}]
            </text>
          </g>
        ))}
      </svg>

      {/* Floating Telemetry Box when hovering over any PCB node */}
      {activeNode && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '25px',
            background: 'rgba(8, 14, 28, 0.92)',
            border: '1px solid var(--cyan)',
            borderRadius: '6px',
            padding: '12px 18px',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#ffffff',
            pointerEvents: 'none',
            zIndex: 30,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ color: 'var(--cyan)', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '4px' }}>
            // NODE TELEMETRY: {activeNode.id}
          </div>
          <div style={{ color: '#e2e8f0', fontWeight: 600 }}>{activeNode.name}</div>
          <div style={{ color: 'var(--silver-400)', fontSize: '0.7rem', marginTop: '4px' }}>
            SUB-PLANE: <span style={{ color: 'var(--gold)' }}>{activeNode.category}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '6px', fontSize: '0.7rem' }}>
            <span>STATUS: <span style={{ color: '#10b981' }}>{activeNode.status}</span></span>
            <span>FREQ: <span style={{ color: 'var(--cyan)' }}>{activeNode.freq}</span></span>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export interface ArenaNodeDef {
  id: string;
  number: string;
  name: string;
  category: string;
  startPos: [number, number, number];  // Origin letter sector on the 3D VIGYANTRA monument
  targetPos: [number, number, number]; // Final arena destination in 3D space
  rotSpeed: [number, number, number];
}

export const ARENA_NODES_CONFIG: ArenaNodeDef[] = [
  // Left Flank (Arenas 01 - 04)
  {
    id: 'APB',
    number: '01',
    name: 'AI Prompt Battle',
    category: 'AI & PROMPT ENGINEERING',
    startPos: [-2.7, 0.05, 0],
    targetPos: [-3.8, 1.5, 0.0],
    rotSpeed: [0.35, 0.5, 0.2],
  },
  {
    id: 'CR',
    number: '02',
    name: 'Code Relay',
    category: 'CODING & ALGORITHMS',
    startPos: [-1.9, 0.05, 0],
    targetPos: [-4.4, 0.45, 0.1],
    rotSpeed: [0.2, 0.45, 0.3],
  },
  {
    id: 'HNH',
    number: '03',
    name: 'Hack & Hunt',
    category: 'CYBERSECURITY & RECON',
    startPos: [-1.1, 0.05, 0],
    targetPos: [-4.4, -0.65, 0.1],
    rotSpeed: [0.4, 0.3, 0.25],
  },
  {
    id: 'ADC',
    number: '04',
    name: 'App Dev Challenge',
    category: 'FULL-STACK & MOBILE',
    startPos: [-0.3, 0.05, 0],
    targetPos: [-3.8, -1.65, 0.0],
    rotSpeed: [0.25, 0.4, 0.35],
  },
  // Right Flank (Arenas 05 - 08)
  {
    id: 'ZCTF',
    number: '05',
    name: 'Zerocrypt CTF',
    category: 'CAPTURE THE FLAG',
    startPos: [0.5, 0.05, 0],
    targetPos: [3.8, 1.5, 0.0],
    rotSpeed: [0.3, 0.55, 0.2],
  },
  {
    id: 'INM',
    number: '06',
    name: 'Innovation Marathon',
    category: 'HARDWARE & IOT',
    startPos: [1.3, 0.05, 0],
    targetPos: [4.4, 0.45, 0.1],
    rotSpeed: [0.45, 0.35, 0.25],
  },
  {
    id: 'GTC',
    number: '07',
    name: 'Green Tech Challenge',
    category: 'SUSTAINABLE TECH',
    startPos: [2.1, 0.05, 0],
    targetPos: [4.4, -0.65, 0.1],
    rotSpeed: [0.25, 0.4, 0.3],
  },
  {
    id: 'RBI',
    number: '08',
    name: 'RoboInnovate',
    category: 'ROBOTICS & AUTOMATION',
    startPos: [2.9, 0.05, 0],
    targetPos: [3.8, -1.65, 0.0],
    rotSpeed: [0.4, 0.5, 0.3],
  },
];

interface V3ArenaNodesProps {
  progress?: number; // 0 = inside monument, 1 = fully deployed
  hoveredArenaId?: string | null;
  onHoverArena?: (id: string | null) => void;
  onSelectArena?: (id: string) => void;
}

export default function V3ArenaNodes({
  progress = 0,
  hoveredArenaId = null,
  onHoverArena,
  onSelectArena,
}: V3ArenaNodesProps) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);
  const badgeRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Master Palette Materials
  const materials = useMemo(() => {
    // Structural Dark Titanium / Graphite Body
    const graphiteMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#242730'),
      roughness: 0.28,
      metalness: 0.85,
      clearcoat: 0.4,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
      transparent: true,
      opacity: 0,
    });

    // Precision Antique Gold Core / Veneer
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d4af37'),
      roughness: 0.16,
      metalness: 0.95,
      clearcoat: 0.5,
      emissive: new THREE.Color('#553e14'),
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0,
    });

    // Glowing Hover State Gold Core
    const goldHoverMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffd700'),
      roughness: 0.12,
      metalness: 0.98,
      clearcoat: 0.6,
      emissive: new THREE.Color('#c6a052'),
      emissiveIntensity: 0.85,
      transparent: true,
      opacity: 0,
    });

    // Restrained Deep Crimson Accent Indicator
    const crimsonMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#800020'),
      roughness: 0.3,
      metalness: 0.8,
      clearcoat: 0.3,
      emissive: new THREE.Color('#380008'),
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0,
    });

    // Technical Chamfer Contour Lines
    const edgeMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#d4af37'),
      transparent: true,
      opacity: 0,
    });

    // Energy Tether Ray connecting monument core to nodes
    const tetherMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#c6a052'),
      transparent: true,
      opacity: 0,
    });

    return { graphiteMat, goldMat, goldHoverMat, crimsonMat, edgeMat, tetherMat };
  }, []);

  // Sync material opacity smoothly with transition progress
  useMemo(() => {
    const nodeOpacity = Math.min(1, Math.max(0, (progress - 0.05) / 0.25));
    materials.graphiteMat.opacity = nodeOpacity;
    materials.goldMat.opacity = nodeOpacity;
    materials.goldHoverMat.opacity = nodeOpacity;
    materials.crimsonMat.opacity = nodeOpacity;
    materials.edgeMat.opacity = nodeOpacity * 0.7;

    // Dramatically reduced tether line visibility during transition (max 0.12),
    // and completely faded away to 0 once cards settle!
    let tetherAlpha = 0;
    if (progress > 0.12 && progress < 0.88) {
      const normP = (progress - 0.12) / (0.88 - 0.12);
      tetherAlpha = Math.sin(normP * Math.PI) * 0.12; // faint, max 0.12
    } else {
      tetherAlpha = 0; // 100% faded away once settled
    }
    materials.tetherMat.opacity = tetherAlpha;
  }, [progress, materials]);

  // Procedural Architectural Geometries for the 8 Arenas
  const arenaGeometries = useMemo(() => {
    return ARENA_NODES_CONFIG.map((_, idx) => {
      let coreGeo: THREE.BufferGeometry;
      let frameGeo: THREE.BufferGeometry;

      switch (idx) {
        case 0: // 01 APB: Octahedral Prompt Matrix
          frameGeo = new THREE.OctahedronGeometry(0.38, 0);
          coreGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
          break;
        case 1: // 02 CR: Dual Intertwined Algorithmic Rails
          frameGeo = new THREE.BoxGeometry(0.5, 0.22, 0.22);
          coreGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.54, 8);
          break;
        case 2: // 03 HNH: Hexagonal Cipher Fortress Ring
          frameGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.18, 6);
          coreGeo = new THREE.TorusGeometry(0.24, 0.04, 8, 24);
          break;
        case 3: // 04 ADC: Tiered Stack of Architectural Modular Slabs
          frameGeo = new THREE.BoxGeometry(0.44, 0.32, 0.2);
          coreGeo = new THREE.BoxGeometry(0.36, 0.08, 0.26);
          break;
        case 4: // 05 ZCTF: Fractured Cryptographic Prism
          frameGeo = new THREE.ConeGeometry(0.32, 0.52, 5);
          coreGeo = new THREE.OctahedronGeometry(0.18, 0);
          break;
        case 5: // 06 INM: Kinetic Nexus Docking Module
          frameGeo = new THREE.BoxGeometry(0.32, 0.32, 0.32);
          coreGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.52, 6);
          break;
        case 6: // 07 GTC: Faceted Clean-Energy Cell
          frameGeo = new THREE.DodecahedronGeometry(0.32, 0);
          coreGeo = new THREE.IcosahedronGeometry(0.16, 0);
          break;
        case 7: // 08 RBI: Dual-Axis Mechatronic Rotor Ring
          frameGeo = new THREE.TorusGeometry(0.3, 0.06, 8, 32);
          coreGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.36, 12);
          break;
        default:
          frameGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
          coreGeo = new THREE.SphereGeometry(0.15, 8, 8);
      }

      const frameEdges = new THREE.EdgesGeometry(frameGeo);
      return { frameGeo, coreGeo, frameEdges };
    });
  }, []);

  // Subtle Technical Identification Badges (01 APB, 02 CR, etc.)
  const badgeMaterials = useMemo(() => {
    if (typeof document === 'undefined') return [];
    return ARENA_NODES_CONFIG.map((node) => {
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.clearRect(0, 0, 200, 100);

      // Deep graphite pill background with antique gold border
      ctx.fillStyle = 'rgba(10, 12, 16, 0.94)';
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.85)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(6, 6, 188, 88, 10);
      ctx.fill();
      ctx.stroke();

      // Bold, crisp arena number (01 to 08)
      ctx.fillStyle = '#f4f3ef';
      ctx.font = 'bold 38px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.number, 100, 40);

      // Subtle technical code
      ctx.fillStyle = '#d4af37';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(node.id, 100, 72);

      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;

      return new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
    });
  }, []);

  // Pre-calculate tether line objects
  const tetherLines = useMemo(() => {
    return ARENA_NODES_CONFIG.map((node) => {
      const pts = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(node.targetPos[0], node.targetPos[1], node.targetPos[2]),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      return new THREE.Line(geo, materials.tetherMat);
    });
  }, [materials.tetherMat]);

  // Dynamic animation, intentional trajectory calculation, and hover response
  useFrame((state, delta) => {
    if (progress <= 0.005) return;

    const t = state.clock.getElapsedTime();
    const isMobileViewport = typeof window !== 'undefined' && window.innerWidth < 960;

    ARENA_NODES_CONFIG.forEach((node, idx) => {
      const el = nodeRefs.current[idx];
      if (!el) return;

      const isHovered = hoveredArenaId === node.id;

      // Mobile adaptation: retain clean aspect ratio within viewport
      const targetX = isMobileViewport ? node.targetPos[0] * 0.42 : node.targetPos[0];
      const targetY = isMobileViewport ? node.targetPos[1] * 0.75 : node.targetPos[1];
      const targetZ = node.targetPos[2] + (isHovered ? 0.35 : 0);

      let currentX = node.startPos[0];
      let currentY = node.startPos[1];
      let currentZ = node.startPos[2];
      let currentScale = 0;
      let badgeOpacity = 0;

      // =========================================================================
      // ARCHITECTURAL 4-STAGE TRAJECTORY
      // =========================================================================
      if (progress < 0.28) {
        // Stage 1: Separation from monument letters and initial forward uncoupling
        const p = Math.max(0, progress / 0.28);
        const easeP = p * p * (3 - 2 * p);
        currentX = THREE.MathUtils.lerp(node.startPos[0], node.startPos[0] * 1.15, easeP);
        currentY = THREE.MathUtils.lerp(node.startPos[1], node.startPos[1] + (idx % 2 === 0 ? 0.12 : -0.12), easeP);
        currentZ = THREE.MathUtils.lerp(node.startPos[2], 0.35, easeP);
        currentScale = easeP;
        badgeOpacity = Math.min(1, easeP * 1.25);
      } else if (progress < 0.38) {
        // Stage 2: Brief pause & trajectory establishment (badge fully illuminated)
        const sepX = node.startPos[0] * 1.15;
        const sepY = node.startPos[1] + (idx % 2 === 0 ? 0.12 : -0.12);
        currentX = sepX;
        currentY = sepY;
        currentZ = 0.35;
        currentScale = 1.0;
        badgeOpacity = 1.0;
      } else if (progress < 0.88) {
        // Stage 3: Smooth arched parabolic travel toward arena card position
        const p = (progress - 0.38) / (0.88 - 0.38);
        const easeP = p * p * (3 - 2 * p);
        const sepX = node.startPos[0] * 1.15;
        const sepY = node.startPos[1] + (idx % 2 === 0 ? 0.12 : -0.12);

        currentX = THREE.MathUtils.lerp(sepX, targetX, easeP);
        currentY = THREE.MathUtils.lerp(sepY, targetY, easeP);
        // Intentional parabolic depth lift along Z:
        const arcZ = Math.sin(p * Math.PI) * 0.55;
        currentZ = THREE.MathUtils.lerp(0.35, targetZ, easeP) + arcZ;
        currentScale = 1.0;
        // Badge fades out gracefully as component nears its destination
        badgeOpacity = Math.max(0, 1.0 - (p - 0.45) * 2.2);
      } else {
        // Stage 4: Visual lock into destination & settled micro-motion
        currentX = targetX;
        currentY = targetY + Math.sin(t * 1.2 + idx * 0.8) * 0.04;
        currentZ = targetZ;
        currentScale = isHovered ? 1.22 : 1.0;
        badgeOpacity = 0;
      }

      el.position.x = THREE.MathUtils.damp(el.position.x, currentX, 5.5, delta);
      el.position.y = THREE.MathUtils.damp(el.position.y, currentY, 5.5, delta);
      el.position.z = THREE.MathUtils.damp(el.position.z, currentZ, 5.5, delta);

      // Micro-rotation
      const rotMultiplier = isHovered ? 2.0 : 1.0;
      el.rotation.x += node.rotSpeed[0] * delta * 0.5 * rotMultiplier;
      el.rotation.y += node.rotSpeed[1] * delta * 0.7 * rotMultiplier;
      el.rotation.z += node.rotSpeed[2] * delta * 0.35 * rotMultiplier;

      el.scale.x = THREE.MathUtils.damp(el.scale.x, currentScale, 6.0, delta);
      el.scale.y = THREE.MathUtils.damp(el.scale.y, currentScale, 6.0, delta);
      el.scale.z = THREE.MathUtils.damp(el.scale.z, currentScale, 6.0, delta);

      // Update badge opacity and orient to face camera
      const badgeMat = badgeMaterials[idx];
      if (badgeMat) {
        badgeMat.opacity = THREE.MathUtils.damp(badgeMat.opacity, badgeOpacity, 8.0, delta);
      }
      const badgeEl = badgeRefs.current[idx];
      if (badgeEl) {
        badgeEl.quaternion.copy(state.camera.quaternion);
      }

      // Update tether line endpoints dynamically
      const line = tetherLines[idx];
      if (line) {
        const positions = line.geometry.attributes.position as THREE.BufferAttribute;
        if (positions) {
          positions.setXYZ(0, 0, 0, 0);
          positions.setXYZ(1, el.position.x, el.position.y, el.position.z);
          positions.needsUpdate = true;
        }
      }
    });
  });

  if (progress <= 0.005) return null;

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Structural Architectural Tethers radiating from central VIGYANTRA anchor */}
      <group>
        {tetherLines.map((lineObj, idx) => (
          <primitive key={`tether-${idx}`} object={lineObj} />
        ))}
      </group>

      {/* 2. The 8 Deployed 3D Arena Nodes with subtle temporary badges */}
      {ARENA_NODES_CONFIG.map((node, idx) => {
        const isHovered = hoveredArenaId === node.id;
        const geo = arenaGeometries[idx];
        const badgeMat = badgeMaterials[idx];

        return (
          <group
            key={node.id}
            ref={(el) => {
              nodeRefs.current[idx] = el;
            }}
            position={node.startPos}
            onPointerOver={(e) => {
              e.stopPropagation();
              onHoverArena?.(node.id);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              onHoverArena?.(null);
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectArena?.(node.id);
            }}
          >
            {/* Dark Graphite Titanium Armature Body */}
            <mesh geometry={geo.frameGeo} material={materials.graphiteMat} castShadow receiveShadow />

            {/* Inner Antique Gold Mechanical Core */}
            <mesh
              geometry={geo.coreGeo}
              material={isHovered ? materials.goldHoverMat : materials.goldMat}
            />

            {/* Restrained Crimson Power Jewel / Accent Point */}
            <mesh position={[0, 0, 0.22]} scale={[0.1, 0.1, 0.1]}>
              <sphereGeometry args={[0.3, 8, 8]} />
              <primitive object={materials.crimsonMat} attach="material" />
            </mesh>

            {/* Precision Technical Chamfer Wire Edges */}
            <lineSegments geometry={geo.frameEdges} material={materials.edgeMat} />

            {/* Subtle Identification Badge during Transition (e.g. 01 • APB) */}
            {badgeMat && (
              <mesh
                ref={(el) => {
                  badgeRefs.current[idx] = el;
                }}
                position={[0, 0.48, 0]}
                scale={[0.66, 0.33, 1]}
                material={badgeMat}
              >
                <planeGeometry args={[1, 1]} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export interface ArenaNodeDef {
  id: string;
  number: string;
  name: string;
  category: string;
  targetPos: [number, number, number];
  rotSpeed: [number, number, number];
}

export const ARENA_NODES_CONFIG: ArenaNodeDef[] = [
  // Left Flank (Arenas 01 - 04)
  {
    id: 'APB',
    number: '01',
    name: 'AI Prompt Battle',
    category: 'AI & PROMPT ENGINEERING',
    targetPos: [-3.7, 1.5, -0.2],
    rotSpeed: [0.35, 0.5, 0.2],
  },
  {
    id: 'CR',
    number: '02',
    name: 'Code Relay',
    category: 'CODING & ALGORITHMS',
    targetPos: [-4.4, 0.45, 0.1],
    rotSpeed: [0.2, 0.45, 0.3],
  },
  {
    id: 'HNH',
    number: '03',
    name: 'Hack & Hunt',
    category: 'CYBERSECURITY & RECON',
    targetPos: [-4.4, -0.65, 0.1],
    rotSpeed: [0.4, 0.3, 0.25],
  },
  {
    id: 'ADC',
    number: '04',
    name: 'App Dev Challenge',
    category: 'FULL-STACK & MOBILE',
    targetPos: [-3.7, -1.65, -0.2],
    rotSpeed: [0.25, 0.4, 0.35],
  },
  // Right Flank (Arenas 05 - 08)
  {
    id: 'ZCTF',
    number: '05',
    name: 'Zerocrypt CTF',
    category: 'CAPTURE THE FLAG',
    targetPos: [3.7, 1.5, -0.2],
    rotSpeed: [0.3, 0.55, 0.2],
  },
  {
    id: 'INM',
    number: '06',
    name: 'Innovation Marathon',
    category: 'HARDWARE & IOT',
    targetPos: [4.4, 0.45, 0.1],
    rotSpeed: [0.45, 0.35, 0.25],
  },
  {
    id: 'GTC',
    number: '07',
    name: 'Green Tech Challenge',
    category: 'SUSTAINABLE TECH',
    targetPos: [4.4, -0.65, 0.1],
    rotSpeed: [0.25, 0.4, 0.3],
  },
  {
    id: 'RBI',
    number: '08',
    name: 'RoboInnovate',
    category: 'ROBOTICS & AUTOMATION',
    targetPos: [3.7, -1.65, -0.2],
    rotSpeed: [0.4, 0.5, 0.3],
  },
];

interface V3ArenaNodesProps {
  progress?: number; // 0 = at core, 1 = fully deployed
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

    // Energy Tether Ray
    const tetherMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#c6a052'),
      transparent: true,
      opacity: 0,
    });

    return { graphiteMat, goldMat, goldHoverMat, crimsonMat, edgeMat, tetherMat };
  }, []);

  // Sync opacity with progress
  useMemo(() => {
    const nodeOpacity = Math.min(1, Math.max(0, (progress - 0.15) / 0.85));
    materials.graphiteMat.opacity = nodeOpacity;
    materials.goldMat.opacity = nodeOpacity;
    materials.goldHoverMat.opacity = nodeOpacity;
    materials.crimsonMat.opacity = nodeOpacity;
    materials.edgeMat.opacity = nodeOpacity * 0.7;
    materials.tetherMat.opacity = Math.min(0.45, progress * 0.45);
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

  // Pre-calculate tether lines (from origin to targetPos)
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

  // Dynamic animation and hovering
  useFrame((state, delta) => {
    if (progress <= 0.01) return;

    const t = state.clock.getElapsedTime();

    ARENA_NODES_CONFIG.forEach((node, idx) => {
      const el = nodeRefs.current[idx];
      if (!el) return;

      const isHovered = hoveredArenaId === node.id;

      // Deploy outward from center origin as progress increases
      const easeP = THREE.MathUtils.smoothstep(progress, 0.1, 1.0);
      const targetX = node.targetPos[0] * easeP;
      const targetY = node.targetPos[1] * easeP + Math.sin(t * 1.2 + idx * 0.8) * 0.04;
      const targetZ = (node.targetPos[2] + (isHovered ? 0.35 : 0)) * easeP;

      el.position.x = THREE.MathUtils.damp(el.position.x, targetX, 5.0, delta);
      el.position.y = THREE.MathUtils.damp(el.position.y, targetY, 5.0, delta);
      el.position.z = THREE.MathUtils.damp(el.position.z, targetZ, 5.0, delta);

      // Micro-rotation
      const rotMultiplier = isHovered ? 2.0 : 1.0;
      el.rotation.x += node.rotSpeed[0] * delta * 0.6 * rotMultiplier;
      el.rotation.y += node.rotSpeed[1] * delta * 0.8 * rotMultiplier;
      el.rotation.z += node.rotSpeed[2] * delta * 0.4 * rotMultiplier;

      // Scale up when hovered
      const targetScale = (isHovered ? 1.22 : 1.0) * easeP;
      el.scale.x = THREE.MathUtils.damp(el.scale.x, targetScale, 6.0, delta);
      el.scale.y = THREE.MathUtils.damp(el.scale.y, targetScale, 6.0, delta);
      el.scale.z = THREE.MathUtils.damp(el.scale.z, targetScale, 6.0, delta);

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

      {/* 2. The 8 Deployed 3D Arena Nodes */}
      {ARENA_NODES_CONFIG.map((node, idx) => {
        const isHovered = hoveredArenaId === node.id;
        const geo = arenaGeometries[idx];

        return (
          <group
            key={node.id}
            ref={(el) => {
              nodeRefs.current[idx] = el;
            }}
            position={[0, 0, 0]}
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
          </group>
        );
      })}
    </group>
  );
}

'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import {
  createVShape,
  createIShape,
  createGShape,
  createYShape,
  createAShape,
  createNShape,
  createTShape,
  createRShape,
} from './letterShapes';

interface V3VigyantraProps {
  pointerPos?: React.MutableRefObject<{ x: number; y: number }>;
}

export default function V3Vigyantra({ pointerPos }: V3VigyantraProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);

  // Materials: Precision Architectural & Automotive Grade
  const materials = useMemo(() => {
    // 1. Dark Brushed Titanium / Graphite Core
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1c1e24'),
      roughness: 0.32,
      metalness: 0.88,
      clearcoat: 0.25,
      clearcoatRoughness: 0.2,
      reflectivity: 0.8,
      flatShading: false,
    });

    // 2. Precision Chamfer & Edge Accent: Antique Gold
    const goldAccentMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#c6a052'),
      roughness: 0.22,
      metalness: 0.95,
      clearcoat: 0.4,
      reflectivity: 0.95,
      emissive: new THREE.Color('#38280d'),
      emissiveIntensity: 0.15,
    });

    // 3. Sub-structural Backplate / Foundation: Deep Obsidian Steel
    const foundationMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0d0e12'),
      roughness: 0.45,
      metalness: 0.75,
    });

    // 4. Fine Technical Wireframe Edges
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#d4af37'),
      transparent: true,
      opacity: 0.45,
    });

    return { bodyMat, goldAccentMat, foundationMat, lineMat };
  }, []);

  // Construct the engineered letters with exact spacing and layering
  const letterGeometries = useMemo(() => {
    // Extrusion settings for Main Body: Deep, beveled
    const bodyExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.04,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    // Extrusion settings for Gold Trim Cap: Thin, front-mounted precision veneer
    const capExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.035,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.012,
      bevelOffset: 0,
      bevelSegments: 2,
    };

    // Base shape creators for V-I-G-Y-A-N-T-R-A
    const creators = [
      createVShape, // V
      createIShape, // I
      createGShape, // G
      createYShape, // Y
      createAShape, // A
      createNShape, // N
      createTShape, // T
      createRShape, // R
      createAShape, // A
    ];

    const results: {
      char: string;
      bodyGeo: THREE.ExtrudeGeometry;
      capGeo: THREE.ExtrudeGeometry;
      edgesGeo: THREE.EdgesGeometry;
      xPos: number;
    }[] = [];

    // Calculate positions with optical kerning
    const kernings = [0.88, 0.48, 0.92, 0.88, 0.92, 0.88, 0.86, 0.92, 0.88];
    const letterWidths = [1.1, 0.35, 1.05, 1.05, 1.08, 1.02, 1.05, 1.15, 1.08];

    // Compute total width to center the entire wordmark
    let totalSpan = 0;
    for (let i = 0; i < creators.length; i++) {
      totalSpan += kernings[i];
    }

    let currentX = -totalSpan / 2 + 0.4;

    creators.forEach((fn, idx) => {
      const { main } = fn();
      const bodyGeo = new THREE.ExtrudeGeometry(main, bodyExtrudeSettings);
      const capGeo = new THREE.ExtrudeGeometry(main, capExtrudeSettings);
      const edgesGeo = new THREE.EdgesGeometry(bodyGeo, 30); // only sharp chamfer lines

      // Center geometry around its local origin for stable lighting
      bodyGeo.center();
      capGeo.center();
      edgesGeo.center();

      results.push({
        char: 'VIGYANTRA'[idx],
        bodyGeo,
        capGeo,
        edgesGeo,
        xPos: currentX,
      });

      currentX += kernings[idx];
    });

    return { letters: results, totalSpan };
  }, []);

  // Subtle damped floating & interactive pointer response
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Natural architectural floating drift (micro-amplitudes)
    const floatY = Math.sin(t * 0.8) * 0.05;
    const floatRotX = Math.sin(t * 0.5) * 0.015;
    const floatRotY = Math.cos(t * 0.4) * 0.025;

    // Pointer-guided tilt with smooth damping (lerp)
    const px = pointerPos?.current?.x || 0;
    const py = pointerPos?.current?.y || 0;

    const targetRotX = -py * 0.12 + floatRotX;
    const targetRotY = px * 0.18 + floatRotY;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotX,
      2.5,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotY,
      2.5,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      floatY,
      2.0,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Structural Architectural Plinth / Sub-Keel (Precision Rail) */}
      <mesh position={[0, -0.9, -0.1]} material={materials.foundationMat}>
        <boxGeometry args={[letterGeometries.totalSpan + 0.6, 0.04, 0.5]} />
      </mesh>
      
      {/* Thin Gold Precision Benchmark Inset on the Rail */}
      <mesh position={[0, -0.88, 0.12]} material={materials.goldAccentMat}>
        <boxGeometry args={[letterGeometries.totalSpan * 0.6, 0.012, 0.02]} />
      </mesh>

      {/* 2. Precision Engineered V-I-G-Y-A-N-T-R-A Monoliths */}
      <group ref={coreRef}>
        {letterGeometries.letters.map((item, idx) => (
          <group key={idx} position={[item.xPos, 0, 0]}>
            {/* Dark Brushed Titanium Main Body */}
            <mesh
              geometry={item.bodyGeo}
              material={materials.bodyMat}
              castShadow
              receiveShadow
            />

            {/* Front Architectural Gold Cap Inset (0.13 forward) */}
            <mesh
              geometry={item.capGeo}
              material={materials.goldAccentMat}
              position={[0, 0, 0.125]}
            />

            {/* Precision Chamfer Accent Wire Highlights */}
            <lineSegments
              geometry={item.edgesGeo}
              material={materials.lineMat}
              position={[0, 0, 0.001]}
            />
          </group>
        ))}
      </group>
    </group>
  );
}

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
import { TransformationTimelineValues } from './V3Scene';

interface V3VigyantraProps {
  pointerPos?: React.MutableRefObject<{ x: number; y: number }>;
  formationProgress?: number; // 0 = not formed, 1 = fully assembled
  evolveProgress?: number;    // 0 = monument view, 1 = central anchor core for 8 arenas
  opacity?: number;
  timelineValues?: React.MutableRefObject<TransformationTimelineValues>;
}

export default function V3Vigyantra({
  pointerPos,
  formationProgress = 1,
  evolveProgress = 0,
  opacity = 1,
  timelineValues,
}: V3VigyantraProps) {
  const groupRef = useRef<THREE.Group>(null);
  const letterRefs = useRef<(THREE.Group | null)[]>([]);
  const plinthRef1 = useRef<THREE.Mesh>(null);
  const plinthRef2 = useRef<THREE.Mesh>(null);
  const plinthRef3 = useRef<THREE.Mesh>(null);

  // Precision Physical Materials: 3-layer architectural palette
  const materials = useMemo(() => {
    // LAYER 1: Structural Graphite / Titanium Core
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#282c35'),
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.35,
      clearcoatRoughness: 0.18,
      reflectivity: 0.85,
      transparent: true,
      opacity: 1,
    });

    // LAYER 2: Precision Antique Gold Bevels & Edge Veneer
    const goldAccentMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d4af37'),
      roughness: 0.18,
      metalness: 0.94,
      clearcoat: 0.45,
      clearcoatRoughness: 0.12,
      reflectivity: 0.98,
      emissive: new THREE.Color('#463311'),
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 1,
    });

    // LAYER 3: Restrained Deep Crimson Underside / Sub-plinth Accents
    const crimsonAccentMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#800020'),
      roughness: 0.35,
      metalness: 0.75,
      clearcoat: 0.2,
      emissive: new THREE.Color('#2d000a'),
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 1,
    });

    // Foundation Base Rail: Dark structural obsidian steel
    const foundationMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#14161c'),
      roughness: 0.4,
      metalness: 0.85,
      transparent: true,
      opacity: 1,
    });

    // Fine Technical Wireframe Edges: Crisp gold benchmark strokes
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#d4af37'),
      transparent: true,
      opacity: 0.65,
    });

    return { bodyMat, goldAccentMat, crimsonAccentMat, foundationMat, lineMat };
  }, []);

  // Synchronize opacity smoothly
  useMemo(() => {
    materials.bodyMat.opacity = opacity;
    materials.goldAccentMat.opacity = opacity;
    materials.crimsonAccentMat.opacity = opacity;
    materials.foundationMat.opacity = opacity;
    materials.lineMat.opacity = opacity * 0.65;
  }, [opacity, materials]);

  // Construct engineered letters with controlled bevels and calibrated individual spacing
  const letterGeometries = useMemo(() => {
    // Main Body: Controlled bevel thickness preventing edge collisions
    const bodyExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.24,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.030,
      bevelOffset: 0,
      bevelSegments: 3,
    };

    // Front Antique Gold Veneer: Sharp precision cap
    const capExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.035,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.012,
      bevelOffset: 0,
      bevelSegments: 2,
    };

    const creators = [
      createVShape, // 0: V
      createIShape, // 1: I
      createGShape, // 2: G
      createYShape, // 3: Y
      createAShape, // 4: A
      createNShape, // 5: N
      createTShape, // 6: T
      createRShape, // 7: R
      createAShape, // 8: A
    ];

    const results: {
      char: string;
      bodyGeo: THREE.ExtrudeGeometry;
      capGeo: THREE.ExtrudeGeometry;
      edgesGeo: THREE.EdgesGeometry;
      xPos: number;
    }[] = [];

    // Calibrated individual spacing array (inter-letter distances accounting for 3D extrusion bounds)
    // V -> I (0.72)
    // I -> G (0.74)
    // G -> Y (0.98)
    // Y -> A (0.98)
    // A -> N (1.00)
    // N -> T (0.98) - Prevents N top-right / T left-crossbar merge
    // T -> R (0.98) - Prevents T right-crossbar / R top-left merge
    // R -> A (1.00) - Prevents R diagonal leg / A left diagonal merge
    const interSpacings = [0.72, 0.74, 0.98, 0.98, 1.00, 0.98, 0.98, 1.00];

    let totalSpan = 0;
    interSpacings.forEach((s) => (totalSpan += s));

    let currentX = -totalSpan / 2;

    creators.forEach((fn, idx) => {
      const { main } = fn();
      const bodyGeo = new THREE.ExtrudeGeometry(main, bodyExtrudeSettings);
      const capGeo = new THREE.ExtrudeGeometry(main, capExtrudeSettings);
      const edgesGeo = new THREE.EdgesGeometry(bodyGeo, 28);

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

      if (idx < interSpacings.length) {
        currentX += interSpacings[idx];
      }
    });

    return { letters: results, totalSpan };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const curOpacity = timelineValues ? timelineValues.current.vigyantraOpacity : opacity;
    const curFormation = timelineValues ? timelineValues.current.vigyantraFormation : formationProgress;
    const curEvolve = timelineValues ? timelineValues.current.evolveProgress : evolveProgress;

    groupRef.current.visible = curOpacity > 0.005;
    if (!groupRef.current.visible) return;

    // Dynamically update material opacities per frame
    materials.bodyMat.opacity = curOpacity;
    materials.goldAccentMat.opacity = curOpacity;
    materials.crimsonAccentMat.opacity = curOpacity;
    materials.foundationMat.opacity = curOpacity;
    materials.lineMat.opacity = curOpacity * 0.65;

    // Plinth rail scaling
    const plinthScaleX = Math.min(1, curFormation * 1.15);
    if (plinthRef1.current) plinthRef1.current.scale.set(plinthScaleX, 1, 1);
    if (plinthRef2.current) plinthRef2.current.scale.set(plinthScaleX, 1, 1);
    if (plinthRef3.current) plinthRef3.current.scale.set(plinthScaleX, 1, 1);

    const t = state.clock.getElapsedTime();

    // Architectural floating drift
    const floatY = Math.sin(t * 0.8) * 0.04;
    const floatRotX = Math.sin(t * 0.5) * 0.012;
    const floatRotY = Math.cos(t * 0.4) * 0.02;

    const pointerFactor = timelineValues?.current?.isTransforming ? 0.06 : 1.0;
    const px = (pointerPos?.current?.x || 0) * pointerFactor;
    const py = (pointerPos?.current?.y || 0) * pointerFactor;

    const targetRotX = -py * 0.1 + floatRotX;
    const targetRotY = px * 0.15 + floatRotY;

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
    const targetY = floatY + curEvolve * 0.12;
    const targetScale = 1.0 - curEvolve * 0.36;
    const targetZ = -curEvolve * 0.25;

    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      2.0,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      3.0,
      delta
    );
    groupRef.current.scale.set(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3.5, delta),
      THREE.MathUtils.damp(groupRef.current.scale.y, targetScale, 3.5, delta),
      THREE.MathUtils.damp(groupRef.current.scale.z, targetScale, 3.5, delta)
    );

    // Mechanical dock-in assembly
    const count = letterGeometries.letters.length;
    letterRefs.current.forEach((el, idx) => {
      if (!el) return;

      const startSlot = (idx / (count + 1)) * 0.75;
      const endSlot = ((idx + 1.8) / (count + 1)) * 0.75 + 0.2;

      const localProgress = Math.max(0, Math.min(1, (curFormation - startSlot) / (endSlot - startSlot)));
      const eased = localProgress * localProgress * (3 - 2 * localProgress);

      const zOffset = (1 - eased) * 1.8;
      const yOffset = (1 - eased) * 0.3 * ((idx % 2 === 0) ? 1 : -1);
      const rotZ = (1 - eased) * 0.12 * ((idx % 2 === 0) ? -1 : 1);

      el.position.z = zOffset;
      el.position.y = yOffset;
      el.rotation.z = rotZ;
      el.scale.setScalar(0.2 + 0.8 * eased);
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Structural Architectural Plinth / Sub-Keel */}
      <mesh
        ref={plinthRef1}
        position={[0, -0.9, -0.1]}
        material={materials.foundationMat}
      >
        <boxGeometry args={[letterGeometries.totalSpan + 0.8, 0.04, 0.5]} />
      </mesh>

      {/* Layer 2: Gold Precision Benchmark Inset */}
      <mesh
        ref={plinthRef2}
        position={[0, -0.88, 0.12]}
        material={materials.goldAccentMat}
      >
        <boxGeometry args={[letterGeometries.totalSpan * 0.7, 0.012, 0.02]} />
      </mesh>

      {/* Layer 3: Restrained Deep Crimson Underside Trim Rail */}
      <mesh
        ref={plinthRef3}
        position={[0, -0.92, -0.05]}
        material={materials.crimsonAccentMat}
      >
        <boxGeometry args={[letterGeometries.totalSpan * 0.88, 0.01, 0.4]} />
      </mesh>

      {/* 2. Precision Engineered V-I-G-Y-A-N-T-R-A Monoliths */}
      <group>
        {letterGeometries.letters.map((item, idx) => (
          <group
            key={idx}
            ref={(el) => {
              letterRefs.current[idx] = el;
            }}
            position={[item.xPos, 0, 0]}
          >
            {/* Layer 1: Dark Graphite Structural Body */}
            <mesh
              geometry={item.bodyGeo}
              material={materials.bodyMat}
              castShadow
              receiveShadow
            />

            {/* Layer 2: Front Precision Antique Gold Veneer */}
            <mesh
              geometry={item.capGeo}
              material={materials.goldAccentMat}
              position={[0, 0, 0.135]}
            />

            {/* Layer 3: Back-Edge Crimson Rim Inset */}
            <mesh
              geometry={item.capGeo}
              material={materials.crimsonAccentMat}
              position={[0, -0.015, -0.125]}
              scale={[0.98, 0.98, 0.8]}
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

'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { createTwoShape, createFiveShape } from './jubileeShapes';
import { TransformationTimelineValues } from './V3Scene';

interface V3Jubilee25Props {
  progress?: number; // 0 = complete solid 25, 1 = fully deconstructed
  opacity?: number;
  pointerPos?: React.MutableRefObject<{ x: number; y: number }>;
  timelineValues?: React.MutableRefObject<TransformationTimelineValues>;
}

export default function V3Jubilee25({
  progress = 0,
  opacity = 1,
  pointerPos,
  timelineValues,
}: V3Jubilee25Props) {
  const groupRef = useRef<THREE.Group>(null);
  const twoGroupRef = useRef<THREE.Group>(null);
  const fiveGroupRef = useRef<THREE.Group>(null);
  const plinthRailRef = useRef<THREE.Mesh>(null);
  const plinthGoldRef = useRef<THREE.Mesh>(null);
  const plinthCrimsonRef = useRef<THREE.Mesh>(null);

  // Sub-component refs for physical mechanical deconstruction
  const twoBevelRef = useRef<THREE.Mesh>(null);
  const twoBodyRef = useRef<THREE.Mesh>(null);
  const fiveBevelRef = useRef<THREE.Mesh>(null);
  const fiveBodyRef = useRef<THREE.Mesh>(null);

  // Exact 3-layer material system matching V3Vigyantra
  const materials = useMemo(() => {
    // 1. Dark Brushed Titanium / Graphite Core (#282c35)
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

    // 2. Precision Antique Gold Veneer (#d4af37)
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

    // 3. Restrained Deep Crimson Underside Trim
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

    // Grounding Plinth
    const foundationMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#14161c'),
      roughness: 0.4,
      metalness: 0.85,
      transparent: true,
      opacity: 1,
    });

    // Wireframe chamfers
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#d4af37'),
      transparent: true,
      opacity: 0.65,
    });

    return { bodyMat, goldAccentMat, crimsonAccentMat, foundationMat, lineMat };
  }, []);

  useMemo(() => {
    materials.bodyMat.opacity = opacity;
    materials.goldAccentMat.opacity = opacity;
    materials.crimsonAccentMat.opacity = opacity;
    materials.foundationMat.opacity = opacity;
    materials.lineMat.opacity = opacity * 0.65;
  }, [opacity, materials]);

  const geometries = useMemo(() => {
    const bodyExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.26,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.045,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const capExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.04,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.015,
      bevelOffset: 0,
      bevelSegments: 2,
    };

    const twoData = createTwoShape();
    const fiveData = createFiveShape();

    const twoBodyGeo = new THREE.ExtrudeGeometry(twoData.main, bodyExtrudeSettings);
    const twoCapGeo = new THREE.ExtrudeGeometry(twoData.main, capExtrudeSettings);
    const twoEdgesGeo = new THREE.EdgesGeometry(twoBodyGeo, 28);
    twoBodyGeo.center();
    twoCapGeo.center();
    twoEdgesGeo.center();

    const fiveBodyGeo = new THREE.ExtrudeGeometry(fiveData.main, bodyExtrudeSettings);
    const fiveCapGeo = new THREE.ExtrudeGeometry(fiveData.main, capExtrudeSettings);
    const fiveEdgesGeo = new THREE.EdgesGeometry(fiveBodyGeo, 28);
    fiveBodyGeo.center();
    fiveCapGeo.center();
    fiveEdgesGeo.center();

    return {
      two: { body: twoBodyGeo, cap: twoCapGeo, edges: twoEdgesGeo },
      five: { body: fiveBodyGeo, cap: fiveCapGeo, edges: fiveEdgesGeo },
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const curOpacity = timelineValues ? timelineValues.current.jubileeOpacity : opacity;
    const curProgress = timelineValues ? timelineValues.current.jubileeDeconstruct : progress;

    groupRef.current.visible = curOpacity > 0.005;
    if (!groupRef.current.visible) return;

    // Dynamically update material opacities per frame
    materials.bodyMat.opacity = curOpacity;
    materials.goldAccentMat.opacity = curOpacity;
    materials.crimsonAccentMat.opacity = curOpacity;
    materials.foundationMat.opacity = curOpacity;
    materials.lineMat.opacity = curOpacity * 0.65;

    // Plinth rail scaling
    const plinthScale = 1 - curProgress * 0.85;
    if (plinthRailRef.current) plinthRailRef.current.scale.set(plinthScale, 1, plinthScale);
    if (plinthGoldRef.current) plinthGoldRef.current.scale.set(plinthScale, 1, 1);
    if (plinthCrimsonRef.current) plinthCrimsonRef.current.scale.set(plinthScale, 1, 1);

    // Subtle ambient float & pointer damping
    const pointerFactor = timelineValues?.current?.isTransforming ? 0.06 : 1.0;
    const px = (pointerPos?.current?.x || 0) * pointerFactor;
    const py = (pointerPos?.current?.y || 0) * pointerFactor;

    const t = state.clock.getElapsedTime();
    const floatY = Math.sin(t * 0.9) * 0.04;
    const floatRotY = Math.cos(t * 0.5) * 0.02;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -py * 0.1,
      2.5,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      px * 0.15 + floatRotY,
      2.5,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      floatY,
      2.0,
      delta
    );

    // Mechanical Disassembly:
    // 1. Numerals 2 and 5 move laterally apart with slight rearward depth
    // 2. Gold bevel panels detach forward and angle slightly outward
    // 3. Structural graphite cores shift along mechanical tracks
    const p = Math.max(0, Math.min(1, curProgress));
    const easedP = p * p * (3 - 2 * p);

    if (twoGroupRef.current && fiveGroupRef.current) {
      // Lateral shift
      twoGroupRef.current.position.x = -0.62 - easedP * 2.5;
      twoGroupRef.current.position.z = -easedP * 1.5;
      twoGroupRef.current.position.y = easedP * 0.35;
      twoGroupRef.current.rotation.y = -easedP * 0.4;
      twoGroupRef.current.rotation.z = -easedP * 0.15;

      fiveGroupRef.current.position.x = 0.62 + easedP * 2.5;
      fiveGroupRef.current.position.z = -easedP * 1.5;
      fiveGroupRef.current.position.y = -easedP * 0.25;
      fiveGroupRef.current.rotation.y = easedP * 0.4;
      fiveGroupRef.current.rotation.z = easedP * 0.15;
    }

    // Independent bevel plate detachment (mechanical uncoupling)
    if (twoBevelRef.current && fiveBevelRef.current) {
      twoBevelRef.current.position.z = 0.145 + easedP * 0.6;
      twoBevelRef.current.position.x = -easedP * 0.3;
      twoBevelRef.current.rotation.y = -easedP * 0.3;

      fiveBevelRef.current.position.z = 0.145 + easedP * 0.6;
      fiveBevelRef.current.position.x = easedP * 0.3;
      fiveBevelRef.current.rotation.y = easedP * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Grounding Plinth Rail */}
      <mesh
        ref={plinthRailRef}
        position={[0, -0.9, -0.1]}
        material={materials.foundationMat}
      >
        <boxGeometry args={[2.8, 0.04, 0.5]} />
      </mesh>

      {/* Gold Benchmark Inset on Rail */}
      <mesh
        ref={plinthGoldRef}
        position={[0, -0.88, 0.12]}
        material={materials.goldAccentMat}
      >
        <boxGeometry args={[1.8, 0.012, 0.02]} />
      </mesh>

      {/* Crimson Under-trim Rail */}
      <mesh
        ref={plinthCrimsonRef}
        position={[0, -0.92, -0.05]}
        material={materials.crimsonAccentMat}
      >
        <boxGeometry args={[2.2, 0.01, 0.4]} />
      </mesh>

      {/* Numeral 2 Assembly */}
      <group ref={twoGroupRef} position={[-0.62, 0, 0]}>
        {/* Layer 1: Graphite Core Body */}
        <mesh
          ref={twoBodyRef}
          geometry={geometries.two.body}
          material={materials.bodyMat}
          castShadow
          receiveShadow
        />
        {/* Layer 2: Precision Gold Bevel Cap */}
        <mesh
          ref={twoBevelRef}
          geometry={geometries.two.cap}
          material={materials.goldAccentMat}
          position={[0, 0, 0.145]}
        />
        {/* Layer 3: Crimson Rim Inset */}
        <mesh
          geometry={geometries.two.cap}
          material={materials.crimsonAccentMat}
          position={[0, -0.015, -0.135]}
          scale={[0.98, 0.98, 0.8]}
        />
        {/* Technical Chamfer Wire */}
        <lineSegments
          geometry={geometries.two.edges}
          material={materials.lineMat}
          position={[0, 0, 0.001]}
        />
      </group>

      {/* Numeral 5 Assembly */}
      <group ref={fiveGroupRef} position={[0.62, 0, 0]}>
        {/* Layer 1: Graphite Core Body */}
        <mesh
          ref={fiveBodyRef}
          geometry={geometries.five.body}
          material={materials.bodyMat}
          castShadow
          receiveShadow
        />
        {/* Layer 2: Precision Gold Bevel Cap */}
        <mesh
          ref={fiveBevelRef}
          geometry={geometries.five.cap}
          material={materials.goldAccentMat}
          position={[0, 0, 0.145]}
        />
        {/* Layer 3: Crimson Rim Inset */}
        <mesh
          geometry={geometries.five.cap}
          material={materials.crimsonAccentMat}
          position={[0, -0.015, -0.135]}
          scale={[0.98, 0.98, 0.8]}
        />
        {/* Technical Chamfer Wire */}
        <lineSegments
          geometry={geometries.five.edges}
          material={materials.lineMat}
          position={[0, 0, 0.001]}
        />
      </group>
    </group>
  );
}

'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import V3Jubilee25 from './V3Jubilee25';
import V3FragmentField from './V3FragmentField';
import V3Vigyantra from './V3Vigyantra';
import V3ArenaNodes from './V3ArenaNodes';

export interface TransformationTimelineValues {
  cameraDist: number;         // Closer framing: 6.2 for 25, 4.2 close-up, 6.8 for final VIGYANTRA, 7.8 for 8 Arenas
  cameraTargetZ: number;      // Look-at focal plane
  jubileeDeconstruct: number; // 0 to 1
  jubileeOpacity: number;     // 1 to 0
  fragmentProgress: number;   // 0 to 1
  fragmentOpacity: number;    // 0 to 1 to 0
  vigyantraFormation: number; // 0 to 1
  vigyantraOpacity: number;   // 0 to 1
  evolveProgress: number;     // 0 = monument focus, 1 = 8 arenas constellation
  isTransforming: boolean;    // suppresses pointer tilt during cinematic sequence
}

interface V3SceneProps {
  timelineValues: React.MutableRefObject<TransformationTimelineValues>;
  hoveredArenaId?: string | null;
  onHoverArena?: (id: string | null) => void;
  onSelectArena?: (id: string) => void;
}

function CameraRig({
  pointerPos,
  timelineValues,
}: {
  pointerPos: React.MutableRefObject<{ x: number; y: number }>;
  timelineValues: React.MutableRefObject<TransformationTimelineValues>;
}) {
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vals = timelineValues.current;

    // Pointer factor suppressed to 6% during transformation, restored to 100% afterwards
    const pointerFactor = vals.isTransforming ? 0.06 : 1.0;

    // Ambient micro-drift
    const driftX = Math.sin(t * 0.3) * 0.08;
    const driftY = Math.cos(t * 0.25) * 0.04;

    const px = pointerPos.current.x * pointerFactor;
    const py = pointerPos.current.y * pointerFactor;

    const targetCamX = px * 0.25 + driftX;
    const targetCamY = -py * 0.18 + driftY;
    const targetCamZ = vals.cameraDist;

    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      targetCamX,
      3.0,
      delta
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      targetCamY,
      3.0,
      delta
    );
    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      targetCamZ,
      3.5,
      delta
    );

    state.camera.lookAt(0, 0.55, vals.cameraTargetZ);
  });

  return null;
}

function SceneContent({
  pointerPos,
  timelineValues,
  hoveredArenaId,
  onHoverArena,
  onSelectArena,
}: {
  pointerPos: React.MutableRefObject<{ x: number; y: number }>;
  timelineValues: React.MutableRefObject<TransformationTimelineValues>;
  hoveredArenaId?: string | null;
  onHoverArena?: (id: string | null) => void;
  onSelectArena?: (id: string) => void;
}) {
  const vals = timelineValues.current;

  return (
    <>
      <CameraRig pointerPos={pointerPos} timelineValues={timelineValues} />

      {/* 1. Low-intensity warm-charcoal ambient base */}
      <ambientLight intensity={0.55} color="#181a20" />

      {/* 2. Main Key Light: Crisp neutral-white directional light illuminating front facets */}
      <directionalLight
        position={[-4, 6, 7]}
        intensity={2.6}
        color="#ffffff"
        castShadow={false}
      />

      {/* 3. Secondary Front Fill Light: Soft neutral light elevating dark graphite readability */}
      <directionalLight
        position={[2, -2, 6]}
        intensity={1.1}
        color="#c8d0e0"
      />

      {/* 4. Precision Antique Gold Rim Light: Grazing top chamfers from behind */}
      <directionalLight
        position={[6, 5, -2]}
        intensity={2.2}
        color="#d4af37"
      />

      {/* 5. Restrained Deep Crimson Accent Bounce: Grazing underside from bottom-right */}
      <pointLight
        position={[4, -4, 3]}
        intensity={1.4}
        color="#800020"
        distance={14}
        decay={2}
      />

      {/* 6. Subtle Left Plinth Gold Bounce */}
      <pointLight
        position={[-4, -3, 2]}
        intensity={0.9}
        color="#c6a052"
        distance={10}
        decay={2}
      />

      {/* 3D Engineered Artifacts Stage */}
      <group position={[0, 0.72, 0]} scale={[0.87, 0.87, 0.87]}>
        {/* Initial 3D 25 Jubilee Monument */}
        <V3Jubilee25
          progress={vals.jubileeDeconstruct}
          opacity={vals.jubileeOpacity}
          pointerPos={pointerPos}
        />

        {/* Precision Intermediate Structural Fragment Field */}
        <V3FragmentField
          progress={vals.fragmentProgress}
          opacity={vals.fragmentOpacity}
        />

        {/* Formed VIGYANTRA Monument (transitions smoothly to sovereign anchor hub when evolved) */}
        <V3Vigyantra
          pointerPos={pointerPos}
          formationProgress={vals.vigyantraFormation}
          evolveProgress={vals.evolveProgress}
          opacity={vals.vigyantraOpacity}
        />

        {/* Deployed 8 Architectural Arena Nodes with Energy Tethers */}
        <V3ArenaNodes
          progress={vals.evolveProgress}
          hoveredArenaId={hoveredArenaId}
          onHoverArena={onHoverArena}
          onSelectArena={onSelectArena}
        />
      </group>
    </>
  );
}

export default function V3Scene({
  timelineValues,
  hoveredArenaId,
  onHoverArena,
  onSelectArena,
}: V3SceneProps) {
  const pointerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointerPos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerPos.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 44 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        <SceneContent
          pointerPos={pointerPos}
          timelineValues={timelineValues}
          hoveredArenaId={hoveredArenaId}
          onHoverArena={onHoverArena}
          onSelectArena={onSelectArena}
        />
      </Canvas>
    </div>
  );
}

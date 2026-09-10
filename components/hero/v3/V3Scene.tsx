'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import V3Vigyantra from './V3Vigyantra';

function CameraRig({
  pointerPos,
}: {
  pointerPos: React.MutableRefObject<{ x: number; y: number }>;
}) {
  useFrame((state, delta) => {
    // Subtle cinematic camera drift
    const t = state.clock.getElapsedTime();
    const driftX = Math.sin(t * 0.3) * 0.15;
    const driftY = Math.cos(t * 0.25) * 0.08;

    const px = pointerPos.current.x;
    const py = pointerPos.current.y;

    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      px * 0.35 + driftX,
      2.0,
      delta
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      -py * 0.25 + driftY,
      2.0,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function V3Scene() {
  const pointerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
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
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <CameraRig pointerPos={pointerPos} />

        {/* 1. Low-intensity ambient fill */}
        <ambientLight intensity={0.45} color="#101318" />

        {/* 2. Main Key Light: Crisp neutral directional light from top-left */}
        <directionalLight
          position={[-6, 7, 6]}
          intensity={2.2}
          color="#ffffff"
          castShadow={false}
        />

        {/* 3. Secondary Rim Light: Warm Antique Gold grazing bevels from top-right-back */}
        <directionalLight
          position={[7, 4, -3]}
          intensity={1.8}
          color="#c6a052"
        />

        {/* 4. Tertiary Accent Rim: Deep Crimson bounce grazing bottom-right */}
        <pointLight
          position={[5, -4, 4]}
          intensity={1.2}
          color="#800020"
          distance={12}
          decay={2}
        />

        {/* 5. Sub-keel cold white accent */}
        <pointLight
          position={[-3, -3, 3]}
          intensity={0.8}
          color="#a0b0cc"
          distance={10}
          decay={2}
        />

        {/* The 3D Precision Engineered Centerpiece */}
        <V3Vigyantra pointerPos={pointerPos} />
      </Canvas>
    </div>
  );
}

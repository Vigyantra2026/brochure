'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface V3FragmentFieldProps {
  progress: number;
  opacity: number;
}

interface ComponentDef {
  origin: THREE.Vector3;
  target: THREE.Vector3;
  rotOrigin: THREE.Euler;
  rotTarget: THREE.Euler;
  scale: THREE.Vector3;
  category: 'goldBevel' | 'graphitePanel' | 'crimsonBracket';
}

export default function V3FragmentField({ progress, opacity }: V3FragmentFieldProps) {
  const goldMeshRef = useRef<THREE.InstancedMesh>(null);
  const bodyMeshRef = useRef<THREE.InstancedMesh>(null);
  const crimsonMeshRef = useRef<THREE.InstancedMesh>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const materials = useMemo(() => {
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#282c35'),
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.35,
      transparent: true,
      opacity: 1,
    });

    const goldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d4af37'),
      roughness: 0.18,
      metalness: 0.94,
      clearcoat: 0.45,
      emissive: new THREE.Color('#463311'),
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 1,
    });

    const crimsonMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#800020'),
      roughness: 0.35,
      metalness: 0.75,
      clearcoat: 0.2,
      emissive: new THREE.Color('#2d000a'),
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 1,
    });

    return { bodyMat, goldMat, crimsonMat };
  }, []);

  useMemo(() => {
    materials.bodyMat.opacity = opacity;
    materials.goldMat.opacity = opacity;
    materials.crimsonMat.opacity = opacity;
  }, [opacity, materials]);

  // Calibrated target coordinates matching V3Vigyantra's updated letter positions:
  // Spacings: [0.72, 0.74, 0.98, 0.98, 1.00, 0.98, 0.98, 1.00]
  // TotalSpan: 7.38, StartX: -3.69
  // V: -3.69, I: -2.97, G: -2.23, Y: -1.25, A: -0.27, N: 0.73, T: 1.71, R: 2.69, A: 3.69
  const letterXCenters = useMemo(() => [-3.69, -2.97, -2.23, -1.25, -0.27, 0.73, 1.71, 2.69, 3.69], []);

  const components = useMemo(() => {
    const goldList: ComponentDef[] = [];
    const bodyList: ComponentDef[] = [];
    const crimsonList: ComponentDef[] = [];

    // 1. Gold Bevel Plates & Chamfer Strips (12 items)
    for (let i = 0; i < 12; i++) {
      const isFromTwo = i < 6;
      const baseCenterX = isFromTwo ? -0.85 : 0.85;
      const angle = (i % 6) * (Math.PI / 3);
      const originX = baseCenterX + Math.cos(angle) * 0.75;
      const originY = Math.sin(angle) * 0.75;
      const originZ = 0.18 + (i % 2) * 0.1;

      const targetSlot = Math.floor((i / 12) * letterXCenters.length);
      const targetX = letterXCenters[targetSlot];
      const targetY = (i % 3 === 0 ? 0.35 : i % 3 === 1 ? -0.35 : 0.0);
      const targetZ = 0.135;

      goldList.push({
        origin: new THREE.Vector3(originX, originY, originZ),
        target: new THREE.Vector3(targetX, targetY, targetZ),
        rotOrigin: new THREE.Euler(0, (isFromTwo ? -0.3 : 0.3), 0.1 * i),
        rotTarget: new THREE.Euler(0, 0, 0),
        scale: new THREE.Vector3(0.22, 0.040, 0.02),
        category: 'goldBevel',
      });
    }

    // 2. Graphite Structural Plates & Foundation Rails (16 items)
    for (let i = 0; i < 16; i++) {
      const isFromTwo = i < 8;
      const baseCenterX = isFromTwo ? -0.65 : 0.65;
      const progressRatio = (i % 8) / 8;
      const originX = baseCenterX + ((i % 4) - 1.5) * 0.35;
      const originY = (progressRatio - 0.5) * 1.3;
      const originZ = 0.0;

      const targetSlot = Math.floor((i / 16) * letterXCenters.length);
      const targetX = letterXCenters[targetSlot] + ((i % 2 === 0) ? -0.08 : 0.08);
      const targetY = ((i % 5) - 2) * 0.22;
      const targetZ = 0.0;

      const isRail = i % 2 === 0;
      bodyList.push({
        origin: new THREE.Vector3(originX, originY, originZ),
        target: new THREE.Vector3(targetX, targetY, targetZ),
        rotOrigin: new THREE.Euler(0.15 * (i % 3), 0.2 * (i % 4), 0),
        rotTarget: new THREE.Euler(0, 0, 0),
        scale: isRail ? new THREE.Vector3(0.35, 0.055, 0.10) : new THREE.Vector3(0.20, 0.16, 0.09),
        category: 'graphitePanel',
      });
    }

    // 3. Crimson Precision Brackets (8 items)
    for (let i = 0; i < 8; i++) {
      const isFromTwo = i < 4;
      const baseCenterX = isFromTwo ? -0.62 : 0.62;
      const originX = baseCenterX + ((i % 2) - 0.5) * 0.4;
      const originY = -0.7 - (i % 2) * 0.15;
      const originZ = -0.1;

      const targetSlot = i % letterXCenters.length;
      const targetX = letterXCenters[targetSlot];
      const targetY = -0.7;
      const targetZ = -0.05;

      crimsonList.push({
        origin: new THREE.Vector3(originX, originY, originZ),
        target: new THREE.Vector3(targetX, targetY, targetZ),
        rotOrigin: new THREE.Euler(0, 0, 0.1),
        rotTarget: new THREE.Euler(0, 0, 0),
        scale: new THREE.Vector3(0.30, 0.03, 0.16),
        category: 'crimsonBracket',
      });
    }

    return { goldList, bodyList, crimsonList };
  }, [letterXCenters]);

  const sharedGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);

  useFrame(() => {
    if (opacity <= 0.01) return;

    const p = Math.max(0, Math.min(1, progress));
    const smoothP = p * p * (3 - 2 * p);

    // Update Gold Bevel Components
    if (goldMeshRef.current) {
      components.goldList.forEach((item, idx) => {
        const offset = (idx % 4) * 0.04;
        const localP = Math.max(0, Math.min(1, (smoothP - offset) / (1 - offset || 1)));
        const easedLocalP = localP * localP * (3 - 2 * localP);

        dummy.position.lerpVectors(item.origin, item.target, easedLocalP);
        const arc = Math.sin(easedLocalP * Math.PI) * 0.3 * ((idx % 2 === 0) ? 1 : -1);
        dummy.position.z += arc;

        dummy.rotation.x = THREE.MathUtils.lerp(item.rotOrigin.x, item.rotTarget.x, easedLocalP);
        dummy.rotation.y = THREE.MathUtils.lerp(item.rotOrigin.y, item.rotTarget.y, easedLocalP);
        dummy.rotation.z = THREE.MathUtils.lerp(item.rotOrigin.z, item.rotTarget.z, easedLocalP);
        dummy.scale.copy(item.scale);

        dummy.updateMatrix();
        goldMeshRef.current?.setMatrixAt(idx, dummy.matrix);
      });
      goldMeshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Update Graphite Structural Panels
    if (bodyMeshRef.current) {
      components.bodyList.forEach((item, idx) => {
        const offset = (idx % 6) * 0.035;
        const localP = Math.max(0, Math.min(1, (smoothP - offset) / (1 - offset || 1)));
        const easedLocalP = localP * localP * (3 - 2 * localP);

        dummy.position.lerpVectors(item.origin, item.target, easedLocalP);
        const arc = Math.sin(easedLocalP * Math.PI) * 0.25 * ((idx % 2 === 0) ? 1 : -1);
        dummy.position.y += arc;

        dummy.rotation.x = THREE.MathUtils.lerp(item.rotOrigin.x, item.rotTarget.x, easedLocalP);
        dummy.rotation.y = THREE.MathUtils.lerp(item.rotOrigin.y, item.rotTarget.y, easedLocalP);
        dummy.rotation.z = THREE.MathUtils.lerp(item.rotOrigin.z, item.rotTarget.z, easedLocalP);
        dummy.scale.copy(item.scale);

        dummy.updateMatrix();
        bodyMeshRef.current?.setMatrixAt(idx, dummy.matrix);
      });
      bodyMeshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Update Crimson Underside Brackets
    if (crimsonMeshRef.current) {
      components.crimsonList.forEach((item, idx) => {
        const offset = (idx % 3) * 0.05;
        const localP = Math.max(0, Math.min(1, (smoothP - offset) / (1 - offset || 1)));
        const easedLocalP = localP * localP * (3 - 2 * localP);

        dummy.position.lerpVectors(item.origin, item.target, easedLocalP);
        dummy.rotation.x = THREE.MathUtils.lerp(item.rotOrigin.x, item.rotTarget.x, easedLocalP);
        dummy.rotation.y = THREE.MathUtils.lerp(item.rotOrigin.y, item.rotTarget.y, easedLocalP);
        dummy.rotation.z = THREE.MathUtils.lerp(item.rotOrigin.z, item.rotTarget.z, easedLocalP);
        dummy.scale.copy(item.scale);

        dummy.updateMatrix();
        crimsonMeshRef.current?.setMatrixAt(idx, dummy.matrix);
      });
      crimsonMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  if (opacity <= 0.01) return null;

  return (
    <group>
      <instancedMesh
        ref={goldMeshRef}
        args={[sharedGeometry, materials.goldMat, components.goldList.length]}
        frustumCulled={false}
      />
      <instancedMesh
        ref={bodyMeshRef}
        args={[sharedGeometry, materials.bodyMat, components.bodyList.length]}
        frustumCulled={false}
      />
      <instancedMesh
        ref={crimsonMeshRef}
        args={[sharedGeometry, materials.crimsonMat, components.crimsonList.length]}
        frustumCulled={false}
      />
    </group>
  );
}

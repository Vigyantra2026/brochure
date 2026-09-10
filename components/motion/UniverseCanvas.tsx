"use client";

import React, { useEffect, useRef } from "react";

export default function UniverseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let animationFrameId: number;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cx = width / 2;
      cy = height / 2;
    }

    window.addEventListener("resize", resize);
    resize();

    // 1. Stars Generation
    const STAR_COUNT = Math.min(180, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    const stars: Array<{ x: number; y: number; z: number; size: number; color: string }> = [];
    const colors = ["#ffffff", "#FF5500", "#FFAA00", "#FF3E00", "#FDE68A"];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 1000 + 1,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 2. 3D Wireframe Polyhedra
    interface Polyhedron {
      type: "octahedron" | "icosahedron";
      x: number;
      y: number;
      z: number;
      size: number;
      rotX: number;
      rotY: number;
      speedX: number;
      speedY: number;
      color: string;
    }

    const polyhedra: Polyhedron[] = [
      {
        type: "octahedron",
        x: -360,
        y: -140,
        z: 480,
        size: 90,
        rotX: 0.2,
        rotY: 0.3,
        speedX: 0.003,
        speedY: 0.004,
        color: "rgba(255, 85, 0, 0.45)",
      },
      {
        type: "icosahedron",
        x: 380,
        y: 120,
        z: 520,
        size: 85,
        rotX: 0.1,
        rotY: 0.5,
        speedX: 0.002,
        speedY: 0.003,
        color: "rgba(255, 170, 0, 0.4)",
      },
    ];

    // 3. Constellation Nodes
    const NODE_COUNT = Math.min(30, Math.floor(window.innerWidth / 45));
    const constellationNodes: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
    }> = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const isOrange = Math.random() > 0.5;
      const baseColor = isOrange ? "rgba(255, 85, 0, " : "rgba(255, 170, 0, ";
      const radius = Math.random() * 2 + 1;
      const x = (Math.random() - 0.5) * (width * 1.2);
      const y = (Math.random() - 0.5) * (height * 1.2);
      const z = Math.random() * 600 + 200;
      const vx = (Math.random() - 0.5) * 0.4;
      const vy = (Math.random() - 0.5) * 0.4;
      const vz = (Math.random() - 0.5) * 0.3;

      constellationNodes.push({ x, y, z, vx, vy, vz, radius, color: baseColor });
    }

    const phi = (1 + Math.sqrt(5)) / 2;
    const icosahedronVertices = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    const icosahedronEdges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [2, 4], [6, 2], [8, 6], [9, 8],
      [4, 5], [5, 9], [9, 1], [1, 8], [8, 7],
      [7, 6], [6, 10], [10, 2], [2, 11], [11, 4],
    ];

    const octahedronVertices = [
      [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
    ];
    const octahedronEdges = [
      [0, 2], [2, 1], [1, 3], [3, 0],
      [0, 4], [2, 4], [1, 4], [3, 4],
      [0, 5], [2, 5], [1, 5], [3, 5],
    ];

    function renderPolyhedron(p: Polyhedron) {
      if (!ctx) return;
      p.rotX += p.speedX;
      p.rotY += p.speedY;

      const isIcosa = p.type === "icosahedron";
      const rawVerts = isIcosa ? icosahedronVertices : octahedronVertices;
      const edges = isIcosa ? icosahedronEdges : octahedronEdges;
      const s = p.size;

      const projected = rawVerts.map((v) => {
        const vx = v[0] * s;
        const vy = v[1] * s;
        const vz = v[2] * s;

        const y1 = vy * Math.cos(p.rotX) - vz * Math.sin(p.rotX);
        const z1 = vy * Math.sin(p.rotX) + vz * Math.cos(p.rotX);
        const x2 = vx * Math.cos(p.rotY) + z1 * Math.sin(p.rotY);
        const z2 = -vx * Math.sin(p.rotY) + z1 * Math.cos(p.rotY);

        const fov = 600;
        const worldZ = z2 + p.z;
        const scale = fov / Math.max(worldZ, 1);

        return {
          x: cx + (p.x + x2 - mouse.x * 0.15) * scale,
          y: cy + (p.y + y1 - mouse.y * 0.15) * scale,
        };
      });

      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw Stars
      const fov = 650;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= 0.6;
        if (s.z <= 0) s.z = 1000;

        const scale = fov / s.z;
        const px = cx + (s.x - mouse.x * 0.2) * scale;
        const py = cy + (s.y - mouse.y * 0.2) * scale;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, s.size * scale * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.fill();
        }
      }

      // Draw Polyhedra
      polyhedra.forEach(renderPolyhedron);

      // Draw Nodes & Constellation Lines
      const projectedNodes: Array<{ px: number; py: number; scale: number; orig: typeof constellationNodes[0] }> = [];
      for (let i = 0; i < constellationNodes.length; i++) {
        const n = constellationNodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;

        if (Math.abs(n.x) > width * 0.8) n.vx *= -1;
        if (Math.abs(n.y) > height * 0.8) n.vy *= -1;
        if (n.z < 200 || n.z > 900) n.vz *= -1;

        const scale = fov / n.z;
        const px = cx + (n.x - mouse.x * 0.3) * scale;
        const py = cy + (n.y - mouse.y * 0.3) * scale;

        projectedNodes.push({ px, py, scale, orig: n });
      }

      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const strength = (1 - dist / 110) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(255, 85, 0, ${strength})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p1.px, p1.py, p1.orig.radius * p1.scale, 0, Math.PI * 2);
        ctx.fillStyle = p1.orig.color + `${0.8 * p1.scale})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX - cx;
      mouse.targetY = e.clientY - cy;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="universe-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="cosmic-nebula-glow" aria-hidden="true" />
      <div className="cyber-grid-overlay" aria-hidden="true" />
      <div className="scanline-screen-effect" aria-hidden="true" />
    </>
  );
}

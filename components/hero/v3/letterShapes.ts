import * as THREE from 'three';

/**
 * Procedural architectural 2D Path profiles for V-I-G-Y-A-N-T-R-A letterforms.
 * Each letter is crafted with precision chamfers, structural cut-outs, and architectural proportions.
 * Normalized to a bounding box of roughly width ~1.0, height 1.4 units.
 */

export function createVShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision engineered V with chamfered bottom wedge
  s.moveTo(-0.55, 0.7);
  s.lineTo(-0.25, 0.7);
  s.lineTo(0.0, -0.45);
  s.lineTo(0.25, 0.7);
  s.lineTo(0.55, 0.7);
  s.lineTo(0.12, -0.7);
  s.lineTo(-0.12, -0.7);
  s.closePath();
  return { main: s, width: 1.1 };
}

export function createIShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision engineered I with micro-chamfers at terminals
  const w = 0.14;
  const h = 0.7;
  s.moveTo(-w, -h);
  s.lineTo(w, -h);
  s.lineTo(w, h);
  s.lineTo(-w, h);
  s.closePath();
  return { main: s, width: 0.35 };
}

export function createGShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural G: faceted/chamfered hexagonal silhouette with crossbar
  s.moveTo(0.5, 0.4);
  s.lineTo(0.5, 0.7);
  s.lineTo(-0.25, 0.7);
  s.lineTo(-0.5, 0.45);
  s.lineTo(-0.5, -0.45);
  s.lineTo(-0.25, -0.7);
  s.lineTo(0.35, -0.7);
  s.lineTo(0.5, -0.55);
  s.lineTo(0.5, 0.0);
  s.lineTo(0.1, 0.0);
  s.lineTo(0.1, -0.2);
  s.lineTo(0.28, -0.2);
  s.lineTo(0.28, -0.48);
  s.lineTo(-0.18, -0.48);
  s.lineTo(-0.28, -0.38);
  s.lineTo(-0.28, 0.38);
  s.lineTo(-0.18, 0.48);
  s.lineTo(0.28, 0.48);
  s.lineTo(0.28, 0.4);
  s.closePath();
  return { main: s, width: 1.05 };
}

export function createYShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural Y: dual angled arms meeting central keel
  s.moveTo(-0.5, 0.7);
  s.lineTo(-0.24, 0.7);
  s.lineTo(0.0, 0.12);
  s.lineTo(0.24, 0.7);
  s.lineTo(0.5, 0.7);
  s.lineTo(0.14, -0.05);
  s.lineTo(0.14, -0.7);
  s.lineTo(-0.14, -0.7);
  s.lineTo(-0.14, -0.05);
  s.closePath();
  return { main: s, width: 1.05 };
}

export function createAShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural A with cut-out counter
  s.moveTo(-0.12, 0.7);
  s.lineTo(0.12, 0.7);
  s.lineTo(0.52, -0.7);
  s.lineTo(0.25, -0.7);
  s.lineTo(0.16, -0.32);
  s.lineTo(-0.16, -0.32);
  s.lineTo(-0.25, -0.7);
  s.lineTo(-0.52, -0.7);
  s.closePath();

  // Triangular counter hole
  const hole = new THREE.Path();
  hole.moveTo(0.0, 0.42);
  hole.lineTo(-0.11, -0.12);
  hole.lineTo(0.11, -0.12);
  hole.closePath();
  s.holes.push(hole);

  return { main: s, width: 1.08 };
}

export function createNShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural N with shear diagonal
  const w = 0.48;
  const col = 0.22;
  s.moveTo(-w, -0.7);
  s.lineTo(-w + col, -0.7);
  s.lineTo(-w + col, 0.25);
  s.lineTo(w - col, -0.7);
  s.lineTo(w, -0.7);
  s.lineTo(w, 0.7);
  s.lineTo(w - col, 0.7);
  s.lineTo(w - col, -0.25);
  s.lineTo(-w + col, 0.7);
  s.lineTo(-w, 0.7);
  s.closePath();
  return { main: s, width: 1.02 };
}

export function createTShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural T: heavy crossbeam, central column
  const barW = 0.5;
  const barH = 0.22;
  const colW = 0.13;
  s.moveTo(-barW, 0.7);
  s.lineTo(barW, 0.7);
  s.lineTo(barW, 0.7 - barH);
  s.lineTo(colW, 0.7 - barH);
  s.lineTo(colW, -0.7);
  s.lineTo(-colW, -0.7);
  s.lineTo(-colW, 0.7 - barH);
  s.lineTo(-barW, 0.7 - barH);
  s.closePath();
  return { main: s, width: 1.05 };
}

export function createRShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural R: faceted bowl and braced diagonal leg
  s.moveTo(-0.48, -0.7);
  s.lineTo(-0.25, -0.7);
  s.lineTo(-0.25, -0.05);
  s.lineTo(0.12, -0.05);
  s.lineTo(0.38, -0.7);
  s.lineTo(0.62, -0.7);
  s.lineTo(0.32, 0.0);
  s.lineTo(0.48, 0.15);
  s.lineTo(0.48, 0.55);
  s.lineTo(0.35, 0.7);
  s.lineTo(-0.48, 0.7);
  s.closePath();

  // Rectangular / chamfered bowl hole
  const hole = new THREE.Path();
  hole.moveTo(-0.25, 0.18);
  hole.lineTo(0.24, 0.18);
  hole.lineTo(0.24, 0.48);
  hole.lineTo(-0.25, 0.48);
  hole.closePath();
  s.holes.push(hole);

  return { main: s, width: 1.15 };
}

import * as THREE from 'three';

/**
 * Procedural architectural 2D Path profiles for V-I-G-Y-A-N-T-R-A letterforms.
 * Each letter is crafted with precision chamfers, structural cut-outs, and architectural proportions.
 * Optimized for crisp silhouette separation and non-colliding bevel boundaries.
 * Standardized height: 1.4 units (-0.7 to +0.7).
 */

export function createVShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision engineered V with chamfered bottom wedge
  s.moveTo(-0.46, 0.7);
  s.lineTo(-0.20, 0.7);
  s.lineTo(0.0, -0.42);
  s.lineTo(0.20, 0.7);
  s.lineTo(0.46, 0.7);
  s.lineTo(0.10, -0.7);
  s.lineTo(-0.10, -0.7);
  s.closePath();
  return { main: s, width: 0.96 };
}

export function createIShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision engineered I: crisp vertical column
  const w = 0.12;
  const h = 0.7;
  s.moveTo(-w, -h);
  s.lineTo(w, -h);
  s.lineTo(w, h);
  s.lineTo(-w, h);
  s.closePath();
  return { main: s, width: 0.32 };
}

export function createGShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural G: faceted silhouette with crossbar
  s.moveTo(0.44, 0.38);
  s.lineTo(0.44, 0.7);
  s.lineTo(-0.22, 0.7);
  s.lineTo(-0.44, 0.44);
  s.lineTo(-0.44, -0.44);
  s.lineTo(-0.22, -0.7);
  s.lineTo(0.32, -0.7);
  s.lineTo(0.44, -0.54);
  s.lineTo(0.44, 0.0);
  s.lineTo(0.10, 0.0);
  s.lineTo(0.10, -0.18);
  s.lineTo(0.26, -0.18);
  s.lineTo(0.26, -0.46);
  s.lineTo(-0.16, -0.46);
  s.lineTo(-0.26, -0.36);
  s.lineTo(-0.26, 0.36);
  s.lineTo(-0.16, 0.46);
  s.lineTo(0.26, 0.46);
  s.lineTo(0.26, 0.38);
  s.closePath();
  return { main: s, width: 0.94 };
}

export function createYShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural Y: dual angled arms meeting central keel
  s.moveTo(-0.44, 0.7);
  s.lineTo(-0.20, 0.7);
  s.lineTo(0.0, 0.10);
  s.lineTo(0.20, 0.7);
  s.lineTo(0.44, 0.7);
  s.lineTo(0.12, -0.06);
  s.lineTo(0.12, -0.7);
  s.lineTo(-0.12, -0.7);
  s.lineTo(-0.12, -0.06);
  s.closePath();
  return { main: s, width: 0.94 };
}

export function createAShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural A with cut-out counter (calibrated outer bounds: -0.44 to +0.44)
  s.moveTo(-0.10, 0.7);
  s.lineTo(0.10, 0.7);
  s.lineTo(0.44, -0.7);
  s.lineTo(0.22, -0.7);
  s.lineTo(0.14, -0.32);
  s.lineTo(-0.14, -0.32);
  s.lineTo(-0.22, -0.7);
  s.lineTo(-0.44, -0.7);
  s.closePath();

  // Triangular counter hole
  const hole = new THREE.Path();
  hole.moveTo(0.0, 0.40);
  hole.lineTo(-0.10, -0.12);
  hole.lineTo(0.10, -0.12);
  hole.closePath();
  s.holes.push(hole);

  return { main: s, width: 0.94 };
}

export function createNShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural N (calibrated bounds: -0.42 to +0.42)
  const w = 0.42;
  const col = 0.18;
  s.moveTo(-w, -0.7);
  s.lineTo(-w + col, -0.7);
  s.lineTo(-w + col, 0.22);
  s.lineTo(w - col, -0.7);
  s.lineTo(w, -0.7);
  s.lineTo(w, 0.7);
  s.lineTo(w - col, 0.7);
  s.lineTo(w - col, -0.22);
  s.lineTo(-w + col, 0.7);
  s.lineTo(-w, 0.7);
  s.closePath();
  return { main: s, width: 0.88 };
}

export function createTShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural T: heavy crossbeam, central column (calibrated bounds: -0.44 to +0.44)
  const barW = 0.44;
  const barH = 0.20;
  const colW = 0.11;
  s.moveTo(-barW, 0.7);
  s.lineTo(barW, 0.7);
  s.lineTo(barW, 0.7 - barH);
  s.lineTo(colW, 0.7 - barH);
  s.lineTo(colW, -0.7);
  s.lineTo(-colW, -0.7);
  s.lineTo(-colW, 0.7 - barH);
  s.lineTo(-barW, 0.7 - barH);
  s.closePath();
  return { main: s, width: 0.92 };
}

export function createRShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision architectural R: faceted bowl and braced diagonal leg (calibrated bounds: -0.42 to +0.44)
  s.moveTo(-0.42, -0.7);
  s.lineTo(-0.22, -0.7);
  s.lineTo(-0.22, -0.06);
  s.lineTo(0.10, -0.06);
  s.lineTo(0.32, -0.7);
  s.lineTo(0.52, -0.7);
  s.lineTo(0.26, 0.0);
  s.lineTo(0.40, 0.14);
  s.lineTo(0.40, 0.54);
  s.lineTo(0.28, 0.7);
  s.lineTo(-0.42, 0.7);
  s.closePath();

  // Rectangular bowl hole
  const hole = new THREE.Path();
  hole.moveTo(-0.22, 0.16);
  hole.lineTo(0.18, 0.16);
  hole.lineTo(0.18, 0.46);
  hole.lineTo(-0.22, 0.46);
  hole.closePath();
  s.holes.push(hole);

  return { main: s, width: 0.98 };
}

import * as THREE from 'three';

/**
 * Precision procedural 2D shapes for "2" and "5" designed as architectural monolithic numerals.
 * Crafted with chamfered joints, precision bevel-ready contours, and structural cut-outs.
 * Proportioned to match the VIGYANTRA letterform monument height (~1.4 units tall).
 */

export function createTwoShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision engineered numeral "2" with faceted top curve, angled keel, and grounded base plinth
  s.moveTo(-0.48, -0.7);
  s.lineTo(0.5, -0.7);
  s.lineTo(0.5, -0.44);
  s.lineTo(-0.12, -0.44);
  s.lineTo(0.24, -0.02);
  s.lineTo(0.48, 0.28);
  s.lineTo(0.48, 0.52);
  s.lineTo(0.32, 0.7);
  s.lineTo(-0.32, 0.7);
  s.lineTo(-0.48, 0.54);
  s.lineTo(-0.48, 0.32);
  s.lineTo(-0.24, 0.32);
  s.lineTo(-0.24, 0.46);
  s.lineTo(-0.14, 0.52);
  s.lineTo(0.14, 0.52);
  s.lineTo(0.25, 0.44);
  s.lineTo(0.25, 0.28);
  s.lineTo(-0.48, -0.5);
  s.closePath();

  return { main: s, width: 1.05 };
}

export function createFiveShape(): { main: THREE.Shape; width: number } {
  const s = new THREE.Shape();
  // Precision engineered numeral "5" with architectural top cantilever, notched neck, and chamfered bowl
  s.moveTo(0.46, 0.7);
  s.lineTo(-0.42, 0.7);
  s.lineTo(-0.42, 0.08);
  s.lineTo(0.12, 0.08);
  s.lineTo(0.28, 0.0);
  s.lineTo(0.48, -0.16);
  s.lineTo(0.48, -0.48);
  s.lineTo(0.32, -0.7);
  s.lineTo(-0.36, -0.7);
  s.lineTo(-0.48, -0.56);
  s.lineTo(-0.24, -0.56);
  s.lineTo(-0.14, -0.5);
  s.lineTo(0.18, -0.5);
  s.lineTo(0.26, -0.42);
  s.lineTo(0.26, -0.22);
  s.lineTo(0.14, -0.12);
  s.lineTo(-0.42, -0.12);
  s.lineTo(-0.42, 0.48);
  s.lineTo(0.46, 0.48);
  s.closePath();

  return { main: s, width: 1.05 };
}

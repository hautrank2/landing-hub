import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Group, type Mesh, Vector3 } from "three";
import type { UsePumpjackProps } from "./type";

// Geometry of the rig, in its own local units.
export const PIVOT = { x: 0.2, y: 1.7 };
export const BEAM_REAR = 1.2;
export const CRANK = { x: PIVOT.x - BEAM_REAR, y: 0.85 };
export const CRANK_RADIUS = 0.42;
export const HEAD = { x: 1.55, y: -0.48 };
export const WELL = { x: PIVOT.x + HEAD.x, top: 0.62 };
export const ARM_Z = 0.3;

const UP = new Vector3(0, 1, 0);
const a = new Vector3();
const b = new Vector3();
const dir = new Vector3();

/** Stretch a unit-height cylinder so it spans a → b. */
const span = (mesh: Mesh | null, from: Vector3, to: Vector3) => {
  if (!mesh) return;
  dir.subVectors(to, from);
  mesh.position.addVectors(from, to).multiplyScalar(0.5);
  mesh.scale.set(1, dir.length(), 1);
  mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
};

/**
 * Drives the linkage each frame: the crank turns, and the walking beam rocks by
 * exactly the angle that keeps the pitman arms the same length — so it reads as
 * a real mechanism, not two unrelated animations.
 */
export const usePumpjack = ({ speed = 0.28 }: UsePumpjackProps) => {
  const crank = useRef<Group>(null);
  const beam = useRef<Group>(null);
  const armNear = useRef<Mesh>(null);
  const armFar = useRef<Mesh>(null);
  const bridle = useRef<Mesh>(null);

  useFrame((state) => {
    const theta = state.clock.elapsedTime * speed * Math.PI * 2;
    const phi = -Math.asin((CRANK_RADIUS * Math.sin(theta)) / BEAM_REAR);

    if (crank.current) crank.current.rotation.z = theta;
    if (beam.current) beam.current.rotation.z = phi;

    const pinX = CRANK.x + CRANK_RADIUS * Math.cos(theta);
    const pinY = CRANK.y + CRANK_RADIUS * Math.sin(theta);
    const rearX = PIVOT.x - BEAM_REAR * Math.cos(phi);
    const rearY = PIVOT.y - BEAM_REAR * Math.sin(phi);

    for (const [mesh, z] of [
      [armNear.current, ARM_Z],
      [armFar.current, -ARM_Z],
    ] as const) {
      span(mesh, a.set(pinX, pinY, z), b.set(rearX, rearY, z));
    }

    // Bridle hangs from the bottom of the horsehead down to the wellhead.
    const headY = PIVOT.y + HEAD.x * Math.sin(phi) + HEAD.y * Math.cos(phi);
    span(bridle.current, a.set(WELL.x, headY, 0), b.set(WELL.x, WELL.top, 0));
  });

  return { crank, beam, armNear, armFar, bridle };
};

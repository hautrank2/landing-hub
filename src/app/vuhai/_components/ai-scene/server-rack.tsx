import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, MeshStandardMaterial } from "three";
import { palette } from "./palette";

type LedProps = {
  position: [number, number, number];
  color: string;
  phase: number;
};

const Led = ({ position, color, phase }: LedProps) => {
  const material = useRef<MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (material.current) {
      material.current.emissiveIntensity = 1.4 + Math.sin(clock.elapsedTime * 3.2 + phase) * 1.1;
    }
  });

  return (
    <mesh position={position}>
      <boxGeometry args={[0.07, 0.07, 0.03]} />
      <meshStandardMaterial ref={material} color={color} emissive={color} emissiveIntensity={1.4} />
    </mesh>
  );
};

const unitCount = 7;

/** Tall GPU rack: navy frame, glowing drive bays, blinking status LEDs, a floating GPU chip on top. */
type ServerRackProps = React.ComponentProps<"group"> & {
  /** Number of drive units; the cabinet grows with it. */
  units?: number;
  /** Floating GPU chip above the cabinet (the AI scene hero). */
  chip?: boolean;
};

export const ServerRack = ({ units = unitCount, chip: showChip = true, ...props }: ServerRackProps) => {
  const chip = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!chip.current) return;
    const t = clock.elapsedTime;
    chip.current.rotation.y = t * 0.9;
    chip.current.position.y = 4.1 + Math.sin(t * 1.6) * 0.12;
  });

  return (
    <group {...props}>
      <RoundedBox args={[1.7, units * 0.46 + 0.28, 1.2]} radius={0.1} smoothness={4} position={[0, (units * 0.46 + 0.28) / 2 + 0.2, 0]}>
        <meshStandardMaterial color={palette.navy} roughness={0.35} metalness={0.35} />
      </RoundedBox>

      {Array.from({ length: units }, (_, i) => {
        const y = 0.5 + i * 0.46;
        return (
          <group key={i} position={[0, y, 0.61]}>
            <RoundedBox args={[1.45, 0.36, 0.06]} radius={0.03} smoothness={3}>
              <meshStandardMaterial color={palette.deep} roughness={0.4} metalness={0.3} />
            </RoundedBox>
            {[0, 1, 2, 3].map((bay) => (
              <mesh key={bay} position={[-0.5 + bay * 0.2, 0, 0.035]}>
                <boxGeometry args={[0.15, 0.22, 0.02]} />
                <meshStandardMaterial color={palette.navy} emissive={palette.blue} emissiveIntensity={0.35} />
              </mesh>
            ))}
            <Led position={[0.5, 0.06, 0.04]} color={palette.green} phase={i * 0.9} />
            <Led position={[0.62, 0.06, 0.04]} color={i % 3 === 0 ? palette.amber : palette.cyan} phase={i * 1.7 + 1} />
          </group>
        );
      })}

      {/* Glowing base so the rack reads as lit from within. */}
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[1.9, 0.14, 1.4]} />
        <meshStandardMaterial color={palette.blue} emissive={palette.blue} emissiveIntensity={0.9} />
      </mesh>

      {showChip && (
      <group ref={chip} position={[0, 4.1, 0]}>
        <RoundedBox args={[0.9, 0.12, 0.9]} radius={0.05} smoothness={3}>
          <meshStandardMaterial color={palette.white} roughness={0.25} metalness={0.4} />
        </RoundedBox>
        <mesh position={[0, 0.075, 0]}>
          <boxGeometry args={[0.52, 0.04, 0.52]} />
          <meshStandardMaterial color={palette.blue} emissive={palette.cyan} emissiveIntensity={1.1} />
        </mesh>
        {[-0.3, -0.1, 0.1, 0.3].flatMap((p) => [
          <mesh key={`x${p}`} position={[p, 0, 0.5]}>
            <boxGeometry args={[0.06, 0.04, 0.12]} />
            <meshStandardMaterial color={palette.amber} metalness={0.8} roughness={0.3} />
          </mesh>,
          <mesh key={`y${p}`} position={[p, 0, -0.5]}>
            <boxGeometry args={[0.06, 0.04, 0.12]} />
            <meshStandardMaterial color={palette.amber} metalness={0.8} roughness={0.3} />
          </mesh>,
        ])}
      </group>
      )}
    </group>
  );
};

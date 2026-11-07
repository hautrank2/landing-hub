import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { palette } from "./palette";

type RingProps = {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  nodes: number;
};

const Ring = ({ radius, tilt, speed, nodes }: RingProps) => {
  const spin = useRef<Group>(null);

  useFrame((_, delta) => {
    if (spin.current) spin.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.012, 8, 96]} />
        <meshBasicMaterial color={palette.sky} transparent opacity={0.7} />
      </mesh>
      <group ref={spin}>
        {Array.from({ length: nodes }, (_, i) => {
          const angle = (i / nodes) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
              <boxGeometry args={[0.13, 0.13, 0.13]} />
              <meshStandardMaterial color={palette.cyan} emissive={palette.cyan} emissiveIntensity={1.6} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

/** Data packets circling the rack — the "AI traffic" between the pieces of the scene. */
export const DataOrbit = (props: React.ComponentProps<"group">) => (
  <group {...props}>
    <Ring radius={2.7} tilt={[1.2, 0.2, 0]} speed={0.5} nodes={5} />
    <Ring radius={3.1} tilt={[1.0, -0.5, 0.4]} speed={-0.35} nodes={4} />
  </group>
);

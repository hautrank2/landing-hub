import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, PointLight } from "three";
import { sceneColors } from "./palette";
import { Rod } from "./rod";

const HEIGHT = 4.2;

/** Flare stack with a flickering flame and the glow it throws. */
export const Flare = ({ position }: { position: [number, number, number] }) => {
  const flame = useRef<Group>(null);
  const light = useRef<PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const flicker = 1 + Math.sin(t * 9) * 0.08 + Math.sin(t * 23) * 0.05;
    flame.current?.scale.set(1, flicker, 1);
    if (light.current) light.current.intensity = 6 * flicker;
  });

  return (
    <group position={position}>
      <mesh position={[0, HEIGHT / 2, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.11, HEIGHT, 12]} />
        <meshStandardMaterial color={sceneColors.steelDark} metalness={0.4} roughness={0.4} />
      </mesh>
      {/* Guy wires */}
      {[0, 2.1, 4.2].map((angle) => (
        <Rod
          key={angle}
          from={[0, HEIGHT * 0.8, 0]}
          to={[Math.cos(angle) * 0.9, 0, Math.sin(angle) * 0.9]}
          radius={0.012}
          color={sceneColors.steelDark}
        />
      ))}
      <mesh position={[0, HEIGHT + 0.03, 0]}>
        <cylinderGeometry args={[0.13, 0.1, 0.08, 12]} />
        <meshStandardMaterial color={sceneColors.orange} />
      </mesh>
      <group ref={flame} position={[0, HEIGHT + 0.07, 0]}>
        <mesh position={[0, 0.32, 0]}>
          <coneGeometry args={[0.16, 0.65, 16]} />
          <meshStandardMaterial
            color={sceneColors.flame}
            emissive={sceneColors.flame}
            emissiveIntensity={2.2}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <coneGeometry args={[0.08, 0.38, 12]} />
          <meshStandardMaterial color={sceneColors.flameCore} emissive={sceneColors.flameCore} emissiveIntensity={3} />
        </mesh>
      </group>
      <pointLight ref={light} position={[0, HEIGHT + 0.4, 0]} color={sceneColors.flame} distance={4} decay={2} />
    </group>
  );
};

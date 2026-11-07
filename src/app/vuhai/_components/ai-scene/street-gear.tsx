import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, MeshStandardMaterial } from "three";
import { palette } from "./palette";

const lampColors = [palette.red, palette.amber, palette.green];

/** Smart traffic light: cycles red → green → amber. */
export const TrafficLight = (props: React.ComponentProps<"group">) => {
  const lamps = useRef<(MeshStandardMaterial | null)[]>([]);

  useFrame(({ clock }) => {
    // 0 = red, 1 = amber, 2 = green; 1.4 s per phase.
    const phase = Math.floor(clock.elapsedTime / 1.4) % 3;
    const lit = [0, 2, 1][phase];
    lamps.current.forEach((material, i) => {
      if (material) material.emissiveIntensity = i === lit ? 2.6 : 0.08;
    });
  });

  return (
    <group {...props}>
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 2.3, 16]} />
        <meshStandardMaterial color={palette.steel} roughness={0.3} metalness={0.6} />
      </mesh>
      <RoundedBox args={[0.55, 1.35, 0.4]} radius={0.12} smoothness={4} position={[0, 2.55, 0]}>
        <meshStandardMaterial color={palette.navy} roughness={0.35} metalness={0.3} />
      </RoundedBox>
      {lampColors.map((color, i) => (
        <mesh key={color} position={[0, 3 - i * 0.45, 0.22]}>
          <sphereGeometry args={[0.15, 20, 20]} />
          <meshStandardMaterial
            ref={(material) => {
              lamps.current[i] = material;
            }}
            color={color}
            emissive={color}
            emissiveIntensity={0.08}
          />
        </mesh>
      ))}
      <RoundedBox args={[0.7, 0.28, 0.05]} radius={0.05} position={[0, 1.7, 0.1]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color={palette.blue} emissive={palette.blue} emissiveIntensity={0.6} />
      </RoundedBox>
    </group>
  );
};

/** AI security camera with a sweeping detection beam. */
export const SecurityCamera = (props: React.ComponentProps<"group">) => {
  const head = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (head.current) head.current.rotation.y = Math.sin(clock.elapsedTime * 0.7) * 0.55 + 0.45;
  });

  return (
    <group {...props}>
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 2.8, 16]} />
        <meshStandardMaterial color={palette.steel} roughness={0.3} metalness={0.6} />
      </mesh>
      <group ref={head} position={[0, 2.85, 0]}>
        <RoundedBox args={[0.5, 0.42, 1.0]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color={palette.white} roughness={0.25} metalness={0.2} />
        </RoundedBox>
        <mesh position={[0, 0, 0.52]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.17, 0.17, 0.08, 24]} />
          <meshStandardMaterial color={palette.navy} roughness={0.2} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.57]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={palette.cyan} emissive={palette.cyan} emissiveIntensity={2.4} />
        </mesh>
        <mesh position={[0, 0.27, -0.2]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color={palette.red} emissive={palette.red} emissiveIntensity={2} />
        </mesh>
        {/* Detection beam: apex at the lens, opening forward. */}
        <mesh position={[0, 0, 1.75]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.95, 2.4, 32, 1, true]} />
          <meshBasicMaterial color={palette.cyan} transparent opacity={0.13} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
};

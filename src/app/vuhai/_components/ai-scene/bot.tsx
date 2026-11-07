import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { palette } from "./palette";

/** The AI assistant: hovering white robot that waves and blinks. */
export const Bot = (props: React.ComponentProps<"group">) => {
  const root = useRef<Group>(null);
  const arm = useRef<Group>(null);
  const head = useRef<Group>(null);
  const eyes = useRef<Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (root.current) root.current.position.y = 0.75 + Math.sin(t * 1.8) * 0.1;
    if (arm.current) arm.current.rotation.z = -2.3 + Math.sin(t * 5) * 0.35;
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.8) * 0.3;
      head.current.rotation.z = Math.sin(t * 1.1) * 0.05;
    }
    if (eyes.current) {
      // Blink for a moment every ~3.2 s.
      const blink = t % 3.2 > 3.08 ? 0.1 : 1;
      eyes.current.scale.y = blink;
    }
  });

  return (
    <group {...props}>
      <group ref={root} position={[0, 0.75, 0]}>
        {/* body */}
        <RoundedBox args={[1, 1.05, 0.75]} radius={0.28} smoothness={5} position={[0, 0.55, 0]}>
          <meshStandardMaterial color={palette.white} roughness={0.25} metalness={0.15} />
        </RoundedBox>
        <mesh position={[0, 0.6, 0.38]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color={palette.blue} emissive={palette.cyan} emissiveIntensity={1.2} />
        </mesh>

        {/* head */}
        <group ref={head} position={[0, 1.5, 0]}>
          <RoundedBox args={[1.25, 0.9, 0.95]} radius={0.3} smoothness={5}>
            <meshStandardMaterial color={palette.white} roughness={0.22} metalness={0.15} />
          </RoundedBox>
          <RoundedBox args={[1, 0.56, 0.08]} radius={0.16} smoothness={4} position={[0, 0.02, 0.48]}>
            <meshStandardMaterial color={palette.navy} roughness={0.15} metalness={0.5} />
          </RoundedBox>
          <group ref={eyes} position={[0, 0.04, 0.54]}>
            {[-0.24, 0.24].map((x) => (
              <mesh key={x} position={[x, 0, 0]}>
                <capsuleGeometry args={[0.07, 0.1, 6, 12]} />
                <meshStandardMaterial color={palette.cyan} emissive={palette.cyan} emissiveIntensity={2.2} />
              </mesh>
            ))}
          </group>
          {/* ear pods */}
          {[-0.68, 0.68].map((x) => (
            <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.2, 0.2, 0.14, 24]} />
              <meshStandardMaterial color={palette.blue} roughness={0.3} metalness={0.4} />
            </mesh>
          ))}
          {/* antenna */}
          <mesh position={[0, 0.62, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.3, 8]} />
            <meshStandardMaterial color={palette.steel} />
          </mesh>
          <mesh position={[0, 0.82, 0]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={palette.green} emissive={palette.green} emissiveIntensity={2} />
          </mesh>
        </group>

        {/* arms: left rests, right waves */}
        <group position={[-0.62, 0.9, 0]} rotation={[0, 0, 0.35]}>
          <mesh position={[0, -0.3, 0]}>
            <capsuleGeometry args={[0.1, 0.45, 6, 12]} />
            <meshStandardMaterial color={palette.steel} roughness={0.3} metalness={0.3} />
          </mesh>
        </group>
        <group ref={arm} position={[0.62, 0.9, 0]} rotation={[0, 0, -2.3]}>
          <mesh position={[0, -0.3, 0]}>
            <capsuleGeometry args={[0.1, 0.45, 6, 12]} />
            <meshStandardMaterial color={palette.steel} roughness={0.3} metalness={0.3} />
          </mesh>
          <mesh position={[0, -0.66, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={palette.blue} roughness={0.3} />
          </mesh>
        </group>

        {/* hover thruster */}
        <mesh position={[0, -0.1, 0]}>
          <coneGeometry args={[0.32, 0.4, 24]} />
          <meshStandardMaterial color={palette.deep} roughness={0.3} metalness={0.4} />
        </mesh>
        <mesh position={[0, -0.42, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.2, 0.45, 20]} />
          <meshBasicMaterial color={palette.cyan} transparent opacity={0.45} />
        </mesh>
      </group>
    </group>
  );
};

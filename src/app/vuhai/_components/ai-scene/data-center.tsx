import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, MeshStandardMaterial } from "three";
import { palette } from "./palette";
import { ServerRack } from "./server-rack";

/** A row of cabinets of different heights, like a hall aisle seen from the front. */
const rackRow = [
  { x: -2.4, units: 5 },
  { x: -1.2, units: 7 },
  { x: 0, units: 8 },
  { x: 1.2, units: 7 },
  { x: 2.4, units: 5 },
];

/** Liquid-cooling unit: a glass tank with rising coolant light. */
const CoolingUnit = (props: React.ComponentProps<"group">) => {
  const ring = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.position.y = 0.6 + ((clock.elapsedTime * 0.5) % 1) * 1.8;
  });

  return (
    <group {...props}>
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 2.2, 32]} />
        <meshStandardMaterial color={palette.sky} transparent opacity={0.45} roughness={0.1} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.65, 0.7, 0.2, 32]} />
        <meshStandardMaterial color={palette.navy} roughness={0.4} metalness={0.4} />
      </mesh>
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.65, 0.6, 0.2, 32]} />
        <meshStandardMaterial color={palette.navy} roughness={0.4} metalness={0.4} />
      </mesh>
      <group ref={ring}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.04, 10, 40]} />
          <meshStandardMaterial color={palette.cyan} emissive={palette.cyan} emissiveIntensity={1.6} />
        </mesh>
      </group>
    </group>
  );
};

/** Backup power: stacked battery blocks with a pulsing charge light. */
const PowerUnit = (props: React.ComponentProps<"group">) => {
  const light = useRef<MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (light.current) light.current.emissiveIntensity = 1.2 + Math.sin(clock.elapsedTime * 2.4) * 0.9;
  });

  return (
    <group {...props}>
      {[0, 1].map((i) => (
        <RoundedBox key={i} args={[1.2, 0.9, 1]} radius={0.08} smoothness={3} position={[0, 0.55 + i * 1, 0]}>
          <meshStandardMaterial color={palette.deep} roughness={0.4} metalness={0.35} />
        </RoundedBox>
      ))}
      {[0, 1].map((i) => (
        <mesh key={i} position={[0, 0.55 + i * 1, 0.52]}>
          <boxGeometry args={[0.8, 0.12, 0.02]} />
          <meshStandardMaterial
            ref={i === 0 ? light : undefined}
            color={palette.green}
            emissive={palette.green}
            emissiveIntensity={1.4}
          />
        </mesh>
      ))}
      <mesh position={[0, 2.25, 0]}>
        <boxGeometry args={[0.16, 0.5, 0.16]} />
        <meshStandardMaterial color={palette.amber} emissive={palette.amber} emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
};

/** Floating network links above the racks, with data packets running along them. */
const NetworkBeam = () => {
  const packet = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (packet.current) packet.current.position.x = Math.sin(clock.elapsedTime * 1.2) * 2.5;
  });

  return (
    <group position={[0, 3.3, 0.4]}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 5.4, 12]} />
        <meshStandardMaterial color={palette.blue} emissive={palette.cyan} emissiveIntensity={1.3} />
      </mesh>
      <group ref={packet}>
        <mesh>
          <sphereGeometry args={[0.14, 20, 20]} />
          <meshStandardMaterial color={palette.white} emissive={palette.cyan} emissiveIntensity={2.4} />
        </mesh>
      </group>
    </group>
  );
};

/** Server hall: a row of cabinets, a cooling tank, backup power and a network beam. */
export const DataCenterHall = (props: React.ComponentProps<"group">) => (
  <group {...props}>
    {rackRow.map((rack) => (
      <ServerRack key={rack.x} position={[rack.x, 0.02, -0.6]} scale={0.65} units={rack.units} chip={false} />
    ))}
    <CoolingUnit position={[-3.2, 0, 1.2]} />
    <PowerUnit position={[3.2, 0, 1.2]} />
    <NetworkBeam />
  </group>
);

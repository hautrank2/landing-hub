"use client";

import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { Bot } from "./bot";
import { DataCenterHall } from "./data-center";
import { DataOrbit } from "./data-orbit";
import { LabelAnchors } from "./label-anchors";
import { palette } from "./palette";
import { ServerRack } from "./server-rack";
import { SecurityCamera, TrafficLight } from "./street-gear";
import type { AiSceneProps } from "./type";

/** Gentle idle sway so the scene never looks frozen, even before the visitor drags it. */
const Sway = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.elapsedTime * 0.35) * 0.28;
  });

  return <group ref={group}>{children}</group>;
};

// Default export so `next/dynamic` can load three.js lazily.
export default function AiScene({ active, still, labels, variant, items }: AiSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      frameloop={active ? "always" : "demand"}
      camera={{ position: [0, 3.8, variant === "data-center" ? 19 : 15.5], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.1} />
      <hemisphereLight args={["#ffffff", "#9cc4f0", 1.4]} />
      <directionalLight position={[5, 9, 6]} intensity={2.6} />
      <pointLight position={[0, 2.2, 2.5]} intensity={14} color={palette.cyan} distance={9} />

      <Sway>
        <group position={[0, -0.4, 0]}>
          {/* glass platform */}
          <mesh position={[0, -0.05, 0]}>
            <cylinderGeometry args={[3.7, 3.85, 0.14, 72]} />
            <meshStandardMaterial color={palette.white} roughness={0.15} metalness={0.3} transparent opacity={0.92} />
          </mesh>
          <mesh position={[0, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.55, 0.045, 12, 96]} />
            <meshStandardMaterial color={palette.blue} emissive={palette.blue} emissiveIntensity={1.4} />
          </mesh>

          {variant === "data-center" ? (
            <DataCenterHall />
          ) : (
            <>
              <ServerRack position={[0, 0.02, -0.4]} />
              <Bot position={[-1.95, 0, 1.2]} rotation={[0, 0.5, 0]} />
              <SecurityCamera position={[-2.7, 0, -1]} rotation={[0, 0.2, 0]} />
              <TrafficLight position={[2.5, 0, 0.9]} rotation={[0, -0.35, 0]} />
              <DataOrbit position={[0, 2.2, -0.4]} />
            </>
          )}

          <Sparkles count={46} scale={[8, 6, 6]} position={[0, 2.6, 0]} size={4.5} speed={0.45} color={palette.sky} />

          <LabelAnchors targets={labels} items={items} />
        </group>
      </Sway>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        autoRotate={false}
        minPolarAngle={1.15}
        maxPolarAngle={1.6}
        minAzimuthAngle={-0.8}
        maxAzimuthAngle={0.8}
        target={[0, 1.9, 0]}
        enabled={!still}
      />
    </Canvas>
  );
}

"use client";

import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { RefObject } from "react";
import { Facility } from "./facility";
import { Flare } from "./flare";
import { LabelAnchors } from "./label-anchors";
import { Pumpjack } from "./pumpjack";

type OilFieldSceneProps = {
  /** False while the hero is off-screen, so the GPU idles. */
  active: boolean;
  still: boolean;
  labels: RefObject<(HTMLElement | null)[]>;
};

// Default export so `next/dynamic` can load it, and three.js with it, lazily.
export default function OilFieldScene({ active, still, labels }: OilFieldSceneProps) {
  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 2]}
      frameloop={active && !still ? "always" : "demand"}
      camera={{ position: [12.5, 8.5, 14], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.9} />
      <hemisphereLight args={["#ffffff", "#dbe3ee", 1.3]} />
      <directionalLight
        position={[6, 11, 5]}
        intensity={2.4}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-bottom={-7}
        shadow-bias={-0.0004}
      />

      <Float speed={1.1} rotationIntensity={0.06} floatIntensity={0.3}>
        <group position={[0, -1.6, 0]}>
          <Facility />
          <Pumpjack position={[-0.55, 0.25, 1.3]} />
          <Flare position={[3.1, 0.25, 1.6]} />
          <LabelAnchors targets={labels} />
        </group>
      </Float>

      <ContactShadows position={[0, -1.75, 0]} opacity={0.28} scale={15} blur={2.8} far={4} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!still}
        autoRotateSpeed={0.6}
        minPolarAngle={0.85}
        maxPolarAngle={1.3}
        target={[0, 0.6, 0]}
      />
    </Canvas>
  );
}

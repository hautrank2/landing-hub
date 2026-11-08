import { useFrame, useThree } from "@react-three/fiber";
import { type RefObject, useRef } from "react";
import { type Object3D, Vector3 } from "three";
import type { SceneLabelModel } from "./labels";

const world = new Vector3();

/**
 * Empty anchors inside the swaying group; each frame their screen position is written
 * onto the matching DOM label (drei's <Html> mounts a React root per label and trips
 * React 19 during dev remounts).
 */
export const LabelAnchors = ({ targets, items }: { targets: RefObject<(HTMLElement | null)[]>; items: SceneLabelModel[] }) => {
  const anchors = useRef<(Object3D | null)[]>([]);
  const { camera, size } = useThree();

  useFrame(() => {
    anchors.current.forEach((anchor, index) => {
      const el = targets.current[index];
      if (!anchor || !el) return;
      anchor.getWorldPosition(world).project(camera);
      const x = ((world.x + 1) / 2) * size.width;
      const y = ((1 - world.y) / 2) * size.height;
      el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      el.style.opacity = world.z < 1 ? "1" : "0";
    });
  });

  return (
    <>
      {items.map((label, index) => (
        <object3D
          key={label.text}
          position={label.position}
          ref={(node) => {
            anchors.current[index] = node;
          }}
        />
      ))}
    </>
  );
};

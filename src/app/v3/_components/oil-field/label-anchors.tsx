import { useFrame, useThree } from "@react-three/fiber";
import { type RefObject, useRef } from "react";
import { type Object3D, Vector3 } from "three";
import { sceneLabels } from "./labels";

const world = new Vector3();

/**
 * Empty anchors in the scene; each frame their screen position is written
 * straight onto the matching DOM label. Cheaper than drei's <Html>, which
 * mounts a React root per label.
 */
export const LabelAnchors = ({
  targets,
}: {
  targets: RefObject<(HTMLElement | null)[]>;
}) => {
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
      {sceneLabels.map((label, index) => (
        <object3D
          key={label.tag}
          position={label.position}
          ref={(node) => {
            anchors.current[index] = node;
          }}
        />
      ))}
    </>
  );
};

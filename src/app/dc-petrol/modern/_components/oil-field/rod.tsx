import { useMemo } from "react";
import { Quaternion, Vector3 } from "three";

const UP = new Vector3(0, 1, 0);

type RodProps = {
  from: [number, number, number];
  to: [number, number, number];
  radius?: number;
  color: string;
};

/** A static cylinder stretched between two points — pipes, legs, braces. */
export const Rod = ({ from, to, radius = 0.05, color }: RodProps) => {
  const { position, quaternion, length } = useMemo(() => {
    const a = new Vector3(...from);
    const b = new Vector3(...to);
    const dir = b.clone().sub(a);
    return {
      position: a.clone().add(b).multiplyScalar(0.5),
      quaternion: new Quaternion().setFromUnitVectors(UP, dir.clone().normalize()),
      length: dir.length(),
    };
  }, [from, to]);

  return (
    <mesh position={position} quaternion={quaternion} castShadow receiveShadow>
      <cylinderGeometry args={[radius, radius, length, 14]} />
      <meshStandardMaterial color={color} metalness={0.35} roughness={0.45} />
    </mesh>
  );
};

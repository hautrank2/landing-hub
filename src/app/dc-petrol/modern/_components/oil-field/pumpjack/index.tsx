import { sceneColors } from "../palette";
import { Rod } from "../rod";
import {
  ARM_Z,
  BEAM_REAR,
  CRANK,
  CRANK_RADIUS,
  HEAD,
  PIVOT,
  WELL,
  usePumpjack,
} from "./hook";
import type { PumpjackProps } from "./type";

const steel = { color: sceneColors.steel, metalness: 0.4, roughness: 0.4 };
const navy = { color: sceneColors.navy, metalness: 0.3, roughness: 0.5 };
const orange = { color: sceneColors.orange, metalness: 0.2, roughness: 0.45 };

/** Beam pumping unit ("nodding donkey") with a working linkage. */
export const Pumpjack = ({ position, rotation, speed }: PumpjackProps) => {
  const { crank, beam, armNear, armFar, bridle } = usePumpjack({ speed });

  return (
    <group position={position} rotation={rotation}>
      {/* Skid */}
      <mesh position={[0.3, 0.08, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.3, 0.16, 0.95]} />
        <meshStandardMaterial {...navy} />
      </mesh>

      {/* Samson post: an A-frame on each side */}
      {[ARM_Z + 0.08, -ARM_Z - 0.08].map((z) => (
        <group key={z}>
          <Rod from={[-0.3, 0.16, z]} to={[PIVOT.x, PIVOT.y, z * 0.4]} radius={0.06} color={sceneColors.steelDark} />
          <Rod from={[0.75, 0.16, z]} to={[PIVOT.x, PIVOT.y, z * 0.4]} radius={0.06} color={sceneColors.steelDark} />
        </group>
      ))}

      {/* Gearbox and its pedestal */}
      <mesh position={[CRANK.x, 0.45, 0]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.42]} />
        <meshStandardMaterial {...navy} />
      </mesh>

      {/* Crank with counterweights, both sides */}
      <group ref={crank} position={[CRANK.x, CRANK.y, 0]}>
        {[ARM_Z, -ARM_Z].map((z) => (
          <group key={z} position={[0, 0, z]}>
            <mesh position={[CRANK_RADIUS / 2 - 0.25, 0, 0]} castShadow>
              <boxGeometry args={[CRANK_RADIUS + 0.5, 0.16, 0.08]} />
              <meshStandardMaterial {...navy} />
            </mesh>
            <mesh position={[-0.42, 0, 0]} castShadow>
              <boxGeometry args={[0.38, 0.55, 0.12]} />
              <meshStandardMaterial {...orange} />
            </mesh>
          </group>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.07, ARM_Z * 2 + 0.1, 12]} />
          <meshStandardMaterial {...steel} />
        </mesh>
      </group>

      {/* Pitman arms — positioned every frame */}
      {[armNear, armFar].map((ref, index) => (
        <mesh key={index} ref={ref} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 1, 10]} />
          <meshStandardMaterial {...steel} />
        </mesh>
      ))}

      {/* Walking beam with horsehead */}
      <group ref={beam} position={[PIVOT.x, PIVOT.y, 0]}>
        <mesh position={[0.15, 0.05, 0]} castShadow>
          <boxGeometry args={[2.85, 0.2, 0.22]} />
          <meshStandardMaterial {...orange} />
        </mesh>
        <mesh position={[-BEAM_REAR, -0.02, 0]} castShadow>
          <boxGeometry args={[0.12, 0.2, ARM_Z * 2 + 0.12]} />
          <meshStandardMaterial {...navy} />
        </mesh>
        <mesh position={[HEAD.x - 0.08, -0.17, 0]} castShadow>
          <boxGeometry args={[0.2, 0.68, 0.3]} />
          <meshStandardMaterial {...orange} />
        </mesh>
        <mesh position={[HEAD.x - 0.28, 0.0, 0]} rotation={[0, 0, 0.55]} castShadow>
          <boxGeometry args={[0.35, 0.3, 0.26]} />
          <meshStandardMaterial {...orange} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 12]} />
          <meshStandardMaterial {...steel} />
        </mesh>
      </group>

      {/* Bridle / polished rod — positioned every frame */}
      <mesh ref={bridle}>
        <cylinderGeometry args={[0.022, 0.022, 1, 8]} />
        <meshStandardMaterial {...navy} />
      </mesh>

      {/* Wellhead ("christmas tree") */}
      <group position={[WELL.x, 0.16, 0]}>
        <mesh position={[0, 0.2, 0]} castShadow>
          <cylinderGeometry args={[0.13, 0.16, 0.4, 16]} />
          <meshStandardMaterial {...steel} />
        </mesh>
        <mesh position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.13, 0.03, 8, 20]} />
          <meshStandardMaterial {...orange} />
        </mesh>
      </group>
    </group>
  );
};

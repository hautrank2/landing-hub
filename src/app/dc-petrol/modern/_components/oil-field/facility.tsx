import { sceneColors } from "./palette";
import { Rod } from "./rod";

const DECK = 0.25;

const steel = { color: sceneColors.steel, metalness: 0.35, roughness: 0.4 };

const Tank = ({ x, z, r, h }: { x: number; z: number; r: number; h: number }) => (
  <group position={[x, DECK, z]}>
    <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[r, r, h, 40]} />
      <meshStandardMaterial {...steel} />
    </mesh>
    <mesh position={[0, h, 0]} scale={[1, 0.22, 1]} castShadow>
      <sphereGeometry args={[r, 40, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial {...steel} />
    </mesh>
    <mesh position={[0, h * 0.68, 0]}>
      <cylinderGeometry args={[r + 0.012, r + 0.012, 0.14, 40]} />
      <meshStandardMaterial color={sceneColors.orange} roughness={0.5} />
    </mesh>
    <mesh position={[0, h * 0.68 - 0.16, 0]}>
      <cylinderGeometry args={[r + 0.01, r + 0.01, 0.05, 40]} />
      <meshStandardMaterial color={sceneColors.navy} roughness={0.5} />
    </mesh>
  </group>
);

const Column = ({
  x,
  z,
  r,
  h,
  decks,
}: {
  x: number;
  z: number;
  r: number;
  h: number;
  decks: number[];
}) => (
  <group position={[x, DECK, z]}>
    <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[r, r * 1.08, h, 28]} />
      <meshStandardMaterial {...steel} />
    </mesh>
    <mesh position={[0, h, 0]} castShadow>
      <sphereGeometry args={[r, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial {...steel} />
    </mesh>
    {decks.map((y) => (
      <group key={y} position={[0, y, 0]}>
        <mesh>
          <cylinderGeometry args={[r + 0.2, r + 0.2, 0.04, 28]} />
          <meshStandardMaterial color={sceneColors.navy} />
        </mesh>
        <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r + 0.2, 0.012, 6, 32]} />
          <meshStandardMaterial color={sceneColors.orange} />
        </mesh>
      </group>
    ))}
  </group>
);

/** Everything on the deck that does not move: tanks, columns, pipe rack. */
export const Facility = () => (
  <group>
    {/* Deck: a round plinth with an orange safety edge */}
    <mesh position={[0, DECK / 2, 0]} receiveShadow>
      <cylinderGeometry args={[4.4, 4.5, DECK, 72]} />
      <meshStandardMaterial color={sceneColors.concrete} roughness={0.9} />
    </mesh>
    <mesh position={[0, DECK + 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <ringGeometry args={[4.12, 4.3, 72]} />
      <meshStandardMaterial color={sceneColors.orange} roughness={0.6} />
    </mesh>
    <mesh position={[0, DECK + 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[4.12, 72]} />
      <meshStandardMaterial color={sceneColors.deck} roughness={0.95} />
    </mesh>

    <Tank x={-2.35} z={-1.3} r={0.85} h={1.45} />
    <Tank x={-0.6} z={-2.55} r={0.7} h={1.15} />
    <Tank x={-2.7} z={0.75} r={0.5} h={0.8} />

    <Column x={2.15} z={-1.45} r={0.3} h={3.9} decks={[1.3, 2.4, 3.4]} />
    <Column x={2.95} z={-0.45} r={0.2} h={2.6} decks={[1.5]} />

    {/* Pipe rack between the tank farm and the columns */}
    {[-1.4, -0.2, 1.0].map((x) => (
      <group key={x}>
        <Rod from={[x, DECK, -0.35]} to={[x, DECK + 0.62, -0.35]} radius={0.035} color={sceneColors.steelDark} />
        <Rod from={[x, DECK, -0.85]} to={[x, DECK + 0.62, -0.85]} radius={0.035} color={sceneColors.steelDark} />
      </group>
    ))}
    <Rod from={[-1.6, DECK + 0.58, -0.45]} to={[2.15, DECK + 0.58, -0.45]} radius={0.07} color={sceneColors.pipe} />
    <Rod from={[-1.6, DECK + 0.58, -0.75]} to={[2.15, DECK + 0.58, -0.75]} radius={0.055} color={sceneColors.orange} />
    <Rod from={[2.15, DECK + 0.58, -0.45]} to={[2.15, DECK + 0.58, -1.15]} radius={0.07} color={sceneColors.pipe} />
    <Rod from={[-1.6, DECK + 0.58, -0.45]} to={[-1.6, DECK + 0.58, -1.0]} radius={0.07} color={sceneColors.pipe} />

    {/* Flowline from the wellhead to the rack */}
    <Rod from={[1.15, DECK + 0.25, 1.3]} to={[1.15, DECK + 0.25, -0.45]} radius={0.05} color={sceneColors.pipe} />
    <Rod from={[1.15, DECK + 0.25, -0.45]} to={[1.15, DECK + 0.58, -0.45]} radius={0.05} color={sceneColors.pipe} />
  </group>
);

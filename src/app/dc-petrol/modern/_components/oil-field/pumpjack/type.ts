export type PumpjackProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  /** Strokes per second, roughly. */
  speed?: number;
};

export type UsePumpjackProps = Pick<PumpjackProps, "speed">;

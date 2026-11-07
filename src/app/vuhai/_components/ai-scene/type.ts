import type { RefObject } from "react";

export type AiSceneProps = {
  /** DOM labels the scene moves every frame; see `LabelAnchors`. */
  labels: RefObject<(HTMLElement | null)[]>;
  /** False while the banner is off-screen, so the GPU idles. */
  active: boolean;
  /** The visitor prefers reduced motion: no drag-to-rotate. */
  still: boolean;
};

export type AiSceneViewProps = React.ComponentProps<"div">;

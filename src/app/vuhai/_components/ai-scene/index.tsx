"use client";

import { Move3d } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "~/lib/utils";
import { useAiScene } from "./hook";
import { sceneLabels } from "./labels";
import type { AiSceneViewProps } from "./type";

const Scene = dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => (
    <div className="flex size-full items-center justify-center">
      <span className="size-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
    </div>
  ),
});

/** Transparent 3D canvas — sits straight on the banner background. */
export const AiScene = ({ className, ...props }: AiSceneViewProps) => {
  const { ref, labels, active, still } = useAiScene();

  return (
    <div ref={ref} className={cn("relative cursor-grab active:cursor-grabbing", className)} {...props}>
      <Scene active={active} still={still} labels={labels} />
      {sceneLabels.map((label, index) => (
        <span
          key={label.text}
          ref={(node) => {
            labels.current[index] = node;
          }}
          className="pointer-events-none absolute top-0 left-0 flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/90 px-3 py-1 text-xs font-bold whitespace-nowrap text-navy opacity-0 shadow-lg backdrop-blur transition-opacity"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          {label.text}
        </span>
      ))}
      <p className="pointer-events-none absolute right-2 bottom-2 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur">
        <Move3d className="size-3.5 text-primary" />
        Kéo để xoay
      </p>
    </div>
  );
};

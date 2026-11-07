"use client";

import { Move3d } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "~/lib/utils";
import { sceneLabels } from "../oil-field/labels";
import { useHeroModel } from "./hook";
import type { HeroModelProps } from "./type";

const OilFieldScene = dynamic(() => import("../oil-field/scene"), {
  ssr: false,
  loading: () => (
    <div className="flex size-full items-center justify-center">
      <span className="size-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
    </div>
  ),
});

export const HeroModel = ({ className }: HeroModelProps) => {
  const { ref, labels, active, still } = useHeroModel();

  return (
    <div ref={ref} className={cn("relative cursor-grab overflow-hidden active:cursor-grabbing", className)}>
      <OilFieldScene active={active} still={still} labels={labels} />

      {sceneLabels.map((label, index) => (
        <div
          key={label.tag}
          ref={(node) => {
            labels.current[index] = node;
          }}
          className="pointer-events-none absolute top-0 left-0 flex items-center gap-1.5 rounded-full border bg-background/90 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap opacity-0 shadow-md backdrop-blur transition-opacity"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="text-muted-foreground">{label.tag}</span>
          {label.name}
        </div>
      ))}

      <p className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
        <Move3d className="size-3.5 text-primary" />
        Drag to explore
      </p>
    </div>
  );
};

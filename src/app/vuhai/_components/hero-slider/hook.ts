import { useCallback, useEffect, useState } from "react";
import type { UseHeroSliderProps } from "./type";

export const useHeroSlider = ({ count, interval }: UseHeroSliderProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [paused, count, interval]);

  return {
    index,
    go,
    next: () => go(index + 1),
    prev: () => go(index - 1),
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
};

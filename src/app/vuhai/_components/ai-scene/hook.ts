import { useEffect, useRef, useState } from "react";

/** Tracks whether the scene is on screen and whether motion is welcome. */
export const useAiScene = () => {
  const ref = useRef<HTMLDivElement>(null);
  const labels = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(true);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry?.isIntersecting ?? true));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, labels, active, still };
};

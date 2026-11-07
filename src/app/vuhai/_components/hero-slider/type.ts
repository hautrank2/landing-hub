export type HeroSlideModel = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export type HeroSliderProps = {
  slides: HeroSlideModel[];
  /** Milliseconds between automatic slides. */
  interval?: number;
};

export type UseHeroSliderProps = {
  count: number;
  interval: number;
};

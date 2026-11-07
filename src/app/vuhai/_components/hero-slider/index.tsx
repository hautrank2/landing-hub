"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { useHeroSlider } from "./hook";
import type { HeroSliderProps } from "./type";

export const HeroSlider = ({ slides, interval = 7000 }: HeroSliderProps) => {
  const { index, go, next, prev, pause, resume } = useHeroSlider({ count: slides.length, interval });

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Banner giới thiệu"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      className="relative"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}: ${slide.label}`}
              aria-hidden={i !== index}
              inert={i !== index}
              className="h-[calc(100svh-5rem)] min-h-[44rem] w-full shrink-0 lg:min-h-[36rem]"
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Banner trước"
        className="absolute top-1/2 left-3 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-md hover:bg-white md:grid"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Banner sau"
        className="absolute top-1/2 right-3 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-md hover:bg-white md:grid"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Chuyển tới banner ${slide.label}`}
            aria-current={i === index}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};

"use client";

import { Menu, X } from "lucide-react";
import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useSiteHeader } from "./hook";
import type { SiteHeaderProps } from "./type";

export const SiteHeader = ({ items }: SiteHeaderProps) => {
  const { scrolled, open, toggle, close } = useSiteHeader();
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-ink-foreground transition-colors duration-300",
        solid
          ? "border-b border-ink-border bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="D&C Petrol Trading — home" onClick={close}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold tracking-[0.14em] uppercase text-ink-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="font-display tracking-wider uppercase">
            <a href="#contact">Enquire</a>
          </Button>
        </nav>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-md hover:bg-ink-raised md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-ink-border px-4 pb-6 pt-2 md:hidden"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="block border-b border-ink-border py-3.5 font-display text-base font-semibold tracking-[0.14em] uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

import { Menu } from "lucide-react";
import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import type { NavItemModel } from "~/types";

type DaylightHeaderProps = {
  items: NavItemModel[];
};

// The mobile menu is a native <details>, so the header ships no client JS.
export const DaylightHeader = ({ items }: DaylightHeaderProps) => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="#top" aria-label="D&C Petrol Trading — home" className="text-foreground">
        <Logo />
      </a>

      <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-display text-sm font-semibold tracking-[0.14em] text-foreground/75 uppercase transition-colors hover:text-flame-deep"
          >
            {item.label}
          </a>
        ))}
        <Button asChild size="sm" className="font-display tracking-wider uppercase">
          <a href="#contact">Enquire</a>
        </Button>
      </nav>

      <details className="group md:hidden">
        <summary
          aria-label="Menu"
          className="-mr-2 flex size-10 cursor-pointer list-none items-center justify-center rounded-md hover:bg-secondary [&::-webkit-details-marker]:hidden"
        >
          <Menu className="size-5" />
        </summary>
        <nav
          aria-label="Main"
          className="absolute inset-x-0 top-18 border-b bg-background px-4 pb-6 shadow-lg"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block border-b py-3.5 font-display text-base font-semibold tracking-[0.14em] uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </div>
  </header>
);

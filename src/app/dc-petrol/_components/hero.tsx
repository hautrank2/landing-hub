import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { companyData } from "~/data/company";
import { cn } from "~/lib/utils";
import { formatDate } from "~/utils/date";
import { RefinerySkyline } from "./refinery-skyline";

const facts = [
  { label: "UEN", value: companyData.uen },
  { label: "Incorporated", value: formatDate(companyData.incorporatedOn) },
  { label: "Primary SSIC", value: companyData.activities[0]?.ssic ?? "" },
  { label: "Headquarters", value: "Tuas, Singapore" },
];

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-ink-foreground"
  >
    <div
      aria-hidden
      className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
    />
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_100%,color-mix(in_oklch,var(--primary)_38%,transparent),transparent_70%)]"
    />

    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-32 pb-10 sm:px-6 lg:px-8">
      <p className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase">
        <span aria-hidden className="bg-hazard h-2.5 w-12" />
        Singapore · Wholesale fuels &amp; energy trading
      </p>

      <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-bold tracking-tight uppercase sm:text-6xl lg:text-[5.5rem]">
        Fuelling trade from{" "}
        <span className="text-flame">Asia&apos;s energy hub</span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
        {companyData.displayName} is a
        Singapore-incorporated wholesale trader of fuels and related products,
        connecting dependable supply with commercial, industrial and marine
        buyers.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button
          asChild
          size="lg"
          className="h-12 px-7 font-display text-base tracking-wider uppercase"
        >
          <a href="#business">
            Our business <ArrowRight />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 border-ink-border bg-transparent px-7 font-display text-base tracking-wider text-ink-foreground uppercase hover:bg-ink-raised hover:text-ink-foreground"
        >
          <a href="#contact">Contact us</a>
        </Button>
      </div>
    </div>

    <RefinerySkyline className="h-44 w-full sm:h-60 lg:h-72" />

    <dl className="relative border-t border-ink-border bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <div
            key={fact.label}
            className={cn(
              "border-ink-border px-4 py-5 sm:px-6 lg:px-8",
              index % 2 === 1 && "border-l",
              index >= 2 && "border-t lg:border-t-0",
              index === 2 && "lg:border-l"
            )}
          >
            <dt className="text-xs font-medium tracking-[0.2em] text-ink-muted uppercase">
              {fact.label}
            </dt>
            <dd className="mt-1.5 font-display text-xl font-semibold tracking-wide sm:text-2xl">
              {fact.value}
            </dd>
          </div>
        ))}
      </div>
    </dl>
  </section>
);

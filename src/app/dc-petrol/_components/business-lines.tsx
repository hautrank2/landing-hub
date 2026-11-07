import { Boxes, Fuel } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { companyData } from "~/data/company";
import { cn } from "~/lib/utils";
import { SectionHeading } from "./section-heading";

export const BusinessLines = () => (
  <section id="business" className="bg-muted py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title="Two registered lines of business"
          description="Registered under the Singapore Standard Industrial Classification (SSIC), our activities centre on fuels and extend to general wholesale trade."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {companyData.activities.map((activity, index) => {
          const Icon = activity.primary ? Fuel : Boxes;

          return (
            <Reveal
              key={activity.ssic}
              delay={index * 120}
              className={activity.primary ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-lg p-8 sm:p-10",
                  activity.primary
                    ? "bg-ink text-ink-foreground"
                    : "border bg-card text-card-foreground"
                )}
              >
                {activity.primary && (
                  <div
                    aria-hidden
                    className="absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_35%,transparent),transparent_70%)]"
                  />
                )}

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-md",
                      activity.primary
                        ? "bg-primary text-primary-foreground"
                        : "bg-ink text-primary"
                    )}
                  >
                    <Icon className="size-7" />
                  </span>
                  <span
                    className={cn(
                      "rounded-sm border px-3 py-1 font-display text-xs font-semibold tracking-[0.18em] uppercase",
                      activity.primary
                        ? "border-primary/50 text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {activity.primary ? "Primary" : "Secondary"} · SSIC{" "}
                    {activity.ssic}
                  </span>
                </div>

                <h3 className="relative mt-8 font-display text-3xl leading-tight font-bold tracking-tight uppercase sm:text-4xl">
                  {activity.title}
                </h3>
                <p
                  className={cn(
                    "relative mt-4 text-lg leading-relaxed",
                    activity.primary ? "text-ink-muted" : "text-muted-foreground"
                  )}
                >
                  {activity.description}
                </p>

                <ul
                  className={cn(
                    "relative mt-auto grid gap-x-6 gap-y-3 pt-10",
                    activity.primary && "sm:grid-cols-2"
                  )}
                >
                  {activity.scope.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-center gap-3 border-t pt-3 font-medium",
                        activity.primary && "border-ink-border"
                      )}
                    >
                      <span
                        aria-hidden
                        className="size-2 shrink-0 rotate-45 bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

import { Anchor, Factory, Globe2, Scale } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { SectionHeading } from "./section-heading";

const advantages = [
  {
    icon: Globe2,
    title: "Global trading hub",
    body: "Singapore is one of Asia's leading centres for oil trading, pricing and risk management.",
  },
  {
    icon: Anchor,
    title: "World-class bunkering port",
    body: "The Port of Singapore ranks among the busiest bunkering ports in the world.",
  },
  {
    icon: Factory,
    title: "Refining on our doorstep",
    body: "Our Tuas office sits close to the Jurong Island refining and petrochemical cluster.",
  },
  {
    icon: Scale,
    title: "Trusted rule of law",
    body: "A transparent, stable legal framework that counterparties around the world rely on.",
  },
];

export const SingaporeHub = () => (
  <section className="relative isolate overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
    <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
    <p
      aria-hidden
      className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 -translate-x-1/2 font-display text-[9rem] leading-none font-bold tracking-tight whitespace-nowrap text-ink-foreground/[0.03] uppercase sm:text-[14rem]"
    >
      Singapore
    </p>

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          tone="ink"
          eyebrow="Why Singapore"
          title="Positioned at the crossroads of energy flows"
          description="Being based in Singapore gives our customers access to deep liquidity, efficient logistics and a counterparty governed by one of the world's most respected legal systems."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((item, index) => (
          <Reveal key={item.title} delay={index * 100} className="bg-ink">
            <div className="group h-full p-8 transition-colors hover:bg-ink-raised">
              <item.icon className="size-9 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl font-bold tracking-wide uppercase">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

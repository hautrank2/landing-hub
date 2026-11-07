import { ClipboardCheck, Handshake, Search, Ship } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    icon: Search,
    title: "Sourcing",
    body: "We source product from established refiners, terminals and suppliers matched to each customer's specification.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality & compliance",
    body: "Specifications, inspection, documentation and counterparty checks are confirmed before every lifting.",
  },
  {
    icon: Ship,
    title: "Logistics",
    body: "Storage, shipping and delivery windows are coordinated end to end with our logistics partners.",
  },
  {
    icon: Handshake,
    title: "Delivery & settlement",
    body: "Product is delivered as contracted and settled transparently, with one point of contact throughout.",
  },
];

export const Operations = () => (
  <section id="operations" className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title="From source to delivery"
          description="A disciplined, four-stage process keeps every cargo traceable, compliant and on time."
        />
      </Reveal>

      <div className="relative mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
        {/* The pipeline that ties the stages together. */}
        <span
          aria-hidden
          className="absolute top-7 bottom-7 left-7 w-1 rounded-full bg-gradient-to-b from-primary to-steel lg:top-7 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-1 lg:w-auto lg:bg-gradient-to-r"
        />
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 120}>
            <article className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 flex size-15 shrink-0 items-center justify-center rounded-full border-4 border-background bg-ink text-primary shadow-md ring-2 ring-primary">
                <step.icon className="size-6" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-flame-deep uppercase">
                  Stage {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

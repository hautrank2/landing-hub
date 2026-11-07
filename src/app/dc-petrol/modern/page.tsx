import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ClipboardCheck,
  Factory,
  Fuel,
  Globe2,
  Handshake,
  Menu,
  Navigation,
  Scale,
  Search,
  Ship,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/ui/reveal";
import { companyData, fullAddress, mapUrl } from "~/data/company";
import { advantagesData, stepsData, valuesData } from "~/data/content";
import { navData } from "~/data/site";
import { cn } from "~/lib/utils";
import { formatDate } from "~/utils/date";
import { HeroModel } from "./_components/hero-model";

const valueIcons = [ShieldCheck, Truck, Handshake];
const advantageIcons = [Globe2, Anchor, Factory, Scale];
const stepIcons = [Search, ClipboardCheck, Ship, Handshake];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-flame-deep shadow-xs">
    <span className="size-1.5 rounded-full bg-primary" />
    {children}
  </p>
);

const Heading = ({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) => (
  <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">{title}</h2>
    {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
  </div>
);

export default function ModernPage() {
  const registry = [
    ["Company name", companyData.legalName],
    ["UEN", companyData.uen],
    ["Date of incorporation", formatDate(companyData.incorporatedOn)],
    ["Status", companyData.status],
    ["Company type", companyData.companyType],
    ["Registered office", fullAddress(companyData.address)],
    ...companyData.activities.map((activity) => [
      activity.primary ? "Primary activity" : "Secondary activity",
      `SSIC ${activity.ssic} — ${activity.title}`,
    ]),
  ];

  return (
    <>
      {/* Header — mobile menu is a native <details>, no client JS */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label="D&C Petrol Trading — home">
            <Logo />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navData.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="ml-3 rounded-full px-5">
              <a href="#contact">Get in touch</a>
            </Button>
          </nav>
          <details className="md:hidden">
            <summary
              aria-label="Menu"
              className="-mr-2 flex size-10 cursor-pointer list-none items-center justify-center rounded-full hover:bg-secondary [&::-webkit-details-marker]:hidden"
            >
              <Menu className="size-5" />
            </summary>
            <nav aria-label="Main" className="absolute inset-x-0 top-18 border-b bg-background px-4 pt-2 pb-6 shadow-lg">
              {navData.map((item) => (
                <a key={item.href} href={item.href} className="block border-b py-3.5 font-semibold">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main>
        {/* Hero — copy left, 3D oil field right */}
        <section id="top" className="relative isolate overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_80%_35%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_70%),radial-gradient(ellipse_50%_50%_at_10%_90%,color-mix(in_oklch,var(--foreground)_6%,transparent),transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(color-mix(in_oklch,var(--foreground)_10%,transparent)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_80%)] bg-[size:22px_22px]"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pt-12 pb-16 sm:px-6 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:pt-0 lg:pb-0">
            <div className="lg:py-20">
              <p className="inline-flex items-center gap-2 rounded-full border bg-card/80 py-1 pr-3 pl-1 text-xs font-semibold shadow-xs backdrop-blur">
                <span className="rounded-full bg-primary px-2 py-0.5 text-primary-foreground">Live</span>
                Singapore · Est. 2026
              </p>
              <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl xl:text-7xl">
                Fuelling trade from{" "}
                <span className="bg-gradient-to-r from-primary to-flame-deep bg-clip-text text-transparent">
                  Asia&apos;s energy hub
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {companyData.displayName} is a Singapore-incorporated wholesale trader of fuels and related
                products, connecting dependable supply with commercial, industrial and marine buyers.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-base shadow-lg shadow-primary/25">
                  <a href="#business">
                    Explore our business <ArrowRight />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-card px-7 text-base">
                  <a href="#contact">Contact us</a>
                </Button>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x rounded-2xl border bg-card/80 shadow-sm backdrop-blur">
                {[
                  ["UEN", companyData.uen],
                  ["Primary SSIC", companyData.activities[0]?.ssic ?? ""],
                  ["Based in", "Tuas, SG"],
                ].map(([label, value]) => (
                  <div key={label} className="px-4 py-4 sm:px-5">
                    <dt className="text-[0.7rem] font-medium text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm font-bold tracking-tight sm:text-base">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <HeroModel className="h-[380px] sm:h-[480px] lg:h-[640px]" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <Reveal className="lg:col-span-1">
                <Heading
                  eyebrow="Who we are"
                  title="A Singapore trading house built for energy"
                  description={`Incorporated on ${formatDate(companyData.incorporatedOn)}, headquartered at ${companyData.address.building} in Tuas — close to the Jurong Island refining and petrochemical cluster.`}
                />
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
                {valuesData.map((value, index) => {
                  const Icon = valueIcons[index] ?? ShieldCheck;
                  return (
                    <Reveal key={value.title} delay={index * 100}>
                      <article className="group h-full rounded-3xl border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-flame-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-6" />
                        </span>
                        <h3 className="mt-6 text-lg font-bold tracking-tight">{value.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Business */}
        <section id="business" className="bg-muted py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Heading
                center
                eyebrow="What we do"
                title="Two registered lines of business"
                description="Registered under the Singapore Standard Industrial Classification (SSIC)."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-5">
              {companyData.activities.map((activity, index) => {
                const Icon = activity.primary ? Fuel : Boxes;
                return (
                  <Reveal key={activity.ssic} delay={index * 120} className={activity.primary ? "lg:col-span-3" : "lg:col-span-2"}>
                    <article
                      className={cn(
                        "relative h-full overflow-hidden rounded-3xl p-8 sm:p-10",
                        activity.primary ? "bg-foreground text-background" : "border bg-card"
                      )}
                    >
                      {activity.primary && (
                        <div
                          aria-hidden
                          className="absolute -top-32 -right-32 size-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_40%,transparent),transparent_65%)]"
                        />
                      )}
                      <div className="relative flex items-center justify-between gap-4">
                        <span
                          className={cn(
                            "flex size-14 items-center justify-center rounded-2xl",
                            activity.primary ? "bg-primary text-primary-foreground" : "bg-primary/10 text-flame-deep"
                          )}
                        >
                          <Icon className="size-7" />
                        </span>
                        <span
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold",
                            activity.primary ? "bg-background/10" : "bg-secondary"
                          )}
                        >
                          {activity.primary ? "Primary" : "Secondary"} · SSIC {activity.ssic}
                        </span>
                      </div>
                      <h3 className="relative mt-8 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                        {activity.title}
                      </h3>
                      <p className={cn("relative mt-4 leading-relaxed", activity.primary ? "text-background/70" : "text-muted-foreground")}>
                        {activity.description}
                      </p>
                      <ul className="relative mt-8 flex flex-wrap gap-2">
                        {activity.scope.map((item) => (
                          <li
                            key={item}
                            className={cn(
                              "rounded-full border px-3.5 py-1.5 text-sm font-medium",
                              activity.primary ? "border-background/15 bg-background/5" : "bg-background"
                            )}
                          >
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

        {/* Operations */}
        <section id="operations" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Heading center eyebrow="How we work" title="From source to delivery" />
            </Reveal>
            <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <span
                aria-hidden
                className="absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block"
              />
              {stepsData.map((step, index) => {
                const Icon = stepIcons[index] ?? Search;
                return (
                  <Reveal key={step.title} delay={index * 110}>
                    <article className="relative h-full rounded-3xl border bg-card p-7 text-center shadow-xs">
                      <span className="relative mx-auto flex size-20 items-center justify-center rounded-full border-8 border-background bg-primary/10 text-flame-deep">
                        <Icon className="size-7" />
                        <span className="absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                          {index + 1}
                        </span>
                      </span>
                      <h3 className="mt-6 text-lg font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Singapore */}
        <section className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-flame-deep p-8 text-primary-foreground sm:p-12 lg:p-16">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,white_25%,transparent)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent)]"
              />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_2fr]">
                <div>
                  <p className="text-sm font-semibold opacity-80">Why Singapore</p>
                  <h2 className="mt-4 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
                    At the crossroads of energy flows
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {advantagesData.map((item, index) => {
                    const Icon = advantageIcons[index] ?? Globe2;
                    return (
                      <Reveal key={item.title} delay={index * 90}>
                        <div className="h-full rounded-2xl bg-white/12 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/18">
                          <Icon className="size-6" />
                          <h3 className="mt-4 font-bold">{item.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed opacity-85">{item.body}</p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company */}
        <section id="company" className="bg-muted py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
            <Reveal>
              <Heading
                eyebrow="Corporate information"
                title="Registered & operating in Singapore"
                description="Registered with the Accounting and Corporate Regulatory Authority (ACRA). Our particulars, for counterparties and partners."
              />
            </Reveal>
            <Reveal delay={120}>
              <dl className="divide-y overflow-hidden rounded-3xl border bg-card shadow-sm">
                {registry.map(([label, value]) => (
                  <div key={label} className="grid gap-1 px-6 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="font-semibold">
                      {label === "Status" ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-live/15 px-2.5 py-0.5 text-sm">
                          <span className="size-2 rounded-full bg-live" />
                          {value}
                        </span>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] border bg-card shadow-xl shadow-foreground/5 lg:grid-cols-2">
              <Reveal className="p-8 sm:p-12 lg:p-14">
                <Heading
                  eyebrow="Get in touch"
                  title={
                    <>
                      Let&apos;s talk <span className="text-flame-deep">supply</span>
                    </>
                  }
                  description="For trade enquiries, supply requests and partnership opportunities, reach our team at our registered office."
                />
                <address className="mt-8 rounded-2xl bg-muted p-5 not-italic">
                  <p className="font-bold">{companyData.legalName}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{fullAddress(companyData.address)}</p>
                </address>
                <Button asChild size="lg" className="mt-8 h-12 rounded-full px-7 text-base">
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation /> Get directions <ArrowUpRight />
                  </a>
                </Button>
              </Reveal>
              <div className="relative min-h-80">
                <iframe
                  title={`Map of ${fullAddress(companyData.address)}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress(companyData.address))}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t pb-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:px-8">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © 2026 {companyData.legalName} · UEN {companyData.uen}
          </p>
        </div>
      </footer>
    </>
  );
}

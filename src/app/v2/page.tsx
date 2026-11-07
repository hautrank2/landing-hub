import { ArrowRight, Check, Navigation } from "lucide-react";
import Image from "next/image";
import { CompanyInfo } from "~/app/_components/company-info";
import { SectionHeading } from "~/app/_components/section-heading";
import { SiteFooter } from "~/app/_components/site-footer";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/ui/reveal";
import { companyData, fullAddress, mapUrl } from "~/data/company";
import { advantagesData, stepsData, valuesData } from "~/data/content";
import { photoData } from "~/data/photos";
import { navData } from "~/data/site";
import { cn } from "~/lib/utils";
import { formatDate } from "~/utils/date";
import { DaylightHeader } from "./_components/daylight-header";

const heroFacts = [
  { label: "UEN", value: companyData.uen },
  { label: "Incorporated", value: formatDate(companyData.incorporatedOn) },
  { label: "Status", value: companyData.status },
];

export default function DaylightPage() {
  const [primary, secondary] = companyData.activities;

  return (
    <>
      <DaylightHeader items={navData} />
      <main>
        {/* Hero — the photo's open sky carries the headline. */}
        <section id="top" className="relative isolate flex min-h-svh items-end overflow-hidden">
          <Image
            src={photoData.heroSky.src}
            alt={photoData.heroSky.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 scale-105 object-cover object-bottom"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/0"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-background to-transparent"
          />

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pt-36 pb-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8 lg:pb-24">
            <div>
              <p className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.22em] text-flame-deep uppercase">
                <span aria-hidden className="h-0.5 w-10 bg-current" />
                Singapore · Wholesale fuels trading
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] font-bold tracking-tight text-foreground uppercase sm:text-6xl lg:text-[5.25rem]">
                Reliable fuel supply,
                <br />
                <span className="text-flame-deep">from Singapore</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
                {companyData.displayName} is a Singapore-incorporated wholesale
                trader of fuels and related products, serving commercial,
                industrial and marine buyers.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-12 px-7 font-display text-base tracking-wider uppercase">
                  <a href="#business">
                    Our business <ArrowRight />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-foreground/20 bg-background/60 px-7 font-display text-base tracking-wider uppercase backdrop-blur"
                >
                  <a href="#contact">Contact us</a>
                </Button>
              </div>
            </div>

            <dl className="grid divide-y rounded-lg border border-border/80 bg-background/85 shadow-xl backdrop-blur-md">
              {heroFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 px-6 py-4">
                  <dt className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-xl font-semibold tracking-wide">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={photoData.column.src}
                  alt={photoData.column.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] hover:scale-105"
                />
              </div>
              <div className="absolute -right-3 -bottom-6 rounded-md bg-primary px-6 py-5 text-primary-foreground shadow-xl sm:-right-6">
                <p className="font-display text-4xl leading-none font-bold">2026</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase">Est. in Singapore</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading
                eyebrow="Who we are"
                title={
                  <>
                    A Singapore trading house <span className="text-flame-deep">built for energy</span>
                  </>
                }
                description={`Incorporated on ${formatDate(companyData.incorporatedOn)} and headquartered at ${companyData.address.building} in Tuas — close to the Jurong Island refining and petrochemical cluster.`}
              />
              <ul className="mt-10 grid gap-6">
                {valuesData.map((value) => (
                  <li key={value.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-flame-deep">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-wide uppercase">{value.title}</h3>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{value.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Business */}
        <section id="business" className="bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title="Two registered lines of business"
                description="Registered under the Singapore Standard Industrial Classification (SSIC)."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {[primary, secondary].map(
                (activity, index) =>
                  activity && (
                    <Reveal key={activity.ssic} delay={index * 120}>
                      <article className="group h-full overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-xl">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={activity.primary ? photoData.plant.src : photoData.tanks.src}
                            alt={activity.primary ? photoData.plant.alt : photoData.tanks.alt}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className={cn(
                              "object-cover transition-transform duration-700 group-hover:scale-105",
                              !activity.primary && "object-[50%_75%]"
                            )}
                          />
                          <span className="absolute top-4 left-4 rounded-sm bg-background/90 px-3 py-1 font-display text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur">
                            {activity.primary ? "Primary" : "Secondary"} · SSIC {activity.ssic}
                          </span>
                        </div>
                        <div className="p-8">
                          <h3 className="font-display text-3xl leading-tight font-bold tracking-tight uppercase">
                            {activity.title}
                          </h3>
                          <p className="mt-3 leading-relaxed text-muted-foreground">{activity.description}</p>
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {activity.scope.map((item) => (
                              <li key={item} className="rounded-full border bg-background px-3.5 py-1.5 text-sm font-medium">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </Reveal>
                  )
              )}
            </div>
          </div>
        </section>

        {/* Why Singapore — photo band */}
        <section className="relative isolate overflow-hidden py-24 sm:py-32">
          <Image
            src={photoData.offshore.src}
            alt={photoData.offshore.alt}
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-background/70" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Why Singapore"
                title="At the crossroads of energy flows"
                description="Deep liquidity, efficient logistics and one of the world's most respected legal systems."
              />
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {advantagesData.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="h-full rounded-lg border border-background/60 bg-background/80 p-7 shadow-lg backdrop-blur-md">
                    <p className="font-display text-sm font-bold tracking-[0.2em] text-flame-deep">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-wide uppercase">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Operations */}
        <section id="operations" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="How we work" title="From source to delivery" />
            </Reveal>
            <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2 lg:grid-cols-4">
              {stepsData.map((step, index) => (
                <li key={step.title} className="group relative bg-card p-8 transition-colors hover:bg-secondary">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <p className="font-display text-6xl leading-none font-bold text-foreground/10">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-wide uppercase">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CompanyInfo />

        {/* Contact */}
        <section id="contact" className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Get in touch"
                title={
                  <>
                    Let&apos;s talk <span className="text-flame-deep">supply</span>
                  </>
                }
                description="For trade enquiries, supply requests and partnership opportunities, reach our team at our registered office."
              />
              <address className="mt-10 border-l-4 border-primary pl-6 not-italic">
                <p className="font-display text-lg font-bold tracking-wide uppercase">{companyData.legalName}</p>
                <p className="mt-1 leading-relaxed text-muted-foreground">{fullAddress(companyData.address)}</p>
              </address>
              <Button asChild size="lg" className="mt-10 h-12 px-7 font-display text-base tracking-wider uppercase">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation /> Get directions
                </a>
              </Button>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative h-full min-h-80 overflow-hidden rounded-lg border shadow-sm">
                <iframe
                  title={`Map of ${fullAddress(companyData.address)}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress(companyData.address))}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter items={navData} />
    </>
  );
}

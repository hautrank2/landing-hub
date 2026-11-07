import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/ui/reveal";
import { companyData, fullAddress, mapUrl } from "~/data/company";
import { SectionHeading } from "./section-heading";

export const Contact = () => {
  const { address, contact } = companyData;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="ink"
            eyebrow="Get in touch"
            title={
              <>
                Let&apos;s talk <span className="text-flame">supply</span>
              </>
            }
            description="For trade enquiries, supply requests and partnership opportunities, reach our team at our registered office in Singapore."
          />

          <address className="mt-10 space-y-6 not-italic">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <p className="font-display text-lg font-bold tracking-wide uppercase">
                  {companyData.legalName}
                </p>
                <p className="mt-1 text-ink-muted">
                  {address.street}, {address.unit}
                  <br />
                  {address.building}, {address.country} {address.postalCode}
                </p>
              </div>
            </div>

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 hover:text-primary"
              >
                <Mail className="size-6 shrink-0 text-primary" />
                {contact.email}
              </a>
            )}
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 hover:text-primary"
              >
                <Phone className="size-6 shrink-0 text-primary" />
                {contact.phone}
              </a>
            )}
          </address>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-7 font-display text-base tracking-wider uppercase"
            >
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Navigation /> Get directions
              </a>
            </Button>
            {contact.email && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-ink-border bg-transparent px-7 font-display text-base tracking-wider text-ink-foreground uppercase hover:bg-ink-raised hover:text-ink-foreground"
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail /> Email us
                </a>
              </Button>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative h-full min-h-80 overflow-hidden rounded-lg border border-ink-border bg-ink-raised">
            <iframe
              title={`Map of ${fullAddress(address)}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                fullAddress(address)
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[0.6] contrast-[1.05]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

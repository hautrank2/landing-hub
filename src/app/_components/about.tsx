import { Handshake, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { companyData } from "~/data/company";
import { formatDate } from "~/utils/date";
import { SectionHeading } from "./section-heading";

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance first",
    body: "Every trade is documented, screened and executed within Singapore's legal and regulatory framework.",
  },
  {
    icon: Truck,
    title: "Dependable supply",
    body: "We work with established suppliers, terminals and carriers so product arrives on specification and on schedule.",
  },
  {
    icon: Handshake,
    title: "Transparent partnership",
    body: "Clear contracts, clear pricing and a single accountable counterparty from enquiry to settlement.",
  },
];

export const About = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              A Singapore trading house{" "}
              <span className="text-flame-deep">built for energy</span>
            </>
          }
        />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            {companyData.displayName} was incorporated in Singapore on{" "}
            {formatDate(companyData.incorporatedOn)} as an {companyData.companyType.toLowerCase()}. We are
            headquartered at {companyData.address.building} in Tuas — at the
            western edge of the island, close to the Jurong Island refining and
            petrochemical cluster.
          </p>
          <p>
            Our focus is the wholesale of fuels and related products, supported
            by a broader general-trade licence that lets us serve the wider
            needs of our customers&apos; operations.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 self-center">
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * 120}>
            <article className="group flex gap-5 rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg sm:p-7">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-ink text-primary">
                <value.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-wide uppercase">
                  {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

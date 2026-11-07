import { FileCheck2 } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { companyData, fullAddress } from "~/data/company";
import { formatDate } from "~/utils/date";
import { SectionHeading } from "./section-heading";

export const CompanyInfo = () => {
  const [primary, secondary] = companyData.activities;

  const rows = [
    { label: "Company name", value: companyData.legalName },
    { label: "UEN", value: companyData.uen },
    {
      label: "Date of incorporation",
      value: formatDate(companyData.incorporatedOn),
    },
    {
      label: "Status",
      value: (
        <span className="inline-flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-live" />
          </span>
          {companyData.status}
        </span>
      ),
    },
    { label: "Company type", value: companyData.companyType },
    { label: "Registered office", value: fullAddress(companyData.address) },
    primary && {
      label: "Primary activity",
      value: `SSIC ${primary.ssic} — ${primary.title}`,
    },
    secondary && {
      label: "Secondary activity",
      value: `SSIC ${secondary.ssic} — ${secondary.title}`,
    },
  ].filter((row) => !!row);

  return (
    <section id="company" className="bg-muted py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <Reveal className="lg:col-span-2">
          <SectionHeading
            eyebrow="Corporate information"
            title="Registered & operating in Singapore"
            description="We are a legally incorporated Singapore company registered with the Accounting and Corporate Regulatory Authority (ACRA). Our registration details are set out here for counterparties and partners."
          />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between gap-4 bg-ink px-6 py-5 text-ink-foreground sm:px-8">
              <div className="flex items-center gap-3">
                <FileCheck2 className="size-6 text-primary" />
                <span className="font-display text-lg font-bold tracking-[0.12em] uppercase">
                  Business profile
                </span>
              </div>
              <span className="font-display text-sm tracking-[0.18em] text-ink-muted uppercase">
                UEN {companyData.uen}
              </span>
            </div>
            <div aria-hidden className="bg-hazard h-1.5 opacity-80" />

            <dl className="divide-y">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 px-6 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:px-8"
                >
                  <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    {row.label}
                  </dt>
                  <dd className="font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import { Logo } from "~/components/logo";
import { companyData, fullAddress } from "~/data/company";
import type { NavItemModel } from "~/types";

type SiteFooterProps = {
  items: NavItemModel[];
};

export const SiteFooter = ({ items }: SiteFooterProps) => (
  <footer className="border-t border-ink-border bg-ink text-ink-foreground">
    <div aria-hidden className="bg-hazard h-1 opacity-70" />
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1.5fr] lg:px-8">
      <div>
        <Logo />
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
          Wholesale of fuels and related products, from Singapore.
        </p>
      </div>

      <nav aria-label="Footer">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Explore
        </p>
        <ul className="mt-4 grid gap-2.5 text-sm">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-ink-muted transition-colors hover:text-ink-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-sm">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Registered office
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          {fullAddress(companyData.address)}
        </p>
        <p className="mt-3 text-ink-muted">UEN {companyData.uen}</p>
      </div>
    </div>

    <div className="border-t border-ink-border">
      <p className="mx-auto max-w-7xl px-4 py-6 text-xs tracking-wide text-ink-muted sm:px-6 lg:px-8">
        © {new Date(companyData.incorporatedOn).getFullYear()}{" "}
        {companyData.legalName} All rights reserved.
      </p>
    </div>
  </footer>
);

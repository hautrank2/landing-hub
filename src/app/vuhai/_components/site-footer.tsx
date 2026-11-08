import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { vuhaiAiServerHref, vuhaiBase, vuhaiContact, vuhaiFooterLinks, vuhaiVanLogisticHref } from "~/data/vuhai";
import { Logo } from "./logo";

export const SiteFooter = () => (
  <footer className="bg-ink text-ink-foreground">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <span className="inline-flex rounded-xl bg-white px-4 py-3">
          <Logo />
        </span>
        <p className="mt-5 max-w-md leading-relaxed text-ink-muted">{vuhaiContact.company}</p>
        <ul className="mt-5 space-y-2 text-ink-muted">
          <li className="flex items-center gap-2">
            <Phone className="size-4" />
            <a href={vuhaiContact.hotlineHref} className="hover:text-white">
              {vuhaiContact.hotline}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="size-4" />
            <a href={`mailto:${vuhaiContact.email}`} className="hover:text-white">
              {vuhaiContact.email}
            </a>
          </li>
        </ul>
      </div>

      <nav aria-label="Liên kết nhanh">
        <h2 className="text-sm font-bold tracking-[0.16em] uppercase">Sản phẩm</h2>
        <ul className="mt-4 space-y-2.5 text-ink-muted">
          <li>
            <Link href={vuhaiAiServerHref} className="hover:text-white">
              AI Server
            </Link>
          </li>
          <li>
            <Link href={`${vuhaiVanLogisticHref}#gioi-thieu`} className="hover:text-white">
              VAN-Logistic
            </Link>
          </li>
          <li>
            <Link href={`${vuhaiVanLogisticHref}#bang-gia`} className="hover:text-white">
              Bảng giá
            </Link>
          </li>
          <li>
            <Link href={`${vuhaiBase}#tu-van`} className="hover:text-white">
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>

      <nav aria-label="Chính sách">
        <h2 className="text-sm font-bold tracking-[0.16em] uppercase">Chính sách</h2>
        <ul className="mt-4 space-y-2.5 text-ink-muted">
          {vuhaiFooterLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="border-t border-ink-border py-5 text-center text-sm text-ink-muted">
      © {new Date().getFullYear()} {vuhaiContact.company}
    </div>
  </footer>
);

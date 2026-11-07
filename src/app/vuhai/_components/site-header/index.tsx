"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { vuhaiBase, vuhaiContact, vuhaiNavData } from "~/data/vuhai";
import { cn } from "~/lib/utils";
import { Logo } from "../logo";
import { useSiteHeader } from "./hook";
import type { NavLinkProps, SiteHeaderProps } from "./type";

// Pages still on vuhai.co open in a new tab; in-app routes use next/link.
const NavLink = ({ href, external, children, ...props }: NavLinkProps) =>
  external ? (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} {...props}>
      {children}
    </Link>
  );

const triggerClass =
  "inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[0.95rem] font-bold whitespace-nowrap text-foreground transition-colors hover:text-primary";

export const SiteHeader = ({ items = vuhaiNavData }: SiteHeaderProps) => {
  const { open, expanded, toggle, close, toggleGroup } = useSiteHeader();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={vuhaiBase} aria-label="Vũ Hải — trang chủ" onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Chính" className="hidden items-center xl:flex">
          {items.map((item) => {
            const hasMenu = Boolean(item.grid ?? item.children);
            if (!hasMenu) {
              return (
                <NavLink key={item.label} href={item.href} external={item.external} className={triggerClass}>
                  {item.label}
                </NavLink>
              );
            }
            return (
              <div key={item.label} className="group relative">
                <button type="button" aria-haspopup="menu" className={triggerClass}>
                  {item.label}
                  <ChevronDown className="size-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                </button>
                <div
                  className={cn(
                    "invisible absolute top-full pt-2 opacity-0 transition-all duration-150",
                    "group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                    item.grid ? "left-1/2 -translate-x-1/2" : "left-0"
                  )}
                >
                  {item.grid ? (
                    <ul className="grid w-[34rem] grid-cols-2 gap-2 rounded-2xl border border-border bg-card p-3 shadow-xl">
                      {item.grid.map((entry) => (
                        <li key={entry.label}>
                          <NavLink
                            href={entry.href}
                            external={entry.external}
                            className="flex h-full items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                          >
                            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                              <entry.icon className="size-5" />
                            </span>
                            <span>
                              <span className="flex items-center gap-2 font-bold text-navy">
                                {entry.label}
                                {entry.badge && (
                                  <span className="rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-bold text-primary-foreground uppercase">
                                    {entry.badge}
                                  </span>
                                )}
                              </span>
                              <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">
                                {entry.subtitle}
                              </span>
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="min-w-60 rounded-xl border border-border bg-card p-2 shadow-xl">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <NavLink
                            href={child.href}
                            external={child.external}
                            className="block rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-primary"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={vuhaiContact.hotlineHref}
            className="hidden items-center gap-2 text-lg font-extrabold text-navy 2xl:flex"
          >
            <Phone className="size-5 text-primary" />
            {vuhaiContact.hotline}
          </a>
          <Button asChild className="hidden h-10 px-5 text-sm font-bold sm:inline-flex">
            <Link href={`${vuhaiBase}#dang-ky`}>Dùng thử</Link>
          </Button>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-md hover:bg-secondary xl:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Chính"
          className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-background px-4 pb-6 xl:hidden"
        >
          {items.map((item) => {
            const sub = item.grid ?? item.children;
            if (!sub) {
              return (
                <NavLink
                  key={item.label}
                  href={item.href}
                  external={item.external}
                  onClick={close}
                  className="block border-b border-border py-3.5 font-bold"
                >
                  {item.label}
                </NavLink>
              );
            }
            const isOpen = expanded === item.label;
            return (
              <div key={item.label} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleGroup(item.label)}
                  className="flex w-full items-center justify-between py-3.5 font-bold"
                >
                  {item.label}
                  <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
                </button>
                {isOpen && (
                  <ul className="pb-3 pl-2">
                    {sub.map((entry) => (
                      <li key={entry.label}>
                        <NavLink
                          href={entry.href}
                          external={entry.external}
                          onClick={close}
                          className="block py-2 text-[0.95rem] font-semibold text-foreground/80"
                        >
                          {entry.label}
                          {"subtitle" in entry ? (
                            <span className="block text-sm font-normal text-muted-foreground">
                              {String(entry.subtitle)}
                            </span>
                          ) : null}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          <Button asChild className="mt-5 w-full font-bold">
            <Link href={`${vuhaiBase}#dang-ky`} onClick={close}>
              Dùng thử miễn phí
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

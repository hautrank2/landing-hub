import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "~/components/logo";
import { versionsData } from "~/data/site";

export default function VersionIndexPage() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <Logo />
        <h1 className="mt-14 font-display text-5xl leading-[0.95] font-bold tracking-tight uppercase sm:text-6xl">
          Landing page <span className="text-primary">options</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-muted">
          Three design directions for D&amp;C Petrol Trading. Open one to review it.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {versionsData.map((version) => (
            <li key={version.href}>
              <Link
                href={version.href}
                className="group flex h-full flex-col rounded-lg border border-ink-border bg-ink-raised p-7 transition-colors hover:border-primary"
              >
                <span className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                    {version.label} · {version.href}
                  </span>
                  <ArrowUpRight className="size-5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </span>
                <span className="mt-4 font-display text-3xl font-bold tracking-wide uppercase">
                  {version.name}
                </span>
                <span className="mt-2 leading-relaxed text-ink-muted">{version.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

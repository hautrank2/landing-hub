"use client";

import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { versionsData } from "~/data/site";
import { cn } from "~/lib/utils";

/** Review aid for comparing the design directions — remove once one is picked. */
export const VersionSwitcher = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav
      aria-label="Design versions"
      className="fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 gap-1 rounded-full border border-white/15 bg-black/75 p-1 text-xs text-white shadow-2xl backdrop-blur-md"
    >
      <Link
        href="/"
        aria-label="All versions"
        className="flex items-center rounded-full px-3 text-white/70 hover:text-white"
      >
        <LayoutGrid className="size-3.5" />
      </Link>
      {versionsData.map((version) => (
        <Link
          key={version.href}
          href={version.href}
          aria-current={pathname === version.href ? "page" : undefined}
          className={cn(
            "rounded-full px-3.5 py-1.5 font-medium tracking-wide whitespace-nowrap transition-colors",
            pathname === version.href
              ? "bg-white text-black"
              : "text-white/70 hover:text-white"
          )}
        >
          {version.label}
          <span className="hidden sm:inline"> · {version.name}</span>
        </Link>
      ))}
    </nav>
  );
};

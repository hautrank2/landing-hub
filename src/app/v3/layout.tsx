import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { companyData } from "~/data/company";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${companyData.displayName} — Modern 3D`,
  robots: { index: false },
};

export default function ModernLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${jakarta.variable} theme-modern min-h-svh bg-background font-display text-foreground [--font-body:var(--font-heading)]`}
    >
      {children}
    </div>
  );
}

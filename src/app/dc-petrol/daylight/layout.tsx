import type { Metadata } from "next";
import { companyData } from "~/data/company";

export const metadata: Metadata = {
  title: `${companyData.displayName} — Daylight`,
  robots: { index: false },
};

export default function DaylightLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

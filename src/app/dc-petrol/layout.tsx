import type { Metadata } from "next";
import { VersionSwitcher } from "~/components/version-switcher";
import { companyData } from "~/data/company";
import { siteDescription } from "~/data/site";

export const metadata: Metadata = {
  // Served from /public: the favicon.ico file convention only works at the app root, which vuhai must not inherit.
  icons: { icon: "/dc-petrol/favicon.ico", apple: "/dc-petrol/apple-icon.png" },
  title: `${companyData.displayName} | Wholesale Fuels Trading, Singapore`,
  description: siteDescription,
};

export default function DcPetrolLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <VersionSwitcher />
    </>
  );
}

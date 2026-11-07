import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { VersionSwitcher } from "~/components/version-switcher";
import { companyData } from "~/data/company";
import { siteDescription } from "~/data/site";
import "./globals.css";

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${companyData.displayName} | Wholesale Fuels Trading, Singapore`,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior lets Next.js switch off the CSS smooth scroll while it
    // resets scroll on navigation — otherwise that reset animates to the footer.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${heading.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}

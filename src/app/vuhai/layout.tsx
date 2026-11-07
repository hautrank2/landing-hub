import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";

const nunito = Nunito_Sans({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  // Tab / bookmark icon for the Vũ Hải pages only; dc-petrol keeps the root favicon.
  icons: { icon: "/vuhai/logo-vuhai.png", apple: "/vuhai/logo-vuhai.png" },
  title: "Vũ Hải | AI Server, VAN-Logistic và giải pháp quản trị doanh nghiệp",
  description:
    "Công ty Cổ phần Ứng dụng Công nghệ Vũ Hải: cho thuê AI Server, VAN-Logistic cho xuất nhập khẩu, ERP All-in-One, chữ ký số và hóa đơn điện tử.",
};

export default function VuhaiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${nunito.variable} theme-vuhai min-h-svh bg-background font-display text-foreground [--font-body:var(--font-heading)]`}
    >
      <SiteHeader />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

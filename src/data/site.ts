import type { NavItemModel } from "~/types";

export const siteDescription =
  "D&C Petrol Trading Pte. Ltd. is a Singapore-incorporated wholesale trader of fuels and related products.";

// Design directions under review; the switcher lists them.
export const versionsData = [
  {
    href: "/dc-petrol",
    label: "Classic",
    name: "Classic",
    description: "Dark petroleum navy, refinery silhouette with a live flare.",
  },
  {
    href: "/dc-petrol/daylight",
    label: "Daylight",
    name: "Daylight",
    description: "Bright and corporate, with full-bleed oil & gas photography.",
  },
  {
    href: "/dc-petrol/modern",
    label: "Modern",
    name: "Modern 3D",
    description: "Bright and modern, with an interactive 3D oil field in the hero.",
  },
];

export const navData: NavItemModel[] = [
  { label: "About", href: "#about" },
  { label: "Business", href: "#business" },
  { label: "Operations", href: "#operations" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

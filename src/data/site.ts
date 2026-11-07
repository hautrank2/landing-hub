import type { NavItemModel } from "~/types";

export const siteDescription =
  "D&C Petrol Trading Pte. Ltd. is a Singapore-incorporated wholesale trader of fuels and related products.";

// Design directions under review; the root page and the switcher list them.
export const versionsData = [
  {
    href: "/v1",
    label: "V1",
    name: "Classic",
    description: "Dark petroleum navy, refinery silhouette with a live flare.",
  },
  {
    href: "/v2",
    label: "V2",
    name: "Daylight",
    description: "Bright and corporate, with full-bleed oil & gas photography.",
  },
  {
    href: "/v3",
    label: "V3",
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

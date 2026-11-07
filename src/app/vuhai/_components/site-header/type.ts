import type { VuhaiNavModel } from "~/types";

export type SiteHeaderProps = {
  items?: VuhaiNavModel[];
};

export type NavLinkProps = {
  href: string;
  external?: boolean;
} & Omit<React.ComponentProps<"a">, "href">;

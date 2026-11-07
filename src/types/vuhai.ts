import type { LucideIcon } from "lucide-react";

export type VuhaiLinkModel = {
  label: string;
  href: string;
  /** Page outside this build (still on vuhai.co) — opens in a new tab. */
  external?: boolean;
};

export type VuhaiMenuItemModel = VuhaiLinkModel & {
  icon: LucideIcon;
  subtitle: string;
  badge?: string;
};

export type VuhaiNavModel = VuhaiLinkModel & {
  /** Plain list dropdown. */
  children?: VuhaiLinkModel[];
  /** Grid dropdown of icon + title + subtitle cards. */
  grid?: VuhaiMenuItemModel[];
};

export type VuhaiCategoryModel = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
  highlights: string[];
  badge?: string;
};

export type VuhaiFeatureModel = {
  title: string;
  description: string;
  icon: LucideIcon;
  points?: string[];
};

export type VuhaiFaqModel = {
  question: string;
  answer: string;
};

export type VuhaiStatModel = {
  label: string;
  value: string;
};

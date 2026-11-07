export type BusinessActivityModel = {
  /** Singapore Standard Industrial Classification code. */
  ssic: string;
  title: string;
  description: string;
  primary: boolean;
  scope: string[];
};

export type CompanyModel = {
  legalName: string;
  /** The legal name in title case, for running text. */
  displayName: string;
  uen: string;
  /** ISO date, formatted for display with `formatDate`. */
  incorporatedOn: string;
  status: string;
  companyType: string;
  address: {
    street: string;
    unit: string;
    building: string;
    country: string;
    postalCode: string;
  };
  activities: BusinessActivityModel[];
  /** Left empty until the company publishes them; the UI hides what is missing. */
  contact: {
    email?: string;
    phone?: string;
  };
};

export type NavItemModel = {
  label: string;
  href: string;
};

import type { CompanyModel } from "~/types";

// Registration details as filed with ACRA. Change them here only — every
// section and the footer read from this object.
export const companyData: CompanyModel = {
  legalName: "D&C PETROL TRADING PTE. LTD.",
  displayName: "D&C Petrol Trading Pte. Ltd.",
  uen: "202627967E",
  incorporatedOn: "2026-06-22",
  status: "Live Company",
  companyType: "Exempt Private Company Limited by Shares",
  address: {
    street: "110 Tuas South Avenue 3",
    unit: "#03-12",
    building: "The Index",
    country: "Singapore",
    postalCode: "637369",
  },
  activities: [
    {
      ssic: "46610",
      title: "Wholesale of fuels and related products",
      description:
        "Our core business: sourcing and supplying petroleum fuels and related products to commercial, industrial and marine buyers.",
      primary: true,
      scope: [
        "Diesel & gasoil",
        "Gasoline",
        "Fuel oil & marine fuels",
        "Jet fuel & kerosene",
        "Lubricants & base oils",
        "Other petroleum products",
      ],
    },
    {
      ssic: "46900",
      title: "Wholesale trade of a variety of goods",
      description:
        "General wholesale trade without a dominant product line, letting us support customers beyond fuel with the goods their operations need.",
      primary: false,
      scope: [
        "Industrial supplies",
        "Operational consumables",
        "Equipment & spare parts",
        "Sourcing on request",
      ],
    },
  ],
  contact: {},
};

export const fullAddress = (address: CompanyModel["address"]) =>
  `${address.street}, ${address.unit}, ${address.building}, ${address.country} ${address.postalCode}`;

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  fullAddress(companyData.address)
)}`;

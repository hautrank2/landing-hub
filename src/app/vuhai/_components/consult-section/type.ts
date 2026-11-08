export type ConsultSectionProps = {
  /** Anchor id; the home page uses "dang-ky", the AI / Data center pages "tu-van". */
  id: string;
  title: string;
  description: string;
  /** Prefix for the mail subject so sales can tell which page the lead came from. */
  topic: string;
  /** Show the tax-code field (VAN-Logistic leads only). */
  withTaxCode?: boolean;
};

export type UseConsultFormProps = Pick<ConsultSectionProps, "topic">;

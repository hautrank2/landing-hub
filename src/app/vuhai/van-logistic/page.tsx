import type { Metadata } from "next";
import { vuhaiFaqData } from "~/data/vuhai";
import { ConsultSection } from "../_components/consult-section";
import { Ecosystem } from "../_components/ecosystem";
import { FaqList } from "../_components/faq-list";
import { Guides } from "../_components/guides";
import { PartnerBanner, PricingBanner, VanLogisticBanner } from "../_components/hero-slider/banners";
import { HeroSlider } from "../_components/hero-slider";
import { NewsUpdates } from "../_components/news-updates";
import { Pricing } from "../_components/pricing";
import { ProductCategories } from "../_components/product-categories";
import { ProductOverview } from "../_components/product-overview";
import { SectionHeading } from "../_components/section-heading";
import { Trust } from "../_components/trust";
import { WhyVuhai } from "../_components/why-vuhai";

const slides = [
  { id: "van-logistic", label: "VAN-Logistic", content: <VanLogisticBanner /> },
  { id: "gia", label: "Chính sách giá", content: <PricingBanner /> },
  { id: "hop-tac", label: "Hợp tác thương hiệu", content: <PartnerBanner /> },
];

export const metadata: Metadata = {
  title: "VAN-Logistic | Vũ Hải",
  description:
    "VAN-Logistic 2026: nền tảng nghiệp vụ cho doanh nghiệp xuất nhập khẩu — hồ sơ C/O, Trừ lùi nguyên phụ liệu, Trợ lý AI.",
};

export default function VanLogisticPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <ProductCategories />
      <NewsUpdates />
      <ProductOverview />
      <Ecosystem />
      <Trust />
      <Pricing />
      <WhyVuhai />
      <Guides />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Câu hỏi thường gặp"
            title="Giải đáp nhanh về giải pháp và phương án triển khai"
          />
          <FaqList items={vuhaiFaqData} />
        </div>
      </section>
      <ConsultSection
        id="dang-ky"
        topic="Vũ Hải"
        withTaxCode
        title="Sẵn sàng lựa chọn giải pháp phù hợp?"
        description="Để lại thông tin để đội ngũ Vũ Hải tư vấn phương án phù hợp với quy trình, dữ liệu và nhu cầu vận hành thực tế."
      />
    </>
  );
}

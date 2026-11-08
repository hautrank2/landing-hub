import type { Metadata } from "next";
import { aiFaqData } from "~/data/ai-server";
import { dcFaqData } from "~/data/data-center";
import { ConsultSection } from "./_components/consult-section";
import { FaqList } from "./_components/faq-list";
import { HeroSlider } from "./_components/hero-slider";
import { AiServiceBanner, DataCenterBanner } from "./_components/hero-slider/banners";
import { ProductCategories } from "./_components/product-categories";
import { SectionHeading } from "./_components/section-heading";
import { WhyVuhai } from "./_components/why-vuhai";

export const metadata: Metadata = {
  title: "Vũ Hải | Dịch vụ AI và Data center cho doanh nghiệp",
  description:
    "Vũ Hải cung cấp dịch vụ AI (thuê GPU server, triển khai chatbot, RAG, thị giác máy tính) và Data center (thuê tủ rack, private cloud, sao lưu), cùng VAN-Logistic cho xuất nhập khẩu.",
};

// The two lead services each get a banner.
const slides = [
  { id: "dich-vu-ai", label: "Dịch vụ AI", content: <AiServiceBanner /> },
  { id: "data-center", label: "Data center", content: <DataCenterBanner /> },
];

const faqItems = [...aiFaqData.slice(0, 2), ...dcFaqData.slice(0, 2)];

export default function VuhaiPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <ProductCategories />
      <WhyVuhai />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Câu hỏi thường gặp" title="Giải đáp nhanh về dịch vụ AI và Data center" />
          <FaqList items={faqItems} />
        </div>
      </section>
      <ConsultSection
        id="tu-van"
        topic="Vũ Hải"
        title="Cần tư vấn dịch vụ AI hoặc Data center?"
        description="Để lại thông tin để đội ngũ Vũ Hải đề xuất cấu hình và phương án phù hợp với nhu cầu thực tế."
      />
    </>
  );
}

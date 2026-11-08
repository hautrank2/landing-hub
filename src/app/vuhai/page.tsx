import type { Metadata } from "next";
import { aiFaqData } from "~/data/ai-server";
import { ConsultSection } from "./_components/consult-section";
import { FaqList } from "./_components/faq-list";
import { SectionHeading } from "./_components/section-heading";
import { AiHero } from "./_components/ai/ai-hero";
import { DeployProcess } from "./_components/ai/deploy-process";
import { Infrastructure } from "./_components/ai/infrastructure";
import { RentalModels } from "./_components/ai/rental-models";
import { SpecSheet } from "./_components/ai/spec-sheet";
import { UseCases } from "./_components/ai/use-cases";
import { WhyRent } from "./_components/ai/why-rent";

export const metadata: Metadata = {
  title: "AI Server cho thuê | Vũ Hải",
  description:
    "Thuê máy chủ GPU (NVIDIA HGX/GB200) theo giờ, theo tháng hoặc cụm riêng, kèm hỗ trợ triển khai chatbot, RAG, thị giác máy tính và API suy luận.",
};

export default function VuhaiPage() {
  return (
    <>
      <AiHero />
      <WhyRent />
      <RentalModels />
      <SpecSheet />
      <UseCases />
      <Infrastructure />
      <DeployProcess />
      <section className="bg-secondary pt-20 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Câu hỏi thường gặp" title="Giải đáp về thuê AI Server" />
          <FaqList items={aiFaqData} />
        </div>
      </section>
      <ConsultSection
        id="tu-van"
        topic="AI Server"
        title="Nhận tư vấn và báo giá AI Server"
        description="Cho chúng tôi biết mục tiêu AI, quy mô dữ liệu và thời gian dự kiến; Vũ Hải đề xuất cấu hình và phương án thuê phù hợp."
      />
    </>
  );
}

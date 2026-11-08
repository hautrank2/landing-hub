import type { Metadata } from "next";
import { dcFaqData, dcProcessData, dcSpecData } from "~/data/data-center";
import { DeployProcess } from "../_components/ai/deploy-process";
import { SpecSheet } from "../_components/ai/spec-sheet";
import { ConsultSection } from "../_components/consult-section";
import { DcFacility } from "../_components/data-center/dc-facility";
import { DcHero } from "../_components/data-center/dc-hero";
import { DcServices } from "../_components/data-center/dc-services";
import { FaqList } from "../_components/faq-list";
import { SectionHeading } from "../_components/section-heading";

export const metadata: Metadata = {
  title: "Data center | Vũ Hải",
  description:
    "Data center Vũ Hải: thuê tủ rack, private cloud, sao lưu và phục hồi, kết nối mạng; điện dự phòng 2N, làm mát chất lỏng, giám sát 24/7.",
};

export default function DataCenterPage() {
  return (
    <>
      <DcHero />
      <DcServices />
      <DcFacility />
      <SpecSheet
        rows={dcSpecData}
        title="Thông số hạ tầng Data center"
        description="Thông số thiết kế tham chiếu. Cấu hình cụ thể được xác nhận theo từng yêu cầu khảo sát."
      />
      <DeployProcess steps={dcProcessData} title="Từ khảo sát đến vận hành trong năm bước" />
      <section className="bg-secondary pt-20 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Câu hỏi thường gặp" title="Giải đáp về Data center" />
          <FaqList items={dcFaqData} />
        </div>
      </section>
      <ConsultSection
        id="tu-van"
        topic="Data center"
        title="Nhận tư vấn và báo giá Data center"
        description="Cho chúng tôi biết số lượng thiết bị, công suất điện và băng thông; Vũ Hải đề xuất phương án phù hợp."
      />
    </>
  );
}

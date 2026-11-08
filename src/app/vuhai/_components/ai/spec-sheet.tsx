import { aiSpecData } from "~/data/ai-server";
import { SectionHeading } from "../../_components/section-heading";

export const SpecSheet = () => (
  <section id="cau-hinh" className="scroll-mt-24 py-20">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <SectionHeading
        eyebrow="Cấu hình tham chiếu"
        title="Thông số hạ tầng GPU"
        description="Cấu hình tham chiếu cho cụm huấn luyện và suy luận. Mẫu GPU và số lượng sẵn có được xác nhận theo từng yêu cầu thuê."
      />
      <dl className="overflow-hidden rounded-2xl border border-border">
        {aiSpecData.map((row, i) => (
          <div
            key={row.label}
            className={`grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}
          >
            <dt className="font-bold text-navy">{row.label}</dt>
            <dd className="text-foreground/90">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

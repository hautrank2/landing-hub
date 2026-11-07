import { Check } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { aiUseCaseData } from "~/data/ai-server";
import { SectionHeading } from "../../_components/section-heading";

export const UseCases = () => (
  <section id="dich-vu-ai" className="scroll-mt-24 bg-secondary py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Dịch vụ AI triển khai được"
        title="Từ chatbot nội bộ đến huấn luyện mô hình riêng"
        description="Vũ Hải hỗ trợ đưa mô hình vào chạy thật và tích hợp với hệ thống như VAN-Logistic hoặc ERP của doanh nghiệp."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {aiUseCaseData.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="flex gap-5 rounded-2xl bg-card p-6 shadow-sm">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
              <item.icon className="size-6" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-navy">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {item.points?.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

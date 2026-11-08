import { Check } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { aiRentalData } from "~/data/ai-server";
import { SectionHeading } from "../../_components/section-heading";

export const RentalModels = () => (
  <section id="mo-hinh-thue" className="scroll-mt-24 bg-secondary py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Mô hình cho thuê"
        title="Chọn cách thuê phù hợp với giai đoạn của dự án"
        description="Giá được báo theo cấu hình GPU và thời hạn thực tế — liên hệ để nhận báo giá."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {aiRentalData.map((model, i) => (
          <Reveal key={model.name} delay={i * 70} className="flex flex-col rounded-2xl bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                <model.icon className="size-6" />
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">{model.tag}</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-navy">{model.name}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{model.description}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm">
              {model.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <a href="#tu-van" className="mt-6 font-bold text-primary hover:underline">
              Liên hệ báo giá →
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

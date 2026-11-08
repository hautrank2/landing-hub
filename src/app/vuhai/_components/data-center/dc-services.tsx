import { Check } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { dcServiceData } from "~/data/data-center";
import { SectionHeading } from "../section-heading";

export const DcServices = () => (
  <section id="dich-vu" className="scroll-mt-24 bg-secondary py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Dịch vụ Data center"
        title="Từ thuê tủ rack đến private cloud và sao lưu"
        description="Chọn dịch vụ theo giai đoạn của hệ thống; giá được báo theo công suất điện, số lượng thiết bị và thời hạn."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dcServiceData.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="flex flex-col rounded-2xl bg-card p-6 shadow-sm">
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <item.icon className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-navy">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm">
              {item.points?.map((point) => (
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

import { Reveal } from "~/components/ui/reveal";
import { aiWhyData } from "~/data/ai-server";
import { SectionHeading } from "../../_components/section-heading";

export const WhyRent = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Vì sao thuê AI Server"
        title="Có sức mạnh GPU, không phải gánh chi phí đầu tư"
        description="Doanh nghiệp tập trung vào dịch vụ AI và dữ liệu của mình; Vũ Hải lo hạ tầng, cài đặt và vận hành."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aiWhyData.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="rounded-2xl border border-border bg-card p-6">
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <item.icon className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

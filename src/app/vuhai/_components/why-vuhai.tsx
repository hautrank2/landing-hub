import { ArrowRight } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { vuhaiProjectData, vuhaiWhyData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

export const WhyVuhai = () => (
  <section className="bg-secondary py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Vì sao doanh nghiệp chọn Vũ Hải?"
        title="Giải pháp đúng nghiệp vụ. Triển khai đúng thực tế."
        description="Từ VAN-Logistic, Customize, ERP đến hạ tầng AI Server, Vũ Hải đồng hành để doanh nghiệp vận hành hiệu quả và mở rộng bền vững."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {vuhaiWhyData.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="rounded-2xl bg-card p-6 shadow-sm">
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <item.icon className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 text-center text-2xl font-extrabold text-navy">Dấu ấn hợp tác & triển khai thực tế</h3>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {vuhaiProjectData.map((project) => (
          <div key={project.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <h4 className="text-lg font-extrabold text-navy">{project.name}</h4>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.body}</p>
            <a
              href="https://vuhai.co/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:underline"
            >
              {project.cta} <ArrowRight className="size-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

import { Check } from "lucide-react";
import { Reveal } from "~/components/ui/reveal";
import { vuhaiEcosystemData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

export const Ecosystem = () => (
  <section className="bg-secondary py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Giải pháp quản trị doanh nghiệp"
        title="Mở rộng từ VAN-Logistic đến hệ sinh thái quản trị All-in-One"
        description="Vũ Hải giúp doanh nghiệp kết nối dữ liệu khách hàng, hoạt động kinh doanh, nghiệp vụ xuất nhập khẩu và quản trị nội bộ trên một hệ thống thống nhất, tích hợp Trợ lý AI."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {vuhaiEcosystemData.map((item, i) => (
          <Reveal key={item.title} delay={i * 60} className="rounded-2xl bg-card p-6 shadow-sm">
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <item.icon className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-navy">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {item.points?.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Giải pháp có thể triển khai theo từng phân hệ, vận hành độc lập hoặc kết nối thành một hệ thống quản trị thống nhất.
      </p>
    </div>
  </section>
);

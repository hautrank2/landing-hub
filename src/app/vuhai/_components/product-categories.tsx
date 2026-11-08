import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "~/components/ui/reveal";
import { vuhaiCategoryData } from "~/data/vuhai";
import { cn } from "~/lib/utils";
import { SectionHeading } from "./section-heading";

export const ProductCategories = () => {
  const [lead, ...rest] = vuhaiCategoryData;

  return (
    <section id="danh-muc" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Danh mục sản phẩm"
          title="Giải pháp công nghệ cho doanh nghiệp, từ hạ tầng AI đến nghiệp vụ"
          description="Dịch vụ AI và Data center là hai danh mục chính của Vũ Hải; các giải pháp phần mềm nghiệp vụ có thể kết hợp để tạo thành hệ thống thống nhất."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <Link
              href={lead.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink p-8 text-ink-foreground shadow-lg transition-shadow hover:shadow-xl sm:p-10"
            >
              <div aria-hidden className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]" />
              <div className="relative">
                <span className="inline-flex rounded-full bg-primary px-3.5 py-1 text-xs font-bold tracking-wider uppercase">
                  {lead.badge}
                </span>
                <span className="mt-6 grid size-14 place-items-center rounded-2xl bg-white/10">
                  <lead.icon className="size-7" />
                </span>
                <h3 className="mt-5 text-4xl font-extrabold">{lead.title}</h3>
                <p className="mt-1 text-lg font-semibold text-ink-muted">{lead.subtitle}</p>
                <p className="mt-5 leading-relaxed text-ink-muted">{lead.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {lead.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="mt-1 size-4 shrink-0 text-ink-foreground" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-bold">
                  Xem chi tiết {lead.title}
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {rest.map((item, i) => {
            const Wrapper = item.external ? "a" : Link;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <Wrapper
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={cn(
                    "group flex h-full gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
                  )}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <item.icon className="size-6" />
                  </span>
                  <span>
                    <span className="block text-xl font-extrabold text-navy">{item.title}</span>
                    <span className="block text-sm font-semibold text-primary">{item.subtitle}</span>
                    <span className="mt-2 block text-[0.95rem] leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/ui/reveal";
import { vuhaiVanLogisticHref, vuhaiCapabilityData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

export const ProductOverview = () => (
  <section id="gioi-thieu" className="scroll-mt-24 py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.16em] text-primary uppercase">Tổng quan sản phẩm</p>
          <h2 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">VAN-Logistic</h2>
          <p className="mt-3 text-2xl font-bold text-navy">
            Nền tảng nghiệp vụ chuyên sâu cho doanh nghiệp xuất nhập khẩu
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            VAN-Logistic giúp doanh nghiệp quản lý tập trung hồ sơ, chứng từ, nguyên phụ liệu và Trừ lùi theo từng bộ hồ sơ.
            Trên cùng một nền tảng, doanh nghiệp có thể lập hồ sơ đề nghị cấp C/O, ký số, tra cứu – thống kê, quản lý hóa đơn
            và sử dụng Trợ lý AI.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 px-6 text-base font-bold">
              <Link href={`${vuhaiVanLogisticHref}#tinh-nang`}>Khám phá tính năng</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 border-primary px-6 text-base font-bold text-primary">
              <Link href={`${vuhaiVanLogisticHref}#dang-ky`}>Dùng thử miễn phí</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl bg-secondary p-8">
          <p className="text-sm font-bold tracking-[0.16em] text-primary uppercase">Năng lực quản trị và kết nối</p>
          <p className="mt-3 text-2xl font-extrabold text-navy">Kết nối chính thức – Đồng bộ xuyên suốt quy trình C/O</p>
        </div>
      </div>

      <div id="tinh-nang" className="mt-20 scroll-mt-24">
        <SectionHeading eyebrow="Năng lực nghiệp vụ" title="Một nền tảng thống nhất cho bốn nhóm nghiệp vụ cốt lõi" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vuhaiCapabilityData.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
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
      </div>
    </div>
  </section>
);

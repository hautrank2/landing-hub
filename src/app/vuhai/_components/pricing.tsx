import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { vuhaiVanLogisticHref, vuhaiPlansData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

const { standard, addons, customize, erpScope } = vuhaiPlansData;

export const Pricing = () => (
  <section id="bang-gia" className="scroll-mt-24 py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Báo giá"
        title="Lựa chọn phương án triển khai"
        description="VAN-Logistic Thương mại là phương án tiêu chuẩn, triển khai nhanh. Customize và ERP được tư vấn theo nhu cầu thực tế."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-sm">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
            Phương án tiêu chuẩn
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-navy">{standard.name}</h3>
          <p className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-primary">{standard.price}</span>
            <span className="text-muted-foreground">{standard.unit}</span>
          </p>
          <ul className="mt-5 space-y-2.5">
            {standard.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <Check className="size-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <dl className="mt-6 grid gap-3 rounded-xl bg-secondary p-4 text-sm sm:grid-cols-3">
            {standard.limits.map((limit) => (
              <div key={limit.label}>
                <dt className="text-muted-foreground">{limit.label}</dt>
                <dd className="font-bold text-navy">{limit.value}</dd>
              </div>
            ))}
          </dl>
          <Button asChild size="lg" className="mt-6 h-11 w-full text-base font-bold">
            <Link href={`${vuhaiVanLogisticHref}#dang-ky`}>Tư vấn gói Thương mại</Link>
          </Button>
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-navy">Gói mở rộng</h3>
          <p className="mt-1 text-muted-foreground">Mua thêm cho khách hàng đã dùng VAN-Logistic Thương mại.</p>
          <ul className="mt-4 space-y-3">
            {addons.map((addon) => (
              <li key={addon.name} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5">
                <span>
                  <span className="block font-extrabold text-navy">{addon.name}</span>
                  <span className="block text-sm text-muted-foreground">{addon.description}</span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block font-extrabold text-primary">{addon.price}</span>
                  <span className="text-xs text-muted-foreground">/ năm</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-ink p-8 text-ink-foreground">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wider uppercase">
            Phương án khuyến nghị
          </span>
          <h3 className="mt-4 text-2xl font-extrabold">VAN-Logistic Customize</h3>
          <p className="mt-1 font-semibold text-ink-muted">Trừ lùi NPL theo quy trình và dữ liệu riêng của doanh nghiệp</p>
          <ul className="mt-5 space-y-2.5">
            {customize.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="mt-1 size-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-muted">Phạm vi và chi phí được xác định sau khi khảo sát quy trình, dữ liệu và yêu cầu triển khai thực tế.</p>
        </div>
        <div className="rounded-2xl bg-secondary p-8">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
            Giải pháp chiến lược
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-navy">ERP All-in-One</h3>
          <p className="mt-2 text-muted-foreground">
            Dành cho doanh nghiệp cần kết nối dữ liệu và quy trình giữa nhiều phòng ban, triển khai theo phân hệ hoặc đồng bộ.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {erpScope.map((item) => (
              <li key={item} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-navy">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Giá gói Thương mại và các gói mở rộng áp dụng cho 01 năm sử dụng, chưa bao gồm VAT. Chi phí Customize, ERP và AI Server được xác định theo phạm vi và cấu hình thực tế.
      </p>
    </div>
  </section>
);

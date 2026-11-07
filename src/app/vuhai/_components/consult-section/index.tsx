"use client";

import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { Button } from "~/components/ui/button";
import { vuhaiContact } from "~/data/vuhai";
import { useConsultForm } from "./hook";
import type { ConsultSectionProps } from "./type";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30";

export const ConsultSection = ({ id, title, description, topic, withTaxCode = false }: ConsultSectionProps) => {
  const { sent, onSubmit } = useConsultForm({ topic });

  return (
    <section id={id} className="scroll-mt-24 bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div id={id === "dang-ky" ? "lien-he" : undefined} className="scroll-mt-24 rounded-2xl bg-card p-6 shadow-sm sm:p-10">
          <h2 className="text-3xl font-extrabold text-navy">{title}</h2>
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
            {withTaxCode && (
              <label className="text-sm font-bold">
                Mã số thuế
                <input name="taxCode" inputMode="numeric" autoComplete="off" className={fieldClass} />
              </label>
            )}
            <label className="text-sm font-bold">
              Họ tên
              <input name="name" required autoComplete="name" className={fieldClass} />
            </label>
            <label className="text-sm font-bold">
              Điện thoại
              <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
            </label>
            <label className="text-sm font-bold sm:col-span-2">
              Nội dung hỗ trợ
              <textarea name="message" rows={4} className={fieldClass} />
            </label>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="h-12 px-8 text-base font-bold">
                Gửi yêu cầu tư vấn
              </Button>
              {sent && (
                <p role="status" className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                  <CheckCircle2 className="size-4" />
                  Đã mở ứng dụng thư để gửi yêu cầu tới {vuhaiContact.email}.
                </p>
              )}
            </div>
          </form>
        </div>

        <div id={id === "dang-ky" ? undefined : "lien-he"} className="scroll-mt-24">
          <h2 className="text-3xl font-extrabold text-navy">Liên hệ trực tiếp</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Kết nối với đội ngũ Vũ Hải qua kênh phù hợp với bạn.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Phone, label: "Hotline tư vấn", value: vuhaiContact.hotline, href: vuhaiContact.hotlineHref },
              { icon: Mail, label: "Email hỗ trợ", value: vuhaiContact.email, href: `mailto:${vuhaiContact.email}` },
              { icon: Clock, label: "Thời gian hỗ trợ", value: vuhaiContact.hours },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-sm">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <item.icon className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-xl font-extrabold text-navy hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xl font-extrabold text-navy">{item.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

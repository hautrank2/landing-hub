import { ShieldCheck } from "lucide-react";
import { vuhaiTrustData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

export const Trust = () => (
  <section className="bg-ink py-20 text-ink-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tone="dark"
        eyebrow="Năng lực & độ tin cậy"
        title="Năng lực được kiểm chứng"
        description="Những minh chứng về chất lượng, độ an toàn và năng lực vận hành của VAN-Logistic."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {vuhaiTrustData.items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-ink-border bg-ink-raised p-7">
            <p className="flex items-center gap-2 text-sm font-bold tracking-wider text-ink-muted uppercase">
              <ShieldCheck className="size-4" />
              {item.eyebrow}
            </p>
            <h3 className="mt-3 text-xl font-extrabold">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 flex items-baseline gap-4">
        <span className="text-6xl font-extrabold">{vuhaiTrustData.test.value}</span>
        <span className="text-lg text-ink-muted">{vuhaiTrustData.test.label}</span>
      </p>
    </div>
  </section>
);

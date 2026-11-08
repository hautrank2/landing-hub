import { aiInfraData, aiSectorData } from "~/data/ai-server";
import { SectionHeading } from "../../_components/section-heading";

export const Infrastructure = () => (
  <section className="bg-ink py-20 text-ink-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tone="dark"
        eyebrow="Hạ tầng & vận hành"
        title="Hạ tầng thiết kế cho tải AI mật độ cao"
        description="Làm mát chất lỏng, điện dự phòng và mạng non-blocking giúp GPU chạy ổn định ở mật độ tới 120 kW/rack."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aiInfraData.map((item) => (
          <div key={item.title} className="rounded-2xl border border-ink-border bg-ink-raised p-6">
            <h3 className="text-lg font-extrabold">{item.title}</h3>
            <p className="mt-2 text-ink-muted">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="text-sm font-bold tracking-wider text-ink-muted uppercase">Lĩnh vực phục vụ</p>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {aiSectorData.map((sector) => (
            <li key={sector} className="rounded-full border border-ink-border px-4 py-1.5 text-sm font-semibold">
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

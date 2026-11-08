import { aiProcessData } from "~/data/ai-server";
import { SectionHeading } from "../../_components/section-heading";

export const DeployProcess = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Quy trình triển khai"
        title="Từ nhu cầu đến dịch vụ AI chạy thật trong năm bước"
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-5">
        {aiProcessData.map((item) => (
          <li key={item.step} className="relative rounded-2xl border border-border bg-card p-6">
            <span className="text-3xl font-extrabold text-primary">{item.step}</span>
            <h3 className="mt-3 text-lg font-extrabold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

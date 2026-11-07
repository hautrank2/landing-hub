import { ArrowRight } from "lucide-react";
import { vuhaiNewsData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

export const NewsUpdates = () => (
  <section className="bg-secondary py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading title="Thông tin cập nhật" description="Tin mới về VAN-Logistic, nghiệp vụ xuất nhập khẩu và hoạt động triển khai." />
        <a
          href="https://vuhai.co/tin-tuc/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
        >
          Xem tất cả bài viết <ArrowRight className="size-4" />
        </a>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {vuhaiNewsData.map((news) => (
          <li key={news.title}>
            <a
              href={news.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <span className="font-bold text-navy">{news.title}</span>
              <span className="mt-4 text-sm text-muted-foreground">{news.date}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

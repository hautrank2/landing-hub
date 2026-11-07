import { ArrowRight, PlayCircle } from "lucide-react";
import { vuhaiVideoData } from "~/data/vuhai";
import { SectionHeading } from "./section-heading";

export const Guides = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading title="Hướng dẫn sử dụng VAN-Logistic" description="Theo dõi các hướng dẫn thao tác và nghiệp vụ tiêu biểu." />
        <a
          href="https://vuhai.co/video/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
        >
          Xem tất cả video <ArrowRight className="size-4" />
        </a>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vuhaiVideoData.map((video) => (
          <li key={video.title}>
            <a
              href="https://vuhai.co/video/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <PlayCircle className="size-7" />
              </span>
              <span>
                <span className="block font-bold text-navy">{video.title}</span>
                <span className="text-sm text-muted-foreground">{video.duration}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

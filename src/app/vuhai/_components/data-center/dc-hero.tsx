import { ArrowRight, Phone } from "lucide-react";
import { Button } from "~/components/ui/button";
import { dcHeroStatData } from "~/data/data-center";
import { vuhaiContact } from "~/data/vuhai";
import { AiScene } from "../ai-scene";

export const DcHero = () => (
  <section id="top" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
    <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    <div aria-hidden className="absolute -top-32 -right-32 -z-10 size-[32rem] rounded-full bg-primary/30 blur-3xl" />

    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
      <div>
        <p className="inline-flex rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wider uppercase">
          Danh mục chính · Hạ tầng
        </p>
        <h1 className="mt-5 text-4xl leading-[1.1] font-extrabold text-balance sm:text-5xl lg:text-6xl">
          Data center chuyên dụng cho hệ thống và dịch vụ AI
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Phòng máy với điện dự phòng 2N, làm mát chất lỏng và giám sát 24/7: thuê tủ rack, private cloud, sao lưu và kết
          nối mạng cho doanh nghiệp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 bg-white px-7 text-base font-bold text-navy hover:bg-white/90">
            <a href="#tu-van">
              Nhận tư vấn <ArrowRight className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/40 bg-transparent px-7 text-base font-bold text-white hover:bg-white/10 hover:text-white"
          >
            <a href={vuhaiContact.hotlineHref}>
              <Phone className="size-5" /> {vuhaiContact.hotline}
            </a>
          </Button>
        </div>
      </div>
      <AiScene variant="data-center" className="min-h-[22rem] w-full lg:h-[32rem]" />
    </div>

    <dl className="border-t border-ink-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {dcHeroStatData.map((stat) => (
          <div key={stat.label} className="py-6 lg:px-6 lg:first:pl-0">
            <dt className="text-sm text-ink-muted">{stat.label}</dt>
            <dd className="mt-1 text-xl font-extrabold sm:text-2xl">{stat.value}</dd>
          </div>
        ))}
      </div>
    </dl>
  </section>
);

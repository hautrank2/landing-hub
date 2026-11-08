import { Cpu, DatabaseBackup, FileText, Server, Snowflake, Zap, Globe, Mail, Phone, LineChart, Link2, MessagesSquare, ShieldCheck, Sparkles, Boxes, BadgePercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { vuhaiAiHref, vuhaiDataCenterHref, vuhaiContact, vuhaiVanLogisticHref } from "~/data/vuhai";
import { AiScene } from "../ai-scene";

type BannerFrameProps = {
  badge: string;
  title: React.ReactNode;
  lead?: string;
  points?: { icon: React.ComponentType<{ className?: string }>; text: string }[];
  actions: React.ReactNode;
  art: React.ReactNode;
};

// Text on the left stays real HTML (selectable, copyable); the art fills the right half.
const BannerFrame = ({ badge, title, lead, points, actions, art }: BannerFrameProps) => (
  <div className="relative isolate grid h-full grid-rows-[auto_1fr] overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-1">
    <div aria-hidden className="absolute -top-24 -left-24 -z-10 size-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="flex flex-col justify-center px-6 pt-10 pb-4 sm:px-12 lg:py-16 lg:pr-4 lg:pl-[max(3rem,calc((100vw-80rem)/2+2rem))]">
      <span className="w-fit rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wider text-primary-foreground uppercase">
        {badge}
      </span>
      <h2 className="mt-5 text-3xl leading-tight font-extrabold text-balance text-navy sm:text-4xl xl:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/80">{lead}</p>}
      {points && (
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point.text} className="flex items-center gap-3 text-base font-semibold text-foreground sm:text-lg">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-primary shadow-sm">
                <point.icon className="size-5" />
              </span>
              {point.text}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
      <p className="mt-5 text-sm text-muted-foreground">
        vuhai.co · {vuhaiContact.email} · {vuhaiContact.hotline}
      </p>
    </div>
    {art}
  </div>
);

type BannerImageProps = { src: string; alt: string; width: number; height: number };

// The art is a tight crop of the product UI (no backdrop), so it floats on the slide as a card.
const BannerImage = ({ src, alt, width, height }: BannerImageProps) => (
  <div className="flex items-center justify-center px-6 pt-2 pb-12 sm:px-12 lg:py-16 lg:pr-[max(3rem,calc((100vw-80rem)/2+2rem))] lg:pl-4">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="h-auto max-h-[70svh] w-auto max-w-full rounded-2xl border border-border/60 shadow-2xl shadow-primary/20"
    />
  </div>
);

const outlineButton = "h-12 border-primary bg-white px-7 text-base font-bold text-primary hover:bg-secondary";
const solidButton = "h-12 px-7 text-base font-bold";

export const AiServiceBanner = () => (
  <BannerFrame
    badge="Dịch vụ AI · Cho thuê GPU"
    title={
      <>
        Thuê AI Server
        <br />
        Triển khai dịch vụ AI cho doanh nghiệp
      </>
    }
    points={[
      { icon: Cpu, text: "GPU NVIDIA HGX / GB200, NVLink 900 GB/s" },
      { icon: MessagesSquare, text: "Chatbot, RAG, thị giác máy tính, fine-tuning" },
      { icon: ShieldCheck, text: "Máy chủ riêng, dữ liệu thuộc về doanh nghiệp" },
      { icon: Sparkles, text: "Hỗ trợ triển khai và vận hành 24/7" },
    ]}
    actions={
      <>
        <Button asChild size="lg" className={solidButton}>
          <Link href={vuhaiAiHref}>Khám phá dịch vụ AI</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className={outlineButton}>
          <Link href={`${vuhaiAiHref}#tu-van`}>Nhận tư vấn</Link>
        </Button>
      </>
    }
    art={<AiScene className="min-h-[22rem] w-full lg:h-full" />}
  />
);

export const DataCenterBanner = () => (
  <BannerFrame
    badge="Data center · Hạ tầng"
    title={
      <>
        Data center chuyên dụng
        <br />
        Điện dự phòng, làm mát, giám sát 24/7
      </>
    }
    points={[
      { icon: Server, text: "Thuê tủ rack, colocation, private cloud" },
      { icon: Snowflake, text: "Làm mát chất lỏng, mật độ tới 120 kW/rack" },
      { icon: Zap, text: "Cấp điện dự phòng 2N" },
      { icon: DatabaseBackup, text: "Sao lưu, phục hồi thảm hoạ và kết nối mạng" },
    ]}
    actions={
      <>
        <Button asChild size="lg" className={solidButton}>
          <Link href={vuhaiDataCenterHref}>Khám phá Data center</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className={outlineButton}>
          <Link href={`${vuhaiDataCenterHref}#tu-van`}>Nhận tư vấn</Link>
        </Button>
      </>
    }
    art={<AiScene variant="data-center" className="min-h-[22rem] w-full lg:h-full" />}
  />
);

export const VanLogisticBanner = () => (
  <BannerFrame
    badge="VAN-Logistic 2026"
    title={
      <>
        Nền tảng nghiệp vụ chuyên sâu
        <br />
        cho doanh nghiệp xuất nhập khẩu
      </>
    }
    points={[
      { icon: Boxes, text: "Quản lý Nguyên liệu và Trừ lùi" },
      { icon: FileText, text: "Hồ sơ & chứng từ xuất nhập khẩu" },
      { icon: LineChart, text: "Tra cứu, báo cáo và Trợ lý AI" },
      { icon: Link2, text: "Kết nối hệ thống chứng nhận xuất xứ" },
    ]}
    actions={
      <>
        <Button asChild size="lg" className={solidButton}>
          <Link href={`${vuhaiVanLogisticHref}#tinh-nang`}>Khám phá tính năng</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className={outlineButton}>
          <Link href={`${vuhaiVanLogisticHref}#dang-ky`}>Dùng thử miễn phí</Link>
        </Button>
      </>
    }
    art={
      <BannerImage
        src="/vuhai/banner-van-logistic.png"
        width={789}
        height={414}
        alt="Giao diện VAN-Logistic 2026: danh sách hồ sơ C/O và trừ lùi nguyên phụ liệu"
      />
    }
  />
);

export const PricingBanner = () => (
  <BannerFrame
    badge="Chính sách giá mới"
    title="VAN-Logistic Thương mại"
    lead="Phương án tiêu chuẩn, triển khai nhanh cho doanh nghiệp xuất nhập khẩu."
    points={[
      { icon: BadgePercent, text: "6.500.000đ / 1 MST / 1 năm" },
      { icon: Boxes, text: "Gói mở rộng CRM Lite, HRM Lite, Trừ lùi nâng cấp: +3.000.000đ / năm" },
    ]}
    actions={
      <>
        <Button asChild size="lg" className={solidButton}>
          <Link href={`${vuhaiVanLogisticHref}#bang-gia`}>Xem bảng giá</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className={outlineButton}>
          <Link href={`${vuhaiVanLogisticHref}#dang-ky`}>Nhận tư vấn</Link>
        </Button>
      </>
    }
    art={
      <BannerImage
        src="/vuhai/banner-pricing.png"
        width={592}
        height={370}
        alt="Các tính năng của gói VAN-Logistic Thương mại"
      />
    }
  />
);

const vanLogisticLogo = "https://vuhai.co/wp-content/uploads/2025/08/LOGO-VAN-LOGISTIC-80x80.png";

const partnerContacts = [
  { icon: Phone, label: vuhaiContact.hotline, href: vuhaiContact.hotlineHref },
  { icon: Mail, label: vuhaiContact.email, href: `mailto:${vuhaiContact.email}` },
  { icon: Globe, label: "vuhai.co", href: "https://vuhai.co" },
];

// Left half mirrors the original vuhai.co partner banner, rebuilt as live HTML.
export const PartnerBanner = () => (
  <div className="relative isolate grid h-full overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary lg:grid-cols-[0.95fr_1.05fr]">
    <div aria-hidden className="absolute -top-24 -left-24 -z-10 size-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="flex items-center px-4 pt-8 pb-4 sm:px-12 lg:py-10 lg:pr-4 lg:pl-[max(3rem,calc((100vw-80rem)/2+2rem))]">
      <div className="vuhai-partner-card relative w-full max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-b from-[oklch(0.93_0.04_235)] to-[oklch(0.97_0.02_240)] p-5 shadow-xl shadow-primary/10 sm:p-8">
        <div aria-hidden className="absolute -top-16 -right-10 h-48 w-96 -rotate-12 rounded-full bg-white/50 blur-2xl" />
        <div className="relative flex items-center gap-5">
          <Image src="/vuhai/logo-vuhai.png" alt="Vũ Hải" width={512} height={512} className="size-20 object-contain sm:size-24" />
          <Image src={vanLogisticLogo} alt="VAN-Logistic" width={80} height={80} unoptimized className="size-16 sm:size-20" />
        </div>

        <div className="relative mt-4 rounded-2xl bg-white/55 px-5 py-5 backdrop-blur-sm sm:px-7">
          <h2 className="text-2xl leading-tight font-extrabold text-navy uppercase sm:text-3xl xl:text-4xl">
            Mời hợp tác
            <br />
            quảng bá thương hiệu
            <br />
            <span className="text-primary">trên VAN-Logistic</span>
          </h2>
          <p className="mt-4 text-base leading-snug font-bold text-navy sm:text-lg">
            Kết nối thương hiệu trực tiếp với cộng đồng doanh nghiệp xuất nhập khẩu
          </p>
          <p className="mt-2 text-sm text-primary sm:text-base">
            Quảng bá sản phẩm, dịch vụ tại nhiều vị trí nổi bật trên phần mềm.
          </p>
        </div>

        <ul className="relative mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
          {partnerContacts.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-primary sm:text-base">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="size-4" />
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <BannerImage
      src="/vuhai/banner-partner.png"
      alt="Vị trí quảng bá thương hiệu đối tác trên giao diện VAN-Logistic"
      width={689}
      height={369}
    />
  </div>
);

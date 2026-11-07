import Image from "next/image";
import { cn } from "~/lib/utils";

// Official VAN-Logistic mark, linked straight from vuhai.co (not copied into the repo).
const logoSrc = "https://vuhai.co/wp-content/uploads/2025/08/LOGO-VAN-LOGISTIC-80x80.png";

/** Mark + wordmark used in the header and footer. */
export const Logo = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cn("inline-flex items-center gap-3", className)} {...props}>
    <Image src={logoSrc} alt="" width={80} height={80} unoptimized className="size-11 shrink-0" />
    <span className="flex flex-col leading-none">
      <span className="text-xl font-extrabold tracking-wide text-navy uppercase">Vũ Hải</span>
      <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary uppercase">
        Ứng dụng Công nghệ
      </span>
    </span>
  </span>
);

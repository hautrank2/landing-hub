import { cn } from "~/lib/utils";

type LogoProps = React.ComponentProps<"span"> & {
  /** Drop the "Trading Pte. Ltd." line where space is tight. */
  compact?: boolean;
};

export const Logo = ({ className, compact = false, ...props }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-2.5", className)} {...props}>
    <svg
      viewBox="0 0 32 40"
      aria-hidden
      className="h-9 w-auto shrink-0 text-primary"
    >
      <path
        d="M16 1C16 1 3 17 3 26a13 13 0 0 0 26 0C29 17 16 1 16 1Z"
        fill="currentColor"
      />
      <path
        d="M16 15c0 0-6 7.5-6 11.5a6 6 0 0 0 12 0C22 22.5 16 15 16 15Z"
        className="fill-ink"
      />
      <path
        d="M11.5 22.5a6.5 6.5 0 0 1 2-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
    <span className="flex flex-col leading-none">
      <span className="font-display text-xl font-bold tracking-wide uppercase">
        D&amp;C <span className="text-primary">Petrol</span>
      </span>
      {!compact && (
        <span className="mt-1 text-[0.625rem] font-medium tracking-[0.28em] uppercase opacity-70">
          Trading Pte. Ltd.
        </span>
      )}
    </span>
  </span>
);

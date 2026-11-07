import { cn } from "~/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** `ink` for headings that sit on the dark bands. */
  tone?: "paper" | "ink";
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  tone = "paper",
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "max-w-2xl",
      align === "center" && "mx-auto text-center",
      className
    )}
  >
    <p
      className={cn(
        "flex items-center gap-3 font-display text-sm font-semibold tracking-[0.22em] uppercase",
        align === "center" && "justify-center",
        tone === "ink" ? "text-primary" : "text-flame-deep"
      )}
    >
      <span aria-hidden className="h-0.5 w-8 bg-current" />
      {eyebrow}
    </p>
    <h2
      className={cn(
        "mt-4 font-display text-4xl leading-[1.02] font-bold tracking-tight uppercase sm:text-5xl",
        tone === "ink" ? "text-ink-foreground" : "text-foreground"
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "mt-5 text-lg leading-relaxed",
          tone === "ink" ? "text-ink-muted" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    )}
  </div>
);

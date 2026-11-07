import { cn } from "~/lib/utils";

type SectionHeadingProps = Omit<React.ComponentProps<"div">, "title"> & {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  ...props
}: SectionHeadingProps) => (
  <div
    className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    {...props}
  >
    {eyebrow && (
      <p
        className={cn(
          "text-sm font-bold tracking-[0.16em] uppercase",
          tone === "dark" ? "text-ink-muted" : "text-primary"
        )}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={cn(
        "mt-2 text-3xl leading-tight font-extrabold text-balance sm:text-4xl",
        tone === "dark" ? "text-ink-foreground" : "text-navy"
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "mt-4 text-lg leading-relaxed",
          tone === "dark" ? "text-ink-muted" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    )}
  </div>
);

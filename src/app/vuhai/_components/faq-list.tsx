import { ChevronDown } from "lucide-react";
import type { VuhaiFaqModel } from "~/types";

type FaqListProps = { items: VuhaiFaqModel[] };

// Native <details> keeps the accordion a server component — no state, no JS.
export const FaqList = ({ items }: FaqListProps) => (
  <div className="mx-auto mt-10 max-w-3xl space-y-3">
    {items.map((item, i) => (
      <details key={item.question} className="group rounded-xl border border-border bg-card px-6 py-1" open={i === 0}>
        <summary className="flex cursor-pointer list-none items-center gap-4 py-4 font-bold text-navy marker:hidden">
          <span className="text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
          <span className="flex-1">{item.question}</span>
          <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
        </summary>
        <p className="pb-5 pl-9 leading-relaxed text-muted-foreground">{item.answer}</p>
      </details>
    ))}
  </div>
);

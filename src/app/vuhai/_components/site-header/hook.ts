import { useEffect, useState } from "react";

export const useSiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return {
    open,
    expanded,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
    toggleGroup: (label: string) => setExpanded((value) => (value === label ? null : label)),
  };
};

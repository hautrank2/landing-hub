import { cn } from "~/lib/utils";

/** Drawn server rack — the AI Server illustration, no raster assets. */
export const GpuArt = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 360 300" role="img" aria-label="Tủ máy chủ GPU" className={cn("w-full", className)} {...props}>
    <defs>
      <linearGradient id="rack" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="oklch(0.36 0.11 258)" />
        <stop offset="1" stopColor="oklch(0.27 0.09 258)" />
      </linearGradient>
      <linearGradient id="unit" x1="0" x2="1">
        <stop offset="0" stopColor="oklch(0.42 0.12 258)" />
        <stop offset="1" stopColor="oklch(0.34 0.1 258)" />
      </linearGradient>
      <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="oklch(0.7 0.16 250)" stopOpacity="0.55" />
        <stop offset="1" stopColor="oklch(0.7 0.16 250)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="180" cy="150" rx="170" ry="140" fill="url(#glow)" />
    <rect x="70" y="20" width="220" height="262" rx="14" fill="url(#rack)" />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i} transform={`translate(84 ${34 + i * 50})`}>
        <rect width="192" height="40" rx="6" fill="url(#unit)" stroke="oklch(1 0 0 / 14%)" />
        {[0, 1, 2, 3].map((v) => (
          <rect key={v} x={14 + v * 22} y="9" width="16" height="22" rx="3" fill="oklch(0.24 0.08 258)" />
        ))}
        {[0, 1, 2, 3].map((v) => (
          <rect key={v} x={17 + v * 22} y="13" width="10" height="2" fill="oklch(0.78 0.12 250)" opacity="0.7" />
        ))}
        <circle cx="160" cy="20" r="3.5" fill="oklch(0.78 0.17 150)" />
        <circle cx="173" cy="20" r="3.5" fill={i % 2 === 0 ? "oklch(0.78 0.17 150)" : "oklch(0.85 0.14 85)"} />
      </g>
    ))}
    <rect x="62" y="276" width="236" height="8" rx="4" fill="oklch(0.3 0.09 258)" />
    {/* GPU chip callout */}
    <g transform="translate(250 28)">
      <rect width="86" height="86" rx="12" fill="white" stroke="oklch(0.54 0.17 256)" strokeWidth="2" />
      <rect x="22" y="22" width="42" height="42" rx="6" fill="oklch(0.54 0.17 256)" />
      <text x="43" y="48" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">
        GPU
      </text>
      {[0, 1, 2, 3].map((p) => (
        <g key={p} stroke="oklch(0.54 0.17 256)" strokeWidth="3" strokeLinecap="round">
          <path d={`M${30 + p * 9} 12v8M${30 + p * 9} 66v8`} />
          <path d={`M12 ${30 + p * 9}h8M66 ${30 + p * 9}h8`} />
        </g>
      ))}
    </g>
  </svg>
);

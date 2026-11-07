import { cn } from "~/lib/utils";

// [x, top, width] — everything stands on the ground line at y = 260.
const backStructures = [
  [110, 160, 60],
  [290, 104, 20],
  [322, 170, 52],
  [596, 92, 26],
  [636, 176, 58],
  [786, 120, 30],
  [826, 166, 52],
  [1000, 150, 70],
  [1104, 96, 24],
  [1252, 140, 40],
  [1382, 166, 50],
] as const;

const tanks = [
  [40, 190, 150],
  [205, 206, 100],
  [1150, 186, 170],
  [1336, 210, 90],
] as const;

// [x, top, width, platforms]
const columns = [
  [430, 72, 28, [112, 152, 192]],
  [478, 122, 18, [164]],
  [520, 152, 40, []],
  [880, 62, 34, [102, 146, 190]],
  [932, 112, 22, [160]],
  [1040, 42, 16, []],
  [1070, 82, 12, []],
] as const;

const rackSupports = Array.from({ length: 14 }, (_, index) => 300 + index * 62);

/** Silhouette of a refinery at dusk; the flare in the middle survives any crop. */
export const RefinerySkyline = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 1440 260"
    preserveAspectRatio="xMidYMax slice"
    aria-hidden
    className={cn("block", className)}
    {...props}
  >
    <defs>
      <radialGradient id="flare-glow">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
      </radialGradient>
    </defs>

    <g className="fill-ink-raised">
      {backStructures.map(([x, top, width]) => (
        <rect key={x} x={x} y={top} width={width} height={260 - top} />
      ))}
    </g>

    <circle cx="720" cy="30" r="70" fill="url(#flare-glow)" />

    <g className="fill-ink">
      {tanks.map(([x, top, width]) => (
        <g key={x}>
          <rect x={x} y={top} width={width} height={260 - top} />
          <ellipse cx={x + width / 2} cy={top} rx={width / 2} ry={8} />
        </g>
      ))}

      {columns.map(([x, top, width, platforms]) => (
        <g key={x}>
          <rect x={x} y={top} width={width} height={260 - top} />
          <ellipse cx={x + width / 2} cy={top} rx={width / 2} ry={5} />
          {platforms.map((y) => (
            <rect key={y} x={x - 8} y={y} width={width + 16} height={3} />
          ))}
        </g>
      ))}

      <rect x="300" y="226" width="850" height="5" />
      <rect x="300" y="240" width="850" height="3" />
      {rackSupports.map((x) => (
        <rect key={x} x={x} y={226} width={3} height={34} />
      ))}

      {/* Flare stack and its guy wires. */}
      <rect x="716" y="46" width="8" height="214" />
      <path
        d="M720 50 664 260M720 50 776 260M720 120 690 260M720 120 750 260"
        className="stroke-ink"
        strokeWidth="1.5"
        fill="none"
      />

      <rect x="0" y="252" width="1440" height="8" />
    </g>

    <g className="animate-flare">
      <path
        d="M720 6C730 21 734 31 728 42c-3 5-13 5-16 0-6-11-2-21 8-36Z"
        className="fill-primary"
      />
      <path
        d="M720 22c5 8 7 14 4 19-1.5 2.5-6.5 2.5-8 0-3-5-1-11 4-19Z"
        className="fill-ink-foreground"
        opacity="0.85"
      />
    </g>

    {/* Aviation warning lights on the tallest columns. */}
    <g className="fill-primary animate-pulse">
      <circle cx="444" cy="64" r="2.5" />
      <circle cx="897" cy="54" r="2.5" />
      <circle cx="1048" cy="34" r="2.5" />
    </g>
  </svg>
);

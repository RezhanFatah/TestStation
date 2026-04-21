const DEFAULT_SCORES = [500, 480, 570, 710, 750];

interface StudentProgressCardProps {
  scores?: number[];
}

export default function StudentProgressCard({ scores = DEFAULT_SCORES }: StudentProgressCardProps) {
  const MIN = 400, MAX = 800, PAD_T = 8, PAD_B = 52;
  const xs = [10, 62, 114, 166, 210];
  const toY = (s: number) => PAD_B - ((s - MIN) / (MAX - MIN)) * (PAD_B - PAD_T);
  const ys = scores.map(toY);
  const pts = xs.map((x, i) => `${x},${ys[i]}`).join(" ");
  const areaPath =
    `M ${xs[0]},${ys[0]} ` +
    xs.slice(1).map((x, i) => `L ${x},${ys[i + 1]}`).join(" ") +
    ` L ${xs[4]},64 L ${xs[0]},64 Z`;
  const latest = scores[4];
  const delta = latest - scores[0];
  const isUp = delta >= 0;

  const topicPills = [
    { label: "Geometry · 44%",      variant: "weak" },
    { label: "Data Analysis · 57%", variant: "mid" },
    { label: "Word Problems · 61%", variant: "mid" },
  ];

  const pillStyle = (v: string) =>
    v === "weak"
      ? { background: "var(--ts-red-bg)",   color: "var(--ts-red)",   border: "1px solid rgba(192,64,64,0.2)" }
      : { background: "var(--ts-amber-bg)", color: "var(--ts-amber)", border: "1px solid rgba(184,112,32,0.2)" };

  return (
    <div
      className="bg-white rounded-[18px] p-[26px] transition-all"
      style={{
        border: "1px solid var(--ts-border)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 20px 48px rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[13px] font-semibold" style={{ color: "var(--ts-text)" }}>
          Your progress — last 5 tests
        </span>
        <span
          className="text-[11px] font-semibold px-[9px] py-[3px] rounded-full"
          style={{ color: "var(--ts-green)", background: "var(--ts-green-bg)" }}
        >
          ↑ Improving
        </span>
      </div>

      {/* Sparkline */}
      <div className="rounded-xl p-4 mb-5" style={{ background: "var(--ts-warm-bg)" }}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.05em] mb-[2px]" style={{ color: "var(--ts-text-3)" }}>
              Latest score
            </div>
            <div className="font-dm-mono text-[28px] font-medium" style={{ color: "var(--ts-text)" }}>
              {latest}
            </div>
          </div>
          <div
            className="text-[13px] font-semibold flex items-center gap-1 px-[10px] py-[3px] rounded-full"
            style={{
              color: isUp ? "var(--ts-green)" : "var(--ts-red)",
              background: isUp ? "var(--ts-green-bg)" : "var(--ts-red-bg)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d={isUp ? "M2 9L6 3L10 9" : "M2 3L6 9L10 3"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {isUp ? "+" : ""}{delta} pts
          </div>
        </div>

        <svg viewBox="0 0 220 64" width="100%" style={{ display: "block", marginBottom: "4px" }}>
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C2610F" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#C2610F" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#sparkGrad)" />
          <polyline
            points={pts}
            fill="none"
            stroke="#C2610F"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {xs.map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={ys[i]}
              r={i === 4 ? 4.5 : 3.5}
              fill="#C2610F"
              stroke={i === 4 ? "white" : undefined}
              strokeWidth={i === 4 ? 1.5 : undefined}
            />
          ))}
          {scores.map((s, i) => (
            <text
              key={i}
              x={xs[i]}
              y={62}
              textAnchor="middle"
              fontSize={9}
              fill={i === 4 ? "#C2610F" : "#9E9891"}
              fontFamily="DM Mono, monospace"
              fontWeight={i === 4 ? 600 : undefined}
            >
              {s}
            </text>
          ))}
        </svg>

        <div className="flex justify-between mt-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className="text-[10px] font-dm-mono"
              style={{ color: n === 5 ? "var(--ts-orange)" : "var(--ts-text-3)" }}
            >
              Test {n}
            </span>
          ))}
        </div>
      </div>

      {/* Guess rate trend */}
      <div className="mb-5">
        <div className="flex justify-between items-center text-[12px] font-medium mb-2" style={{ color: "var(--ts-text-2)" }}>
          <span>Guess rate trend</span>
          <span className="text-[11px] font-semibold" style={{ color: "var(--ts-green)" }}>
            ↓ Getting better
          </span>
        </div>
        <div className="flex gap-1 items-end h-7">
          {[85, 75, 60, 45, 30].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[4px]"
              style={{
                height: `${h}%`,
                background: "var(--ts-orange)",
                opacity: 0.5 + i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Weak topics */}
      <div>
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-[10px]"
          style={{ color: "var(--ts-text-3)" }}
        >
          Weakest topics
        </div>
        <div className="flex flex-wrap gap-2">
          {topicPills.map((p) => (
            <span
              key={p.label}
              className="text-[12px] font-medium px-3 py-[5px] rounded-full font-dm-mono"
              style={pillStyle(p.variant)}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

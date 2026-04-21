export default function DashboardMockup() {
  const bars = [
    { topic: "Algebra",       pct: 82, variant: "normal" },
    { topic: "Data analysis", pct: 61, variant: "warn" },
    { topic: "Geometry",      pct: 44, variant: "low" },
    { topic: "Word problems",  pct: 57, variant: "warn" },
  ];

  const students = [
    { initials: "AK", name: "Amara K.",  score: "68%", scoreVariant: "warn", flag: "High guesses", flagVariant: "guess" },
    { initials: "JL", name: "James L.",  score: "89%", scoreVariant: "ok",   flag: null, flagVariant: null },
    { initials: "SP", name: "Sofia P.",  score: "52%", scoreVariant: "low",  flag: "Score drop", flagVariant: "drop" },
  ];

  const barColor = (v: string) =>
    v === "warn" ? "#D4901A" : v === "low" ? "var(--ts-red)" : "var(--ts-orange)";

  const scoreColor = (v: string) =>
    v === "ok" ? "var(--ts-green)" : v === "warn" ? "var(--ts-amber)" : "var(--ts-red)";

  const flagStyle = (v: string | null) =>
    v === "guess"
      ? { background: "var(--ts-orange-bg)", color: "var(--ts-orange)" }
      : { background: "var(--ts-red-bg)", color: "var(--ts-red)" };

  return (
    <div className="relative">
      {/* Main dashboard card */}
      <div
        className="bg-white rounded-[18px] p-6"
        style={{
          border: "1px solid var(--ts-border)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 24px 56px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[13px] font-semibold" style={{ color: "var(--ts-text)" }}>
            Class overview — SAT Math
          </span>
          <span
            className="text-[11px] font-semibold tracking-[0.06em] uppercase flex items-center gap-[5px] px-2 py-1 rounded-full"
            style={{ background: "var(--ts-orange-bg)", color: "var(--ts-orange)" }}
          >
            <span className="w-[6px] h-[6px] rounded-full pulse-dot" style={{ background: "var(--ts-orange)", display: "inline-block" }} />
            Live
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-[10px] mb-5">
          {[
            { label: "Avg. score",  value: "74", unit: "%",    sub: "↑ 6 pts this week", subColor: "var(--ts-green)", valueColor: "var(--ts-text)" },
            { label: "Guess rate",  value: "31", unit: "%",    sub: "Needs attention",   subColor: "var(--ts-text-3)", valueColor: "var(--ts-orange)" },
            { label: "Avg. time/q", value: "1",  unit: ":42",  sub: "↓ 12s from last",  subColor: "var(--ts-text-3)", valueColor: "var(--ts-text)" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[10px] p-[13px]"
              style={{ background: "var(--ts-warm-bg)", border: "1px solid var(--ts-border)" }}
            >
              <div className="text-[10px] font-medium uppercase tracking-[0.05em] mb-1" style={{ color: "var(--ts-text-3)" }}>
                {stat.label}
              </div>
              <div className="text-[22px] font-bold font-dm-mono leading-none" style={{ color: stat.valueColor }}>
                {stat.value}
                <span className="text-[13px] font-normal" style={{ color: "var(--ts-text-3)", fontFamily: "inherit" }}>
                  {stat.unit}
                </span>
              </div>
              <div className="text-[10px] mt-1" style={{ color: stat.subColor }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="mb-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.05em] mb-[10px]" style={{ color: "var(--ts-text-3)" }}>
            Performance by topic
          </div>
          {bars.map((bar) => (
            <div key={bar.topic} className="flex items-center gap-2 mb-[7px]">
              <span className="text-[11px] w-[90px] flex-shrink-0" style={{ color: "var(--ts-text-2)" }}>
                {bar.topic}
              </span>
              <div className="flex-1 rounded-full h-[7px] overflow-hidden" style={{ background: "var(--ts-warm-bg2)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${bar.pct}%`, background: barColor(bar.variant) }}
                />
              </div>
              <span className="text-[11px] w-[30px] text-right font-dm-mono" style={{ color: "var(--ts-text-2)" }}>
                {bar.pct}%
              </span>
            </div>
          ))}
        </div>

        {/* Students */}
        {students.map((s) => (
          <div key={s.name} className="flex items-center gap-[10px] py-2" style={{ borderTop: "1px solid var(--ts-border)" }}>
            <div
              className="w-7 h-7 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--ts-orange-bg)", color: "var(--ts-orange)" }}
            >
              {s.initials}
            </div>
            <span className="text-[12px] font-medium flex-1" style={{ color: "var(--ts-text)" }}>{s.name}</span>
            <span className="text-[12px] font-medium font-dm-mono" style={{ color: scoreColor(s.scoreVariant) }}>
              {s.score}
            </span>
            {s.flag && (
              <span
                className="text-[10px] font-semibold px-[7px] py-[2px] rounded-full"
                style={flagStyle(s.flagVariant)}
              >
                {s.flag}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Float card 1 — bottom left */}
      <div
        className="float-1 absolute hidden sm:flex items-center gap-[10px] bg-white rounded-xl px-[15px] py-[11px]"
        style={{
          bottom: "-22px", left: "-28px",
          border: "1px solid var(--ts-border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          fontSize: "12px",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--ts-orange-bg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="var(--ts-orange)" strokeWidth="1.4" />
            <polyline points="8,4.5 8,8 10,10" stroke="var(--ts-orange)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="font-semibold" style={{ color: "var(--ts-text)" }}>Avg. 4.2s on Q7</div>
          <div className="text-[10px]" style={{ color: "var(--ts-text-3)" }}>Likely guess territory</div>
        </div>
      </div>

      {/* Float card 2 — top right */}
      <div
        className="float-2 absolute hidden sm:flex items-center gap-[10px] bg-white rounded-xl px-[15px] py-[11px]"
        style={{
          top: "-20px", right: "-20px",
          border: "1px solid var(--ts-border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          fontSize: "12px",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--ts-orange-bg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <polyline points="1,13 5,8 9,10 15,4" stroke="var(--ts-orange)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="font-semibold" style={{ color: "var(--ts-text)" }}>+12 pts this month</div>
          <div className="text-[10px]" style={{ color: "var(--ts-text-3)" }}>Geometry improving</div>
        </div>
      </div>

      {/* Float card 3 — middle right */}
      <div
        className="float-3 absolute hidden lg:flex items-center gap-[10px] bg-white rounded-xl px-[15px] py-[11px]"
        style={{
          top: "50%", right: "-32px",
          border: "1px solid var(--ts-border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          fontSize: "12px",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--ts-red-bg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L14 14H2L8 2Z" stroke="var(--ts-red)" strokeWidth="1.4" strokeLinejoin="round" />
            <line x1="8" y1="7" x2="8" y2="10" stroke="var(--ts-red)" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="8" cy="12" r="0.7" fill="var(--ts-red)" />
          </svg>
        </div>
        <div>
          <div className="font-semibold" style={{ color: "var(--ts-red)" }}>3 students flagged</div>
          <div className="text-[10px]" style={{ color: "var(--ts-text-3)" }}>This week · needs review</div>
        </div>
      </div>
    </div>
  );
}

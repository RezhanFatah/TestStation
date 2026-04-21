type PillVariant = "strong" | "moderate" | "weak";
type GuessVariant = "high" | "mid" | "low";

interface Student {
  initials: string;
  name: string;
  algebra:  { score: string; variant: PillVariant };
  geometry: { score: string; variant: PillVariant };
  data:     { score: string; variant: PillVariant };
  reading:  { score: string; variant: PillVariant };
  guess:    { value: string; variant: GuessVariant };
}

const students: Student[] = [
  { initials: "AK", name: "Amara K.",
    algebra: { score: "88%", variant: "strong" }, geometry: { score: "44%", variant: "weak" },
    data: { score: "61%", variant: "moderate" }, reading: { score: "79%", variant: "strong" },
    guess: { value: "31%", variant: "high" } },
  { initials: "JL", name: "James L.",
    algebra: { score: "92%", variant: "strong" }, geometry: { score: "85%", variant: "strong" },
    data: { score: "88%", variant: "strong" }, reading: { score: "90%", variant: "strong" },
    guess: { value: "8%", variant: "low" } },
  { initials: "SP", name: "Sofia P.",
    algebra: { score: "65%", variant: "moderate" }, geometry: { score: "48%", variant: "weak" },
    data: { score: "52%", variant: "weak" }, reading: { score: "60%", variant: "moderate" },
    guess: { value: "42%", variant: "high" } },
  { initials: "MT", name: "Marcus T.",
    algebra: { score: "70%", variant: "moderate" }, geometry: { score: "68%", variant: "moderate" },
    data: { score: "63%", variant: "moderate" }, reading: { score: "55%", variant: "weak" },
    guess: { value: "28%", variant: "mid" } },
  { initials: "PR", name: "Priya R.",
    algebra: { score: "84%", variant: "strong" }, geometry: { score: "72%", variant: "moderate" },
    data: { score: "69%", variant: "moderate" }, reading: { score: "81%", variant: "strong" },
    guess: { value: "15%", variant: "low" } },
];

function PillCell({ score, variant }: { score: string; variant: PillVariant }) {
  const styles: Record<PillVariant, React.CSSProperties> = {
    strong:   { background: "var(--ts-green-bg)",  color: "var(--ts-green)" },
    moderate: { background: "var(--ts-amber-bg)",  color: "var(--ts-amber)" },
    weak:     { background: "var(--ts-red-bg)",    color: "var(--ts-red)" },
  };
  return (
    <td className="text-center px-2 py-3 sm:px-4">
      <span
        className="inline-flex items-center justify-center px-3 py-1 rounded-lg font-dm-mono text-[12px] font-medium min-w-[54px]"
        style={styles[variant]}
      >
        {score}
      </span>
    </td>
  );
}

function GuessCell({ value, variant }: { value: string; variant: GuessVariant }) {
  const color = variant === "high" ? "var(--ts-red)" : variant === "mid" ? "var(--ts-amber)" : "var(--ts-green)";
  return (
    <td className="text-center px-2 py-3 sm:px-4 font-dm-mono text-[13px] font-medium" style={{ color }}>
      {value}
    </td>
  );
}

export default function CohortHeatmap() {
  return (
    <div
      className="bg-white rounded-[18px] overflow-hidden"
      style={{
        border: "1px solid var(--ts-border)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 20px 48px rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-[22px] sm:px-7 flex items-center justify-between flex-wrap gap-3"
        style={{ borderBottom: "1px solid var(--ts-border)" }}
      >
        <div>
          <div className="text-[14px] font-semibold" style={{ color: "var(--ts-text)" }}>
            Cohort performance — SAT Math · Test 5
          </div>
          <div className="text-[12px] mt-0.5" style={{ color: "var(--ts-text-3)" }}>
            5 students · 4 topics · as of April 20, 2026
          </div>
        </div>
        <button
          className="text-[12px] font-medium flex items-center gap-[5px] px-3 py-[5px] rounded-lg"
          style={{
            color: "var(--ts-orange)",
            background: "var(--ts-orange-bg)",
            border: "1px solid rgba(194,97,15,0.2)",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 1v8M3 7l3.5 3.5L10 7" stroke="var(--ts-orange)" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M1 12h11" stroke="var(--ts-orange)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                className="text-left px-4 py-[10px] sm:px-6 text-[11px] font-semibold uppercase tracking-[0.07em] min-w-[140px]"
                style={{ background: "var(--ts-warm-bg)", borderBottom: "1px solid var(--ts-border)", color: "var(--ts-text-3)" }}
              >
                Student
              </th>
              {["Algebra", "Geometry", "Data Analysis", "Reading"].map((h) => (
                <th
                  key={h}
                  className="text-center px-2 py-[10px] sm:px-4 text-[11px] font-semibold uppercase tracking-[0.07em]"
                  style={{ background: "var(--ts-warm-bg)", borderBottom: "1px solid var(--ts-border)", color: "var(--ts-text-3)" }}
                >
                  {h}
                </th>
              ))}
              <th
                className="text-center px-2 py-[10px] sm:px-4 text-[11px] font-semibold uppercase tracking-[0.07em]"
                style={{ background: "var(--ts-warm-bg)", borderBottom: "1px solid var(--ts-border)", color: "var(--ts-text-3)" }}
              >
                Guess %
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.name} className="group">
                <td
                  className="px-4 py-3 sm:px-6 text-[13px] group-hover:bg-[var(--ts-warm-bg)]/70"
                  style={{ borderBottom: "1px solid rgba(232,227,220,0.6)" }}
                >
                  <span className="flex items-center gap-[10px] font-semibold" style={{ color: "var(--ts-text)" }}>
                    <span
                      className="w-[26px] h-[26px] rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--ts-orange-bg)", color: "var(--ts-orange)" }}
                    >
                      {s.initials}
                    </span>
                    {s.name}
                  </span>
                </td>
                <PillCell {...s.algebra} />
                <PillCell {...s.geometry} />
                <PillCell {...s.data} />
                <PillCell {...s.reading} />
                <GuessCell {...s.guess} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div
        className="flex flex-wrap items-center gap-4 px-5 sm:px-7 py-[14px] text-[11px]"
        style={{ background: "var(--ts-warm-bg)", borderTop: "1px solid var(--ts-border)", color: "var(--ts-text-3)" }}
      >
        <span>Legend:</span>
        {[
          { label: "Strong (≥75%)",      bg: "var(--ts-green-bg)",  border: "var(--ts-green)" },
          { label: "Moderate (55–74%)",  bg: "var(--ts-amber-bg)",  border: "var(--ts-amber)" },
          { label: "Weak (<55%)",        bg: "var(--ts-red-bg)",    border: "var(--ts-red)" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-[2px]"
              style={{ background: l.bg, border: `1px solid ${l.border}` }}
            />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}

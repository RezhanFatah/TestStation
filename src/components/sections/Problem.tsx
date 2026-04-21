import ScrollReveal from "@/components/ScrollReveal";

const tools = [
  { name: "AP Classroom",     gap: "Shows scores only. No behavioral data." },
  { name: "Khan Academy",     gap: "Self-directed. No institutional layer." },
  { name: "Private tutoring", gap: "Expensive, unscalable, data-free." },
  { name: "Practice books",   gap: "No personalization. No feedback loop." },
];

const problems = [
  "Students guess questions and never know they guessed — the behavior repeats across every practice test",
  "Some students spend 3 minutes on a question they could answer in 40 seconds — pacing never improves without data",
  "Instructors see a class average. They don't see which three students are about to fall behind",
  "Mistakes repeat for months because no system connects past errors to today's practice",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden px-[5%] py-[76px] md:py-[104px]"
      style={{ background: "var(--ts-text)", color: "white" }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(194,97,15,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(232,131,42,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <ScrollReveal className="mb-14 md:mb-16">
          <div className="w-9 h-[3px] rounded-full mb-3" style={{ background: "var(--ts-orange-lt)" }} />
          <div className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--ts-orange-lt)" }}>
            The problem
          </div>
          <h2
            className="font-playfair font-bold leading-[1.15]"
            style={{ fontSize: "clamp(26px, 3.2vw, 42px)", color: "white", letterSpacing: "-0.02em" }}
          >
            Your students test, you should analyze.<br className="hidden sm:block" />
            Turn behavioral signals into better teaching.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 lg:gap-14">
          <ScrollReveal delay={80}>
            <blockquote
              className="mb-9"
              style={{ borderLeft: "3px solid var(--ts-orange)", paddingLeft: "24px" }}
            >
              <p
                className="font-playfair italic mb-3"
                style={{ fontSize: "clamp(17px, 1.8vw, 22px)", color: "rgba(255,255,255,0.9)", lineHeight: 1.55 }}
              >
                &ldquo;I studied for weeks. Got my score back. Still had no idea what to fix.&rdquo;
              </p>
              <cite className="text-[13px] not-italic" style={{ color: "rgba(255,255,255,0.4)" }}>
                — Student preparing for the digital SAT
              </cite>
            </blockquote>

            <ul className="flex flex-col gap-4 list-none">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-3.5 items-start text-[15px]" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
                  <div
                    className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px] text-[10px]"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.35)" }}
                  >
                    ✕
                  </div>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-[12px] font-semibold tracking-[0.09em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.28)" }}>
              What exists today
            </p>
            <div className="grid grid-cols-2 gap-[10px]">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="ts-tool-item rounded-[10px] p-4"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}
                >
                  <div className="text-[13px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.82)" }}>{t.name}</div>
                  <div className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{t.gap}</div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-[15px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.5)" }}>
              None of these tools capture{" "}
              <em className="italic" style={{ color: "rgba(255,255,255,0.82)" }}>how</em>{" "}
              a student arrived at their answer. TestStation does.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

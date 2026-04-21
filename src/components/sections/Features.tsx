import ScrollReveal from "@/components/ScrollReveal";
import StudentProgressCard from "@/components/visualizations/StudentProgressCard";

const features = [
  {
    title: "Behavioral data capture",
    desc: "Response time per question, guess flags, skip tracking, and correctness — written as structured events on every single answer, not just at submission.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="9" /><circle cx="11" cy="11" r="5.5" /><circle cx="11" cy="11" r="2" />
        <line x1="13" y1="9" x2="18" y2="4" />
      </svg>
    ),
  },
  {
    title: "In-app test builder",
    desc: "Instructors author and manage tests entirely inside TestStation. Multiple choice, topic tags, difficulty levels, and time limits — all in one place.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="18" height="16" rx="3" />
        <line x1="7" y1="8" x2="15" y2="8" /><line x1="7" y1="11" x2="12" y2="11" /><line x1="7" y1="14" x2="10" y2="14" />
      </svg>
    ),
  },
  {
    title: "Classroom management",
    desc: "Assign tests to a whole classroom or individual students. Set due dates and retake limits. Grant extra attempts to specific students — all from one dashboard.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="8" r="4" /><path d="M4 19c0-3.87 3.13-7 7-7h0c3.87 0 7 3.13 7 7" />
      </svg>
    ),
  },
  {
    title: "Instructor cohort dashboard",
    desc: "See average scores, weakest topics, guess rate distribution, and per-question class performance — and get flagged when someone is falling behind.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="2,17 8,11 13,14 20,6" />
        <line x1="16" y1="6" x2="20" y2="6" /><line x1="20" y1="6" x2="20" y2="10" />
      </svg>
    ),
  },
  {
    title: "Student performance view",
    desc: "Every student sees their own score history, topic heatmap, guess rate over time, and per-test breakdown — exactly which questions they guessed, skipped, or got wrong.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="8" height="8" rx="2" /><rect x="12" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="12" width="8" height="8" rx="2" /><rect x="12" y="12" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    title: "Aggregate timer + auto-save",
    desc: "A single countdown timer mirrors the real digital SAT. Students can close the browser and resume — the clock picks up from exactly where it left off.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="9" /><polyline points="11,6 11,11 14,14" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white px-[5%] py-[76px] md:py-[104px]">
      <ScrollReveal className="mb-14 md:mb-16 text-center">
        <div className="w-9 h-[3px] rounded-full mb-3 mx-auto" style={{ background: "var(--ts-orange)" }} />
        <div className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--ts-orange)" }}>
          Features
        </div>
        <h2
          className="font-playfair font-bold leading-[1.15] mb-4"
          style={{ fontSize: "clamp(26px, 3.2vw, 42px)", color: "var(--ts-text)", letterSpacing: "-0.02em" }}
        >
          Built for how institutions actually operate.
        </h2>
        <p className="text-[16px] leading-[1.75] max-w-[560px] mx-auto" style={{ color: "var(--ts-text-2)" }}>
          Not a generic test platform. TestStation is purpose-built for institutional test-prep — the workflows instructors need, the data students deserve.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <ScrollReveal
            key={f.title}
            delay={(i % 3) * 80}
            className="ts-card-hover rounded-2xl p-7"
            style={{ background: "var(--ts-warm-bg)", border: "1px solid var(--ts-border)" }}
          >
            <div className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4" style={{ background: "var(--ts-orange-bg)" }}>
              <div className="w-[22px] h-[22px]">{f.icon}</div>
            </div>
            <div className="text-[16px] font-semibold mb-2.5" style={{ color: "var(--ts-text)" }}>{f.title}</div>
            <div className="text-[14px] leading-[1.7]" style={{ color: "var(--ts-text-2)" }}>{f.desc}</div>
          </ScrollReveal>
        ))}
      </div>

      <div
        className="mt-[72px] pt-[72px] flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center"
        style={{ borderTop: "1px solid var(--ts-border)" }}
      >
        <ScrollReveal>
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-2" style={{ color: "var(--ts-text-3)" }}>
            Student view
          </div>
          <h3
            className="font-playfair font-bold leading-[1.25] mb-4"
            style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "var(--ts-text)", letterSpacing: "-0.02em" }}
          >
            A student&apos;s dashboard<br />
            is <em className="italic" style={{ color: "var(--ts-orange)" }}>personal</em>, not generic.
          </h3>
          <p className="text-[14px] leading-[1.7] max-w-[380px]" style={{ color: "var(--ts-text-2)" }}>
            Students see exactly how they&apos;ve improved — and where guessing is masking what they don&apos;t know. Every test adds to a picture only they can see.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <StudentProgressCard />
        </ScrollReveal>
      </div>
    </section>
  );
}

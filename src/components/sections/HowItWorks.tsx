import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    role: "Instructor",
    title: "Build and assign tests from inside the platform",
    desc: "Instructors create timed, multiple-choice tests directly in TestStation — no external tools. Set a time limit, tag questions by topic and difficulty, assign to a classroom or individual students, and control retake limits.",
    tags: ["in-app builder", "topic tags", "retake controls"],
  },
  {
    num: "02",
    role: "Student",
    title: "Students take timed tests — and flag their guesses",
    desc: "Students work through questions one at a time under a real aggregate timer — mirroring the actual digital SAT. On any question they can mark \"I'm guessing\" before moving on. Sessions auto-save; if they close the browser, they pick up exactly where they left off.",
    tags: ["aggregate timer", "guess flagging", "auto-resume"],
  },
  {
    num: "03",
    role: "System",
    title: "Every answer is a structured behavioral data event",
    desc: "As students work, TestStation captures response time per question, guess flags, skipped questions, topic, and difficulty for every single answer. This isn't just a score — it's a behavioral record of how each student thinks under pressure.",
    tags: ["time per question", "guess detection", "skip tracking"],
  },
  {
    num: "04",
    role: "Dashboards",
    title: "Students and instructors see it all — differently",
    desc: "Students see their score history, topic heatmap, and guess rate over time. Instructors see cohort-level metrics, per-student performance trends, and flagged students with declining scores or high guess rates. The data compounds with every test taken.",
    tags: ["student dashboard", "cohort analytics", "early flags"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-[5%] py-[76px] md:py-[104px]" style={{ background: "var(--ts-warm-bg)" }}>
      <ScrollReveal className="mb-14 md:mb-16">
        <div className="w-9 h-[3px] rounded-full mb-3" style={{ background: "var(--ts-orange)" }} />
        <div className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--ts-orange)" }}>
          How it works
        </div>
        <h2
          className="font-playfair font-bold leading-[1.15] mb-4"
          style={{ fontSize: "clamp(26px, 3.2vw, 42px)", color: "var(--ts-text)", letterSpacing: "-0.02em" }}
        >
          Every test becomes a data event.
        </h2>
        <p className="text-[16px] leading-[1.75] max-w-[560px]" style={{ color: "var(--ts-text-2)" }}>
          TestStation captures behavioral signals during the test — then turns them into intelligence your instructors can actually use.
        </p>
      </ScrollReveal>

      <div className="flex flex-col">
        {steps.map((step, i) => (
          <ScrollReveal
            key={step.num}
            delay={i * 80}
            className="grid gap-5 md:gap-8 py-11"
            style={{
              gridTemplateColumns: "52px 1fr",
              borderBottom: i < steps.length - 1 ? "1px solid var(--ts-border)" : "none",
            }}
          >
            {/* Number column */}
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-dm-mono text-[14px] font-medium"
                style={{
                  background: "var(--ts-orange-bg)",
                  border: "2px solid rgba(194,97,15,0.2)",
                  color: "var(--ts-orange)",
                }}
              >
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="w-[2px] flex-1 mt-3 min-h-[40px]" style={{ background: "var(--ts-border)" }} />
              )}
            </div>

            {/* Body */}
            <div className="pt-[10px]">
              <div
                className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--ts-orange)" }}
              >
                {step.role}
              </div>
              <div
                className="font-semibold mb-2.5"
                style={{ fontSize: "clamp(16px, 1.8vw, 21px)", color: "var(--ts-text)" }}
              >
                {step.title}
              </div>
              <div className="text-[15px] leading-[1.75] mb-3.5 max-w-[560px]" style={{ color: "var(--ts-text-2)" }}>
                {step.desc}
              </div>
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium px-3 py-1 rounded-full font-dm-mono"
                    style={{
                      background: "white",
                      border: "1px solid var(--ts-border)",
                      color: "var(--ts-text-2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

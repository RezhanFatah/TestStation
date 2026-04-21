import ScrollReveal from "@/components/ScrollReveal";
import CohortHeatmap from "@/components/visualizations/CohortHeatmap";

const testimonials = [
  {
    stars: 5,
    quote: "We've been running practice tests for years and the only thing we ever got was a score. Knowing which questions students guessed changes everything about how I structure review sessions.",
    initials: "MA",
    name: "SAT Prep Instructor",
    role: "Boston-area test prep academy · Pilot partner",
  },
  {
    stars: 5,
    quote: "I always knew I was guessing, but I didn't realize how much of my score was just luck. Seeing the data made it real — and gave me something to actually fix.",
    initials: "ST",
    name: "High school junior",
    role: "SAT target: 1400+ · Pilot cohort student",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="px-[5%] py-[76px] md:py-[104px]" style={{ background: "var(--ts-warm-bg)" }}>
      <ScrollReveal className="mb-14 md:mb-16 text-center">
        <div className="w-9 h-[3px] rounded-full mb-3 mx-auto" style={{ background: "var(--ts-orange)" }} />
        <div className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--ts-orange)" }}>
          Feedback
        </div>
        <h2
          className="font-playfair font-bold leading-[1.15]"
          style={{ fontSize: "clamp(26px, 3.2vw, 42px)", color: "var(--ts-text)", letterSpacing: "-0.02em" }}
        >
          Built alongside instructors.<br className="hidden sm:block" />
          Tested with real students.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {testimonials.map((t, i) => (
          <ScrollReveal
            key={t.initials}
            delay={i * 80}
            className="ts-proof-card bg-white rounded-2xl p-8 transition-all"
            style={{ border: "1px solid var(--ts-border)" }}
          >
            <div className="mb-4 tracking-widest" style={{ color: "var(--ts-orange)", fontSize: "15px" }}>
              {"★".repeat(t.stars)}
            </div>
            <blockquote
              className="font-playfair italic leading-[1.7] mb-5"
              style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "var(--ts-text)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="w-[38px] h-[38px] rounded-full text-[12px] font-bold flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--ts-orange-bg)", color: "var(--ts-orange)" }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-[14px] font-semibold" style={{ color: "var(--ts-text)" }}>{t.name}</div>
                <div className="text-[12px]" style={{ color: "var(--ts-text-3)" }}>{t.role}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mb-7">
          <div className="w-9 h-[3px] rounded-full mb-3" style={{ background: "var(--ts-orange)" }} />
          <div className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--ts-orange)" }}>
            Instructor view
          </div>
          <h3
            className="font-playfair font-bold leading-[1.15] mb-2"
            style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "var(--ts-text)", letterSpacing: "-0.02em" }}
          >
            The table an instructor screenshots<br className="hidden sm:block" />
            for a parent meeting.
          </h3>
          <p className="text-[14px] leading-[1.75] max-w-[560px]" style={{ color: "var(--ts-text-2)" }}>
            At a glance — which students are struggling, which topics are dragging them down, and where guessing is inflating scores.
          </p>
        </div>
        <CohortHeatmap />
      </ScrollReveal>

      <div className="text-center mt-10">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-[13px] font-medium"
            style={{ background: "var(--ts-orange-bg)", border: "1px solid rgba(194,97,15,0.2)", color: "var(--ts-orange)" }}
          >
            <span className="pulse-dot w-2 h-2 rounded-full" style={{ background: "var(--ts-orange)" }} />
            Pilot launching Summer 2026
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

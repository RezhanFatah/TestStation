import DashboardMockup from "@/components/visualizations/DashboardMockup";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-[5%] py-[72px] md:py-[90px] lg:py-[110px] flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-[72px] items-center min-h-[80vh] lg:min-h-[92vh]"
      style={{ background: "var(--ts-warm-bg)" }}
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: "min(500px, 80vw)", height: "min(500px, 80vw)",
            background: "radial-gradient(circle, #E8832A 0%, transparent 70%)",
            top: "-160px", right: "-100px",
            filter: "blur(72px)", opacity: 0.35,
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: "min(380px, 70vw)", height: "min(380px, 70vw)",
            background: "radial-gradient(circle, #C2610F 0%, transparent 70%)",
            bottom: "-80px", left: "-80px",
            filter: "blur(72px)", opacity: 0.35,
          }}
        />
        <div
          className="orb-3 absolute rounded-full"
          style={{
            width: "240px", height: "240px",
            background: "radial-gradient(circle, #F0C070 0%, transparent 70%)",
            top: "40%", right: "40%",
            filter: "blur(72px)", opacity: 0.35,
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(194,97,15,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,97,15,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="hero-content relative z-10 flex flex-col items-start">
        {/* Eyebrow */}
        <div
          className="hero-eyebrow-anim inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full mb-6"
          style={{
            color: "var(--ts-orange)",
            background: "var(--ts-orange-bg)",
            border: "1px solid rgba(194,97,15,0.2)",
          }}
        >
          <span className="pulse-dot w-[6px] h-[6px] rounded-full" style={{ background: "var(--ts-orange)" }} />
          Pilot launching June 2026
        </div>

        {/* H1 */}
        <h1
          className="hero-h1-anim font-playfair font-extrabold leading-[1.1] mb-6"
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            color: "var(--ts-text)",
            letterSpacing: "-0.025em",
          }}
        >
          Know <em style={{ fontStyle: "italic", color: "var(--ts-orange)" }}>why</em> your students<br className="hidden sm:block" /> are struggling.
          <br />Not just where.
        </h1>

        {/* Subtitle */}
        <p
          className="hero-sub-anim mb-10 max-w-[500px]"
          style={{
            fontSize: "clamp(15px, 1.35vw, 17px)",
            color: "var(--ts-text-2)",
            lineHeight: 1.75,
          }}
        >
          TestStation gives SAT academies the behavioral analytics layer that score reports were never designed to provide — time per question, guess patterns, mistake trends, and the dashboards to act on all of it.
        </p>

        {/* Actions */}
        <div className="hero-actions-anim flex items-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="ts-btn-primary inline-flex items-center gap-2 rounded-[10px] px-7 py-[14px] text-[15px] font-semibold text-white no-underline"
          >
            Contact us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#how"
            className="ts-btn-secondary inline-flex items-center gap-1.5 text-[15px] font-medium no-underline pb-[2px]"
          >
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Trust bar */}
        <div
          className="hero-trust-anim mt-12 flex items-center gap-4 flex-wrap text-[13px]"
          style={{ color: "var(--ts-text-3)" }}
        >
          <span>Invite-only pilot</span>
          <div className="w-px h-4 hidden sm:block" style={{ background: "var(--ts-border-2)" }} />
          <span>1 confirmed academy partner</span>
          <div className="w-px h-4 hidden sm:block" style={{ background: "var(--ts-border-2)" }} />
          <span>Built for SAT academies</span>
        </div>
      </div>

      {/* Visual — dashboard mockup */}
      <div className="hero-visual-anim relative z-10 w-full max-w-[540px] mx-auto lg:mx-0 mt-4 lg:mt-0 px-4 sm:px-8 lg:px-0">
        <DashboardMockup />
      </div>
    </section>
  );
}

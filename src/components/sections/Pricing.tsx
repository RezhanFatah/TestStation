import ScrollReveal from "@/components/ScrollReveal";

interface PricingPlan {
  tier: string;
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
  dark?: boolean;
}

const plans: PricingPlan[] = [
  {
    tier: "For small academies",
    name: "Starter",
    price: "$30",
    unit: "/month",
    desc: "For academies ready to add a behavioral analytics layer to their existing test prep program.",
    features: [
      "Up to 20 students",
      "Unlimited tests",
      "Student + instructor dashboards",
      "Behavioral data capture",
      "Email onboarding support",
    ],
    cta: "Contact us",
  },
  {
    tier: "Recommended",
    name: "Classroom",
    price: "$3",
    unit: "/student/month",
    desc: "For established academies that want cohort analytics, AI coaching, and full program visibility.",
    features: [
      "Up to 150 students (21 student min",
      "Everything in Starter",
      "Cohort-level analytics",
      "Flag view — high guess rates & score drops",
      "Per-student attempt override controls",
      "Dedicated onboarding support (3 months)",
    ],
    cta: "Contact us",
    featured: true,
  },
  {
    tier: "For schools & districts",
    name: "Institutional",
    price: "contact sales",
    unit: "",
    desc: "For schools and districts running test prep at scale — multiple instructors, cohorts, and departments under one roof.",
    features: [
      "Everything in Classroom",
      "Multiple instructors & departments",
      "School-wide performance reports",
      "Custom question bank import",
      "SIS & LMS integration (roadmap)",
      "Dedicated account manager",
    ],
    cta: "Contact us",
    dark: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-[5%] py-[76px] md:py-[104px]">
      <ScrollReveal className="mb-14 md:mb-16 text-center">
        <div className="w-9 h-[3px] rounded-full mb-3 mx-auto" style={{ background: "var(--ts-orange)" }} />
        <div className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--ts-orange)" }}>
          Pricing
        </div>
        <h2
          className="font-playfair font-bold leading-[1.15] mb-4"
          style={{ fontSize: "clamp(26px, 3.2vw, 42px)", color: "var(--ts-text)", letterSpacing: "-0.02em" }}
        >
          Simple pricing.<br />Serious results.
        </h2>
        <p className="text-[16px] leading-[1.75] max-w-[560px] mx-auto" style={{ color: "var(--ts-text-2)" }}>
          We&apos;re in pilot — pricing is being finalized based on what works for real academies. Reach out to talk through what fits your program.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        {plans.map((plan, i) => (
          <ScrollReveal
            key={plan.name}
            delay={i * 80}
            className="rounded-[18px] p-9"
            style={{
              border: plan.featured
                ? "1px solid var(--ts-orange)"
                : plan.dark
                  ? "1px solid var(--ts-text)"
                  : "1px solid var(--ts-border)",
              background: plan.featured ? "white" : plan.dark ? "var(--ts-text)" : "var(--ts-warm-bg)",
              boxShadow: plan.featured ? "0 0 0 4px rgba(194,97,15,0.08)" : undefined,
            }}
          >
            <div
              className="text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
              style={{
                color: plan.featured ? "var(--ts-orange)" : plan.dark ? "rgba(255,255,255,0.35)" : "var(--ts-text-3)",
              }}
            >
              {plan.tier}
            </div>
            <div className="text-[22px] font-bold mb-3" style={{ color: plan.dark ? "white" : "var(--ts-text)" }}>
              {plan.name}
            </div>
            <div className="mb-1">
              <span className="text-[36px] font-extrabold font-dm-mono leading-none" style={{ color: plan.dark ? "white" : "var(--ts-text)" }}>
                {plan.price}
              </span>
              <span className="text-[15px] font-normal ml-1" style={{ color: plan.dark ? "rgba(255,255,255,0.4)" : "var(--ts-text-3)" }}>
                {plan.unit}
              </span>
            </div>
            <div className="text-[12px] mb-4" style={{ color: "var(--ts-orange)" }}>
              → Talk to us about pricing
            </div>
            <p className="text-[13px] leading-[1.65] mb-7" style={{ color: plan.dark ? "rgba(255,255,255,0.5)" : "var(--ts-text-2)" }}>
              {plan.desc}
            </p>

            <div className="h-px mb-6" style={{ background: plan.dark ? "rgba(255,255,255,0.1)" : "var(--ts-border)" }} />

            <ul className="flex flex-col gap-3 mb-7 list-none">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-[10px] text-[14px] items-start" style={{ color: plan.dark ? "rgba(255,255,255,0.7)" : "var(--ts-text-2)" }}>
                  <span style={{ color: "var(--ts-orange)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`block w-full text-center py-[13px] rounded-[10px] text-[15px] font-semibold no-underline ${plan.featured || plan.dark ? "ts-pricing-solid" : "ts-pricing-outline"
                }`}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 10,
                marginLeft: "auto",
                marginRight: "auto",
                width: "calc(100% - 48px)", // Account for parent padding of 2.25rem (36px * 2 = 72px, so we need to leave 36px left/right)
                ...((plan.featured || plan.dark) && { /* If you want to preserve any solid/outline color logic */ }),
              }}
            >

              {plan.cta}
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="text-center mt-6 text-[13px]" style={{ color: "var(--ts-text-3)" }}>
        Piloting with academies this summer. Pricing negotiable before public launch.
      </ScrollReveal>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

// ─────────────────────────────────────────────────────────────────────
// TODO: Replace with your Google Form values.
//
// 1. Open your form in edit mode → ⋮ menu → "Get pre-filled link"
// 2. Fill dummy values, copy the URL, extract:
//    FORM_ACTION = https://docs.google.com/forms/d/e/FORM_ID/formResponse
//    Entry IDs   = the entry.XXXXXXXX values in the pre-filled URL
// ─────────────────────────────────────────────────────────────────────
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfiVmWNrtgHhHB6t8WNr2Oqmg-q12aFNC5psNqFomO7gYzGKA/formResponse";
const ENTRY = {
  name: "entry.24202561",
  email: "entry.1859352303",
  role: "entry.1095911239",
  org: "entry.104496060",
  message: "entry.1381314746",
};

const ROLES = [
  "SAT / Test Prep Instructor",
  "Academy Director / Owner",
  "School Administrator",
  "Curriculum Coordinator",
  "Other",
] as const;

const OTHER_ROLE = "Other";
/** Must match Google Forms: blank 5th dropdown option posts as "", not "Other". */
const GOOGLE_OTHER_ROLE_VALUE = "";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase: React.CSSProperties = {
  padding: "10px 13px",
  border: "1.5px solid var(--ts-border-2)",
  borderRadius: "9px",
  fontSize: "14px",
  fontFamily: "inherit",
  color: "var(--ts-text)",
  background: "white",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const selectStyle: React.CSSProperties = {
  ...inputBase,
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%236B6560' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  paddingRight: "36px",
  cursor: "pointer",
};

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [roleOther, setRoleOther] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const isOtherRole = role === OTHER_ROLE;
  const roleComplete = Boolean(role && (!isOtherRole || roleOther.trim()));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !roleComplete) return;
    setStatus("submitting");
    try {
      const roleValue = isOtherRole ? GOOGLE_OTHER_ROLE_VALUE : role;
      const messageValue =
        isOtherRole && roleOther.trim()
          ? message.trim()
            ? `Role: ${roleOther.trim()}\n\n${message.trim()}`
            : `Role: ${roleOther.trim()}`
          : message;

      const body = new FormData();
      body.append(ENTRY.name, name);
      body.append(ENTRY.email, email);
      body.append(ENTRY.role, roleValue);
      body.append(ENTRY.org, org);
      body.append(ENTRY.message, messageValue);
      await fetch(GOOGLE_FORM_ACTION, { method: "POST", mode: "no-cors", body });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--ts-orange)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(194,97,15,0.1)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--ts-border-2)";
    e.currentTarget.style.boxShadow = "";
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-[5%] py-[76px] md:py-[104px] text-center"
      style={{ background: "var(--ts-orange)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 80% 50%, rgba(0,0,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <ScrollReveal>
          <h2
            className="font-playfair font-extrabold leading-[1.15] mb-4 text-white"
            style={{ fontSize: "clamp(26px, 3.8vw, 46px)", letterSpacing: "-0.02em" }}
          >
            Ready to see what your students<br className="hidden sm:block" />
            are actually doing?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="text-[17px] mb-0" style={{ color: "rgba(255,255,255,0.8)" }}>
            We&apos;re accepting a small number of academy partners for our summer pilot.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal
        delay={160}
        className="bg-white rounded-[20px] max-w-[580px] mx-auto mt-10 text-left relative z-10"
        style={{ boxShadow: "0 12px 56px rgba(0,0,0,0.2)" }}
      >
        <div className="p-6 sm:p-10">
          {status === "success" ? (
            <div className="text-center py-3">
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--ts-green-bg)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polyline points="4,13 9,18 20,7" stroke="var(--ts-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-playfair text-[20px] font-bold mb-2" style={{ color: "var(--ts-text)" }}>
                We&apos;ll be in touch soon.
              </h4>
              <p className="text-[14px] leading-[1.65]" style={{ color: "var(--ts-text-2)" }}>
                Thanks for reaching out. Someone from the TestStation team will follow up within 48 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 pb-5" style={{ borderBottom: "1px solid var(--ts-border)" }}>
                <h3 className="font-playfair text-[20px] font-bold mb-1" style={{ color: "var(--ts-text)", letterSpacing: "-0.01em" }}>
                  Get in touch
                </h3>
                <p className="text-[13px]" style={{ color: "var(--ts-text-2)" }}>
                  We&apos;ll set up a walkthrough within 48 hours. No commitment required.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold" style={{ color: "var(--ts-text)" }}>Name</label>
                    <input
                      type="text" placeholder="Your full name" required
                      value={name} onChange={(e) => setName(e.target.value)}
                      style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold" style={{ color: "var(--ts-text)" }}>Email</label>
                    <input
                      type="email" placeholder="your@email.com" required
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-3.5">
                  <label className="text-[13px] font-semibold" style={{ color: "var(--ts-text)" }}>Role</label>
                  <select
                    required
                    value={role}
                    onChange={(e) => {
                      const next = e.target.value;
                      setRole(next);
                      if (next !== OTHER_ROLE) setRoleOther("");
                    }}
                    style={selectStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  >
                    <option value="" disabled>Select your role…</option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {isOtherRole && (
                    <div className="flex flex-col gap-1.5 mt-3.5">
                      <label className="text-[13px] font-semibold" style={{ color: "var(--ts-text)" }}>
                        Please specify your role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Parent, consultant, district lead…"
                        required
                        value={roleOther}
                        onChange={(e) => setRoleOther(e.target.value)}
                        style={inputBase}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                        autoFocus
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 mb-3.5">
                  <label className="text-[13px] font-semibold flex items-center gap-1.5" style={{ color: "var(--ts-text)" }}>
                    Organization
                    <span className="text-[11px] font-normal px-[7px] py-[1px] rounded-full" style={{ color: "var(--ts-text-3)", background: "var(--ts-warm-bg)" }}>Optional</span>
                  </label>
                  <input
                    type="text" placeholder="Academy or school name"
                    value={org} onChange={(e) => setOrg(e.target.value)}
                    style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5 mb-3.5">
                  <label className="text-[13px] font-semibold flex items-center gap-1.5" style={{ color: "var(--ts-text)" }}>
                    Anything else?
                    <span className="text-[11px] font-normal px-[7px] py-[1px] rounded-full" style={{ color: "var(--ts-text-3)", background: "var(--ts-warm-bg)" }}>Optional</span>
                  </label>
                  <textarea
                    placeholder="Student count, timeline, specific needs…" rows={3}
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    style={{ ...inputBase, resize: "vertical", minHeight: "80px", lineHeight: 1.6 }}
                    onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || !name || !email || !roleComplete}
                  className="ts-submit-btn w-full flex items-center justify-center gap-2 rounded-[10px] mt-5 text-[15px] font-semibold text-white cursor-pointer"
                  style={{ padding: "13px", border: "none", fontFamily: "inherit", opacity: (!name || !email || !roleComplete) ? 0.65 : 1 }}
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white" style={{ animation: "spin 0.7s linear infinite" }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-[12px] text-center mt-2.5" style={{ color: "var(--ts-red)" }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={240} className="relative z-10 mt-6 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>
        No commitment. No sales pressure. Just a conversation.
      </ScrollReveal>
    </section>
  );
}

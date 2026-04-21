"use client";

import { useEffect } from "react";
import LogoMark from "@/components/ui/LogoMark";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handler);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sign in to TestStation"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
      style={{
        background: "rgba(26,26,26,0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        className="bg-white rounded-[20px] w-full max-w-[420px] relative"
        style={{
          padding: "44px 40px 40px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          transition: "transform 0.3s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[18px] right-[18px] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
          style={{ background: "var(--ts-warm-bg)", border: "none", color: "var(--ts-text-2)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex items-center gap-[10px] justify-center mb-7">
          <LogoMark size={30} />
          <span className="font-bold text-[17px] tracking-[0.09em] uppercase" style={{ color: "var(--ts-orange)" }}>
            TestStation
          </span>
        </div>

        <h2 className="font-playfair text-[24px] font-bold text-center mb-2" style={{ color: "var(--ts-text)", letterSpacing: "-0.01em" }}>
          Welcome back
        </h2>
        <p className="text-center text-sm mb-8" style={{ color: "var(--ts-text-2)" }}>
          Choose how you&apos;re signing in
        </p>

        <a
          href="/student/login"
          className="ts-modal-btn w-full flex items-center gap-[14px] rounded-xl mb-3 no-underline"
          style={{ padding: "18px 20px", border: "1.5px solid var(--ts-border)", background: "white", color: "var(--ts-text)" }}
        >
          <div className="w-10 h-10 rounded-[10px] flex-shrink-0 flex items-center justify-center" style={{ background: "var(--ts-orange-bg)" }}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="var(--ts-orange)" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="11" cy="8" r="4" />
              <path d="M4 19c0-3.87 3.13-7 7-7h0c3.87 0 7 3.13 7 7" />
            </svg>
          </div>
          <div className="text-left">
            <span className="block text-[15px] font-semibold">I&apos;m a student</span>
            <span className="block text-xs mt-0.5" style={{ color: "var(--ts-text-3)" }}>View your scores, progress &amp; guesses</span>
          </div>
          <svg style={{ marginLeft: "auto", flexShrink: 0 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8h8M9 5l3 3-3 3" stroke="#9E9891" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>

        <a
          href="/instructor/login"
          className="ts-modal-btn w-full flex items-center gap-[14px] rounded-xl no-underline"
          style={{ padding: "18px 20px", border: "1.5px solid var(--ts-border)", background: "white", color: "var(--ts-text)" }}
        >
          <div className="w-10 h-10 rounded-[10px] flex-shrink-0 flex items-center justify-center" style={{ background: "#EEF2FF" }}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#4F6FD4" strokeWidth="1.6" strokeLinecap="round">
              <rect x="2" y="3" width="18" height="14" rx="2.5" />
              <line x1="7" y1="8" x2="15" y2="8" />
              <line x1="7" y1="11" x2="12" y2="11" />
            </svg>
          </div>
          <div className="text-left">
            <span className="block text-[15px] font-semibold">I&apos;m an instructor</span>
            <span className="block text-xs mt-0.5" style={{ color: "var(--ts-text-3)" }}>Manage classes, tests &amp; cohort data</span>
          </div>
          <svg style={{ marginLeft: "auto", flexShrink: 0 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8h8M9 5l3 3-3 3" stroke="#9E9891" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

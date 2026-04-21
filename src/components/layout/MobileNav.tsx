"use client";

import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInClick: () => void;
}

export default function MobileNav({ isOpen, onClose, onSignInClick }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center gap-8"
      style={{
        background: "rgba(249,247,244,0.97)",
        backdropFilter: "blur(16px)",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        transition: "opacity 0.25s ease",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-[4%] bg-none border-none cursor-pointer text-2xl"
        style={{ color: "var(--ts-text-2)" }}
        aria-label="Close menu"
      >
        ✕
      </button>

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-[22px] font-semibold no-underline transition-colors min-h-[44px] flex items-center"
          style={{ color: "var(--ts-text)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ts-orange)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ts-text)")}
        >
          {link.label}
        </a>
      ))}

      <a
        href="#contact"
        onClick={onClose}
        className="text-[22px] font-semibold no-underline min-h-[44px] flex items-center"
        style={{ color: "var(--ts-orange)" }}
      >
        Contact us
      </a>

      <button
        onClick={() => { onClose(); onSignInClick(); }}
        className="text-base font-medium rounded-lg min-h-[44px] px-7 transition-colors"
        style={{
          border: "1.5px solid var(--ts-border-2)",
          background: "transparent",
          color: "var(--ts-text)",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Sign in
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import LogoMark from "@/components/ui/LogoMark";
import SignInModal from "@/components/layout/SignInModal";
import MobileNav from "@/components/layout/MobileNav";

export default function Navbar() {
  const [signinOpen, setSigninOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#how",     label: "How it works" },
    { href: "#features",label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <>
      <nav
        className="sticky top-0 z-[200] flex items-center justify-between h-[66px] px-[5%]"
        style={{
          background: "rgba(249,247,244,0.88)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderBottom: "1px solid var(--ts-border)",
        }}
      >
        <a href="#" className="flex items-center gap-[10px] no-underline flex-shrink-0">
          <LogoMark size={34} />
          <span
            className="font-bold text-[16px] tracking-[0.09em] uppercase"
            style={{ color: "var(--ts-orange)" }}
          >
            TestStation
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="no-underline text-sm font-medium transition-colors"
                style={{ color: "var(--ts-text-2)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => setSigninOpen(true)}
            className="ts-btn-signin hidden md:block text-sm font-medium rounded-lg min-h-[36px] px-4 cursor-pointer"
            style={{ fontFamily: "inherit" }}
          >
            Sign in
          </button>

          <a
            href="#contact"
            className="ts-nav-cta hidden md:inline-block no-underline text-sm font-semibold rounded-lg px-5 py-2"
          >
            Contact us
          </a>

          <button
            onClick={() => setSigninOpen(true)}
            className="ts-btn-signin md:hidden text-sm font-medium rounded-lg min-h-[44px] px-4 cursor-pointer"
            style={{ fontFamily: "inherit" }}
          >
            Sign in
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11"
            aria-label="Open menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect y="4" width="22" height="2" rx="1" fill="var(--ts-text)" />
              <rect y="10" width="22" height="2" rx="1" fill="var(--ts-text)" />
              <rect y="16" width="22" height="2" rx="1" fill="var(--ts-text)" />
            </svg>
          </button>
        </div>
      </nav>

      <SignInModal isOpen={signinOpen} onClose={() => setSigninOpen(false)} />
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSignInClick={() => setSigninOpen(true)}
      />
    </>
  );
}

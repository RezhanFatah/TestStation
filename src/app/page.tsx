"use client";

import dynamic from "next/dynamic";
import {
  Mail,
  GraduationCap,
  FlaskConical,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
      <Scene />

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <FlaskConical className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            test<span className="text-white/50">Station</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="max-w-md text-lg text-white/40 font-light tracking-wide">
          Revolutionizing the test-prep experience for academic institutions.
        </p>

        {/* Icons */}
        <div className="flex gap-6">
          {[GraduationCap, FlaskConical, Sparkles].map((Icon, i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
            >
              <Icon className="h-5 w-5 text-white/30" />
            </div>
          ))}
        </div>

        {/* Coming soon badge */}
        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-sm">
          Coming Soon
        </div>

        {/* Waitlist CTA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfiVmWNrtgHhHB6t8WNr2Oqmg-q12aFNC5psNqFomO7gYzGKA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          Join the Waitlist
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>

        {/* Contact */}
        <a
          href="mailto:rezhanfatah@brandeis.edu"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-white/30 transition-colors hover:text-white/60 hover:bg-white/5"
        >
          <Mail className="h-4 w-4" />
          rezhanfatah@brandeis.edu
        </a>
      </div>
    </main>
  );
}

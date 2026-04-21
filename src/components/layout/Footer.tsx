import LogoMark from "@/components/ui/LogoMark";

const productLinks = [
  { href: "#how",      label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing",  label: "Pricing" },
];

const companyLinks = [
  { href: "#",        label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#",        label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="px-[5%] pt-[52px] pb-8" style={{ background: "var(--ts-text)" }}>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-11 flex-wrap">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-[10px] mb-1">
            <LogoMark size={26} color="rgba(255,255,255,0.35)" />
            <span
              className="font-bold text-[15px] tracking-[0.09em] uppercase"
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)" }}
            >
              TestStation
            </span>
          </div>
          <div className="text-[13px] italic mt-2.5" style={{ color: "rgba(255,255,255,0.35)" }}>
            test-prep with confidence
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-8 sm:gap-[52px] flex-wrap">
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[0.09em] uppercase mb-3.5"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Product
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {productLinks.map((l) => (
                <li key={l.href + l.label}>
                  <a href={l.href} className="ts-footer-link text-[14px] no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[11px] font-semibold tracking-[0.09em] uppercase mb-3.5"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="ts-footer-link text-[14px] no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6 text-[12px] flex-wrap"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}
      >
        <span>© 2026 TestStation. All rights reserved.</span>
        <span className="flex gap-3">
          <a href="#" className="ts-footer-link-dim no-underline">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="ts-footer-link-dim no-underline">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}

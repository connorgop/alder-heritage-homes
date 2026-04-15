/* ============================================================
   ALDER HERITAGE HOMES — Layout Component (Simplified)
   Montana's feedback: Clean, guided, conversion-focused nav.
   All 216+ pages still live for SEO — just not in the nav.
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import FloatingCTA from "./FloatingCTA";
import TawkChat from "./TawkChat";
import ExitIntentPopup from "./ExitIntentPopup";
import SchemaMarkup, { localBusinessSchema, websiteSchema, breadcrumbSchema, buildBreadcrumbs } from "./SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

/* ── Only the 6 highest-converting situations in the dropdown ── */
const topSituations = [
  { label: "Facing Foreclosure", href: "/foreclosure-help", desc: "Stop the auction — we close before your sale date" },
  { label: "Behind on Mortgage", href: "/behind-on-mortgage", desc: "Missed payments piling up? We pay off what you owe" },
  { label: "Inherited / Probate Home", href: "/probate-inherited-homes", desc: "700+ homes purchased — we handle the paperwork" },
  { label: "Divorce Home Sale", href: "/sell-house-divorce", desc: "Fast, private sale so both parties can move on" },
  { label: "Need to Sell Fast", href: "/sell-house-fast", desc: "Close in as little as 5–7 days, any condition" },
  { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back", desc: "Sell today, stay as long as you need" },
];

/* ── Footer: curated links only — all other pages still exist for SEO ── */
const footerSituations = [
  { label: "Foreclosure Help", href: "/foreclosure-help" },
  { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
  { label: "Inherited / Probate", href: "/probate-inherited-homes" },
  { label: "Divorce Home Sale", href: "/sell-house-divorce" },
  { label: "Sell House Fast", href: "/sell-house-fast" },
  { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
  { label: "Hoarder / Cluttered Home", href: "/sell-hoarder-house" },
  { label: "Fire Damage", href: "/sell-house-fire-damage" },
  { label: "Code Violations", href: "/sell-house-code-violations-fresno" },
  { label: "Tired Landlord", href: "/tired-landlord" },
  { label: "See All Situations →", href: "/sell-my-house" },
];

const footerCities = [
  { label: "Fresno", href: "/we-buy-houses-fresno" },
  { label: "Clovis", href: "/we-buy-houses-clovis" },
  { label: "Visalia", href: "/we-buy-houses-visalia" },
  { label: "Bakersfield", href: "/we-buy-houses-bakersfield" },
  { label: "Madera", href: "/we-buy-houses-madera" },
  { label: "Hanford", href: "/we-buy-houses-hanford" },
  { label: "Stockton", href: "/we-buy-houses-stockton" },
  { label: "Modesto", href: "/we-buy-houses-modesto" },
  { label: "All Central Valley →", href: "/we-buy-houses-central-valley" },
];

const footerCompany = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Connor", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Our Deals", href: "/our-deals" },
  { label: "Before & After", href: "/before-after" },
  { label: "Compare Cash Buyers", href: "/compare-cash-buyers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/sell-house-fast-faq" },
  { label: "Contact", href: "/contact" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "SMS Consent", href: "/sms-consent" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [situationsOpen, setSituationsOpen] = useState(false);
  const [location] = useLocation();
  const { trackPhoneClick } = useConversionTracking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSituationsOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.97 0.015 85)" }}>
      {/* Global structured data — aggregateRating is ONLY on Home and Reviews pages to avoid duplicate schema errors */}
      <SchemaMarkup schema={localBusinessSchema()} id="local-business" />
      <SchemaMarkup schema={websiteSchema()} id="website" />
      <SchemaMarkup schema={breadcrumbSchema(buildBreadcrumbs(location))} id="breadcrumb" />

      {/* Top bar — Price Match Guarantee */}
      <div style={{ background: "oklch(0.55 0.13 42)", color: "white" }} className="py-2 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap px-4">
          <span className="hidden sm:inline" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.875rem", fontWeight: 700 }}>
            We Will Match or Beat Any Cash Offer — Guaranteed
          </span>
          <span className="sm:hidden" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.8rem", fontWeight: 700 }}>
            We Beat Any Cash Offer — Guaranteed
          </span>
          <a href={PHONE_HREF} onClick={trackPhoneClick} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textDecoration: "underline", color: "white", opacity: 0.9 }}>
            Call: {PHONE}
          </a>
        </div>
      </div>

      {/* Sub bar — license + end buyer differentiator */}
      <div style={{ background: "oklch(0.28 0.05 155)", color: "white" }} className="py-1.5 text-center px-4">
        {/* Desktop: full message */}
        <span className="hidden md:inline" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.05em", opacity: 0.92 }}>
          Licensed CA Real Estate Agent · DRE #02219124 ·{" "}
          <span style={{ color: "oklch(0.88 0.12 85)", fontWeight: 700 }}>Direct End Buyer — We Actually Purchase Your Home</span>
          {" "}· Not a Wholesaler · Honest, Transparent &amp; Fair
        </span>
        {/* Mobile: condensed */}
        <span className="md:hidden" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.64rem", letterSpacing: "0.04em", opacity: 0.92 }}>
          DRE #02219124 ·{" "}
          <span style={{ color: "oklch(0.88 0.12 85)", fontWeight: 700 }}>Real End Buyer — Not a Wholesaler</span>
        </span>
      </div>

      {/* ── MAIN NAV — Clean, 5 items max ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(247, 242, 232, 0.97)" : "oklch(0.97 0.015 85)",
          boxShadow: scrolled ? "0 2px 20px oklch(0.22 0.01 60 / 0.12)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.02 85)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}
              >
                A
              </div>
              <div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.1rem", color: "oklch(0.22 0.01 60)", lineHeight: 1.1 }}>
                  Alder Heritage
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "oklch(0.50 0.02 60)", textTransform: "uppercase" }}>
                  Homes
                </div>
              </div>
            </Link>

            {/* ── Desktop nav — simplified ── */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/how-it-works">How It Works</NavLink>

              {/* Your Situation dropdown — 6 items only */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}
                  aria-haspopup="true"
                  aria-expanded={situationsOpen}
                  onMouseEnter={() => setSituationsOpen(true)}
                  onMouseLeave={() => setSituationsOpen(false)}
                >
                  Your Situation <ChevronDown size={14} />
                </button>
                {situationsOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] rounded-xl shadow-2xl py-3 z-50"
                    style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                    onMouseEnter={() => setSituationsOpen(true)}
                    onMouseLeave={() => setSituationsOpen(false)}
                  >
                    <p className="px-5 pb-2 text-xs font-bold uppercase tracking-wider" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                      We buy homes in any situation
                    </p>
                    {topSituations.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-start gap-3 px-5 py-3 hover:bg-orange-50/60 transition-colors group/item"
                      >
                        <ChevronRight size={16} className="mt-0.5 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" style={{ color: "oklch(0.55 0.13 42)" }} />
                        <div>
                          <span className="block text-sm font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>
                            {s.label}
                          </span>
                          <span className="block text-xs mt-0.5" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                            {s.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                    <div className="mx-5 my-2 border-t" style={{ borderColor: "oklch(0.90 0.02 85)" }} />
                    <Link
                      href="/sell-my-house"
                      className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold hover:bg-orange-50/60 transition-colors"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.55 0.13 42)" }}
                    >
                      See all situations we handle <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              <NavLink href="/about">About</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/case-studies">Case Studies</NavLink>
              <NavLink href="/compare-cash-buyers-fresno">Compare</NavLink>
            </nav>

            {/* Phone + Primary CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                onClick={trackPhoneClick}
                className="flex items-center gap-2 font-bold"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.95rem", color: "oklch(0.28 0.05 155)" }}
              >
                <Phone size={16} />
                {PHONE}
              </a>
              <Link href="/contact">
                <button
                  className="text-sm py-2.5 px-6 rounded-lg font-bold transition-all hover:opacity-90"
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    background: "oklch(0.55 0.13 42)",
                    color: "white",
                  }}
                >
                  Get My Cash Offer
                </button>
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a href={PHONE_HREF} onClick={trackPhoneClick} aria-label="Call Alder Heritage Homes at (559) 281-8016" style={{ color: "oklch(0.28 0.05 155)" }}>
                <Phone size={20} />
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} style={{ color: "oklch(0.22 0.01 60)" }}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu — clean, guided ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t overflow-y-auto" style={{ background: "white", borderColor: "oklch(0.88 0.02 85)", maxHeight: "80vh" }}>
            <div className="py-2">
              <MobileNavLink href="/how-it-works">How It Works</MobileNavLink>

              {/* Situations accordion */}
              <div>
                <button
                  onClick={() => setSituationsOpen(!situationsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}
                  aria-expanded={situationsOpen}
                  aria-controls="mobile-situations-menu"
                >
                  <span>Your Situation</span>
                  <ChevronDown size={16} style={{ transform: situationsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                </button>
                {situationsOpen && (
                  <div id="mobile-situations-menu" className="pb-2" style={{ background: "oklch(0.97 0.01 85)" }}>
                    {topSituations.map((s) => (
                      <MobileNavLink key={s.href} href={s.href} indent>{s.label}</MobileNavLink>
                    ))}
                    <MobileNavLink href="/sell-my-house" indent>See All Situations →</MobileNavLink>
                  </div>
                )}
              </div>

              <MobileNavLink href="/about">About Connor</MobileNavLink>
              <MobileNavLink href="/reviews">Reviews</MobileNavLink>
              <MobileNavLink href="/case-studies">Case Studies</MobileNavLink>
              <MobileNavLink href="/compare-cash-buyers-fresno">Compare Cash Buyers</MobileNavLink>
              <MobileNavLink href="/sell-house-fast-faq">FAQ</MobileNavLink>
              <MobileNavLink href="/blog">Blog</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>

              <div className="px-4 pt-3 pb-6">
                <Link href="/contact">
                  <button className="w-full py-3.5 rounded-xl text-white font-bold text-base mb-3" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Free Cash Offer
                  </button>
                </Link>
                <a href={PHONE_HREF} onClick={trackPhoneClick} className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold border-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.28 0.05 155)", borderColor: "oklch(0.28 0.05 155)" }}>
                  <Phone size={16} /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1 pb-20 md:pb-0">{children}</main>

      {/* Global overlays */}
      <FloatingCTA />
      <TawkChat />
      <ExitIntentPopup />

      {/* ── FOOTER — Clean 4-column layout ── */}
      <footer style={{ background: "oklch(0.22 0.01 60)", color: "oklch(0.80 0.01 60)" }}>
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>A</div>
                <div>
                  <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.1rem", color: "white" }}>Alder Heritage Homes</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.01 60)" }}>
                We buy houses for cash across Fresno and the Central Valley. Fair offers, fast closings, no repairs needed.
              </p>
              <a href={PHONE_HREF} onClick={trackPhoneClick} className="flex items-center gap-2 font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", fontSize: "0.95rem" }}>
                <Phone size={15} /> {PHONE}
              </a>
              <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                CA DRE License #02219124
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "oklch(0.28 0.01 60)" }}>
                <p className="text-xs mb-2" style={{ color: "oklch(0.65 0.01 60)" }}>Ready to get your offer?</p>
                <Link href="/contact">
                  <button className="w-full py-2 rounded-md text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer
                  </button>
                </Link>
              </div>
            </div>

            {/* Situations */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: "'Lora', serif", color: "white", letterSpacing: "0.05em" }}>Situations We Handle</h4>
              <ul className="space-y-2">
                {footerSituations.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: "'Lora', serif", color: "white", letterSpacing: "0.05em" }}>Areas We Serve</h4>
              <ul className="space-y-2">
                {footerCities.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: "'Lora', serif", color: "white", letterSpacing: "0.05em" }}>Company</h4>
              <ul className="space-y-2">
                {footerCompany.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid oklch(0.30 0.01 60)" }}>
            <p className="text-xs" style={{ color: "oklch(0.45 0.01 60)" }}>
              © {new Date().getFullYear()} Alder Heritage Homes. All rights reserved. CA DRE #02219124. ·{" "}
              <a href="/terms-of-service" style={{ color: "oklch(0.55 0.01 60)", textDecoration: "underline" }}>Terms</a>{" · "}
              <a href="/privacy-policy" style={{ color: "oklch(0.55 0.01 60)", textDecoration: "underline" }}>Privacy</a>{" · "}
              <a href="/sms-consent" style={{ color: "oklch(0.55 0.01 60)", textDecoration: "underline" }}>SMS Opt-In</a>
            </p>
            <p className="text-xs" style={{ color: "oklch(0.40 0.01 60)" }}>
              Fresno, CA · Serving the Entire Central Valley — Fresno, Bakersfield, Visalia, Stockton, Modesto & Beyond
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
        style={{ boxShadow: "0 -4px 24px oklch(0.22 0.01 60 / 0.35)" }}
      >
        <div className="flex items-center justify-center py-1" style={{ background: "oklch(0.22 0.01 60)", borderTop: "1px solid oklch(1 0 0 / 0.12)" }}>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.70 0.06 55)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.10em" }}>Direct Cash Buyer · Licensed Agent · Honest Advice</span>
        </div>
        <div className="flex">
          <a
            href={PHONE_HREF}
            onClick={trackPhoneClick}
            className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-white transition-all active:scale-95"
            style={{ background: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem" }}
          >
            <Phone size={19} /> <span>Call Now</span>
          </a>
          <div style={{ width: "1px", background: "oklch(1 0 0 / 0.15)" }} />
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-white transition-all active:scale-95"
            style={{ background: "linear-gradient(135deg, oklch(0.48 0.16 42) 0%, oklch(0.60 0.18 55) 100%)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem" }}
          >
            <span style={{ fontSize: "1.1rem" }}>⚡</span> <span>Get Cash Offer</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [location] = useLocation();
  const active = location === href;
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-md text-sm font-semibold transition-colors"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        color: active ? "oklch(0.55 0.13 42)" : "oklch(0.35 0.01 60)",
        background: active ? "oklch(0.55 0.13 42 / 0.08)" : "transparent",
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, indent }: { href: string; children: React.ReactNode; indent?: boolean }) {
  return (
    <Link
      href={href}
      className="block py-2.5 text-sm font-semibold rounded-md px-3 hover:bg-orange-50 transition-colors"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        color: "oklch(0.30 0.01 60)",
        paddingLeft: indent ? "1.5rem" : "0.75rem",
      }}
    >
      {children}
    </Link>
  );
}

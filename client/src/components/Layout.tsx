/* ============================================================
   ALDER HERITAGE HOMES — Layout Component
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Sticky header, phone always visible, footer with all links
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import FloatingCTA from "./FloatingCTA";
import TawkChat from "./TawkChat";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const services = [
  { label: "Foreclosure Help", href: "/foreclosure-help" },
  { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
  { label: "Can't Afford My Home", href: "/cant-afford-my-home" },
  { label: "ARM / Rate Adjustment", href: "/arm-rate-change-help" },
  { label: "Second Mortgage Help", href: "/second-mortgage-help" },
  { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
  { label: "Probate / Inherited Homes", href: "/probate-inherited-homes" },
  { label: "Sell House Fast", href: "/sell-house-fast" },
  { label: "Roof Damage — Sell As-Is", href: "/sell-house-roof-damage" },
  { label: "Hoarder / Cluttered Home", href: "/sell-hoarder-house" },
  { label: "Divorce Home Sale", href: "/sell-house-divorce" },
  { label: "Tired Landlord", href: "/tired-landlord" },
  { label: "Junk Removal — Read This First", href: "/junk-removal-before-selling" },
  { label: "⚠️ Vacant Property Warning", href: "/vacant-property-warning" },
];

const trust = [
  { label: "Why We're Different", href: "/why-choose-us" },
  { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
  { label: "Don't Hire Your Friend Realtor", href: "/dont-hire-friend-realtor" },
  { label: "⚠️ Vacant Home Security", href: "/vacant-property-warning" },
  { label: "About Connor", href: "/about" },
  { label: "Blog & Resources", href: "/blog" },
];

const cities = [
  { label: "Fresno", href: "/we-buy-houses-fresno" },
  { label: "Clovis", href: "/we-buy-houses-clovis" },
  { label: "Madera", href: "/we-buy-houses-madera" },
  { label: "Visalia", href: "/we-buy-houses-visalia" },
  { label: "Sanger", href: "/we-buy-houses-sanger" },
  { label: "Selma", href: "/we-buy-houses-selma" },
  { label: "Hanford", href: "/we-buy-houses-hanford" },
  { label: "Reedley", href: "/we-buy-houses-reedley" },
  { label: "Bakersfield", href: "/we-buy-houses-bakersfield" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCitiesOpen(false);
    setTrustOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.97 0.015 85)" }}>
      {/* Top bar — Price Match Guarantee */}
      <div style={{ background: "oklch(0.55 0.13 42)", color: "white" }} className="py-2.5 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap px-4">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.85 }}>
            🏆
          </span>
          <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.875rem", fontWeight: 700 }}>
            We Will Match or Beat Any Cash Offer You Receive — Guaranteed
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.75 }}>
            · We Pay More Than Our Competitors ·
          </span>
          <a href={PHONE_HREF} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textDecoration: "underline", color: "white", opacity: 0.9 }}>
            Call Now: {PHONE}
          </a>
        </div>
      </div>
      {/* Sub bar — license/service area */}
      <div style={{ background: "oklch(0.28 0.05 155)", color: "white" }} className="py-1.5 text-center">
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.06em", opacity: 0.85 }}>
          Licensed CA Real Estate Agent · DRE #02219124 · Serving Fresno &amp; the Central Valley
        </span>
      </div>

      {/* Main nav */}
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

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>

              {/* Services dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Solutions <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 w-64 rounded-xl shadow-xl py-2 z-50"
                    style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm font-medium hover:bg-orange-50 transition-colors"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cities dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}
                  onMouseEnter={() => setCitiesOpen(true)}
                  onMouseLeave={() => setCitiesOpen(false)}
                >
                  Areas We Serve <ChevronDown size={14} />
                </button>
                {citiesOpen && (
                  <div
                    className="absolute top-full left-0 w-52 rounded-xl shadow-xl py-2 z-50"
                    style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                    onMouseEnter={() => setCitiesOpen(true)}
                    onMouseLeave={() => setCitiesOpen(false)}
                  >
                    {cities.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2.5 text-sm font-medium hover:bg-orange-50 transition-colors"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Why We're Different dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}
                  onMouseEnter={() => setTrustOpen(true)}
                  onMouseLeave={() => setTrustOpen(false)}
                >
                  Why Us <ChevronDown size={14} />
                </button>
                {trustOpen && (
                  <div
                    className="absolute top-full left-0 w-52 rounded-xl shadow-xl py-2 z-50"
                    style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                    onMouseEnter={() => setTrustOpen(true)}
                    onMouseLeave={() => setTrustOpen(false)}
                  >
                    {trust.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="block px-4 py-2.5 text-sm font-medium hover:bg-orange-50 transition-colors"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}
                      >
                        {t.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Phone + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 font-bold"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.95rem", color: "oklch(0.28 0.05 155)" }}
              >
                <Phone size={16} />
                {PHONE}
              </a>
              <Link href="/contact">
                <button className="btn-terracotta text-sm py-2.5 px-5" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, background: "oklch(0.55 0.13 42)", color: "white", padding: "0.625rem 1.25rem", borderRadius: "0.375rem", transition: "all 0.2s" }}>
                  Get My Cash Offer
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-3">
              <a href={PHONE_HREF} style={{ color: "oklch(0.28 0.05 155)" }}>
                <Phone size={20} />
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "oklch(0.22 0.01 60)" }}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t" style={{ background: "white", borderColor: "oklch(0.88 0.02 85)" }}>
            <div className="container py-4 space-y-1">
              <MobileNavLink href="/">Home</MobileNavLink>
              <div className="pt-2 pb-1">
                <div className="font-mono-label text-xs mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.02 60)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Solutions
                </div>
                {services.map((s) => (
                  <MobileNavLink key={s.href} href={s.href} indent>{s.label}</MobileNavLink>
                ))}
              </div>
              <div className="pt-2 pb-1">
                <div className="font-mono-label text-xs mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.02 60)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Areas We Serve
                </div>
                {cities.map((c) => (
                  <MobileNavLink key={c.href} href={c.href} indent>{c.label}</MobileNavLink>
                ))}
              </div>
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/blog">Blog</MobileNavLink>
              <div className="pt-4">
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg text-white font-bold text-base" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Free Cash Offer
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 mt-3 font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.28 0.05 155)" }}>
                  <Phone size={16} /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Floating / sticky CTA — appears on all pages */}
      <FloatingCTA />
      <TawkChat />

      {/* Footer */}
      <footer style={{ background: "oklch(0.22 0.01 60)", color: "oklch(0.80 0.01 60)" }}>
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>A</div>
                <div>
                  <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.1rem", color: "white" }}>Alder Heritage Homes</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.01 60)" }}>
                We buy houses for cash across Fresno and the Central Valley. Fair offers, fast closings, no repairs needed.
              </p>
              <a href={PHONE_HREF} className="flex items-center gap-2 font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", fontSize: "0.95rem" }}>
                <Phone size={15} /> {PHONE}
              </a>
              <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                CA DRE License #02219124
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: "'Lora', serif", color: "white", letterSpacing: "0.05em" }}>Solutions</h4>
              <ul className="space-y-2">
                {services.map((s) => (
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
                {cities.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>{c.label}</Link>
                  </li>
                ))}
                <li><span className="text-sm" style={{ color: "oklch(0.50 0.01 60)" }}>Madera, Visalia, Hanford &amp; more</span></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: "'Lora', serif", color: "white", letterSpacing: "0.05em" }}>Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>About Us</Link></li>
                <li><Link href="/blog" className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>Blog &amp; Resources</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.65 0.01 60)" }}>Contact</Link></li>
              </ul>
              <div className="mt-6 p-4 rounded-lg" style={{ background: "oklch(0.28 0.01 60)" }}>
                <p className="text-xs mb-2" style={{ color: "oklch(0.65 0.01 60)" }}>Ready to get your offer?</p>
                <Link href="/contact">
                  <button className="w-full py-2 rounded-md text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get Cash Offer
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid oklch(0.30 0.01 60)" }}>
            <p className="text-xs" style={{ color: "oklch(0.45 0.01 60)" }}>
              © {new Date().getFullYear()} Alder Heritage Homes. All rights reserved. CA DRE #02219124.
            </p>
            <p className="text-xs" style={{ color: "oklch(0.40 0.01 60)" }}>
              Fresno, CA · Serving the Central Valley
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex" style={{ boxShadow: "0 -4px 20px oklch(0.22 0.01 60 / 0.2)" }}>
        <a href={PHONE_HREF} className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-white" style={{ background: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Phone size={18} /> Call Now
        </a>
        <Link href="/contact" className="flex-1 flex items-center justify-center py-4 font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Get My Offer
        </Link>
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

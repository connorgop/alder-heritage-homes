/* ============================================================
   FREE OFFER LANDING PAGE — Alder Heritage Homes
   Dedicated conversion page for paid traffic (Google Ads, social)
   No nav distractions. Single goal: get address + phone.
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { useState } from "react";
import { Phone, CheckCircle2, Star, Shield, Clock, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const CONNOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-alder-photo-gkHJ3VFbEfxdRQWCxLPVkr.webp";

export default function FreeOffer() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim().length > 5) setStep(2);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length >= 10) setStep(3);
  };

  return (
    <div style={{ minHeight: "100vh", background: "oklch(0.97 0.015 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
      <PageMeta
        title="Get Your Free Cash Offer — No Obligation"
        description="Enter your address and get a fair cash offer for your Fresno home within 24 hours. No repairs, no commissions, close in 3 days. Licensed CA Agent DRE #02219124."
        path="/free-offer"
        noIndex={true}
      />
      {/* Header — minimal, no nav */}
      <header style={{ background: "oklch(0.22 0.01 60)", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "oklch(0.55 0.13 42)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: "0.9rem", fontFamily: "'Lora', serif" }}>A</span>
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: "1rem", fontFamily: "'Lora', serif" }}>Alder Heritage Homes</span>
        </div>
        <a href={PHONE_HREF} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "oklch(0.85 0.08 42)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
          <Phone size={16} />
          {PHONE}
        </a>
      </header>

      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.01 60)", padding: "3rem 1.5rem 4rem", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "oklch(0.55 0.13 42)", color: "white", borderRadius: 999, padding: "0.3rem 1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "'DM Mono', monospace" }}>
            Fresno's Honest Cash Buyer
          </span>
          <h1 style={{ color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Lora', serif" }}>
            Get Your Free Cash Offer in 24 Hours — No Repairs, No Fees, No Pressure
          </h1>
          <p style={{ color: "oklch(0.75 0.01 60)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
            Connor Morris is a licensed California real estate agent (DRE #02219124) who actually buys homes with his own capital. Not a wholesaler. Not a middleman. The real buyer.
          </p>

          {/* Calculator Card */}
          <div style={{ background: "white", borderRadius: 16, padding: "2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.15)", maxWidth: 480, margin: "0 auto" }}>
            {step === 1 && (
              <form onSubmit={handleAddressSubmit}>
                <p style={{ fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem", fontFamily: "'Lora', serif" }}>
                  Step 1 of 2: What's the property address?
                </p>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.55 0.01 60)", marginBottom: "1rem" }}>
                  We'll prepare your cash offer before we call.
                </p>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main St, Fresno, CA 93720"
                  required
                  style={{ width: "100%", padding: "0.875rem 1rem", borderRadius: 10, border: "2px solid oklch(0.88 0.02 85)", fontSize: "1rem", marginBottom: "0.75rem", boxSizing: "border-box", outline: "none" }}
                />
                <button
                  type="submit"
                  style={{ width: "100%", padding: "0.875rem", borderRadius: 10, background: "oklch(0.55 0.13 42)", color: "white", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  Get My Free Cash Offer <ArrowRight size={18} />
                </button>
                <p style={{ fontSize: "0.75rem", color: "oklch(0.65 0.01 60)", marginTop: "0.75rem", textAlign: "center" }}>
                  No spam. No obligation. We respect your privacy.
                </p>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handlePhoneSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <CheckCircle2 size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.85rem", color: "oklch(0.45 0.01 60)" }}>Address received: <strong>{address}</strong></span>
                </div>
                <p style={{ fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem", fontFamily: "'Lora', serif" }}>
                  Step 2 of 2: Where should we send your offer?
                </p>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.55 0.01 60)", marginBottom: "1rem" }}>
                  Connor will text you your cash offer within 24 hours.
                </p>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(559) 555-0100"
                  required
                  style={{ width: "100%", padding: "0.875rem 1rem", borderRadius: 10, border: "2px solid oklch(0.88 0.02 85)", fontSize: "1rem", marginBottom: "0.75rem", boxSizing: "border-box", outline: "none" }}
                />
                <button
                  type="submit"
                  style={{ width: "100%", padding: "0.875rem", borderRadius: 10, background: "oklch(0.55 0.13 42)", color: "white", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  Send My Offer <ArrowRight size={18} />
                </button>
                <p style={{ fontSize: "0.75rem", color: "oklch(0.65 0.01 60)", marginTop: "0.75rem", textAlign: "center" }}>
                  One text. No spam. No calls unless you ask.
                </p>
              </form>
            )}

            {step === 3 && (
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "oklch(0.93 0.05 155)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <CheckCircle2 size={32} style={{ color: "oklch(0.40 0.10 155)" }} />
                </div>
                <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "1.4rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.75rem" }}>
                  Check Your Phone!
                </h2>
                <p style={{ color: "oklch(0.45 0.01 60)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Connor will text your cash offer to <strong>{phone}</strong> within 24 hours. He reviews every property personally before sending a number.
                </p>
                <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "oklch(0.22 0.01 60)", color: "white", padding: "0.75rem 1.5rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                  <Phone size={16} /> Call Now: {PHONE}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section style={{ padding: "3rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: Shield, title: "Licensed CA Agent", body: "DRE #02219124. Not a wholesaler. Connor is the actual buyer with real capital." },
              { icon: Clock, title: "Close in 5–7 Days", body: "Or on your timeline. No financing contingency. No inspection delays." },
              { icon: CheckCircle2, title: "Free Broker Opinion", body: "Every offer includes an independent third-party valuation so you know the number is fair." },
              { icon: Star, title: "No Repairs Needed", body: "Any condition. Hoarder, mold, fire damage, squatters, foundation — we buy it." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ padding: "1.5rem", borderRadius: 12, border: "1px solid oklch(0.90 0.02 85)", background: "oklch(0.98 0.01 85)" }}>
                <Icon size={24} style={{ color: "oklch(0.55 0.13 42)", marginBottom: "0.75rem" }} />
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", color: "oklch(0.45 0.01 60)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connor photo + credibility */}
      <section style={{ padding: "3rem 1.5rem", background: "oklch(0.97 0.015 85)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center" }}>
          <img
            src={CONNOR_PHOTO}
            alt="Connor Morris — Licensed CA Real Estate Agent"
            style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "3px solid oklch(0.55 0.13 42)", flexShrink: 0 }}
          />
          <div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "1.3rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>
              Hi, I'm Connor Morris
            </h2>
            <p style={{ fontSize: "0.95rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              I grew up in the Central Valley and I buy homes here with my own capital — not someone else's money, not a wholesaling operation. I'm a licensed California real estate agent (DRE #02219124), which means I have a legal obligation to treat you fairly. Every offer I make includes a free third-party broker opinion of value so you can verify my number is honest.
            </p>
            <p style={{ fontSize: "0.875rem", color: "oklch(0.55 0.01 60)" }}>
              If a cash sale isn't right for your situation, I'll tell you — and I'll connect you with a trusted agent who can help you get top dollar on the open market.
            </p>
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section style={{ padding: "3rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "1.6rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>
            We Buy Houses in Any Condition
          </h2>
          <p style={{ color: "oklch(0.50 0.01 60)", marginBottom: "2rem", fontSize: "0.95rem" }}>
            No situation is too complicated. No property is too distressed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
            {[
              "Hoarder / cluttered homes",
              "Mold or water damage",
              "Fire damage",
              "Foundation problems",
              "Squatters or bad tenants",
              "Probate / inherited homes",
              "Foreclosure / pre-foreclosure",
              "Divorce situations",
              "Behind on mortgage",
              "Vacant properties",
              "Code violations",
              "Roof damage",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", borderRadius: 8, background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)", textAlign: "left" }}>
                <CheckCircle2 size={14} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "oklch(0.35 0.01 60)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "3rem 1.5rem", background: "oklch(0.22 0.01 60)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Lora', serif", color: "white", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
          Ready to Get Your Free Cash Offer?
        </h2>
        <p style={{ color: "oklch(0.75 0.01 60)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
          No repairs. No fees. No pressure. Just an honest offer from a real buyer.
        </p>
        <a
          href={PHONE_HREF}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "oklch(0.55 0.13 42)", color: "white", padding: "1rem 2rem", borderRadius: 12, fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}
        >
          <Phone size={20} /> Call {PHONE}
        </a>
      </section>

      {/* Footer — minimal */}
      <footer style={{ padding: "1.5rem", textAlign: "center", background: "oklch(0.18 0.01 60)" }}>
        <p style={{ color: "oklch(0.55 0.01 60)", fontSize: "0.8rem" }}>
          © 2026 Alder Heritage Homes · Connor Morris, DRE #02219124 · Fresno, CA · (559) 281-8016
        </p>
        <p style={{ color: "oklch(0.45 0.01 60)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
          <a href="/privacy-policy" style={{ color: "inherit" }}>Privacy Policy</a> · <a href="/" style={{ color: "inherit" }}>Main Site</a>
        </p>
      </footer>
    </div>
  );
}

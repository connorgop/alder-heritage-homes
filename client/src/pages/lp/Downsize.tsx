/* ============================================================
   GOOGLE ADS LANDING PAGE — Downsize / Too Much Stuff
   Target keywords:
   - downsize sell house Fresno CA
   - sell house too much stuff Fresno
   - sell house fast downsize Fresno
   - sell big house downsize Fresno
   No nav. Single goal: address → phone → confirmation.
   ============================================================ */
import { useState } from "react";
import { Phone, CheckCircle2, Star, Shield, Clock, ArrowRight, Package } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const CONNOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-alder-photo-gkHJ3VFbEfxdRQWCxLPVkr.webp";

export default function LpDownsize() {
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
        title="Downsize Your Fresno Home Fast — Leave Everything Behind"
        description="Ready to downsize? We buy your Fresno home as-is — leave the furniture, the clutter, everything. Cash offer in 24 hours. Close in 5–7 days. Licensed CA Agent DRE #02219124."
        path="/lp/downsize"
        noIndex={true}
      />
      {/* Header */}
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
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "oklch(0.55 0.13 42)", color: "white", borderRadius: 999, padding: "0.3rem 1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "'DM Mono', monospace" }}>
            Fresno Downsize Specialists
          </span>
          <h1 style={{ color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Lora', serif" }}>
            Downsizing in Fresno? Sell Your Home As-Is — Furniture, Belongings, and All
          </h1>
          <p style={{ color: "oklch(0.75 0.01 60)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            You don't have to sort through 30 years of belongings before you sell. We buy homes in any condition — full of furniture, packed with stuff, or completely empty. Take what you want and leave the rest.
          </p>

          {/* Form Card */}
          <div style={{ background: "white", borderRadius: 16, padding: "2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.18)", maxWidth: 480, margin: "0 auto" }}>
            {step === 1 && (
              <form onSubmit={handleAddressSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <Package size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                  <p style={{ fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", margin: 0, fontFamily: "'Lora', serif" }}>
                    What's the address of the home you're downsizing from?
                  </p>
                </div>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.55 0.01 60)", marginBottom: "1rem" }}>
                  We'll prepare your cash offer before we call. No obligation.
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
                  <CheckCircle2 size={20} style={{ color: "oklch(0.42 0.08 155)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.85rem", color: "oklch(0.45 0.01 60)" }}>Address received: <strong>{address}</strong></span>
                </div>
                <p style={{ fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem", fontFamily: "'Lora', serif" }}>
                  Where should Connor send your offer?
                </p>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.55 0.01 60)", marginBottom: "1rem" }}>
                  He'll text you a real cash offer within 24 hours.
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
              </form>
            )}

            {step === 3 && (
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "oklch(0.93 0.05 155)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <CheckCircle2 size={32} style={{ color: "oklch(0.40 0.10 155)" }} />
                </div>
                <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "1.4rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.75rem" }}>
                  You're All Set!
                </h2>
                <p style={{ color: "oklch(0.45 0.01 60)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Connor will text your cash offer to <strong>{phone}</strong> within 24 hours.
                </p>
                <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "oklch(0.22 0.01 60)", color: "white", padding: "0.75rem 1.5rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                  <Phone size={16} /> Call Now: {PHONE}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What You Can Leave Behind */}
      <section style={{ padding: "3.5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "oklch(0.22 0.01 60)", marginBottom: "0.75rem" }}>
            Take What You Want. Leave the Rest.
          </h2>
          <p style={{ color: "oklch(0.50 0.01 60)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620, margin: "0 auto 2rem" }}>
            You've spent decades building a life in your home. You shouldn't have to spend months clearing it out before you can sell. We buy homes full of furniture, personal belongings, and decades of accumulated items — no cleanout required.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
            {[
              "Full furniture sets", "Appliances", "Clothing and personal items", "Garage contents",
              "Garden tools", "Holiday decorations", "Books and collectibles", "Vehicles in the garage",
              "Shed contents", "Workshop equipment", "Antiques and heirlooms", "Anything else",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 0.875rem", background: "oklch(0.97 0.015 85)", borderRadius: 8, border: "1px solid oklch(0.90 0.02 85)" }}>
                <CheckCircle2 size={14} style={{ color: "oklch(0.42 0.08 155)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "oklch(0.35 0.01 60)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ padding: "3rem 1.5rem", background: "oklch(0.97 0.015 85)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center" }}>
          <img
            src={CONNOR_PHOTO}
            alt="Connor Alder"
            style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", border: "3px solid oklch(0.55 0.13 42)", flexShrink: 0 }}
          />
          <div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "1.2rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>
              Hi, I'm Connor Alder — Licensed CA Agent, DRE #02219124
            </h2>
            <p style={{ fontSize: "0.9rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.7 }}>
              I buy homes in Fresno with my own capital. Every offer includes a free third-party Broker Opinion of Value from an independent Fresno broker — so you know my number is honest. If a cash sale isn't right for you, I'll tell you.
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 860, margin: "2rem auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {[
            { icon: Shield, label: "Licensed CA Agent", sub: "DRE #02219124" },
            { icon: CheckCircle2, label: "Free BOV Included", sub: "Know your home's true value" },
            { icon: Clock, label: "Close in 5–7 Days", sub: "Or your timeline" },
            { icon: Star, label: "No Cleanout Needed", sub: "Leave everything behind" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem", background: "white", borderRadius: 12, border: "1px solid oklch(0.90 0.02 85)" }}>
              <Icon size={22} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{label}</div>
                <div style={{ fontSize: "0.78rem", color: "oklch(0.55 0.01 60)" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "3.5rem 1.5rem", background: "oklch(0.22 0.01 60)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "white", marginBottom: "1rem" }}>
            Ready to Start Your Downsize?
          </h2>
          <p style={{ color: "oklch(0.75 0.01 60)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Get your free cash offer in 24 hours. No obligation, no pressure, no cleanout required.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "oklch(0.55 0.13 42)", color: "white", padding: "1rem 2rem", borderRadius: 12, fontWeight: 700, fontSize: "1.05rem", border: "none", cursor: "pointer" }}
            >
              Get My Free Cash Offer <ArrowRight size={18} />
            </button>
            <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "oklch(0.85 0.08 42)", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
              <Phone size={16} /> Or call Connor: {PHONE}
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: "oklch(0.18 0.01 60)", padding: "1.5rem", textAlign: "center" }}>
        <p style={{ color: "oklch(0.55 0.01 60)", fontSize: "0.8rem", margin: 0 }}>
          © 2026 Alder Heritage Homes · Connor Alder, DRE #02219124 · (559) 281-8016 · Fresno, CA
        </p>
        <p style={{ color: "oklch(0.45 0.01 60)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
          <a href="/privacy" style={{ color: "oklch(0.50 0.01 60)", textDecoration: "none" }}>Privacy Policy</a>
          {" · "}
          <a href="/" style={{ color: "oklch(0.50 0.01 60)", textDecoration: "none" }}>Main Site</a>
        </p>
      </footer>
    </div>
  );
}

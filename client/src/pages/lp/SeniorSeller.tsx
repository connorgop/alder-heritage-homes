/* ============================================================
   GOOGLE ADS LANDING PAGE — Senior Seller / Retirement
   Target keywords:
   - sell house retirement Fresno
   - downsize sell house Fresno CA
   - sell home assisted living Fresno
   - sell parents house Fresno
   - sell house move to retirement community Fresno
   No nav. No distractions. Single goal: address → phone → confirmation.
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { useState } from "react";
import { Phone, CheckCircle2, Star, Shield, Clock, ArrowRight, Heart, Home } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const CONNOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-alder-photo-gkHJ3VFbEfxdRQWCxLPVkr.webp";

const RETIREMENT_COMMUNITIES = [
  "Fairwinds Woodward Park",
  "The Terraces at San Joaquin Gardens",
  "Oakmont of Fresno",
  "Maravillosa",
  "Sierra View Homes",
  "Another community",
];

export default function LpSeniorSeller() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [community, setCommunity] = useState("");

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim().length > 5) setStep(2);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length >= 10) setStep(3);
  };

  const s = {
    page: { minHeight: "100vh", background: "oklch(0.97 0.015 85)", fontFamily: "'Nunito Sans', sans-serif" } as React.CSSProperties,
    header: { background: "oklch(0.22 0.01 60)", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" } as React.CSSProperties,
    logoWrap: { display: "flex", alignItems: "center", gap: "0.75rem" } as React.CSSProperties,
    logoCircle: { width: 36, height: 36, borderRadius: "50%", background: "oklch(0.55 0.13 42)", display: "flex", alignItems: "center", justifyContent: "center" } as React.CSSProperties,
    logoText: { color: "white", fontWeight: 700, fontSize: "1rem", fontFamily: "'Lora', serif" } as React.CSSProperties,
    phoneLink: { display: "flex", alignItems: "center", gap: "0.5rem", color: "oklch(0.85 0.08 42)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" } as React.CSSProperties,
  };

  return (
    <div style={s.page}>
      <PageMeta
        title="Sell Your Home Before Moving to a Retirement Community — Fresno CA"
        description="Moving to Fairwinds, The Terraces, or another Fresno retirement community? We buy your home fast for cash. No repairs, no showings, close on your timeline. Licensed CA Agent."
        path="/lp/senior-seller"
        noIndex={true}
      />
      {/* Header */}
      <header style={s.header}>
        <div style={s.logoWrap}>
          <div style={s.logoCircle}>
            <span style={{ color: "white", fontWeight: 800, fontSize: "0.9rem", fontFamily: "'Lora', serif" }}>A</span>
          </div>
          <span style={s.logoText}>Alder Heritage Homes</span>
        </div>
        <a href={PHONE_HREF} style={s.phoneLink}>
          <Phone size={16} />
          {PHONE}
        </a>
      </header>

      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.01 60)", padding: "3rem 1.5rem 4rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "oklch(0.42 0.08 155)", color: "white", borderRadius: 999, padding: "0.3rem 1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "'DM Mono', monospace" }}>
            For Fresno Seniors &amp; Families
          </span>
          <h1 style={{ color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Lora', serif" }}>
            Sell Your Fresno Home Fast — So You Can Move to the Retirement Community You've Been Waiting For
          </h1>
          <p style={{ color: "oklch(0.75 0.01 60)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            Fairwinds, The Terraces, Oakmont — retirement communities give you a short window when your unit opens. A traditional listing takes 60–90 days. We close in 5–7 days, or on your timeline.
          </p>
          <p style={{ color: "oklch(0.65 0.01 60)", fontSize: "0.9rem", marginBottom: "2rem" }}>
            Connor Alder · Licensed CA Real Estate Agent · DRE #02219124 · (559) 281-8016
          </p>

          {/* Form Card */}
          <div style={{ background: "white", borderRadius: 16, padding: "2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.18)", maxWidth: 500, margin: "0 auto" }}>
            {step === 1 && (
              <form onSubmit={handleAddressSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <Home size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                  <p style={{ fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", margin: 0, fontFamily: "'Lora', serif" }}>
                    What's the address of the home you're selling?
                  </p>
                </div>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.55 0.01 60)", marginBottom: "0.75rem" }}>
                  We'll prepare your cash offer before we ever call you.
                </p>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main St, Fresno, CA 93720"
                  required
                  style={{ width: "100%", padding: "0.875rem 1rem", borderRadius: 10, border: "2px solid oklch(0.88 0.02 85)", fontSize: "1rem", marginBottom: "0.75rem", boxSizing: "border-box", outline: "none" }}
                />
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "oklch(0.40 0.01 60)", marginBottom: "0.4rem" }}>
                    Which community are you hoping to move to? (optional)
                  </label>
                  <select
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 10, border: "2px solid oklch(0.88 0.02 85)", fontSize: "0.95rem", background: "white", color: "oklch(0.35 0.01 60)", boxSizing: "border-box" }}
                  >
                    <option value="">Select a community…</option>
                    {RETIREMENT_COMMUNITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  style={{ width: "100%", padding: "0.875rem", borderRadius: 10, background: "oklch(0.55 0.13 42)", color: "white", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  Get My Free Cash Offer <ArrowRight size={18} />
                </button>
                <p style={{ fontSize: "0.75rem", color: "oklch(0.65 0.01 60)", marginTop: "0.75rem", textAlign: "center" }}>
                  No obligation. No pressure. We respect your privacy.
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
                  He'll text you a cash offer within 24 hours — no phone tag, no pressure.
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
                  You're All Set!
                </h2>
                <p style={{ color: "oklch(0.45 0.01 60)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Connor will text your cash offer to <strong>{phone}</strong> within 24 hours. He reviews every property personally — you'll get a real number, not a lowball.
                </p>
                {community && (
                  <p style={{ color: "oklch(0.42 0.08 155)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "1rem" }}>
                    We'll keep {community} timing in mind when we reach out.
                  </p>
                )}
                <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "oklch(0.22 0.01 60)", color: "white", padding: "0.75rem 1.5rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                  <Phone size={16} /> Call Now: {PHONE}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* The Timing Problem */}
      <section style={{ padding: "3.5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "oklch(0.22 0.01 60)", marginBottom: "1rem", textAlign: "center" }}>
            The Problem With Waiting to Sell
          </h2>
          <p style={{ color: "oklch(0.45 0.01 60)", fontSize: "1rem", lineHeight: 1.8, textAlign: "center", maxWidth: 680, margin: "0 auto 2.5rem" }}>
            Retirement communities like Fairwinds and The Terraces give you 30–60 days when your unit opens. A traditional listing takes 60–90 days — and that's if everything goes perfectly.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: Clock,
                color: "oklch(0.55 0.13 42)",
                title: "Traditional Listing: 60–90 Days",
                body: "Prep, photos, showings, offers, inspections, appraisal, financing contingency. Every step adds time — and any step can fall through.",
              },
              {
                icon: CheckCircle2,
                color: "oklch(0.42 0.08 155)",
                title: "Cash Sale: 5–7 Days",
                body: "Or on your exact timeline. If your unit opens in 45 days, we close in 45 days. No contingencies. No surprises.",
              },
              {
                icon: Heart,
                color: "oklch(0.55 0.13 42)",
                title: "Rent-Back Available",
                body: "Sell your home and receive your cash at closing — then rent from us while you finalize your move. No rush.",
              },
            ].map(({ icon: Icon, color, title, body }) => (
              <div key={title} style={{ padding: "1.75rem", borderRadius: 14, border: "1px solid oklch(0.90 0.02 85)", background: "oklch(0.98 0.01 85)" }}>
                <Icon size={26} style={{ color, marginBottom: "0.75rem" }} />
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", color: "oklch(0.45 0.01 60)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ padding: "3rem 1.5rem", background: "oklch(0.97 0.015 85)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center", marginBottom: "2.5rem" }}>
            <img
              src={CONNOR_PHOTO}
              alt="Connor Alder — Licensed CA Real Estate Agent"
              style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "3px solid oklch(0.55 0.13 42)", flexShrink: 0 }}
            />
            <div>
              <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "1.2rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>
                Hi, I'm Connor Alder
              </h2>
              <p style={{ fontSize: "0.9rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                I'm a licensed California real estate agent (DRE #02219124) and I buy homes in Fresno with my own capital. I grew up in the Central Valley and I understand the timing pressure seniors face when a retirement community unit opens up.
              </p>
              <p style={{ fontSize: "0.875rem", color: "oklch(0.55 0.01 60)", lineHeight: 1.6 }}>
                Every offer I make includes a <strong>free third-party Broker Opinion of Value</strong> from an independent Fresno broker with 1,800+ transactions. You'll know exactly what your home is worth before you decide anything.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { icon: Shield, label: "Licensed CA Agent", sub: "DRE #02219124" },
              { icon: CheckCircle2, label: "Free BOV Included", sub: "Independent valuation" },
              { icon: Clock, label: "Close in 5–7 Days", sub: "Or your timeline" },
              { icon: Star, label: "Any Condition", sub: "No repairs needed" },
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
        </div>
      </section>

      {/* Who This Is For */}
      <section style={{ padding: "3rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: "oklch(0.22 0.01 60)", marginBottom: "1.5rem", textAlign: "center" }}>
            We Help Fresno Seniors &amp; Families In Every Situation
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {[
              "Moving to Fairwinds, The Terraces, or Oakmont",
              "Downsizing from a family home",
              "Moving a parent to assisted living",
              "Selling a parent's home with Power of Attorney",
              "Settling an estate after a loved one passed",
              "Moving out of state to be near family",
              "Selling a home that needs repairs",
              "Selling a home full of belongings",
              "Selling during a divorce",
              "Behind on property taxes",
              "Selling a rental property",
              "Any other situation — just call",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem 1rem", background: "oklch(0.97 0.015 85)", borderRadius: 10, border: "1px solid oklch(0.90 0.02 85)" }}>
                <CheckCircle2 size={16} style={{ color: "oklch(0.42 0.08 155)", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: "0.875rem", color: "oklch(0.35 0.01 60)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "3.5rem 1.5rem", background: "oklch(0.22 0.01 60)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "white", marginBottom: "1rem" }}>
            Ready to Get Your Free Cash Offer?
          </h2>
          <p style={{ color: "oklch(0.75 0.01 60)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            No obligation. No pressure. Connor will text you a real offer within 24 hours — and include a free third-party valuation so you know it's fair.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "oklch(0.55 0.13 42)", color: "white", padding: "1rem 2rem", borderRadius: 12, fontWeight: 700, fontSize: "1.05rem", border: "none", cursor: "pointer" }}
            >
              Get My Free Cash Offer <ArrowRight size={18} />
            </button>
            <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "oklch(0.85 0.08 42)", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
              <Phone size={16} /> Or call Connor directly: {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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

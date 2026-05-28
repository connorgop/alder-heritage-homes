/* ============================================================
   FLOATING CTA — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green
   - Mobile: sticky bottom bar (full-width)
   - Desktop: floating pill (bottom-right) + slide-up quick form
   Forms submit to Formspree → connor@primeinvestpartners.com
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { Phone, X, ArrowRight, ChevronUp, Loader2 } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

const inputStyle = {
  background: "oklch(0.97 0.015 85)",
  border: "1px solid oklch(0.88 0.02 85)",
  fontFamily: "'Nunito Sans', sans-serif",
  color: "oklch(0.22 0.01 60)",
};

export default function FloatingCTA() {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", situation: "" });
  const { state, errorMessage, submit, reset } = useFormSubmit();
  const { trackPhoneClick } = useConversionTracking();
  const phone = useTrackingPhone();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({
      name: form.name,
      phone: form.phone,
      address: form.address,
      situation: form.situation,
      _source: "Floating CTA Widget",
    });
  };

  const handleClose = () => {
    setFormOpen(false);
    reset();
    setForm({ name: "", phone: "", address: "", situation: "" });
  };

  return (
    <>
      {/* ── DESKTOP: Floating pill (bottom-right) ── */}
      <div className="hidden lg:flex flex-col items-end gap-3 fixed bottom-8 right-8 z-50">
        {/* Slide-up quick form */}
        {formOpen && (
          <div
            className="w-80 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1.5px solid oklch(0.88 0.02 85)",
              animation: "slideUpForm 0.3s ease-out both",
            }}
          >
            <style>{`
              @keyframes slideUpForm {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            {/* Form header */}
            <div className="flex items-center justify-between px-5 py-4" style={{ background: "oklch(0.55 0.13 42)" }}>
              <div>
                <p className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>
                  Get Your Free Cash Offer
                </p>
                <p className="text-xs mt-0.5" style={{ color: "oklch(0.90 0.04 85)", fontFamily: "'DM Mono', monospace" }}>
                  Respond within 24 hours · No obligation
                </p>
              </div>
              <button
                onClick={handleClose}
                className="rounded-full p-1 hover:bg-white/20 transition-colors"
                style={{ color: "white" }}
              >
                <X size={16} />
              </button>
            </div>

            {state === "success" ? (
              <div className="p-6 text-center">
                <div className="text-3xl mb-3">🎉</div>
                <p className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  We'll be in touch soon!
                </p>
                <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Expect a call or text within a few hours. Or call us now:
                </p>
                <a href={phone.href} onClick={trackPhoneClick} className="inline-flex items-center gap-2 mt-3 font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {phone.label}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "oklch(0.55 0.13 42)")}
                  onBlur={e => (e.target.style.borderColor = "oklch(0.88 0.02 85)")}
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "oklch(0.55 0.13 42)")}
                  onBlur={e => (e.target.style.borderColor = "oklch(0.88 0.02 85)")}
                />
                <input
                  placeholder="Property address (optional)"
                  value={form.address}
                  onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "oklch(0.55 0.13 42)")}
                  onBlur={e => (e.target.style.borderColor = "oklch(0.88 0.02 85)")}
                />
                <select
                  value={form.situation}
                  onChange={e => setForm(f => ({ ...f, situation: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                  style={{ ...inputStyle, color: form.situation ? "oklch(0.22 0.01 60)" : "oklch(0.55 0.01 60)" }}
                >
                  <option value="">My situation...</option>
                  <option value="foreclosure">Facing foreclosure</option>
                  <option value="behind">Behind on mortgage</option>
                  <option value="second-mortgage">Second mortgage / HELOC</option>
                  <option value="inherited">Inherited / probate home</option>
                  <option value="rent-back">Want to sell &amp; stay (rent-back)</option>
                  <option value="fast-sale">Just need to sell fast</option>
                  <option value="other">Other</option>
                </select>

                {state === "error" && (
                  <p className="text-xs text-red-600 text-center">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90 disabled:opacity-70"
                  style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {state === "submitting" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Get My Cash Offer <ArrowRight size={15} /></>
                  )}
                </button>
                <p className="text-xs text-center" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  No obligation · We match or beat any offer
                </p>
              </form>
            )}
          </div>
        )}

        {/* Floating pill button */}
        <button
          onClick={() => { setFormOpen(o => !o); reset(); }}
          className="flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-white shadow-2xl transition-all hover:scale-105"
          style={{
            background: formOpen ? "oklch(0.28 0.05 155)" : "oklch(0.55 0.13 42)",
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "0.95rem",
            boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.45)",
            transition: "all 0.25s ease",
          }}
        >
          {formOpen ? (
            <><X size={18} /> Close</>
          ) : (
            <><ChevronUp size={18} /> Get My Cash Offer</>
          )}
        </button>
      </div>

      {/* ── MOBILE: Sticky bottom bar ── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-stretch"
        style={{
          background: "oklch(0.22 0.01 60)",
          borderTop: "2px solid oklch(0.55 0.13 42)",
          boxShadow: "0 -4px 24px oklch(0.22 0.01 60 / 0.35)",
        }}
      >
        {/* Call button */}
        <a
          href={phone.href}
          onClick={trackPhoneClick}
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm"
          style={{
            background: "oklch(0.28 0.05 155)",
            color: "white",
            fontFamily: "'Nunito Sans', sans-serif",
            borderRight: "1px solid oklch(1 0 0 / 0.1)",
          }}
        >
          <Phone size={18} />
          <div className="text-left">
            <div style={{ fontSize: "0.65rem", opacity: 0.75, fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", textTransform: "uppercase" }}>Call Now</div>
            <div style={{ fontSize: "0.9rem" }}>{phone.label}</div>
          </div>
        </a>

        {/* Get offer button */}
        <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm text-white"
          style={{
            background: "oklch(0.55 0.13 42)",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          <ArrowRight size={18} />
          <div className="text-left">
            <div style={{ fontSize: "0.65rem", opacity: 0.75, fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", textTransform: "uppercase" }}>Free Offer</div>
            <div style={{ fontSize: "0.9rem" }}>Get My Cash Offer</div>
          </div>
        </Link>
      </div>
    </>
  );
}

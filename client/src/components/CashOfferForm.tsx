/* CashOfferForm — Alder Heritage Homes
 * 2-STEP CONVERSION FLOW (max friction reduction):
 *   Step 1: Address only — lowest possible barrier to entry
 *   Step 2: Name + Phone — collected after commitment
 * Used on all city landing pages.
 * Design: Heritage Warmth — dark charcoal card, terracotta submit button
 */
import { useState } from "react";
import { Phone, ArrowRight, Loader2, CheckCircle2, MapPin } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

interface CashOfferFormProps {
  city: string;
  variant?: "dark" | "light";
}

const inputDark: React.CSSProperties = {
  background: "oklch(1 0 0 / 0.08)",
  border: "1px solid oklch(1 0 0 / 0.22)",
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: "1rem",
};

const inputLight: React.CSSProperties = {
  background: "white",
  border: "1px solid oklch(0.85 0.03 80)",
  color: "oklch(0.22 0.01 60)",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: "1rem",
};

export default function CashOfferForm({ city, variant = "dark" }: CashOfferFormProps) {
  const { state: formState, errorMessage, submit, reset } = useFormSubmit();
  const [step, setStep] = useState<1 | 2>(1);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isDark = variant === "dark";
  const inputStyle = isDark ? inputDark : inputLight;
  const textColor = isDark ? "white" : "oklch(0.22 0.01 60)";
  const subtextColor = isDark ? "oklch(0.78 0.03 80)" : "oklch(0.45 0.03 60)";
  const cardBg = isDark
    ? { background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }
    : { background: "oklch(0.97 0.01 80)", border: "1px solid oklch(0.88 0.04 80)" };

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (address.trim().length > 3) setStep(2);
  }

  async function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    await submit({
      address,
      name: name || "Not provided",
      phone,
      _source: `${city} City Page — Cash Offer Form`,
    });
  }

  if (formState === "success") {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={isDark
          ? { background: "oklch(0.28 0.05 155 / 0.35)", border: "1px solid oklch(0.55 0.13 42 / 0.5)" }
          : { background: "oklch(0.93 0.04 155 / 0.2)", border: "1px solid oklch(0.55 0.13 42 / 0.3)" }}
      >
        <CheckCircle2 size={44} className="mx-auto mb-3" style={{ color: "oklch(0.55 0.13 42)" }} />
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: textColor }}>
          Offer Request Received!
        </h3>
        <p className="text-sm mb-5 leading-relaxed" style={{ color: subtextColor, fontFamily: "'Nunito Sans', sans-serif" }}>
          Connor will call or text you within a few hours with your cash offer. Feel free to call directly right now.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm"
          style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
        >
          <Phone size={16} /> Call {PHONE}
        </a>
        <button
          onClick={() => { reset(); setStep(1); setAddress(""); setName(""); setPhone(""); }}
          className="block mx-auto mt-3 text-xs underline"
          style={{ color: subtextColor, fontFamily: "'DM Mono', monospace", background: "none", border: "none", cursor: "pointer" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-6" style={cardBg}>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
          style={{
            background: step >= 1 ? "oklch(0.55 0.13 42)" : "oklch(1 0 0 / 0.15)",
            color: "white",
            fontFamily: "'DM Mono', monospace",
          }}
        >1</div>
        <div className="flex-1 h-px" style={{ background: step === 2 ? "oklch(0.55 0.13 42)" : "oklch(1 0 0 / 0.15)" }} />
        <div
          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
          style={{
            background: step === 2 ? "oklch(0.55 0.13 42)" : "oklch(1 0 0 / 0.15)",
            color: step === 2 ? "white" : subtextColor,
            fontFamily: "'DM Mono', monospace",
          }}
        >2</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleStep1} className="space-y-4">
          <div>
            <label
              className="block font-bold mb-2"
              style={{ color: subtextColor, fontFamily: "'DM Mono', monospace", fontSize: "0.70rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Property Address
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "oklch(0.55 0.13 42)" }} />
              <input
                type="text"
                required
                autoFocus
                placeholder={`123 Oak Ave, ${city}, CA`}
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full pl-9 pr-4 py-3.5 rounded-lg text-sm outline-none transition-all"
                style={inputStyle}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 active:scale-[0.99]"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 4px 16px oklch(0.55 0.13 42 / 0.4)" }}
          >
            Get My Cash Offer <ArrowRight size={18} />
          </button>

          <p className="text-center text-xs" style={{ color: subtextColor, fontFamily: "'DM Mono', monospace" }}>
            No repairs · No commissions · Close in 3 days
          </p>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="space-y-4">
          <div>
            <p className="text-xs mb-3 font-semibold" style={{ color: subtextColor, fontFamily: "'Nunito Sans', sans-serif" }}>
              Great! One last step — where should Connor send your offer?
            </p>
          </div>

          {/* Address confirmation pill */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
            style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.30)" }}
          >
            <MapPin size={13} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
            <span className="truncate font-semibold" style={{ color: textColor, fontFamily: "'Nunito Sans', sans-serif" }}>{address}</span>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="ml-auto text-xs underline flex-shrink-0"
              style={{ color: subtextColor, background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Mono', monospace" }}
            >
              Edit
            </button>
          </div>

          <div>
            <label
              className="block font-bold mb-2"
              style={{ color: subtextColor, fontFamily: "'DM Mono', monospace", fontSize: "0.70rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              required
              autoFocus
              placeholder="(559) 555-1234"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg text-sm outline-none transition-all"
              style={inputStyle}
            />
          </div>

          <div>
            <label
              className="block font-bold mb-2"
              style={{ color: subtextColor, fontFamily: "'DM Mono', monospace", fontSize: "0.70rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Your Name <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span>
            </label>
            <input
              type="text"
              placeholder="First name is fine"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg text-sm outline-none transition-all"
              style={inputStyle}
            />
          </div>

          {formState === "error" && (
            <p className="text-sm font-medium" style={{ color: "oklch(0.70 0.18 25)", fontFamily: "'Nunito Sans', sans-serif" }}>
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 4px 16px oklch(0.55 0.13 42 / 0.4)" }}
          >
            {formState === "submitting" ? (
              <><Loader2 size={18} className="animate-spin" /> Sending...</>
            ) : (
              <>Send My Offer Request <ArrowRight size={18} /></>
            )}
          </button>

          <p className="text-center" style={{ fontSize: "0.67rem", color: subtextColor, fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.5 }}>
            By submitting, you consent to receive SMS from Alder Heritage Homes. Msg &amp; data rates may apply. Reply STOP to opt out.{" "}
            <a href="/privacy-policy" style={{ color: isDark ? "oklch(0.70 0.08 55)" : "oklch(0.55 0.13 42)", textDecoration: "underline" }}>Privacy</a>
          </p>
        </form>
      )}
    </div>
  );
}

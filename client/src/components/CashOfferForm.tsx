/* CashOfferForm — Alder Heritage Homes
 * Reusable inline "Get My Cash Offer" form used on all city landing pages.
 * Wired to Formspree (email) + ntfy.sh (push notification to Connor's phone).
 * Design: Heritage Warmth — dark charcoal card, terracotta submit button
 */
import { useState } from "react";
import { Phone, Send, Loader2 } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

interface CashOfferFormProps {
  city: string;
  /** Optional variant: "dark" (default, for dark bg sections) | "light" (for light bg sidebars) */
  variant?: "dark" | "light";
}

const inputDark: React.CSSProperties = {
  background: "oklch(1 0 0 / 0.08)",
  border: "1px solid oklch(1 0 0 / 0.18)",
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
};

const inputLight: React.CSSProperties = {
  background: "white",
  border: "1px solid oklch(0.85 0.03 80)",
  color: "oklch(0.22 0.01 60)",
  fontFamily: "'Nunito Sans', sans-serif",
};

const labelDark: React.CSSProperties = {
  color: "oklch(0.82 0.04 80)",
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.70rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const labelLight: React.CSSProperties = {
  color: "oklch(0.42 0.03 60)",
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.70rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

export default function CashOfferForm({ city, variant = "dark" }: CashOfferFormProps) {
  const { state: formState, errorMessage, submit, reset } = useFormSubmit();
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", situation: "" });

  const isDark = variant === "dark";
  const inputStyle = isDark ? inputDark : inputLight;
  const labelStyle = isDark ? labelDark : labelLight;
  const textColor = isDark ? "white" : "oklch(0.22 0.01 60)";
  const subtextColor = isDark ? "oklch(0.78 0.03 80)" : "oklch(0.45 0.03 60)";
  const cardBg = isDark
    ? { background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }
    : { background: "oklch(0.97 0.01 80)", border: "1px solid oklch(0.88 0.04 80)" };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({ ...formData, _source: `${city} City Page — Cash Offer Form` });
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl p-8 text-center" style={isDark ? { background: "oklch(0.28 0.05 155 / 0.35)", border: "1px solid oklch(0.55 0.13 42 / 0.5)" } : { background: "oklch(0.93 0.04 155 / 0.2)", border: "1px solid oklch(0.55 0.13 42 / 0.3)" }}>
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: textColor }}>
          Request Received!
        </h3>
        <p className="text-sm mb-5 leading-relaxed" style={{ color: subtextColor, fontFamily: "'Nunito Sans', sans-serif" }}>
          Connor will call or text you within 24 hours with your cash offer. Feel free to call directly in the meantime.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm"
          style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
        >
          <Phone size={16} /> Call {PHONE}
        </a>
        <button
          onClick={reset}
          className="block mx-auto mt-3 text-xs underline"
          style={{ color: subtextColor, fontFamily: "'DM Mono', monospace", background: "none", border: "none", cursor: "pointer" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl p-6 space-y-4" style={cardBg}>
      {/* Name */}
      <div>
        <label className="block font-bold mb-1.5" style={labelStyle}>Your Name *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
          style={inputStyle}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block font-bold mb-1.5" style={labelStyle}>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="(559) 555-1234"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
          style={inputStyle}
        />
      </div>

      {/* Property Address */}
      <div>
        <label className="block font-bold mb-1.5" style={labelStyle}>Property Address *</label>
        <input
          type="text"
          name="address"
          required
          placeholder={`123 Oak Ave, ${city}, CA`}
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
          style={inputStyle}
        />
      </div>

      {/* Situation */}
      <div>
        <label className="block font-bold mb-1.5" style={labelStyle}>Your Situation</label>
        <select
          name="situation"
          value={formData.situation}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
          style={{
            ...inputStyle,
            background: isDark ? "oklch(0.20 0.01 60)" : "white",
            color: formData.situation ? textColor : subtextColor,
          }}
        >
          <option value="">Select situation (optional)</option>
          <option value="Ready to sell soon">Ready to sell — want a fast offer</option>
          <option value="Inherited property">Inherited a property</option>
          <option value="Behind on mortgage / foreclosure">Behind on mortgage / facing foreclosure</option>
          <option value="Divorce or estate">Divorce or estate sale</option>
          <option value="Rental property">Selling a rental property</option>
          <option value="Property needs repairs">Property needs significant repairs</option>
          <option value="Thinking of selling in 6-12 months">Thinking of selling in 6–12 months</option>
        </select>
      </div>

      {/* Error */}
      {formState === "error" && (
        <p className="text-sm font-medium" style={{ color: "oklch(0.70 0.18 25)", fontFamily: "'Nunito Sans', sans-serif" }}>
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-base transition-all disabled:opacity-60"
        style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {formState === "submitting" ? (
          <><Loader2 size={18} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={18} /> Get My {city} Cash Offer</>
        )}
      </button>

      <p className="text-center text-xs" style={{ color: isDark ? "oklch(0.52 0.02 80)" : "oklch(0.58 0.02 60)", fontFamily: "'DM Mono', monospace" }}>
        No repairs · No commissions · Close in 5–7 days
      </p>
    </form>
  );
}

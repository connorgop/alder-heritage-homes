import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const situations = [
  "Facing foreclosure",
  "Behind on mortgage payments",
  "Second mortgage / HELOC problems",
  "Inherited / probate home",
  "Need to sell fast",
  "Want to sell and stay (rent-back)",
  "Divorce",
  "Job relocation",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", situation: "", message: "", timeline: ""
  });
  const [isVacant, setIsVacant] = useState(false);
  const { state, errorMessage, submit } = useFormSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({
      name: form.name,
      phone: form.phone,
      email: form.email,
      address: form.address,
      situation: form.situation,
      timeline: form.timeline,
      message: form.message,
      _source: "Contact Page Form",
      isVacant: isVacant ? "Yes — property is currently vacant" : "No",
    });
  };

  return (
    <Layout>
      <PageMeta
        title="Get My Free Cash Offer — Sell Your Fresno Home Fast"
        description="Get a no-obligation cash offer for your Fresno home within 24 hours. Licensed CA Agent DRE #02219124. No repairs, no commissions, close in 5–7 days. Call (559) 281-8016."
        path="/contact"
      />
      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Free Cash Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Get Your Free Cash Offer Today
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No obligation. No pressure. Just an honest conversation about your home and your options. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {state === "success" ? (
                <div className="p-10 rounded-2xl text-center" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42)" }}>
                  <CheckCircle2 size={56} className="mx-auto mb-4" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    We Got Your Request!
                  </h2>
                  <p className="text-lg mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Thank you, {form.name || "there"}. We'll review your property information and reach out within 24 hours with your cash offer.
                  </p>
                  <p className="font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.28 0.05 155)" }}>
                    Need to talk now? Call us: <a href={PHONE_HREF} style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a>
                  </p>
                </div>
              ) : (
                <div className="p-8 rounded-2xl shadow-sm" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Tell Us About Your Property
                  </h2>
                  <p className="text-sm mb-8" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    All information is kept strictly confidential. We never share your details.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                          style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                          onFocus={(e) => e.target.style.borderColor = "oklch(0.55 0.13 42)"}
                          onBlur={(e) => e.target.style.borderColor = "oklch(0.88 0.02 85)"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(559) 555-1234"
                          className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                          style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                          onFocus={(e) => e.target.style.borderColor = "oklch(0.55 0.13 42)"}
                          onBlur={(e) => e.target.style.borderColor = "oklch(0.88 0.02 85)"}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                        style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                        onFocus={(e) => e.target.style.borderColor = "oklch(0.55 0.13 42)"}
                        onBlur={(e) => e.target.style.borderColor = "oklch(0.88 0.02 85)"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                        Property Address *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="123 Main St, Fresno, CA 93720"
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                        style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                        onFocus={(e) => e.target.style.borderColor = "oklch(0.55 0.13 42)"}
                        onBlur={(e) => e.target.style.borderColor = "oklch(0.88 0.02 85)"}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                          Your Situation
                        </label>
                        <select
                          value={form.situation}
                          onChange={(e) => setForm({ ...form, situation: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                          style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                        >
                          <option value="">Select your situation</option>
                          {situations.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                          Desired Timeline
                        </label>
                        <select
                          value={form.timeline}
                          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                          style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                        >
                          <option value="">How soon?</option>
                          <option value="asap">ASAP — as fast as possible</option>
                          <option value="30days">Within 30 days</option>
                          <option value="60days">Within 60 days</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    {/* Vacant property checkbox */}
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl cursor-pointer"
                      style={{
                        background: isVacant ? "oklch(0.28 0.08 30 / 0.08)" : "oklch(0.97 0.01 85)",
                        border: isVacant ? "2px solid oklch(0.65 0.18 45)" : "2px solid oklch(0.88 0.02 85)",
                        transition: "all 0.2s",
                      }}
                      onClick={() => setIsVacant(!isVacant)}
                    >
                      <div
                        className="flex items-center justify-center rounded flex-shrink-0 mt-0.5"
                        style={{
                          width: "20px",
                          height: "20px",
                          background: isVacant ? "oklch(0.65 0.18 45)" : "white",
                          border: isVacant ? "2px solid oklch(0.65 0.18 45)" : "2px solid oklch(0.75 0.02 60)",
                          transition: "all 0.2s",
                        }}
                      >
                        {isVacant && <span style={{ color: "white", fontSize: "13px", fontWeight: 900, lineHeight: 1 }}>✓</span>}
                      </div>
                      <div>
                        <div className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: isVacant ? "oklch(0.28 0.08 30)" : "oklch(0.30 0.01 60)" }}>
                          ⚠ Is this property currently vacant?
                        </div>
                        <div className="text-xs mt-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.50 0.03 55)" }}>
                          Vacant homes in Fresno get broken into fast. Check this box and Connor will prioritize your call and can help secure the property the same day.
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                        Tell Us More (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Any additional details about the property or your situation..."
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none"
                        style={{ border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)", background: "oklch(0.98 0.01 85)" }}
                        onFocus={(e) => e.target.style.borderColor = "oklch(0.55 0.13 42)"}
                        onBlur={(e) => e.target.style.borderColor = "oklch(0.88 0.02 85)"}
                      />
                    </div>

                    {state === "error" && (
                      <p className="text-sm text-red-600 text-center py-2">{errorMessage}</p>
                    )}
                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90 disabled:opacity-70"
                      style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {state === "submitting" ? (
                        <><Loader2 size={20} className="animate-spin" /> Sending Your Request...</>
                      ) : (
                        <>Get My Free Cash Offer <ArrowRight size={20} /></>
                      )}
                    </button>
                    <p className="text-xs text-center" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      By submitting, you agree to be contacted about your property. We never sell your information.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.28 0.05 155)", color: "white" }}>
                <h3 className="font-bold text-lg mb-5" style={{ fontFamily: "'Lora', serif" }}>Contact Us Directly</h3>
                <div className="space-y-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42)" }}>
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "oklch(0.70 0.02 155)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Call or Text</div>
                      <div className="font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{PHONE}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.35 0.05 155)" }}>
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "oklch(0.70 0.02 155)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</div>
                      <div className="font-medium text-sm">info@alderheritagehomes.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.35 0.05 155)" }}>
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "oklch(0.70 0.02 155)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Service Area</div>
                      <div className="font-medium text-sm">Fresno &amp; Central Valley, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.35 0.05 155)" }}>
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "oklch(0.70 0.02 155)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Response Time</div>
                      <div className="font-medium text-sm">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "We call you within 24 hours",
                    "We research your property",
                    "Written cash offer presented",
                    "No pressure to accept",
                    "Close on your timeline",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={15} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "1px solid oklch(0.55 0.13 42 / 0.2)" }}>
                <p className="text-sm font-medium" style={{ color: "oklch(0.42 0.13 42)", fontFamily: "'Lora', serif", fontStyle: "italic" }}>
                  "We never pressure anyone. If a cash sale isn't your best option, we'll tell you that — and point you toward what is."
                </p>
                <p className="text-xs mt-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>— Alder Heritage Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

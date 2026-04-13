/* ============================================================
   SMS CONSENT PAGE — /sms-consent
   Standalone opt-in page for Twilio 10DLC registration
   Contains: full disclosures, checkbox consent, STOP/HELP info
   Does NOT modify any existing forms on the site
   ============================================================ */
import { useState } from "react";
import { CheckCircle2, MessageSquare, Phone, Shield, AlertCircle, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { Link } from "wouter";

const COMPANY = "Alder Heritage Homes";
const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const EMAIL = "connor@alderheritagehomes.com";

export default function SmsConsent() {
  const [form, setForm] = useState({ name: "", phone: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setError("You must check the consent box to opt in to SMS messages.");
      return;
    }
    if (!form.phone.trim()) {
      setError("Please enter your mobile phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div style={{ background: "oklch(0.98 0.005 60)", minHeight: "100vh" }}>
      <PageMeta
        title="SMS Opt-In Consent | Alder Heritage Homes"
        description="Opt in to receive SMS text messages from Alder Heritage Homes. Message and data rates may apply. Reply STOP to opt out at any time."
        path="/sms-consent"
      />

      {/* Header */}
      <header className="border-b" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>A</div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
            </div>
          </Link>
          <Link href="/">
            <span className="text-sm underline cursor-pointer" style={{ color: "oklch(0.75 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>← Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Page title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
            style={{ background: "oklch(0.45 0.12 155 / 0.15)", border: "2px solid oklch(0.45 0.12 155 / 0.40)" }}>
            <MessageSquare size={26} style={{ color: "oklch(0.45 0.12 155)" }} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            SMS Text Message Opt-In
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Opt in to receive text messages from {COMPANY}
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl p-8 text-center" style={{ background: "white", border: "2px solid oklch(0.45 0.12 155 / 0.30)" }}>
            <CheckCircle2 size={52} className="mx-auto mb-4" style={{ color: "oklch(0.45 0.12 155)" }} />
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              You're opted in!
            </h2>
            <p className="mb-4 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Thank you, <strong>{form.name || "there"}</strong>. You will receive SMS messages from {COMPANY} at <strong>{form.phone}</strong>.
            </p>
            <div className="rounded-xl p-4 mb-6 text-left text-sm" style={{ background: "oklch(0.96 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.40 0.01 60)" }}>
              <p className="font-bold mb-1" style={{ color: "oklch(0.22 0.01 60)" }}>Reminders:</p>
              <p>Reply <strong>STOP</strong> at any time to stop receiving messages.</p>
              <p>Reply <strong>HELP</strong> for help or call us at <a href={PHONE_HREF} className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a>.</p>
              <p>Message and data rates may apply.</p>
            </div>
            <Link href="/">
              <button className="px-6 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Back to Home
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* Disclosure box */}
            <div className="rounded-2xl p-6 mb-6" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Shield size={18} style={{ color: "oklch(0.45 0.12 155)" }} />
                <h2 className="font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.35 0.12 155)" }}>
                  What You're Agreeing To
                </h2>
              </div>

              <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>
                <DisclosureRow label="Who is texting you" value={`${COMPANY} — a licensed CA real estate company (DRE #02219124)`} />
                <DisclosureRow label="Types of messages" value="Offer follow-ups, scheduling, transaction updates, and responses to your questions" />
                <DisclosureRow label="Message frequency" value="Up to 10 messages per month. Most contacts receive 2–5 messages total." />
                <DisclosureRow label="Cost to you" value="Message and data rates may apply based on your carrier plan. We do not charge for messages." />
                <DisclosureRow label="How to stop" value="Reply STOP to any message. You will receive one confirmation and no further messages." />
                <DisclosureRow label="How to get help" value={`Reply HELP to any message, or call ${PHONE}, or email ${EMAIL}`} />
                <DisclosureRow label="Phone number sharing" value="We will not share your phone number with third parties for marketing purposes." />
                <DisclosureRow label="Consent required?" value="No. Opting in to SMS is never required to receive a cash offer or use our services." />
              </div>
            </div>

            {/* Opt-in form */}
            <form onSubmit={handleSubmit} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
              <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Complete Your SMS Opt-In
              </h2>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border text-sm"
                    style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                    Mobile Phone Number <span style={{ color: "oklch(0.55 0.13 42)" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(559) 000-0000"
                    required
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border text-sm"
                    style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>

                {/* Consent checkbox — the critical 10DLC element */}
                <div className="rounded-xl p-4" style={{ background: "oklch(0.45 0.12 155 / 0.06)", border: "2px solid oklch(0.45 0.12 155 / 0.30)" }}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={e => setForm(p => ({ ...p, consent: e.target.checked }))}
                        className="sr-only"
                      />
                      <div
                        className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors"
                        style={{
                          borderColor: form.consent ? "oklch(0.45 0.12 155)" : "oklch(0.70 0.02 60)",
                          background: form.consent ? "oklch(0.45 0.12 155)" : "white"
                        }}
                        onClick={() => setForm(p => ({ ...p, consent: !p.consent }))}
                      >
                        {form.consent && <CheckCircle2 size={13} className="text-white" />}
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                      I agree to receive recurring automated text messages (SMS) from <strong>{COMPANY}</strong> at the mobile number I provided above. I understand that:
                      <br /><br />
                      • Message frequency varies; up to 10 messages per month<br />
                      • Message and data rates may apply<br />
                      • I can opt out at any time by replying <strong>STOP</strong><br />
                      • Consent is not required to receive a cash offer or use any services<br />
                      • I have read and agree to the{" "}
                      <Link href="/terms-of-service">
                        <span className="underline" style={{ color: "oklch(0.45 0.12 155)" }}>Terms of Service</span>
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy">
                        <span className="underline" style={{ color: "oklch(0.45 0.12 155)" }}>Privacy Policy</span>
                      </Link>
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm" style={{ background: "oklch(0.95 0.05 25)", border: "1px solid oklch(0.80 0.10 25)", color: "oklch(0.40 0.10 25)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-bold text-white text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Opt In to SMS Messages <ArrowRight size={18} />
                </button>

                <p className="text-center text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  By clicking "Opt In", you confirm your consent to receive SMS messages as described above.
                  Reply STOP at any time to unsubscribe.
                </p>
              </div>
            </form>

            {/* Alternative contact */}
            <div className="mt-6 rounded-xl p-4 flex items-center gap-3" style={{ background: "oklch(0.94 0.01 60)", border: "1px solid oklch(0.88 0.01 60)" }}>
              <Phone size={18} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
              <p className="text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>
                Prefer to call? Reach Connor directly at{" "}
                <a href={PHONE_HREF} className="font-bold underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a>.
                SMS opt-in is never required to get a cash offer.
              </p>
            </div>
          </>
        )}

        {/* Footer nav */}
        <div className="mt-10 pt-6 border-t flex flex-wrap gap-4 text-sm" style={{ borderColor: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Link href="/terms-of-service"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Terms of Service</span></Link>
          <Link href="/privacy-policy"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Privacy Policy</span></Link>
          <Link href="/"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Back to Home</span></Link>
        </div>
      </div>
    </div>
  );
}

function DisclosureRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-5 gap-3 py-2 border-b" style={{ borderColor: "oklch(0.92 0.01 60)" }}>
      <div className="col-span-2 font-semibold text-xs uppercase tracking-wide" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{label}</div>
      <div className="col-span-3" style={{ color: "oklch(0.30 0.01 60)" }}>{value}</div>
    </div>
  );
}

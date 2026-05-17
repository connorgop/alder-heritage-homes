/* ============================================================
   EXIT INTENT POPUP — Alder Heritage Homes
   Fires when user moves mouse toward browser chrome (exit intent)
   or on mobile when they hit the back button area.
   Two-step: wholesaler warning → lead capture form.
   Only shows once per session.
   ============================================================ */
import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { X, Phone, AlertTriangle, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const SESSION_KEY = "ahh_exit_shown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [step, setStep] = useState<"warning" | "form" | "success">("warning");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setStep("success");
    },
  });

  const show = useCallback(() => {
    if (dismissed) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    setVisible(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, [dismissed]);

  useEffect(() => {
    // Desktop: mouse leaves top of viewport (heading toward browser chrome / new tab)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) show();
    };

    // Mobile: page visibility change (user switching apps / going back)
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") show();
    };

    // Timer trigger: show after 45 seconds on the page
    const timerRef = setTimeout(() => {
      show();
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimeout(timerRef);
    };
  }, [show]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim()) return;
    submitLead.mutate({
      firstName: firstName.trim(),
      lastName: "(popup)",
      phone: phone.trim(),
      email: "",
      address: "Not provided",
      city: "Fresno area",
      situation: "Exit intent popup — wants cash offer",
      source: "exit-intent-popup",
    });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "oklch(0.10 0.01 60 / 0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "oklch(0.15 0.01 60)", border: "2px solid oklch(0.55 0.13 42 / 0.6)" }}
      >
        {/* Header bar */}
        <div className="px-6 py-4 flex items-center gap-3" style={{ background: "oklch(0.55 0.13 42)" }}>
          <AlertTriangle size={22} className="text-white flex-shrink-0" />
          <p className="font-bold text-white text-sm flex-1" style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {step === "success" ? "You're All Set!" : "Before You Leave — A Word of Warning"}
          </p>
          <button onClick={close} className="text-white/70 hover:text-white transition-colors" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Step 1: Warning */}
        {step === "warning" && (
          <div className="px-6 py-6">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.3 }}>
              The next site you click on is probably a wholesaler.
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The vast majority of "We Buy Houses Cash" websites you'll find on Google are run by <strong className="text-white">wholesalers — not real buyers</strong>. They don't have the capital to purchase your home. They'll put your property under contract, then sell it to real investors for a profit of $20,000–$60,000 — money that should be yours.
            </p>

            <div className="rounded-xl p-4 mb-5" style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.35)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.88 0.06 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
                🚩 Red flags of a wholesaler:
              </p>
              <ul className="space-y-1.5">
                {[
                  '"And/or assignee" language in the contract',
                  "Inspection contingency (real buyers don't need one)",
                  "No proof of funds within 24 hours",
                  "Instagram-guru branding, out-of-state area codes",
                  "They call you 10 times after you submit your address",
                ].map((flag) => (
                  <li key={flag} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <span style={{ color: "oklch(0.65 0.20 27)", flexShrink: 0 }}>✗</span> {flag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-4 mb-6" style={{ background: "oklch(0.28 0.05 155 / 0.25)", border: "1px solid oklch(0.28 0.05 155 / 0.4)" }}>
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.65 0.10 145)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <strong className="text-white">My honest advice:</strong> Work with a real end buyer like me — I have the capital, the license, and the track record. <strong className="text-white">Do not sign anything with a wholesaler</strong> until you've verified proof of funds and confirmed there is no assignment clause.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setStep("form")}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get My Honest Offer <ArrowRight size={16} />
              </button>
              <a
                href={PHONE_HREF}
                onClick={close}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold border-2 transition-all hover:opacity-90"
                style={{ color: "white", borderColor: "oklch(1 0 0 / 0.25)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone size={16} /> {PHONE}
              </a>
            </div>

            <p className="text-center text-xs mt-4" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
              — Connor Morris, Alder Heritage Homes · CA DRE #02219124
            </p>
          </div>
        )}

        {/* Step 2: Lead Capture Form */}
        {step === "form" && (
          <div className="px-6 py-6">
            <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
              Get Your Free Cash Offer
            </h2>
            <p className="text-sm mb-5" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Takes 60 seconds. No obligation. Connor will call you within a few hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="exit-name" className="block text-sm font-medium mb-1" style={{ color: "oklch(0.80 0.01 60)" }}>
                  Your Name
                </label>
                <input
                  id="exit-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John Smith"
                  required
                  className="w-full rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2"
                  style={{ background: "oklch(0.22 0.01 60)", border: "1px solid oklch(0.35 0.01 60)" }}
                />
              </div>
              <div>
                <label htmlFor="exit-phone" className="block text-sm font-medium mb-1" style={{ color: "oklch(0.80 0.01 60)" }}>
                  Best Phone Number
                </label>
                <input
                  id="exit-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(559) 555-1234"
                  required
                  className="w-full rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2"
                  style={{ background: "oklch(0.22 0.01 60)", border: "1px solid oklch(0.35 0.01 60)" }}
                />
              </div>
              <button
                type="submit"
                disabled={submitLead.isPending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {submitLead.isPending ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <>Get My Cash Offer <ArrowRight size={16} /></>
                )}
              </button>
              <p className="text-center text-xs" style={{ color: "oklch(0.45 0.01 60)" }}>
                No spam. No obligation. CA DRE #02219124.{" "}
                <button type="button" onClick={close} className="underline hover:opacity-80">
                  No thanks
                </button>
              </p>
            </form>
          </div>
        )}

        {/* Step 3: Success */}
        {step === "success" && (
          <div className="px-6 py-8 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.28 0.05 155 / 0.3)" }}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "oklch(0.65 0.10 145)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
              You're All Set!
            </h3>
            <p className="text-sm mb-6" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Connor will call you within a few hours with your cash offer. Check your phone!
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={16} /> Call Now: {PHONE}
            </a>
            <p className="text-center text-xs mt-4" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
              — Connor Morris, Alder Heritage Homes · CA DRE #02219124
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

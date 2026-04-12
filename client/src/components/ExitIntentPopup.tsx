/* ============================================================
   EXIT INTENT POPUP — Alder Heritage Homes
   Fires when user moves mouse toward browser chrome (exit intent)
   or on mobile when they hit the back button area.
   Message: honest warning about wholesalers / bad actors.
   Only shows once per session.
   ============================================================ */
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { X, Phone, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const SESSION_KEY = "ahh_exit_shown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

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

    // Timer trigger: show after 45 seconds of inactivity on the page
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
            Before You Leave — A Word of Warning
          </p>
          <button onClick={close} className="text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.3 }}>
            The next site you click on is probably a wholesaler.
          </h2>

          <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            The vast majority of "We Buy Houses Cash" websites you'll find on Google are run by <strong className="text-white">wholesalers — not real buyers</strong>. They don't have the capital or funding to purchase your home. They will put your property under contract, then shop it to real investors for a profit of $20,000–$60,000 — money that should be yours.
          </p>

          <div className="rounded-xl p-4 mb-5" style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.35)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.88 0.06 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
              🚩 Red flags of a wholesaler:
            </p>
            <ul className="space-y-1.5">
              {[
                "\"And/or assignee\" language in the contract",
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
                <strong className="text-white">My honest advice:</strong> Work with a real end buyer like me — I have the capital, the license, and the track record. Or call a trusted local Realtor. Either way, <strong className="text-white">do not sign anything with a wholesaler</strong> until you've verified proof of funds and confirmed there is no assignment clause.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" onClick={close} className="flex-1">
              <button
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Stay — Get My Honest Offer <ArrowRight size={16} />
              </button>
            </Link>
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
      </div>
    </div>
  );
}

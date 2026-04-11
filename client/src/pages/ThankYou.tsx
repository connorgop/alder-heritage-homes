/* ============================================================
   ThankYou.tsx — Alder Heritage Homes
   Conversion tracking page for Google Ads.
   Users land here after submitting the cash offer form.
   Google Ads conversion tag fires on this page.
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle, Clock, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function ThankYou() {
  useSEO({
    title: "Request Received — Connor Will Call You Soon | Alder Heritage Homes",
    description: "Thank you for submitting your cash offer request. Connor Morris will call or text you within 24 hours with your offer.",
    noIndex: true, // Don't index thank-you pages
  });

  // Fire Google Ads conversion event when this page loads
  useEffect(() => {
    // Google Ads conversion tracking — fires when user lands on /thank-you
    // This is the conversion event you set up in Google Ads → Tools → Conversions
    if (typeof window !== "undefined" && (window as any).gtag) {
      // Google Ads conversion tracking — fires when user lands on /thank-you after form submission
      // Account: AW-18059779523 | Conversion action: Submit lead form (ctId: 7559336525)
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18059779523/submit_lead_form",
        value: 150.0,
        currency: "USD",
        transaction_id: Date.now().toString(),
      });
      // Also fire a standard GA4 lead event for analytics
      (window as any).gtag("event", "generate_lead", {
        currency: "USD",
        value: 150.0,
      });
    }
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
        style={{ background: "oklch(0.12 0.02 60)" }}
      >
        {/* Success card */}
        <div
          className="w-full max-w-lg rounded-3xl p-10 text-center"
          style={{
            background: "oklch(0.17 0.03 60)",
            border: "1px solid oklch(0.55 0.13 42 / 0.4)",
            boxShadow: "0 0 60px oklch(0.55 0.13 42 / 0.15)",
          }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "oklch(0.55 0.13 42 / 0.2)", border: "2px solid oklch(0.55 0.13 42)" }}
            >
              <CheckCircle size={40} style={{ color: "oklch(0.75 0.13 42)" }} />
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.93 0.04 80)" }}
          >
            Request Received!
          </h1>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.04 80)" }}
          >
            Connor Morris will personally call or text you within <strong style={{ color: "oklch(0.85 0.08 80)" }}>24 hours</strong> with your cash offer. No obligation. No pressure.
          </p>

          {/* What happens next */}
          <div
            className="rounded-xl p-5 mb-8 text-left space-y-4"
            style={{ background: "oklch(0.22 0.03 60)", border: "1px solid oklch(0.32 0.04 60)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}
            >
              What Happens Next
            </p>
            {[
              { icon: <Phone size={16} />, text: "Connor calls or texts you within 24 hours" },
              { icon: <Clock size={16} />, text: "He'll ask a few quick questions about the property" },
              { icon: <Star size={16} />, text: "You get a fair, no-obligation cash offer" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.75 0.13 42)" }}
                >
                  {step.icon}
                </div>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.82 0.04 80)" }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA — call now */}
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base mb-4 transition-all hover:opacity-90"
            style={{
              background: "oklch(0.55 0.13 42)",
              color: "white",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            <Phone size={18} />
            Call Connor Now — {PHONE}
          </a>

          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm underline"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.60 0.04 80)" }}
          >
            Back to home <ArrowRight size={14} />
          </Link>
        </div>

        {/* Trust bar */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs"
          style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.03 60)" }}
        >
          <span>Licensed CA Agent · DRE #02219124</span>
          <span>·</span>
          <span>Direct End Buyer</span>
          <span>·</span>
          <span>Not a Wholesaler</span>
          <span>·</span>
          <span>5.0 ★ Reviews</span>
        </div>
      </div>
    </Layout>
  );
}

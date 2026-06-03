/* ============================================================
   ThankYou.tsx — Alder Heritage Homes
   Conversion tracking page for Google Ads.
   Users land here after submitting the cash offer form.
   Google Ads conversion tag fires on this page.
   Improvements: Google review CTA, referral ask, better next steps
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle, Clock, Star, ArrowRight, ExternalLink, Heart, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getAnalyticsAttributionParams, getLeadConversionId } from "@/lib/attribution";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ17433669692443093026"; // Alder Heritage Homes GBP

export default function ThankYou() {
  useSEO({
    title: "Request Received — We'll Call You Soon",
    description: "Thank you for submitting your cash offer request. Connor Morris will call or text you within 24 hours with your offer.",
    noIndex: true, // Don't index thank-you pages
  });

  // Fire Google Ads conversion event when this page loads
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const attribution = getAnalyticsAttributionParams();
      const transactionId = getLeadConversionId();
      // Google Ads conversion tracking — fires when user lands on /thank-you after form submission
      // Account: AW-18059779523 | Conversion label: do7rCPPsz5wcEMO7yaND (Contact Lead Form)
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18059779523/do7rCPPsz5wcEMO7yaND",
        value: 150.0,
        currency: "USD",
        transaction_id: transactionId,
      });
      // Also fire a standard GA4 lead event for analytics
      (window as any).gtag("event", "generate_lead", {
        currency: "USD",
        value: 150.0,
        transaction_id: transactionId,
        ...attribution,
      });
      (window as any).dataLayer?.push({
        event: "thank_you_lead",
        transaction_id: transactionId,
        ...attribution,
      });
    }
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
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
            You're In — Offer Coming!
          </h1>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.04 80)" }}
          >
            Connor personally reviews every request. Expect a <strong style={{ color: "oklch(0.85 0.08 80)" }}>call or text within 1 hour</strong> during business hours. No obligation. No pressure.
          </p>

          {/* What happens next */}
          <div
            className="rounded-xl p-5 mb-6 text-left space-y-4"
            style={{ background: "oklch(0.22 0.03 60)", border: "1px solid oklch(0.32 0.04 60)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}
            >
              What Happens Next
            </p>
            {[
              { icon: <Phone size={16} />, text: "Connor calls or texts you — usually within 1 hour" },
              { icon: <Clock size={16} />, text: "Quick 5-minute call to confirm a few property details" },
              { icon: <Star size={16} />, text: "Written cash offer delivered — no obligation, no pressure" },
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
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base mb-3 transition-all hover:opacity-90"
            style={{
              background: "oklch(0.55 0.13 42)",
              color: "white",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            <Phone size={18} />
            Don't Want to Wait? Call Now — {PHONE}
          </a>
          <p className="text-xs mb-4" style={{ color: "oklch(0.50 0.03 60)", fontFamily: "'DM Mono', monospace" }}>
            By submitting, you consent to receive calls &amp; texts from Connor Morris / Alder Heritage Homes.
          </p>

          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm underline mb-0"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.60 0.04 80)" }}
          >
            Back to home <ArrowRight size={14} />
          </Link>
        </div>

        {/* Google Review Ask */}
        <div
          className="w-full max-w-lg mt-6 rounded-2xl p-6 text-center"
          style={{
            background: "oklch(0.16 0.03 60)",
            border: "1px solid oklch(0.28 0.04 60)",
          }}
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="oklch(0.78 0.18 75)" style={{ color: "oklch(0.78 0.18 75)" }} />
            ))}
          </div>
          <h2
            className="text-lg font-bold mb-2"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.90 0.04 80)" }}
          >
            Had a great experience with us?
          </h2>
          <p
            className="text-sm mb-4 leading-relaxed"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.65 0.04 80)" }}
          >
            A quick Google review helps other Fresno homeowners find an honest cash buyer. It takes 30 seconds and means the world to us.
          </p>
          <a
            href="https://g.page/r/17433669692443093026/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
            style={{
              background: "oklch(0.22 0.03 60)",
              border: "1px solid oklch(0.42 0.06 80)",
              color: "oklch(0.88 0.06 80)",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            <Star size={16} fill="oklch(0.78 0.18 75)" style={{ color: "oklch(0.78 0.18 75)" }} />
            Leave a Google Review
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Referral ask */}
        <div
          className="w-full max-w-lg mt-4 rounded-2xl p-6 text-center"
          style={{
            background: "oklch(0.16 0.03 60)",
            border: "1px solid oklch(0.28 0.04 60)",
          }}
        >
          <div className="flex justify-center mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "oklch(0.28 0.05 155 / 0.3)" }}
            >
              <Users size={20} style={{ color: "oklch(0.65 0.13 155)" }} />
            </div>
          </div>
          <h2
            className="text-base font-bold mb-2"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.90 0.04 80)" }}
          >
            Know someone else who needs to sell?
          </h2>
          <p
            className="text-sm mb-4"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.65 0.04 80)" }}
          >
            We pay <strong style={{ color: "oklch(0.78 0.13 42)" }}>$500 referral fees</strong> for any closed deal you send our way. Just mention your name when they call.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Heart size={14} style={{ color: "oklch(0.65 0.18 25)" }} />
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.04 60)" }}
            >
              Family · Neighbors · Friends · Coworkers
            </span>
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-4 text-xs"
          style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.03 60)" }}
        >
          <span>Licensed CA Agent · DRE #02219124</span>
          <span>·</span>
          <span>Direct End Buyer</span>
          <span>·</span>
          <span>Not a Wholesaler</span>
          <span>·</span>
          <span>5.0 ★ · 32 Google Reviews</span>
        </div>
      </div>
    </Layout>
  );
}

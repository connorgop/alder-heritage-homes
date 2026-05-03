/* Google Ads Landing Page: ARM / Rate Adjustment
   Target keywords: "my interest rate is changing", "ARM adjusting sell house",
   "adjustable rate mortgage help Fresno", "sell house before rate resets" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function ArmRateAd() {
  return (
    <AdsLandingPage
      badge="ARM / Rate Adjustment Help · Fresno, CA"
      headline="Your Interest Rate Is About to Change. Here's Your Fastest Exit."
      subheadline="When your ARM resets, your payment can jump $800–$1,500 per month overnight. If you act before the adjustment date, you have options. If you wait, you don't."
      heroImage={HERO}
      painPoints={[
        "ARM reset coming and the new payment is unaffordable",
        "Refinancing isn't an option — rates are too high or credit won't qualify",
        "You need to sell before the adjustment hits, not after",
      ]}
      benefits={[
        "Cash offer in 24 hours — close in 3 days or your timeline",
        "We pay off your existing mortgage at closing — you keep the equity",
        "No repairs, no commissions, no showings or open houses",
        "Free independent Broker Opinion of Value — know our offer is fair",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty to you",
        "Rent-back option if you need time to find your next home",
        "If selling isn't right, we'll tell you honestly and refer you to the right people",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close in 3 days or on your timeline" },
      ]}
      urgency="Every month you wait after an ARM adjustment is a month of overpaying — and a month of equity erosion if you fall behind. Sellers who act before the reset date almost always walk away with more money and more options than those who wait."
      faqs={[
        { q: "How much notice do I have before my ARM adjusts?", a: "Federal law requires your lender to send written notice 60–120 days before your first rate adjustment. Check your loan documents for the exact date. If you're not sure, call your lender and ask for the next adjustment date and the new rate cap." },
        { q: "Can I sell if I've already missed a payment?", a: "Yes. As long as the home is worth more than you owe, you can sell and pay off the balance at closing. The earlier you act, the more options you have — but even homeowners 90+ days behind can often sell and walk away with equity." },
        { q: "What if I owe more than my home is worth?", a: "A short sale may be possible — your lender agrees to accept less than the full balance. As a licensed California agent, Connor can negotiate this directly with your lender. This is significantly better for your credit than a completed foreclosure." },
      ]}
    />
  );
}

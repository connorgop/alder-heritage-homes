/* Google Ads Landing Page: Behind on Mortgage
   Target keywords: "behind on mortgage payments Fresno", "missed mortgage payments sell house",
   "behind on house payments help California", "late mortgage sell fast" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";
export default function BehindMortgageAd() {
  return (
    <AdsLandingPage
      badge="Behind on Mortgage · Fresno & Central Valley"
      headline="Behind on Your Mortgage Payments? Act Now Before Your Options Narrow."
      subheadline="One missed payment is a problem. Three missed payments is a crisis. The difference between walking away with equity and losing everything is how fast you act."
      heroImage={HERO}
      painPoints={[
        "1–3+ missed mortgage payments and the lender is calling",
        "Worried about foreclosure and what it means for your credit",
        "You need a clean exit before the situation gets worse",
      ]}
      benefits={[
        "Close in 7 days — stop the foreclosure clock before it starts",
        "We pay off all mortgage arrears and the full balance at closing",
        "You keep any remaining equity as cash",
        "No foreclosure on your credit report if we close in time",
        "Free independent Broker Opinion of Value with every offer",
        "No repairs, no commissions, no showings",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty to you",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close in 7 days — stop the foreclosure clock" },
      ]}
      urgency="California lenders can file a Notice of Default after 90 days of missed payments. Once that's filed, you're on a 5-month clock to auction. Every day you wait reduces your options. Call today — even one missed payment is enough to start the conversation."
      ctaLabel="Get Help — Get My Cash Offer"
      faqs={[
        { q: "How many payments can I miss before I lose my options?", a: "California lenders can file a Notice of Default after 90 days. Once filed, you have roughly 5 months before auction. But the best outcomes happen before the NOD is filed. Call us after the first missed payment — not the third." },
        { q: "Will selling hurt my credit less than foreclosure?", a: "Significantly less. A completed foreclosure stays on your credit report for 7 years and drops your score 100–150 points. Selling before foreclosure completes means no foreclosure on your record — just a standard home sale." },
        { q: "What if I owe more than my home is worth?", a: "A short sale may be possible — your lender agrees to accept less than the full balance. As a licensed California agent, Connor can negotiate this directly with your lender. This is far better for your credit than a completed foreclosure." },
      ]}
    />
  );
}

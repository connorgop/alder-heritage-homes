/* Google Ads Landing Page: Foreclosure / Stop Foreclosure
   Target keywords: "stop foreclosure Fresno", "sell house before foreclosure",
   "foreclosure help Fresno CA", "notice of default sell house fast" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

export default function ForeclosureAd() {
  return (
    <AdsLandingPage
      badge="Stop Foreclosure · Fresno & Central Valley"
      headline="Facing Foreclosure in Fresno? You Can Still Stop It — Here's How."
      subheadline="Even with a Notice of Default or a Trustee Sale date on the calendar, you likely have more time and more options than you think. The key is acting now."
      heroImage={HERO}
      painPoints={[
        "Received a Notice of Default or Notice of Trustee Sale",
        "Auction date is approaching and you don't know what to do",
        "You want to stop the foreclosure and protect your credit",
      ]}
      benefits={[
        "We can close in 7 days — well before most auction dates",
        "We pay off your full mortgage balance at closing — foreclosure stops completely",
        "No foreclosure on your credit report if we close before the auction",
        "Free independent Broker Opinion of Value with every offer",
        "No repairs, no commissions, no showings",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty to you",
        "Short sale coordination if you owe more than the home is worth",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close in 7 days — before most auction dates" },
      ]}
      urgency="California's non-judicial foreclosure process moves fast. From Notice of Default to auction can be as little as 5 months. Every day you wait reduces your options. Call today — even if the auction date is weeks away, there is likely still time."
      ctaLabel="Stop My Foreclosure — Get an Offer"
      faqs={[
        { q: "How long do I have before the auction?", a: "From a Notice of Default, you typically have 3 months before a Notice of Trustee Sale can be issued, then 21 days before the auction. Total time from first missed payment to auction is usually 5–9 months — but don't wait. Call us immediately." },
        { q: "What if the auction date is only weeks away?", a: "Call us today. We can often close in 7 days. As long as the auction hasn't happened, there is likely still time to sell and stop the foreclosure. Every hour matters at this stage." },
        { q: "What if I owe more than my home is worth?", a: "A short sale may be possible — your lender agrees to accept less than the full balance. As a licensed California agent, Connor can negotiate this directly with your lender. A short sale is significantly better for your credit than a completed foreclosure." },
      ]}
    />
  );
}

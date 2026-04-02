/* Google Ads Landing Page: Divorce Home Sale
   Target keywords: "sell house during divorce Fresno", "divorce sell home fast California",
   "sell marital home cash buyer", "divorce real estate Fresno" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
export default function DivorceAd() {
  return (
    <AdsLandingPage
      badge="Divorce Home Sale · Fresno & Central Valley"
      headline="Selling Your Home During a Divorce? We Make It Fast and Clean."
      subheadline="Divorce is hard enough. The home sale doesn't have to add to the stress. We close fast, split the proceeds cleanly, and work with both parties and their attorneys."
      heroImage={HERO}
      painPoints={[
        "You and your spouse need to sell the home as part of the divorce settlement",
        "A traditional listing would take months you don't have",
        "You need a clean, documented transaction that satisfies both parties and the court",
      ]}
      benefits={[
        "Close in 5–7 days — or on the timeline your attorneys need",
        "We work with both parties and their legal counsel",
        "Proceeds split at closing per your settlement agreement",
        "No repairs, no showings, no months of co-managing a listing",
        "Free independent Broker Opinion of Value — fair price, no disputes",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty",
        "Rent-back option if one party needs time to find housing",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close on your attorneys' timeline — 5 to 90 days" },
      ]}
      urgency="Every month the home sits unsold is a month both parties are tied to each other financially. A fast, clean sale frees both of you to move forward. We've helped dozens of Fresno families close this chapter quickly and fairly."
      ctaLabel="Get a Fair Offer — Close Fast"
      faqs={[
        { q: "What if my spouse and I can't agree on a price?", a: "Our free independent Broker Opinion of Value gives both parties an objective third-party valuation. This often resolves pricing disputes because neither side can argue the number is biased." },
        { q: "Can you work with our attorneys?", a: "Absolutely. We regularly coordinate with divorce attorneys to ensure the transaction meets court requirements and that proceeds are distributed correctly at closing." },
        { q: "What if one of us wants to stay in the home?", a: "A rent-back arrangement is possible — one party sells their interest, and the other continues to live there as a tenant. We can structure creative solutions that work for both parties." },
      ]}
    />
  );
}

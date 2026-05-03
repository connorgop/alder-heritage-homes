/* Google Ads Landing Page: Can't Afford My Home / Financial Hardship
   Target keywords: "can't afford my house payment", "house payment too high",
   "sell house financial hardship Fresno", "behind on mortgage sell fast" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

export default function CantAffordAd() {
  return (
    <AdsLandingPage
      badge="Financial Hardship Help · Fresno & Central Valley"
      headline="Can't Afford Your Home Anymore? You Have More Options Than You Think."
      subheadline="Lost a job. Medical bills. Divorce. A payment that's just grown beyond your means. Whatever brought you here — there is a path forward that doesn't require losing everything."
      heroImage={HERO}
      painPoints={[
        "Monthly payment is no longer manageable — and it's getting worse",
        "Bad credit or missed payments making refinancing impossible",
        "You need a clean exit fast, without the stress of a traditional sale",
      ]}
      benefits={[
        "Cash offer in 24 hours — close in 3 days or your timeline",
        "Bad credit is not a problem — equity is what matters",
        "We pay off your mortgage and any liens at closing",
        "Free independent Broker Opinion of Value — know our offer is fair",
        "No repairs, no commissions, no showings",
        "Rent-back option available if you need time to transition",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty to you",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close in 3 days or on your timeline" },
      ]}
      urgency="Every missed payment damages your credit and reduces your options. Homeowners who call before they've fallen behind almost always walk away with more equity and more choices. The sooner you act, the more you keep."
      faqs={[
        { q: "Does my credit score affect whether I can sell?", a: "No. Your credit score does not affect your ability to sell your home. The mortgage is paid off from the sale proceeds at closing. What matters is whether the home is worth more than you owe." },
        { q: "What if I've already missed payments?", a: "You can still sell. As long as the home hasn't gone to auction, you have time. Even homeowners 90+ days behind can often sell, pay off the arrears at closing, and walk away with equity intact." },
        { q: "How do I know your offer is fair?", a: "Every offer comes with a free independent Broker Opinion of Value from a Fresno broker with 1,850+ closed transactions. You see exactly what the home is worth before you decide anything. No other cash buyer in the Central Valley does this." },
      ]}
    />
  );
}

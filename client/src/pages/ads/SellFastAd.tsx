/* Google Ads Landing Page: Sell House Fast Fresno
   Target keywords: "sell my house fast Fresno", "sell house fast cash Fresno CA",
   "we buy houses Fresno", "cash home buyer Fresno" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
export default function SellFastAd() {
  return (
    <AdsLandingPage
      badge="Sell My House Fast · Fresno & Central Valley"
      headline="Sell Your Fresno Home for Cash — Close in 5–7 Days."
      subheadline="No repairs. No commissions. No months of showings. Just a fair cash offer from an actual buyer — not a wholesaler — who closes on your timeline."
      heroImage={HERO}
      painPoints={[
        "Need to sell fast — relocation, life change, or just done waiting",
        "Don't want to deal with repairs, showings, or a 60-day escrow",
        "Want to know the offer is fair before you commit to anything",
      ]}
      benefits={[
        "Cash offer in 24 hours — close in 3 days or your timeline",
        "We are the actual buyer — not a wholesaler, not a middleman",
        "Free independent Broker Opinion of Value — know our offer is fair",
        "No repairs, no cleaning, no commissions",
        "Any condition, any situation — foreclosure, probate, divorce, inherited",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty to you",
        "Rent-back option if you need time after closing",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close in 3 days or on your timeline" },
      ]}
      urgency="Most 'we buy houses' companies in Fresno are wholesalers — they lock you into a contract and try to sell it to a real investor. Connor Morris is the actual buyer. His name is on the contract. He closes with his own capital."
      ctaLabel="Get My Cash Offer Today"
      faqs={[
        { q: "How do I know your offer is fair?", a: "Every offer comes with a free independent Broker Opinion of Value from a Fresno broker with 1,850+ closed transactions. You see exactly what your home is worth before you decide anything. No other cash buyer in the Central Valley offers this." },
        { q: "How is this different from other 'we buy houses' companies?", a: "Most companies advertising 'we buy houses' in Fresno are wholesalers — they have no capital and plan to sell your contract to a real investor. Connor Morris is a licensed CA agent who buys with his own capital. His name is on the contract. No inspection period. No 'and/or Assignee' language." },
        { q: "What if I need more time after closing?", a: "A rent-back arrangement lets you sell the home and continue living there as a tenant for a period after closing. This gives you the cash from the sale while you find your next home." },
      ]}
    />
  );
}

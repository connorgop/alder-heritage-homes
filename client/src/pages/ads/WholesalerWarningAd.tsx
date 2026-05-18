/* Google Ads Landing Page: Wholesaler Warning / Real Buyer
   Target keywords: "real cash home buyer Fresno", "avoid wholesaler sell house",
   "legitimate cash buyer Fresno CA", "we buy houses no wholesaling" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";
export default function WholesalerWarningAd() {
  return (
    <AdsLandingPage
      badge="Real Buyer · Not a Wholesaler · Fresno, CA"
      headline="Most 'Cash Buyers' in Fresno Aren't Buying. Here's the Difference."
      subheadline="Wholesalers lock you into a contract, then try to sell it to a real investor for more than they offered you. They will look you in the eye and tell you they are the buyer. They are not. Connor Morris is."
      heroImage={HERO}
      painPoints={[
        "Tired of 'cash buyers' who disappear during the inspection period",
        "Worried the contract says 'and/or Assignee' — meaning anyone could end up owning your home",
        "You want to deal with the actual buyer, not a middleman",
      ]}
      benefits={[
        "Connor Morris is the actual buyer — his name is on the contract",
        "No inspection period — real buyers don't need one",
        "No 'and/or Assignee' language — no contract flipping",
        "Free independent Broker Opinion of Value — know our offer is fair",
        "Licensed CA Agent (DRE #02219124) — legal fiduciary duty to you",
        "Close in 3 days with his own capital",
        "If we can't agree on price, Connor refers you to the real buyers he trusts",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "Free independent Broker Opinion of Value with every offer" },
        { icon: <Clock size={20} />, text: "Close in 3 days — no inspection period games" },
      ]}
      urgency="California has not yet passed laws requiring wholesalers to disclose that they are not the end buyer. Arizona, Illinois, and other states have. Until California catches up, you need to know the red flags. The most important: if the contract says 'and/or Assignee,' you are dealing with a wholesaler."
      ctaLabel="Talk to the Actual Buyer"
      faqs={[
        { q: "How do I know if I'm talking to a wholesaler?", a: "Three red flags: (1) They need an inspection period. (2) The contract says 'LLC Name and/or Assignee.' (3) The owner has a YouTube channel or Instagram about real estate investing. A real buyer has their own capital, doesn't need an inspection period, and their name — not an assignee clause — is on the contract." },
        { q: "What if I already signed a contract with a wholesaler?", a: "Read your contract carefully. Most wholesale contracts have an inspection period during which the wholesaler can cancel. If you're still in that window, you may be able to cancel and start over. Call us — Connor can review your situation." },
        { q: "Why does Connor include a free Broker Opinion of Value?", a: "Because it's the right thing to do. A free independent valuation from a broker with 1,850+ transactions means you know our offer is fair before you sign anything. No other cash buyer in the Central Valley does this." },
      ]}
    />
  );
}

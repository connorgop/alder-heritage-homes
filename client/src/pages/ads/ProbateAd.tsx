/* Google Ads Landing Page: Probate / Inherited Home
   Target keywords: "sell inherited house Fresno", "probate home sale Fresno CA",
   "sell house in probate California", "inherited property cash buyer" */
import AdsLandingPage from "@/components/AdsLandingPage";
import { Shield, Clock, Award } from "lucide-react";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp";

export default function ProbateAd() {
  return (
    <AdsLandingPage
      badge="Probate & Inherited Homes · Fresno & Central Valley"
      headline="Inherited a Home in Fresno? We Make the Probate Process Simple."
      subheadline="You're dealing with grief, family dynamics, and a legal process you've never navigated before. We've helped dozens of Fresno families through probate — and we can help you too."
      heroImage={HERO}
      painPoints={[
        "Inherited a home and don't know what to do with it",
        "Probate is open (or needs to be opened) and the process feels overwhelming",
        "The property needs repairs, has liens, or family members can't agree",
      ]}
      benefits={[
        "We work with probate attorneys and can start before you're even appointed",
        "We buy in any condition — no repairs, no cleanout required",
        "We handle liens, back taxes, and complex title issues",
        "Cash offer in 24 hours — close on probate court's timeline",
        "Free independent Broker Opinion of Value with every offer",
        "No commissions, no showings, no open houses",
        "Licensed CA Agent (DRE #02219124) — 100+ probate transactions",
      ]}
      trustPoints={[
        { icon: <Shield size={20} />, text: "Licensed CA Real Estate Agent · DRE #02219124" },
        { icon: <Award size={20} />, text: "100+ probate & distressed property transactions" },
        { icon: <Clock size={20} />, text: "We work on the court's timeline — no pressure" },
      ]}
      urgency="Vacant probate properties cost money every month — property taxes, insurance, maintenance, and the risk of vandalism or squatters. The sooner you have a plan, the sooner you stop the bleeding. We can start the conversation before probate is even open."
      ctaLabel="Get Help With My Inherited Home"
      faqs={[
        { q: "Do I need to wait for probate to close before selling?", a: "Not necessarily. With court confirmation, you can often sell during the probate process. We work with probate attorneys and can help you understand your specific timeline. In some cases, we can start the process before you're even formally appointed as executor." },
        { q: "The home needs a lot of work. Does that matter?", a: "Not to us. We buy in any condition — hoarder houses, fire damage, deferred maintenance, full cleanout needed. You don't spend a dollar on repairs or cleaning. We handle everything after closing." },
        { q: "What if there are multiple heirs who don't agree?", a: "This is common and we've navigated it many times. Connor can work with all parties and their attorneys to structure a sale that works for everyone. The key is getting all parties to the table early." },
      ]}
    />
  );
}

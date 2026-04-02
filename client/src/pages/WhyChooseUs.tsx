/* ============================================================
   WHY CHOOSE US — Anti-Wholesaler Comparison Page
   Alder Heritage Homes
   Target keywords: "ethical cash home buyer Fresno",
   "cash home buyer vs wholesaler", "how to avoid wholesalers Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  CheckCircle2, XCircle, Phone, ArrowRight, Shield,
  Award, Users, FileText, AlertTriangle, Star
} from "lucide-react";

const PHONE = "(559) 281-8016";
const VIDEO_REALTORS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/Realtorsv12_2fbd7b05.MP4";
const PHONE_HREF = "tel:5592818016";

const warningSignsData = [
  {
    warning: "They make a high offer, then drop it right before closing",
    explanation: "This is called a 'price reduction at closing' — a common wholesaler tactic. They get you into escrow when you're already committed to moving, then reduce the price by $10,000–$20,000 knowing you have no choice but to accept.",
  },
  {
    warning: "They can't tell you who the actual buyer is",
    explanation: "If the person making you an offer isn't the one closing on your home, you're dealing with a wholesaler. They're selling your contract to a third-party investor — and pocketing the difference.",
  },
  {
    warning: "They're not a licensed real estate agent",
    explanation: "Licensed agents have a legal fiduciary duty to act in your best interest. Unlicensed investors have no such obligation. Always ask for a DRE license number.",
  },
  {
    warning: "They don't offer any independent valuation of your home",
    explanation: "If the only number you ever see is their offer, you have no way to know if it's fair. A trustworthy buyer welcomes independent verification.",
  },
  {
    warning: "They pressure you to sign quickly",
    explanation: "Urgency is a sales tactic. A legitimate buyer gives you time to review the offer, consult with family, and make an informed decision.",
  },
  {
    warning: "They advertise on bandit signs and send unsolicited mail",
    explanation: "Mass marketing to distressed homeowners is a volume game. These companies aren't interested in your specific situation — they're interested in getting as many contracts signed as possible.",
  },
];

const comparisonData = [
  { feature: "Licensed California Real Estate Agent", alder: true, typical: false },
  { feature: "Independent Broker Opinion of Value included", alder: true, typical: false },
  { feature: "Will refer you to a listing agent if that's better for you", alder: true, typical: false },
  { feature: "Offer is the same at closing — no last-minute reductions", alder: true, typical: false },
  { feature: "Connor is the actual buyer — no mystery third party", alder: true, typical: false },
  { feature: "100+ probate & distressed property transactions", alder: true, typical: false },
  { feature: "Fresno-native, local market expertise", alder: true, typical: false },
  { feature: "Matches or beats any competing cash offer", alder: true, typical: false },
  { feature: "Transparent about how offer is calculated", alder: true, typical: false },
  { feature: "Protects you from other bad actors in the market", alder: true, typical: false },
];

export default function WhyChooseUs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.55 0.13 42) 0%, transparent 60%)" }} />
        <div className="container relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Know Who You're Dealing With
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
            Not All Cash Buyers Are the Same. Here's What to Look For.
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
            The Fresno market has no shortage of people who want to buy your house. Some are legitimate. Some are not. Before you sign anything, understand the difference — and what makes Alder Heritage Homes different from the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* The Broker Opinion Section — Core Differentiator */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} style={{ color: "oklch(0.28 0.05 155)" }} />
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace" }}>
                Our Core Commitment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              You Get an Independent Broker Opinion Before You Decide Anything
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Connor is a licensed California real estate agent (DRE #02219124). He <em>could</em> list your home on the MLS — but he won't, because buying and listing the same property is a conflict of interest he refuses to participate in.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Every property plan Connor sends includes a <strong>Broker Opinion of Value (BOV)</strong> from a completely independent Fresno-based broker — someone with 1,800+ completed transactions over a 25-year career who has no stake in whether you accept the cash offer or not.
                </p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.28 0.05 155 / 0.3)", boxShadow: "0 4px 24px oklch(0.28 0.05 155 / 0.08)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} style={{ color: "oklch(0.28 0.05 155)" }} />
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What's in Your Property Plan</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Connor's written cash offer",
                    "Independent Broker Opinion of Value (BOV)",
                    "Side-by-side comparison: cash sale vs. listing",
                    "Estimated net proceeds for each path",
                    "Honest recommendation for your situation",
                    "No pressure, no deadline to respond",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.28 0.05 155)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "1px solid oklch(0.55 0.13 42 / 0.2)" }}>
              <p className="text-base font-medium" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <strong style={{ color: "oklch(0.22 0.01 60)" }}>The bottom line:</strong> No other cash buyer in the Central Valley does this. Most of them are hoping you don't know what your home is worth. Connor makes sure you do — and if a traditional listing is the better path, he'll tell you honestly and connect you with the right person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison table */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Alder Heritage Homes vs. The Typical Cash Buyer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Not every "we buy houses" company operates the same way. Here's an honest comparison.
            </p>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl" style={{ border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 8px 32px oklch(0.22 0.01 60 / 0.06)" }}>
            <div className="grid grid-cols-3" style={{ background: "oklch(0.22 0.01 60)" }}>
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center">
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-bold" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Lora', serif" }}>Typical Cash Buyer</div>
              </div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 items-center" style={{ background: i % 2 === 0 ? "oklch(0.97 0.015 85)" : "white", borderBottom: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="p-4 text-sm font-medium" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {row.feature}
                </div>
                <div className="p-4 flex justify-center">
                  {row.alder
                    ? <CheckCircle2 size={22} style={{ color: "oklch(0.50 0.15 155)" }} />
                    : <XCircle size={22} style={{ color: "oklch(0.55 0.18 25)" }} />}
                </div>
                <div className="p-4 flex justify-center">
                  {row.typical
                    ? <CheckCircle2 size={22} style={{ color: "oklch(0.50 0.15 155)" }} />
                    : <XCircle size={22} style={{ color: "oklch(0.55 0.18 25)" }} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video: Why Not Just List With an Agent? */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  Hear It From Connor
                </span>
                <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.3 }}>
                  Why Selling to a Cash Buyer Might Beat Listing With an Agent
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  There are situations where listing makes sense — and Connor will tell you honestly if that's the case. But for many distressed sellers, the math works out differently than you'd expect. Watch Connor explain the real comparison.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                  <Shield size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                  <p className="text-sm" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    No pressure. No sales tactics. Just an honest breakdown of your options.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px oklch(0 0 0 / 0.4)" }}>
                <video
                  controls
                  preload="metadata"
                  className="w-full block"
                  style={{ borderRadius: "1rem" }}
                  aria-label="Connor explains why selling to a cash buyer may beat listing with an agent"
                >
                  <source src={VIDEO_REALTORS} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle size={28} style={{ color: "oklch(0.55 0.13 42)" }} />
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                Protect Yourself
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              6 Warning Signs You're Dealing With a Predatory Buyer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The Fresno market has bad actors. Here's how to spot them before you sign anything.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {warningSignsData.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.04)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {item.warning}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-10" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Why Fresno Homeowners Trust Connor
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Award size={32} />, stat: "100+", label: "Probate & distressed sales completed in the Central Valley" },
                { icon: <Users size={32} />, stat: "25 yrs", label: "Partner broker's experience — 1,800+ transactions" },
                { icon: <Star size={32} />, stat: "DRE #02219124", label: "Licensed California real estate agent" },
              ].map((item) => (
                <div key={item.stat} className="text-center p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex justify-center mb-3" style={{ color: "oklch(0.55 0.13 42)" }}>
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {item.stat}
                  </div>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Work With Someone You Can Actually Trust?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Get a cash offer, an independent broker opinion, and an honest conversation about your best options — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ============================================================
   DON'T GET WHOLESALED — Consumer Protection Page
   Alder Heritage Homes
   Target keywords: "wholesaler vs real buyer Fresno", "how to avoid wholesalers",
   "cash buyer inspection period scam", "LLC assignee wholesaler",
   "Fresno real estate wholesaler warning"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  AlertTriangle, CheckCircle2, XCircle, Phone, ArrowRight,
  Shield, FileText, Search, Eye, Gavel
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

const redFlags = [
  {
    icon: Search,
    flag: "They have an inspection period",
    what: "What it really means",
    explanation:
      "A real buyer does not need an inspection period. They already know what they're paying for. An inspection period is a wholesaler's escape hatch — it gives them time to shop your contract to other investors. If they can't find a buyer willing to pay more than they offered you, they'll cancel during the inspection period and walk away. You've wasted weeks and lost leverage.",
    verdict: "Real buyers close. Wholesalers shop.",
  },
  {
    icon: FileText,
    flag: 'Their contract says "LLC Name and/or Assignee"',
    what: "What it really means",
    explanation:
      'If the buyer line on your purchase contract reads "XYZ Investments LLC and/or Assignee" — stop. The words "and/or Assignee" are the legal mechanism that allows a wholesaler to sell your contract to a third party. They are not buying your home. They are buying the right to sell your home to someone else, and pocketing the difference. The actual buyer could be anyone. You have no idea who will end up owning your home or whether they will close.',
    verdict: "The real buyer's name is on the contract. Period.",
  },
  {
    icon: Eye,
    flag: "The owner is an Instagram guru or real estate coach",
    what: "What it really means",
    explanation:
      "If the person making you an offer has a YouTube channel about 'how to flip houses with no money down,' runs a coaching program, or posts lifestyle content about real estate investing — they are almost certainly not the buyer. They are a wholesaler who learned their trade from another wholesaler. Their business model depends on finding distressed sellers, locking up contracts at low prices, and selling those contracts to real investors. You are the product.",
    verdict: "Coaches teach. Real buyers buy.",
  },
  {
    icon: AlertTriangle,
    flag: "They tell you they are the buyer — but can't prove it",
    what: "What it really means",
    explanation:
      "Every wholesaler in Fresno will look you in the eye and tell you they are the one buying your home. They are trained to say this. Ask them to show you proof of funds in their personal or company name — not a transactional funding letter, not a line of credit, not a partner's account. A real buyer has their own capital. If they hesitate, deflect, or show you a letter from a hard money lender, you are talking to a wholesaler.",
    verdict: "Ask for proof of funds. Watch what happens.",
  },
  {
    icon: XCircle,
    flag: "They can't name the title company or escrow officer",
    what: "What it really means",
    explanation:
      "A real buyer has a preferred title company they work with regularly. They can give you a name and phone number immediately. A wholesaler often doesn't know yet because they haven't found the real buyer — and the real buyer will choose the title company. If they stall, give you a vague answer, or say 'we'll figure that out later,' they are not the buyer.",
    verdict: "Real buyers have a title company. Wholesalers don't.",
  },
  {
    icon: Gavel,
    flag: "California law hasn't caught up yet — but other states have",
    what: "What the law says",
    explanation:
      "Arizona, Illinois, Oklahoma, Georgia, and several other states have passed laws specifically regulating or restricting wholesale real estate transactions — requiring disclosure, limiting assignment fees, or banning the practice outright in certain forms. California is behind. There is currently no state law requiring wholesalers to disclose that they are not the end buyer. That means you, the seller, have to protect yourself. No one else will.",
    verdict: "California has no protection. You need to know the red flags.",
  },
];

const alderDifference = [
  "Connor Alder is the actual buyer — his name is on every contract",
  "No inspection period — we close on the agreed date",
  "No 'and/or Assignee' language — ever",
  "Licensed CA Real Estate Agent (DRE #02219124) with legal fiduciary duty",
  "Proof of funds available immediately upon request",
  "Free independent Broker Opinion of Value so you know our offer is fair",
  "If we can't agree on price, we'll connect you with trusted real end buyers we know personally",
  "We will never lie to your face about who is buying your home",
];

export default function DontGetWholesaled() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.18 0.02 25)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Don't get wholesaled" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 25 / 0.97) 0%, oklch(0.22 0.01 60 / 0.9) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.18 25)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <AlertTriangle size={12} /> Consumer Warning
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              Don't Get Wholesaled.<br />
              <span style={{ color: "oklch(0.75 0.12 42)" }}>Know Who Is Actually Buying Your Home.</span>
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Most of my competitors in Fresno have no capital. They are not buying your home. They are locking you into a contract and trying to sell it to a real investor — someone like me — for more money than they offered you. They will look you in the eye and tell you they are the buyer. They are not.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              I know only a small handful of real cash buyers in Fresno. If we can't agree on a price, I will personally connect you with the ones I trust. None of them will rank on Google — because they don't need to. They have deal flow from people like me. The ones who <em>do</em> rank are often the ones you need to be most careful about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Talk to a Real Buyer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The core truth */}
      <section className="py-16" style={{ background: "oklch(0.55 0.18 25)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl font-bold text-white leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              "They will lie directly to your face and tell you they are the ones buying your home. They never are. I only know a small handful of real buyers in Fresno — and none of them are ranking on Google."
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.90 0.05 42)", fontFamily: "'DM Mono', monospace" }}>
              — Connor Alder, Licensed CA Agent DRE #02219124
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.18 25 / 0.12)", color: "oklch(0.40 0.12 25)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The Red Flags
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              6 Signs You're Talking to a Wholesaler, Not a Buyer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every single one of these is a tell. If you see any of them, ask hard questions before you sign anything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {redFlags.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.06)" }}>
                  <div className="p-5" style={{ background: "oklch(0.55 0.18 25 / 0.06)", borderBottom: "1px solid oklch(0.55 0.18 25 / 0.15)" }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.18 25)" }}>
                        <Icon size={16} color="white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "oklch(0.55 0.18 25)", fontFamily: "'DM Mono', monospace" }}>
                          Red Flag #{i + 1}
                        </div>
                        <h3 className="font-bold text-base leading-snug" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                          {item.flag}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                      {item.what}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {item.explanation}
                    </p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "oklch(0.22 0.01 60 / 0.06)" }}>
                      <XCircle size={14} style={{ color: "oklch(0.55 0.18 25)", flexShrink: 0 }} />
                      <p className="text-xs font-bold italic" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {item.verdict}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Law Section */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Gavel size={28} style={{ color: "oklch(0.75 0.12 42)" }} />
              <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
                What the Law Says (And Doesn't Say)
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <h3 className="font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>States That Have Acted</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Arizona, Illinois, Oklahoma, Georgia, and others have passed laws requiring wholesalers to disclose they are not the end buyer, limiting assignment fees, or restricting the practice outright. Sellers in those states have legal protection.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Arizona", "Illinois", "Oklahoma", "Georgia", "Kentucky"].map(s => (
                    <span key={s} className="px-2 py-1 rounded text-xs font-bold" style={{ background: "oklch(0.28 0.05 155 / 0.3)", color: "oklch(0.75 0.08 155)", fontFamily: "'DM Mono', monospace" }}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.55 0.18 25 / 0.15)", border: "1px solid oklch(0.55 0.18 25 / 0.3)" }}>
                <h3 className="font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>California Is Behind</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  California currently has no specific law requiring wholesalers to disclose that they are not the end buyer. There is no cap on assignment fees. There is no required disclosure that your contract may be sold to a third party. You are on your own — which is exactly why knowing these red flags matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Alder is Different */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={26} style={{ color: "oklch(0.28 0.05 155)" }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace" }}>
                    The Alder Standard
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  What a Real Buyer Looks Like
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  I am the buyer. My name — Connor Alder — is on every contract. I have my own capital. I do not need an inspection period to find someone else to buy your home. I do not use "and/or Assignee" language. I do not have a coaching program or an Instagram page about real estate investing.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  And if we can't agree on a price — which happens — I will personally introduce you to the handful of real end buyers I know and trust in Fresno. Not a list. A personal introduction to people I have done business with and vouch for.
                </p>
              </div>
              <div className="space-y-3">
                {alderDifference.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                    <p className="text-sm font-medium" style={{ color: "oklch(0.28 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)", borderTop: "2px solid oklch(0.55 0.13 42 / 0.2)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Get an Offer From the Actual Buyer
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No inspection period. No LLC and/or Assignee. No Instagram guru. Just Connor, a licensed California agent with his own capital, ready to make you a fair and transparent offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42)", color: "oklch(0.35 0.08 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Also see:{" "}
            <Link href="/dont-hire-friend-realtor" className="underline" style={{ color: "oklch(0.40 0.08 155)" }}>
              Why You Shouldn't Hire Your Friend or Family Member Who Is a Realtor
            </Link>
            {" "}·{" "}
            <Link href="/why-choose-us" className="underline" style={{ color: "oklch(0.40 0.08 155)" }}>
              Why We're Different
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}

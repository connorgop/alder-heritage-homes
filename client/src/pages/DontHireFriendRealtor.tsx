/* ============================================================
   DON'T HIRE YOUR FRIEND OR FAMILY REALTOR — Consumer Education Page
   Alder Heritage Homes
   Target keywords: "should I hire friend as realtor", "part time realtor Fresno",
   "hiring family member real estate agent", "experienced realtor Fresno",
   "real estate attorney required", "top realtor Fresno network"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import {
  AlertTriangle, CheckCircle2, XCircle, Phone, ArrowRight,
  Shield, Users, Award, Globe, Briefcase, Clock
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

const partTimeProblems = [
  {
    icon: Clock,
    problem: "They can't be available when it matters",
    detail:
      "Real estate moves fast. When a buyer submits an offer with a 24-hour response window, or a lender needs a document by 3pm, or the other agent calls with a counter — your part-time realtor is at their day job. Deals die in the gaps between availability. A full-time professional answers the phone.",
  },
  {
    icon: Briefcase,
    problem: "They don't know what they don't know",
    detail:
      "Real estate law, disclosure requirements, contract contingencies, title issues, lien resolution, probate complications — these are not things you learn from a weekend licensing course. They are things you learn from doing 50, 100, 500 transactions. A part-timer thinks they can handle it. An expert knows when to call an attorney.",
  },
  {
    icon: Globe,
    problem: "In Canada, part-time real estate is illegal",
    detail:
      "In Canada, you cannot hold a real estate license and have another job or income source. The profession is treated with the same seriousness as law or medicine. You are either a full-time real estate professional or you are not licensed at all. The US hasn't caught up — but the logic is sound. Your home is likely your largest financial asset. It deserves a full-time professional.",
  },
  {
    icon: AlertTriangle,
    problem: "In many US states, an attorney must be involved",
    detail:
      "In states like New York, Massachusetts, Georgia, South Carolina, and others, a licensed real estate attorney must be present at closing — or must review the contract. Why? Because real estate transactions are complex legal events. A part-time agent in California who has never worked a transaction with attorney involvement has no idea how much they don't know about protecting you.",
  },
  {
    icon: XCircle,
    problem: "The relationship makes it impossible to be honest",
    detail:
      "A good agent tells you hard truths: your price is too high, the inspection revealed serious problems, the buyer's offer is the best you'll get. Your friend or cousin can't say those things to you without it becoming personal. And you can't hear them the same way from someone you love. The professional distance that makes an agent effective is gone the moment it's someone you see at Thanksgiving.",
  },
  {
    icon: Users,
    problem: "When it goes wrong, Christmas gets awkward",
    detail:
      "You know what's more awkward than not hiring your family member? Hiring them, having the deal fall apart, losing $20,000 in a bad negotiation, or discovering a disclosure issue six months after closing — and then seeing them at every family gathering for the rest of your life. The money and the relationship are both at risk.",
  },
];

const networkCredentials = [
  {
    label: "Connor's Broker",
    detail: "1,850+ completed transactions over a 25-year career in the Fresno market. Not a coach. Not a part-timer. A full-time professional with more deals closed than most agents will see in three lifetimes.",
  },
  {
    label: "Top-Performing Agents in the Network",
    detail: "When Connor refers you to a listing agent, it's not a random name from the MLS. It's someone he has worked alongside, whose work ethic and results he can personally vouch for. Top performers — for a reason.",
  },
  {
    label: "Real Estate Attorneys on Call",
    detail: "For probate, complex title issues, liens, or any transaction that warrants legal review, Connor's network includes attorneys who specialize in California real estate. You are protected.",
  },
  {
    label: "Cash Buyers Connor Trusts",
    detail: "If Connor can't agree on price with you directly, he will introduce you to the small handful of real end buyers he knows personally in Fresno — not a list, a personal introduction to people he has done business with and trusts.",
  },
];

const questions = [
  {
    q: "What if my friend is actually a great realtor?",
    a: "Then they'll understand completely when you tell them you need to keep the relationship and the transaction separate. A truly great realtor will respect that. If they're offended, that tells you something about their professionalism.",
  },
  {
    q: "Is Connor a listing agent?",
    a: "Connor is a licensed California real estate agent (DRE #02219124), but he primarily buys homes directly. He does not list your home on the MLS — that would be a conflict of interest, and he refuses to participate in it. Instead, he provides a free independent Broker Opinion of Value and, if a traditional listing is the better path for you, connects you with a top-performing agent from his network.",
  },
  {
    q: "What if I already signed with my friend?",
    a: "Listing agreements typically have a term of 3–6 months. If you're unhappy with the results, you can often negotiate a release. Call us for a confidential conversation — we can help you understand your options without putting you in an awkward position.",
  },
  {
    q: "How do I know your network agents are actually good?",
    a: "Connor's broker has 1,850+ closed transactions over 25 years. The agents Connor refers are people he has worked alongside on real transactions — not people he met at a networking event. He will tell you exactly why he trusts each person he refers.",
  },
];

export default function DontHireFriendRealtor() {
  useSEO({
    title: "Don't Hire Your Friend or Family Member as Your Realtor",
    description: "Thinking about hiring a friend or family member to sell your Fresno home? Read this first. The risks of part-time or inexperienced agents — and what to do instead.",
    canonical: "/dont-hire-friend-realtor",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Professional real estate advice" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.97) 40%, oklch(0.22 0.01 60 / 0.7) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <Shield size={12} /> Honest Advice
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              Don't Hire Your Friend or Family Member Who Is a Realtor.
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              You want them to make money. You don't want Christmas to be awkward. Those are completely understandable reasons — and they are exactly why you shouldn't do it.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Your home is almost certainly your largest financial asset. The person you hire to sell it — or the network you access to sell it — will directly determine how much money you walk away with, how protected you are legally, and whether the process goes smoothly or falls apart. That decision deserves the same objectivity you'd bring to hiring a surgeon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Talk to Connor's Network <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-14" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl font-bold text-white leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              "In Canada, you cannot do real estate part time. You cannot have another job or role elsewhere. The profession is taken that seriously. The US hasn't caught up — but your home deserves the same standard."
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.95 0.05 85)", fontFamily: "'DM Mono', monospace" }}>
              — Connor Alder, Licensed CA Agent DRE #02219124
            </p>
          </div>
        </div>
      </section>

      {/* Why Part-Time Is a Problem */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.12)", color: "oklch(0.40 0.10 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Why It Matters
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              6 Reasons Part-Time Real Estate Is a Problem
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              This isn't about your friend being a bad person. It's about the structural reality of what part-time real estate does to your transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {partTimeProblems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.05)" }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                      <Icon size={18} style={{ color: "oklch(0.45 0.12 42)" }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                        {item.problem}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Canada / Attorney States callout */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Canada */}
            <div className="p-8 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <div className="flex items-center gap-3 mb-4">
                <Globe size={22} style={{ color: "oklch(0.75 0.12 42)" }} />
                <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Lora', serif" }}>The Canadian Standard</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                In Canada, holding a real estate license while maintaining another job or income source is prohibited. You are either a full-time real estate professional — with all the continuing education, regulatory oversight, and accountability that entails — or you are not licensed at all.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The logic is simple: your home is your largest asset. The person managing its sale should be fully committed to that profession. California allows part-time licensing. That doesn't mean you have to accept a part-time professional.
              </p>
            </div>
            {/* Attorney States */}
            <div className="p-8 rounded-2xl" style={{ background: "oklch(0.28 0.05 155 / 0.15)", border: "1px solid oklch(0.28 0.05 155 / 0.3)" }}>
              <div className="flex items-center gap-3 mb-4">
                <Award size={22} style={{ color: "oklch(0.65 0.10 155)" }} />
                <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Lora', serif" }}>Attorney-Required States</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                New York, Massachusetts, Georgia, South Carolina, Connecticut, and others require a licensed real estate attorney to be present at closing or to review the purchase contract. Why? Because real estate is a legal transaction involving one of the most significant financial events of your life.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                A part-time agent who has never worked in an attorney-required state has no frame of reference for how much legal complexity can exist in a real estate transaction. An expert knows exactly when to bring in an attorney — and has one ready.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["New York", "Massachusetts", "Georgia", "South Carolina", "Connecticut"].map(s => (
                  <span key={s} className="px-2 py-1 rounded text-xs font-bold" style={{ background: "oklch(0.28 0.05 155 / 0.3)", color: "oklch(0.75 0.08 155)", fontFamily: "'DM Mono', monospace" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connor's Network */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.28 0.05 155 / 0.1)", color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                The Alternative
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Work With Connor's Network Instead
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Whether you sell to Connor directly or need a listing agent, you get access to a network built on real results — not friendship and obligation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {networkCredentials.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "2px solid oklch(0.90 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={18} style={{ color: "oklch(0.50 0.15 155)" }} />
                    <h3 className="font-bold text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* The broker stat highlight */}
            <div className="mt-10 p-8 rounded-2xl text-center" style={{ background: "oklch(0.22 0.01 60)" }}>
              <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>1,850+</div>
              <div className="text-base font-bold mb-2" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Transactions Completed by Connor's Broker
              </div>
              <p className="text-sm max-w-lg mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Over a 25-year career in the Fresno market. That's not a credential on a wall. That's 1,850 families who trusted him with their most important financial transaction — and he delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Realtor Overpricing Caution */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid oklch(0.70 0.15 42 / 0.4)", boxShadow: "0 8px 40px oklch(0.55 0.13 42 / 0.12)" }}>
              <div className="p-6 flex items-center gap-3" style={{ background: "oklch(0.55 0.13 42)" }}>
                <AlertTriangle size={22} className="text-white flex-shrink-0" />
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Lora', serif" }}>The Overpricing Trap — A Warning Every Seller Needs to Read</span>
              </div>
              <div className="p-8" style={{ background: "white" }}>
                <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1.05rem" }}>
                  <strong>Real estate transactions in California have dropped over 40% in the past few years.</strong> Fewer deals means fewer commissions. Fewer commissions means desperate agents — and desperate agents do desperate things.
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  The most common tactic: telling you your home is worth <em>more</em> than it actually is — just to get you to sign a listing agreement. That listing agreement is a partnership. Once you sign, they have your home tied up for 3–6 months.
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Here's what happens next: your home sits on the market because it's overpriced. Days on market climb. Buyers assume something is wrong with it. Your agent asks you to cut the price — once, twice, three times. Finally, someone makes an offer. Then they order a pest inspection: <strong>$5,000.</strong> Then a home inspection: <strong>$8,000.</strong> Then they ask for a sellers credit. Then you pay <strong>5–6% in realtor commissions</strong> on top of all of it.
                </p>
                <div className="rounded-xl p-5 mb-5" style={{ background: "oklch(0.55 0.13 42 / 0.07)", border: "1px solid oklch(0.55 0.13 42 / 0.2)" }}>
                  <p className="font-bold text-base mb-1" style={{ color: "oklch(0.40 0.10 42)", fontFamily: "'Lora', serif" }}>The honest math on a $400,000 home listed at $430,000:</p>
                  <ul className="text-sm space-y-1" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <li>• Overpriced by $30K → sits 90+ days → final sale price: $390,000</li>
                    <li>• Pest report: −$5,000 credit</li>
                    <li>• Home inspection repairs: −$8,000 credit</li>
                    <li>• Realtor commissions (5%): −$19,500</li>
                    <li className="font-bold pt-1" style={{ color: "oklch(0.40 0.10 42)" }}>• Net to seller: ~$357,500 — on a home worth $400,000</li>
                  </ul>
                </div>
                <p className="text-base leading-relaxed font-semibold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If you choose to list, hire a realtor who prices at <em>fair market value</em> and has a track record of getting homes sold — not just listed. The difference between a great agent and a desperate one is $30,000–$50,000 in your pocket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Common Questions
            </h2>
            <div className="space-y-4">
              {questions.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Your Home Deserves a Full-Time Professional
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Whether you want a cash offer, a referral to a top listing agent, or just an honest conversation about your options — Connor and his network are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Free Consultation <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Also see:{" "}
            <Link href="/dont-get-wholesaled" className="underline" style={{ color: "oklch(0.65 0.10 155)" }}>
              Don't Get Wholesaled
            </Link>
            {" "}·{" "}
            <Link href="/why-choose-us" className="underline" style={{ color: "oklch(0.65 0.10 155)" }}>
              Why We're Different
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}

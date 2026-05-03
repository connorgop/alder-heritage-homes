/* ============================================================
   JUNK REMOVAL / ESTATE CLEANOUT REFERRAL PAGE — Alder Heritage Homes
   Target keywords: "junk removal before selling house Fresno",
   "estate cleanout Fresno", "trash out house Fresno",
   "clean out house before selling Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, Lightbulb, DollarSign } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function JunkRemoval() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Estate Cleanout & Junk Removal
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Need to Clean Out a House Before Selling in Fresno?
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Before you spend thousands on junk removal, read this. You may not need to clean out the house at all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Talk to Connor First <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              {/* The big insight */}
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42 / 0.3)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb size={24} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <h2 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Wait — Call Us Before You Call a Junk Removal Company
                  </h2>
                </div>
                <p className="leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Most people searching for junk removal before a home sale don't realize they have another option: sell the house as-is, with everything in it, and let the buyer handle the cleanout. That's exactly what we do. If you call us first, you may save yourself $3,000–$8,000 in cleanout costs and weeks of exhausting work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  What Does Junk Removal Actually Cost in Fresno?
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Here's what Fresno homeowners typically pay for estate cleanouts and junk removal before a home sale:
                </p>
                <div className="space-y-3">
                  {[
                    { scope: "Single room cleanout", cost: "$200–$500" },
                    { scope: "Full house cleanout (3 bed/2 bath)", cost: "$1,500–$4,000" },
                    { scope: "Estate cleanout with heavy furniture", cost: "$3,000–$8,000" },
                    { scope: "Hoarder house cleanout", cost: "$5,000–$15,000+" },
                  ].map((row) => (
                    <div key={row.scope} className="flex justify-between items-center p-4 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                      <span className="font-medium" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.scope}</span>
                      <span className="font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{row.cost}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If you sell to us, you pay $0 for cleanout. We absorb that cost and handle everything after closing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  When Does It Make Sense to Clean Out First?
                </h2>
                <p className="leading-relaxed mb-4" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Sometimes a traditional listing after a cleanout will net you more money than a cash sale — especially if the home is in otherwise good condition and you have time. Connor will be honest with you about this. Every property plan he sends includes an independent Broker Opinion of Value from a Fresno broker with 1,800+ transactions, so you can compare the cash offer against what a traditional listing might yield.
                </p>
                <p className="leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If a traditional listing is clearly the better financial path, he'll tell you — and refer you to his trusted broker partner. His goal is to be your real estate resource, not just to buy your house.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Need a Junk Removal Referral Anyway?
                </h2>
                <p className="leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If after talking with us you decide a traditional listing is the right path, we're happy to refer you to trusted, vetted junk removal and estate cleanout companies in the Fresno area. We've worked with several local operators and can connect you with someone who will treat your family's belongings with respect. Just ask.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Donatable Items: Don't Throw Away Value
                </h2>
                <p className="leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Before any cleanout, it's worth knowing that many items in an estate — furniture, appliances, clothing, tools, collectibles — have real value. Fresno has several estate sale companies, consignment shops, and donation centers (including Habitat for Humanity ReStore, which accepts building materials and appliances). A quick estate sale or auction can sometimes offset a significant portion of cleanout costs. We can point you in the right direction.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.06)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    If You Sell to Us
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Leave everything — no cleanout required",
                    "Save $3,000–$15,000 in cleanout costs",
                    "close in as few as 3 days",
                    "We pay all closing costs",
                    "No agent commissions",
                    "Cash in hand, move on",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl text-white" style={{ background: "oklch(0.28 0.05 155)" }}>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  Talk to Connor First
                </h3>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  A 10-minute conversation could save you thousands. No obligation, no pressure.
                </p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-white mb-3" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Free Cash Offer
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Related Solutions
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "Sell a Hoarder House As-Is", href: "/sell-hoarder-house" },
                    { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
                    { label: "Sell Your House Fast", href: "/sell-house-fast" },
                    { label: "Why We're Different", href: "/why-choose-us" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <ArrowRight size={12} /> {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Call Us Before You Call the Junk Removal Company
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            A 10-minute conversation could save you thousands of dollars and weeks of work.
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

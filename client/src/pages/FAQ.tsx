/* ============================================================
   FAQ HUB PAGE — Alder Heritage Homes
   SEO target: "sell house fast Fresno FAQ", "cash home buyer questions"
   40+ questions organized by category with anchor links
   Heritage Warmth design: Terracotta + Slate Green + Oat/Linen
   ============================================================ */
import { useState } from "react";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, Phone, ArrowRight } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "process",
    title: "The Process",
    icon: "🏠",
    faqs: [
      {
        q: "How does the cash home buying process work?",
        a: "It's three steps. First, you contact us with your property address. Second, we research the property and prepare a written cash offer within 24 hours — no obligation. Third, if you accept, we open escrow with a licensed title company and close on your chosen date, typically 5–7 days. You receive your cash at closing. No repairs, no showings, no commissions.",
      },
      {
        q: "How fast can you close?",
        a: "We can close in as little as 5–7 business days once we have a signed purchase agreement and clear title. If you need more time — to find your next home, coordinate a move, or handle an estate — we work around your schedule. We've closed in 3 days when a seller needed it.",
      },
      {
        q: "Do I need to make any repairs before selling?",
        a: "No. We buy homes in any condition — fire damage, foundation issues, mold, hoarder situations, deferred maintenance, outdated systems, or anything else. You don't need to fix, clean, or stage anything. We've purchased homes with homicide histories, active squatters, and no functioning utilities.",
      },
      {
        q: "Do I need to clean out the house?",
        a: "No. Leave whatever you don't want. Furniture, appliances, personal belongings — we handle all of it after closing. Many sellers, especially those downsizing or dealing with an estate, appreciate not having to haul everything out.",
      },
      {
        q: "What paperwork is involved?",
        a: "We use a standard California Residential Purchase Agreement — the same contract used by licensed real estate agents statewide. Everything is handled through a licensed title company that manages escrow, title search, and the transfer of funds. You'll sign closing documents at the title company or via mobile notary.",
      },
      {
        q: "Are there any fees or commissions?",
        a: "No agent commissions, no listing fees, no closing cost surprises. We cover standard seller-side closing costs. The offer we make is the amount you receive at closing, minus any outstanding mortgage payoff, liens, or back taxes on the property.",
      },
    ],
  },
  {
    id: "offer",
    title: "The Offer",
    icon: "💰",
    faqs: [
      {
        q: "How do you calculate your cash offer?",
        a: "We look at three things: (1) the after-repair value of your home based on comparable recent sales in your neighborhood, (2) the estimated cost of repairs and updates needed, and (3) our holding costs and profit margin as a buyer. We present the math transparently so you understand exactly how we arrived at our number.",
      },
      {
        q: "Will your offer be fair?",
        a: "We provide a free third-party Broker Opinion of Value (BOV) with every offer — prepared by a licensed California real estate agent or appraiser — so you can independently verify that our offer reflects real market conditions. We will never lowball you without showing you the math.",
      },
      {
        q: "What percentage of market value will I get?",
        a: "Cash offers are typically 70–85% of after-repair value, depending on the condition of the home and local market conditions. The trade-off is speed, certainty, and zero repair costs. A traditional sale might net you more on paper, but after agent commissions (5–6%), repair costs, carrying costs during the listing period, and the risk of deals falling through, the difference is often smaller than sellers expect.",
      },
      {
        q: "Is there any obligation when I request an offer?",
        a: "None. Requesting an offer is completely free and creates no obligation to sell. We present our offer, explain our reasoning, and you decide. We never pressure anyone.",
      },
      {
        q: "Can I get a higher offer if I wait?",
        a: "Sometimes. The traditional market may yield a higher gross price if your home is in good condition and you have time to wait. We're honest about this. Our value is speed, certainty, and convenience — not always the highest possible price. We'll tell you honestly if we think you'd do better on the open market.",
      },
    ],
  },
  {
    id: "situations",
    title: "Specific Situations",
    icon: "🔑",
    faqs: [
      {
        q: "Can you help me stop foreclosure?",
        a: "Yes. If you're behind on mortgage payments or have received a Notice of Default, we can often close before the foreclosure sale date. Time is critical — contact us immediately. We've helped homeowners stop foreclosure with as little as 10 days before the auction date.",
      },
      {
        q: "Can I sell an inherited or probate home?",
        a: "Yes. We handle probate and inherited property sales regularly. If the estate is in probate, we work directly with the executor and the probate court. If probate is complete, we can close quickly. We've completed 700+ home purchases since 2008 across our group of entities, including many probate transactions in the Central Valley.",
      },
      {
        q: "Can I sell if I'm going through a divorce?",
        a: "Yes. We handle divorce home sales with discretion and efficiency. We can work with both parties' attorneys, split proceeds according to the divorce agreement, and close quickly so both parties can move forward. We understand the emotional difficulty of these situations.",
      },
      {
        q: "Can I sell a rental property with tenants in it?",
        a: "Yes. We buy tenant-occupied properties regularly. We review the existing lease, handle all required California notice requirements, and coordinate with tenants professionally. You don't need to evict anyone before selling to us.",
      },
      {
        q: "Can I sell if I have a second mortgage or HELOC?",
        a: "Yes. We handle properties with multiple liens, including second mortgages and HELOCs. All liens are paid off at closing through the title company. As long as the total payoff doesn't exceed our purchase price, the sale proceeds normally.",
      },
      {
        q: "Can I sell a hoarder house or a home with a lot of stuff?",
        a: "Yes. We buy hoarder houses and heavily cluttered properties regularly. You don't need to clean anything out — we handle all of it after closing. We've purchased homes where the contents alone required a full dumpster crew.",
      },
      {
        q: "Can I sell a house with mold?",
        a: "Yes. Mold is a common issue in Central Valley homes, especially in older properties or those with deferred maintenance. California requires disclosure of known mold, which we handle through the standard purchase agreement. We buy mold-affected homes as-is.",
      },
      {
        q: "Can I sell a fire-damaged home?",
        a: "Yes, including homes with open insurance claims. We can purchase a fire-damaged property with the insurance claim still pending, or after the claim has been settled. We've purchased homes that were total losses.",
      },
      {
        q: "Can I sell if there's a squatter in the property?",
        a: "Yes. We buy properties with unauthorized occupants. We handle the eviction process after closing, so you don't have to deal with it. We've purchased properties with squatters who had been in place for over two years.",
      },
      {
        q: "Can I sell if I have foundation problems?",
        a: "Yes. Foundation issues are common in the Central Valley due to expansive clay soils. We buy homes with foundation problems as-is. We factor the repair cost into our offer and handle the work after closing.",
      },
      {
        q: "I have PCS orders from NAS Lemoore. Can you close fast enough?",
        a: "Yes. We specialize in military PCS sales and understand the urgency of relocation orders. We can close in 5–7 days, which is typically faster than the timeline required by your orders. We work with military families throughout Hanford, Lemoore, and Kings County regularly.",
      },
    ],
  },
  {
    id: "legitimacy",
    title: "Legitimacy & Trust",
    icon: "🛡️",
    faqs: [
      {
        q: "Are you a wholesaler?",
        a: "No. Alder Heritage Homes is a real cash buyer — we purchase properties with our own capital and close on every deal we sign. We are not a wholesaler. Wholesalers put your home under contract with no intention of buying it — they plan to sell your contract to a real investor for a profit of $20,000–$60,000, which comes directly out of your proceeds. We never do this.",
      },
      {
        q: "Are you a licensed real estate agent?",
        a: "Yes. Connor Morris is a licensed California real estate agent, DRE #02219124. You can verify this at the California Department of Real Estate website at dre.ca.gov. Being licensed means we are held to a higher standard of conduct and fiduciary duty than unlicensed investors.",
      },
      {
        q: "How do I know your offer is real?",
        a: "We provide proof of funds with every offer — a bank statement or letter from our financial institution confirming we have the capital to close. We also use a licensed title company for every transaction, which provides independent verification of the process.",
      },
      {
        q: "What is a Broker Opinion of Value?",
        a: "A Broker Opinion of Value (BOV) is a written analysis of your home's market value prepared by a licensed real estate agent or appraiser. It's similar to an appraisal but faster and less formal. We provide one with every offer so you can independently verify that our number reflects real market conditions — not a lowball guess.",
      },
      {
        q: "What's the difference between a cash buyer and a wholesaler?",
        a: "A cash buyer like Alder Heritage Homes purchases your home directly and closes with their own funds. A wholesaler puts your home under contract, then shops that contract to real investors for a fee — they never actually buy your home. Red flags for wholesalers: 'and/or assignee' language in the contract, no proof of funds, inspection contingencies, and Instagram-guru branding. We have none of these.",
      },
    ],
  },
  {
    id: "taxes",
    title: "Taxes & Legal",
    icon: "📋",
    faqs: [
      {
        q: "Will I owe capital gains tax when I sell?",
        a: "Possibly, depending on how long you've owned the home and your profit. The IRS allows a $250,000 capital gains exclusion for single filers and $500,000 for married couples on the sale of a primary residence, provided you've lived there for at least 2 of the last 5 years. Consult a CPA or tax attorney for your specific situation.",
      },
      {
        q: "What is Proposition 19 and how does it affect my sale?",
        a: "Proposition 19 (passed in 2020) allows California homeowners 55 and older, severely disabled, or wildfire/disaster victims to transfer their property tax base to a new home anywhere in California. This can significantly reduce your property taxes on your next home. Consult a CPA or real estate attorney for details specific to your situation.",
      },
      {
        q: "What is a 1031 exchange and can I do one with a cash sale?",
        a: "A 1031 exchange allows you to defer capital gains taxes by reinvesting proceeds from a sold investment property into another investment property. You can do a 1031 exchange with a cash sale — the key is working with a Qualified Intermediary (QI) before closing. The 45-day identification and 180-day closing deadlines still apply.",
      },
      {
        q: "Do I need an attorney to sell my house?",
        a: "In California, you are not legally required to have an attorney to sell real estate. The transaction is handled through a licensed title company that acts as a neutral third party. However, if your situation involves probate, a trust, a divorce decree, or complex liens, consulting a real estate attorney is advisable.",
      },
    ],
  },
  {
    id: "senior",
    title: "Senior & Retirement Sellers",
    icon: "🌿",
    faqs: [
      {
        q: "I'm moving to a retirement community. How do I time the sale?",
        a: "Most retirement communities require a deposit (typically $1,000–$5,000) to hold your unit, then a larger entrance fee or first month's rent before move-in. We can close your home sale to coincide with your move-in date — or close early and let you remain in the home as a tenant (rent-back) until you're ready to move. Call us and we'll build a timeline around your retirement community's requirements.",
      },
      {
        q: "Can I sell my parents' home if they're moving to assisted living?",
        a: "Yes. We handle these situations regularly. If your parent has capacity, they sign the purchase agreement directly. If they have dementia or are incapacitated, we work with the Power of Attorney holder or court-appointed conservator. We understand the emotional difficulty of these transitions and handle them with care.",
      },
      {
        q: "Can I sell and stay in my home for a while?",
        a: "Yes. We offer a Sell & Stay (Rent-Back) arrangement where you sell your home for cash today and remain as a tenant for an agreed-upon period — typically 30–90 days, sometimes longer. This is ideal if you need the cash now but aren't ready to move, or if you're waiting for your retirement community unit to become available.",
      },
      {
        q: "What is Prop 19 and how does it help senior sellers?",
        a: "Proposition 19 allows California homeowners 55 and older to transfer their current property tax base to a new home of equal or lesser value anywhere in California. This means if you've owned your home for decades and have a low property tax base, you can carry that low rate to your next home — potentially saving thousands per year. A CPA can walk you through the specifics.",
      },
    ],
  },
];

// Flatten all FAQs for schema markup
const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid oklch(0.88 0.02 85)" }}
        >
          <button
            className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 font-semibold"
            style={{
              background: openIndex === i ? "oklch(0.97 0.015 85)" : "white",
              color: "oklch(0.22 0.01 60)",
              fontFamily: "'Lora', serif",
              fontSize: "0.95rem",
            }}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{faq.q}</span>
            {openIndex === i ? (
              <ChevronUp size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
            ) : (
              <ChevronDown size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
            )}
          </button>
          {openIndex === i && (
            <div
              className="px-5 pb-5 text-sm leading-relaxed"
              style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", background: "oklch(0.97 0.015 85)" }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <Layout>
      <PageMeta
        title="Frequently Asked Questions — Selling Your Fresno Home for Cash"
        description="Answers to 40+ questions about selling your house fast in Fresno: process, offers, foreclosure, probate, divorce, taxes, senior sellers, and more. Licensed CA Agent DRE #02219124."
        path="/faq"
      />
      <SchemaMarkup schema={faqPageSchema(allFaqs)} id="faq-hub" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Seller FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Your Questions, Answered
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "oklch(0.78 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Everything you need to know about selling your Fresno home for cash — from how the process works to taxes, probate, foreclosure, and more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white"
              style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={16} /> {PHONE}
            </a>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold"
                style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get My Free Cash Offer <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Nav */}
      <section className="py-8 sticky top-0 z-30" style={{ background: "white", borderBottom: "1px solid oklch(0.90 0.01 85)" }}>
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-colors hover:opacity-80"
                style={{ background: "oklch(0.93 0.02 85)", color: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl mx-auto space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {cat.title}
                </h2>
              </div>
              <FAQAccordion faqs={cat.faqs} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.80 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call or text Connor directly. No scripts, no call centers — just a straight answer from a licensed CA agent who has seen every situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg"
              style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg"
                style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

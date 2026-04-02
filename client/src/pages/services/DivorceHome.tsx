/* ============================================================
   DIVORCE HOME SALE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house during divorce Fresno",
   "divorce home sale fast Fresno", "sell house fast divorce settlement"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80";

export default function DivorceHome() {
  return (
    <ServicePage
      badge="Divorce Home Sale"
      title="Selling Your Home During a Divorce in Fresno"
      subtitle="A fast, private cash sale can simplify your divorce settlement, split equity cleanly, and let both parties move forward — without months of open houses and negotiations."
      heroImage={HERO_IMG}
      heroImageAlt="Home for sale during divorce in Fresno California"
      intro="Divorce is already one of the most stressful life events a person can go through. The family home is often the largest shared asset — and deciding what to do with it can become the most contentious part of the entire process. A cash sale to Alder Heritage Homes offers a clean, fast, private resolution: no open houses, no strangers walking through your home, no drawn-out negotiations, and a clear equity split that both parties can agree on."
      sections={[
        {
          heading: "Why a Cash Sale Works Well in Divorce Situations",
          body: "Traditional listings during a divorce require both parties to agree on an agent, a listing price, showing schedules, and every offer response — at a time when agreement is already difficult. A cash sale eliminates most of those friction points. We make one offer, you both review it, and if it works, we close on a timeline that fits your court or settlement schedule. The equity is split according to your agreement, and both parties can move on.",
        },
        {
          heading: "You Get an Independent Broker Opinion — Not Just Our Word",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                In a divorce, both parties need to trust that the home's value is being assessed fairly. That's why every property plan Connor sends includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno broker with 1,800+ completed transactions over a 25-year career — completely separate from Connor's cash offer.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                This means both spouses, and both attorneys, can see an objective third-party valuation alongside the cash offer. There's no question of whether one party is being taken advantage of. The numbers are transparent and independently verified.
              </p>
              <p>
                Connor is a licensed California real estate agent (DRE #02219124) who refuses to list and buy the same property — that's a conflict of interest he won't participate in. His job is to make sure both parties are protected.
              </p>
            </div>
          ),
        },
        {
          heading: "Privacy and Discretion",
          body: "A traditional listing puts your home on Zillow, Redfin, and the MLS for the entire neighborhood to see. During a divorce, many couples prefer to keep the sale private. A cash sale with Alder Heritage Homes is completely off-market — no yard signs, no public listings, no open houses. Your neighbors, coworkers, and family don't need to know.",
        },
        {
          heading: "Court-Ordered Sales",
          body: "If a judge has ordered the home to be sold as part of the divorce decree, we can work within court timelines and provide documentation required by your attorneys. We've worked with divorce attorneys and mediators throughout the Fresno area and understand the legal requirements involved.",
        },
        {
          heading: "If a Cash Sale Isn't Right, We'll Connect You With the Right Resource",
          body: "Not every divorce home sale is best handled as a cash transaction. If a traditional listing would net significantly more for both parties and the timeline allows for it, Connor will tell you honestly and refer you to his trusted independent broker partner. His goal is to make sure you're protected and informed — not just to buy your house.",
        },
      ]}
      benefits={[
        "Clean equity split for both parties",
        "No open houses or public listings",
        "Third-party broker opinion included",
        "Works with court-ordered sale timelines",
        "Cash offer within 48 hours",
        "Close in as few as 7 days",
        "Complete privacy — off-market sale",
        "Licensed agent protecting both parties",
      ]}
      faq={[
        {
          q: "Can we sell the house if my spouse and I can't agree on anything?",
          a: "We can make the process simpler by providing a clear, written cash offer that both parties can review independently. Many couples find it easier to agree on a single cash offer than to navigate a full listing process together. We can also work with both attorneys directly.",
        },
        {
          q: "What if the house is in only one spouse's name?",
          a: "Depending on your situation, both spouses may still need to sign the sale documents even if only one is on the title. We recommend consulting with your divorce attorney, and we're happy to work with whatever legal structure your settlement requires.",
        },
        {
          q: "How fast can you close if we need to meet a court deadline?",
          a: "We can typically close in 7–21 days. If you have a specific court-ordered deadline, let us know upfront and we'll do everything possible to accommodate it.",
        },
        {
          q: "Will the cash offer be fair enough that both parties are satisfied?",
          a: "We include an independent Broker Opinion of Value from a Fresno broker with 25 years and 1,800+ transactions so both parties can see an objective market valuation alongside our offer. We also guarantee to match or beat any other cash offer you receive.",
        },
        {
          q: "Do you work with divorce attorneys?",
          a: "Yes. We're experienced working alongside family law attorneys and mediators in Fresno County. We can provide documentation, letters of intent, and proof of funds as needed for your legal proceedings.",
        },
      ]}
      ctaTitle="Get a Fair, Private Cash Offer for Your Divorce Home Sale"
      ctaBody="No open houses. No public listings. A transparent offer with an independent broker opinion so both parties can move forward with confidence."
      relatedLinks={[
        { label: "Sell Your House Fast in Fresno", href: "/sell-house-fast" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Why We're Different", href: "/why-choose-us" },
        { label: "Contact Connor Directly", href: "/contact" },
      ]}
    />
  );
}

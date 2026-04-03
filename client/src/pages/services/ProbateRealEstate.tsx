/* ============================================================
   PROBATE REAL ESTATE FRESNO — Service Page
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Target keyword: "probate real estate Fresno" / "sell probate house Fresno CA"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&auto=format&fit=crop&q=80";

export default function ProbateRealEstate() {
  return (
    <ServicePage
      badge="Probate Real Estate Specialists"
      title="Probate Real Estate in Fresno & the Central Valley"
      subtitle="We buy probate properties directly from estates — no court delays, no repairs, no commissions. Close in as little as 7 days or on the court's timeline."
      heroImage={HERO_IMG}
      heroImageAlt="Fresno probate home sale — Alder Heritage Homes"
      slug="/probate-real-estate-fresno"
      metaDescription="Sell a probate property in Fresno, CA fast. Alder Heritage Homes buys inherited homes as-is, works with executors and attorneys, and closes on your timeline. No repairs, no commissions."
      intro="Settling an estate is one of the most emotionally and logistically complex things a family can do. When the estate includes real property, the process becomes even more complicated — court timelines, executor authority, creditor claims, and often disagreements among heirs. Alder Heritage Homes has purchased multiple probate properties in Fresno County and surrounding counties. We understand the process, work directly with executors and probate attorneys, and can close on the court's schedule — whether that's 7 days or 7 months."
      sections={[
        {
          heading: "What Makes a Probate Sale Different",
          body: "In a standard home sale, the seller is a living person with clear title. In a probate sale, the seller is a deceased person's estate — represented by an executor or administrator appointed by the court. The executor must have Letters Testamentary or Letters of Administration before they can legally sell the property. If the estate is administered under the Independent Administration of Estates Act (IAEA), the sale can proceed without court confirmation — similar to a standard transaction. If not under IAEA, the sale requires a court confirmation hearing where other buyers can submit overbids. We're experienced with both procedures and can guide you through whichever applies to your situation.",
        },
        {
          heading: "The Carrying Cost Problem",
          body: "Every month a probate property sits unsold, the estate pays property taxes, insurance, utilities, and maintenance — often $1,500–$3,000 per month for a typical Fresno home. Over the 9–18 months a full probate can take, that's $13,500–$54,000 in carrying costs that reduce what the heirs ultimately receive. Selling quickly — even at a modest discount from peak retail value — often produces a better net outcome for the estate than waiting for the highest possible price while carrying costs accumulate. We provide a free Broker Opinion of Value so you can see the full financial picture before deciding.",
        },
        {
          heading: "Working With the Executor and Probate Attorney",
          body: "We work directly with the executor and their probate attorney. We understand that the executor has fiduciary duties to the estate and cannot simply accept the first offer — they must act in the best interests of the heirs. We provide transparent pricing, a written offer with a clear breakdown of our valuation, and flexibility on closing timeline. If the estate needs a court confirmation sale, we're prepared to participate in that process. If the estate qualifies for an IAEA sale, we can close in 7–14 days. We've worked with multiple Fresno probate attorneys and can provide references.",
        },
        {
          heading: "Common Probate Property Situations We Handle",
          body: "We regularly purchase: inherited homes that need significant repairs or cleanup; properties with deferred maintenance that would require $30,000–$100,000 to bring to retail condition; homes with tenant or squatter issues; properties with code violations or unpermitted additions; homes with title complications from the estate; and properties where heirs disagree and need a fast, clean resolution. We buy as-is — no repairs, no cleanup, no inspections. The estate receives a clean cash payment and the property is off the books.",
        },
        {
          heading: "The AB 2016 Change for Surviving Spouses",
          body: "Assembly Bill 2016, which took effect April 1, 2025, created a simplified procedure for transferring a primary residence to a surviving spouse or domestic partner without full probate. Under AB 2016, a surviving spouse can petition to have the family home transferred using a streamlined court process that takes weeks rather than the typical 9–18 months of full probate. If you're a surviving spouse dealing with a home that was community property, you may be able to avoid full probate entirely. We can connect you with a Fresno probate attorney who can advise on whether AB 2016 applies to your situation.",
        },
        {
          heading: "Probate Resources on This Site",
          body: (
            <div>
              <p className="mb-3">We've written extensively about the probate process to help families navigate it with confidence. Here are our key probate guides:</p>
              <ul className="space-y-2">
                <li>
                  <a href="/blog/california-probate-process-complete-guide-2026" className="text-[oklch(0.55_0.13_42)] underline hover:text-[oklch(0.45_0.13_42)] font-medium">
                    California Probate Process: A Complete Guide for Heirs and Executors (2026)
                  </a>
                  {" "}— Every step from filing the petition to final distribution.
                </li>
                <li>
                  <a href="/blog/california-probate-fees-costs-breakdown-2026" className="text-[oklch(0.55_0.13_42)] underline hover:text-[oklch(0.45_0.13_42)] font-medium">
                    How Much Does Probate Cost in California? The Complete Fee Breakdown (2026)
                  </a>
                  {" "}— Statutory attorney fees, executor fees, court costs, and how to reduce them.
                </li>
                <li>
                  <a href="/blog/what-is-a-probate-home-sale-california" className="text-[oklch(0.55_0.13_42)] underline hover:text-[oklch(0.45_0.13_42)] font-medium">
                    What Is a Probate Home Sale in California?
                  </a>
                  {" "}— IAEA vs. court confirmation, the overbid procedure, and timelines.
                </li>
                <li>
                  <a href="/blog/paralegal-attorney-pro-per-probate-california" className="text-[oklch(0.55_0.13_42)] underline hover:text-[oklch(0.45_0.13_42)] font-medium">
                    Paralegal vs. Attorney vs. Pro Per in Probate
                  </a>
                  {" "}— Pros, cons, and costs of each approach for handling the estate.
                </li>
                <li>
                  <a href="/blog/sibling-wants-to-keep-inherited-house-california" className="text-[oklch(0.55_0.13_42)] underline hover:text-[oklch(0.45_0.13_42)] font-medium">
                    What to Do When a Sibling Wants to Keep the Inherited House
                  </a>
                  {" "}— Buyouts, partition actions, and how to resolve heir disagreements.
                </li>
              </ul>
            </div>
          ),
        },
      ]}
      benefits={[
        "Purchase directly from the estate — executor deals with us, not a listing agent",
        "Close in 7–14 days (IAEA) or on the court's timeline (court confirmation)",
        "Buy as-is — no repairs, no cleanup, no inspections required",
        "No real estate commission (saves the estate 5–6% of sale price)",
        "Experienced with court confirmation and overbid procedures",
        "Provide a free Broker Opinion of Value for executor's fiduciary records",
        "Work directly with probate attorneys — we understand the process",
        "Handle properties with code violations, tenants, squatters, or title issues",
        "Cash purchase — no financing contingency that can kill the deal",
        "Transparent pricing with written offer and full valuation breakdown",
        "Can close before creditor period expires if IAEA applies",
        "Licensed CA Real Estate Agent (DRE #02219124) — not a wholesaler",
      ]}
      videoEmbed={{
        youtubeId: "7hTIhjUE7IU",
        title: "How to Sell an Inherited House in California",
        caption: "A clear walkthrough of probate authority, court confirmation, and your options as an heir or executor.",
      }}
      faq={[
        {
          q: "Can the executor sell the house before probate is complete?",
          a: "In most cases, yes — but only after the court has issued Letters Testamentary or Letters of Administration authorizing the executor to act. If the estate is under the Independent Administration of Estates Act (IAEA), the executor can sell the property without court confirmation, similar to a standard sale. If not under IAEA, the sale requires a court confirmation hearing. The property cannot be sold before the executor has legal authority.",
        },
        {
          q: "How long does it take to sell a probate property in Fresno?",
          a: "Under IAEA, a probate property sale can close in 14–30 days from accepted offer — similar to a standard sale. Under court confirmation, add 30–60 days for the confirmation hearing. The full probate administration (from death to final distribution) typically takes 9–18 months in Fresno County, but the property can often be sold earlier in the process once the executor has Letters.",
        },
        {
          q: "Does the estate pay real estate commission on a probate sale?",
          a: "In a traditional probate listing, yes — the estate pays the listing agent's commission (typically 2.5–3%) plus the buyer's agent commission (2.5–3%), totaling 5–6% of the sale price. On a $400,000 home, that's $20,000–$24,000 in commissions paid from estate assets before distribution to heirs. Selling directly to Alder Heritage Homes eliminates the commission entirely.",
        },
        {
          q: "What if the probate property needs major repairs?",
          a: "We buy probate properties as-is, regardless of condition. We've purchased homes that needed complete gut renovations, homes with pest infestations, homes with water damage, and homes with deferred maintenance going back decades. The estate does not need to make any repairs. We price the property based on its current condition and the cost of work needed, and we provide a transparent written offer with our valuation methodology.",
        },
        {
          q: "What if there are multiple heirs and they disagree about selling?",
          a: "Heir disagreements are one of the most common complications in probate real estate. If one heir wants to sell and another wants to keep the property, the executor must act in the best interests of the estate as a whole. If heirs cannot agree, a partition action can force the sale through the courts — but this is expensive and time-consuming. We've worked with estates where we helped facilitate a buyout of one heir's interest by another, or where our offer helped heirs reach agreement on a price. We're happy to discuss your specific situation.",
        },
        {
          q: "Can you buy a probate property if there's still a mortgage on it?",
          a: "Yes. We purchase probate properties with existing mortgages. The mortgage is paid off at closing from the sale proceeds, and the estate receives the net equity. If the mortgage balance exceeds the property's value (the estate is underwater), we can discuss options including a short sale with lender approval.",
        },
        {
          q: "Do I need a probate attorney to sell to you?",
          a: "We strongly recommend working with a probate attorney throughout the process — the executor has fiduciary duties and legal requirements that an attorney can help navigate. We can provide referrals to experienced Fresno probate attorneys who offer flat-fee probate services. We work alongside the attorney, not instead of them.",
        },
        {
          q: "What is the overbid procedure in a court confirmation sale?",
          a: "In a court confirmation sale, after the estate accepts an offer, the sale is published and a court hearing is set. At the hearing, any member of the public can appear and submit a higher bid. The minimum overbid is the accepted offer price plus 5% plus $500. If someone overbids, the original buyer can counter, and bidding continues until no one bids higher. The original buyer has no right of first refusal. We're experienced with this procedure and can participate as the original bidder.",
        },
        {
          q: "How is the sale price determined for a probate property?",
          a: "The executor has a fiduciary duty to sell the property for fair market value. We provide a free Broker Opinion of Value (BOV) — a written analysis of comparable sales, property condition, and market conditions — with every offer. This gives the executor documentation for their fiduciary records showing they considered market value before accepting our offer. In court confirmation sales, the court also reviews the price.",
        },
        {
          q: "What areas do you buy probate properties in?",
          a: "We purchase probate properties throughout Fresno County, Tulare County, Kings County, Madera County, and Kern County — including Fresno, Clovis, Visalia, Tulare, Hanford, Madera, Bakersfield, and all surrounding communities. Call (559) 281-8016 for a free consultation on your specific property.",
        },
      ]}
      ctaTitle="Selling a Probate Property in Fresno? Let's Talk."
      ctaBody="We work directly with executors and probate attorneys. Free Broker Opinion of Value included with every offer. No repairs, no commissions, close on your timeline."
      relatedLinks={[
        { label: "Inherited Home Sale Guide", href: "/sell-inherited-house-fresno" },
        { label: "CA Probate Process Guide", href: "/blog/california-probate-process-complete-guide-2026" },
        { label: "CA Probate Fees Breakdown", href: "/blog/california-probate-fees-costs-breakdown-2026" },
        { label: "Paralegal vs. Attorney vs. Pro Per", href: "/blog/paralegal-attorney-pro-per-probate-california" },
        { label: "Sibling Wants to Keep the House?", href: "/blog/sibling-wants-to-keep-inherited-house-california" },
        { label: "What Is a Probate Home Sale?", href: "/blog/what-is-a-probate-home-sale-california" },
        { label: "Sell My House Hub", href: "/sell-my-house" },
      ]}
    />
  );
}

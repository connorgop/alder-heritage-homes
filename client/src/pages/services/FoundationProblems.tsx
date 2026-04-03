/* ============================================================
   FOUNDATION PROBLEMS LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house foundation problems Fresno", "sell house foundation issues California",
   "sell house cracked foundation", "foundation damage home sale"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80";

export default function FoundationProblems() {
  return (
    <ServicePage
      badge="Foundation Problems"
      title="We Buy Houses With Foundation Problems in Fresno — No Repairs Required"
      subtitle="Foundation issues kill traditional sales. Buyers walk. Lenders won't fund. We buy homes with foundation problems as-is — and we're transparent about exactly what we pay and why."
      heroImage={HERO_IMG}
      heroImageAlt="House with foundation problems in Fresno California"
      intro="Foundation problems are one of the most deal-killing issues in residential real estate. When a buyer's inspector finds foundation issues, the deal almost always falls apart — either because the buyer walks, the lender refuses to fund, or the repair bids come in so high that the numbers no longer work. We buy homes with foundation problems in Fresno and the Central Valley, as-is, no repairs required."
      sections={[
        {
          heading: "Why Foundation Problems Are Common in the Central Valley",
          body: "The San Joaquin Valley has expansive clay soils that shrink and swell dramatically with moisture changes. During Fresno's dry summers, the soil contracts. During wet winters, it expands. This repeated movement puts stress on foundations — particularly older slab foundations and pier-and-beam foundations that were not designed to accommodate significant soil movement. We see foundation issues regularly throughout Fresno, Clovis, Madera, Visalia, and the surrounding area.",
        },
        {
          heading: "What Foundation Repairs Actually Cost",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Foundation repair costs in Fresno vary enormously depending on the type and severity of the problem:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                <li style={{ marginBottom: "0.5rem" }}><strong>Minor crack repair and waterproofing:</strong> $3,000–$8,000</li>
                <li style={{ marginBottom: "0.5rem" }}><strong>Moderate settling requiring mudjacking or piers:</strong> $8,000–$25,000</li>
                <li style={{ marginBottom: "0.5rem" }}><strong>Severe problems requiring major structural work:</strong> $30,000–$80,000+</li>
              </ul>
              <p>
                These are estimates — the actual cost often increases once contractors open up the foundation and discover the full extent of the problem. And not all foundation problems are fully correctable; in areas with ongoing soil movement, repairs may slow the problem but not stop it.
              </p>
            </div>
          ),
        },
        {
          heading: "Why Foundation Problems Kill Traditional Sales",
          body: "When a buyer's inspector finds foundation issues, the buyer's lender typically requires a structural engineer's report. If repairs are recommended, the lender usually requires them to be completed before funding — which means you are either paying for the repairs out of pocket or negotiating a price reduction large enough to cover them. Most buyers walk rather than deal with the complexity. The ones who stay often demand a reduction that exceeds the actual repair cost.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Connor is a licensed California real estate agent (DRE #02219124). Every offer he makes includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno-based broker with 1,800+ completed transactions. This tells you what your home would be worth with the foundation repaired — so you can compare it against the cash offer and make an informed decision.
              </p>
              <p>
                No other cash buyer in the Central Valley does this. Most are hoping you don't know what your home is worth. Connor makes sure you do.
              </p>
            </div>
          ),
        },
        {
          heading: "How We Price Foundation-Problem Properties",
          body: "Our offer reflects the after-repair value minus the realistic cost of the foundation work and any other needed repairs. We get actual contractor bids before making our offer — we don't guess. We are transparent about how we arrive at our number, and the third-party BOV gives you an independent check on the starting point.",
        },
      ]}
      benefits={[
        "No foundation repairs required before closing",
        "No structural engineer reports required",
        "Third-party broker opinion included",
        "Cash offer within 48 hours",
        "Close in as few as 5–7 days",
        "We pay all closing costs",
        "No agent commissions",
        "We handle all repairs after closing",
      ]}
      faq={[
        {
          q: "Can I sell a house with foundation problems without fixing them first?",
          a: "Yes. We purchase homes with foundation problems as-is in Fresno and throughout the Central Valley. No repairs required before closing. We handle all foundation work ourselves after we own the property.",
        },
        {
          q: "Will a lender finance a house with foundation problems?",
          a: "Most lenders will not finance a home with significant foundation issues until repairs are completed. This is why traditional sales fall apart when foundation problems are discovered. Cash buyers like us can purchase without a lender's approval.",
        },
        {
          q: "How do you determine what to pay for a house with foundation problems?",
          a: "We start with the after-repair value — what the home would be worth with the foundation repaired. We then subtract the realistic cost of the foundation work based on actual contractor bids. We are transparent about this math and include a third-party broker opinion of value with every offer.",
        },
        {
          q: "What types of foundation problems do you buy homes with?",
          a: "We purchase homes with all types of foundation issues — slab cracking and heaving, pier-and-beam settling, stem wall cracking, drainage problems, and more. The type and severity affects our offer, but we do not refuse to purchase based on foundation type.",
        },
      ]}
      ctaTitle="Get a Cash Offer on Your Foundation-Problem Property"
      ctaBody="No repairs required. No structural engineer reports. Just a fair offer and a fast close. Call (559) 281-8016 or submit your address below."
      relatedLinks={[
        { label: "Sell a House With Mold", href: "/sell-house-mold" },
        { label: "Sell a Fire-Damaged House", href: "/sell-house-fire-damage" },
        { label: "Sell a Hoarder House", href: "/sell-hoarder-house" },
        { label: "Sell a House With Roof Damage", href: "/sell-house-roof-damage" },
      ]}
    />
  );
}

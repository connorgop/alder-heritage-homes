/* ============================================================
   FIRE DAMAGE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell fire damaged house Fresno", "sell burned house California",
   "sell house after fire as-is", "fire damage home sale Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80";

export default function FireDamage() {
  return (
    <ServicePage
      badge="Fire-Damaged Properties"
      title="We Buy Fire-Damaged Houses in Fresno — As-Is, No Repairs"
      subtitle="A house fire is devastating. The last thing you need is a complicated sale process. We buy fire-damaged homes in any condition — no repairs, no remediation, no waiting."
      heroImage={HERO_IMG}
      heroImageAlt="Fire damaged house in Fresno California"
      intro="After a house fire, homeowners face a difficult decision: rebuild, sell as-is, or navigate a complicated insurance claim process. We specialize in purchasing fire-damaged properties in Fresno and the Central Valley — giving homeowners a fast, certain exit without the months of contractor management, insurance disputes, and uncertainty that come with a rebuild."
      sections={[
        {
          heading: "Your Three Options After a House Fire",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                <strong>Option 1: File the insurance claim and rebuild.</strong> If you have adequate coverage and want to keep the property, this is the right path. But be aware: the rebuild process in Fresno typically takes 6–18 months, and many homeowners discover their coverage is inadequate — either because policy limits are too low or because the insurer disputes the damage extent.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <strong>Option 2: Sell the property and the open insurance claim together.</strong> If you have an active claim, you can sell the property while the claim is still open. The buyer takes over both the property and the claim. This is more complex but allows you to exit quickly without waiting for the claim to resolve. We have structured these transactions before.
              </p>
              <p>
                <strong>Option 3: Sell as-is to a cash buyer.</strong> If you want the fastest, cleanest exit — no insurance disputes, no contractor management, no uncertainty — we will make you a fair cash offer and close in 3 days. We handle all remediation and reconstruction ourselves after closing.
              </p>
            </div>
          ),
        },
        {
          heading: "What We Pay for Fire-Damaged Properties",
          body: "Our offer reflects the after-repair value minus the full cost of fire remediation and reconstruction. Smoke damage alone can cost $10,000–$30,000 to remediate properly. Structural fire damage can run $50,000–$150,000 or more. We factor all of this into our offer and are transparent about the math. We also include a free third-party broker opinion of value so you can verify our starting point is accurate.",
        },
        {
          heading: "Selling With an Open Insurance Claim",
          body: "If you have an active insurance claim, call us before you accept or reject any settlement. The timing matters — there are specific ways to structure a sale with an open claim that protect your interests. We have experience with these transactions and can help you navigate the process correctly.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Connor is a licensed California real estate agent (DRE #02219124). Every offer he makes includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno-based broker with 1,800+ completed transactions. This tells you what your home would be worth fully repaired — so you can compare it against the cash offer and make an informed decision.
              </p>
              <p>
                No other cash buyer in the Central Valley does this. Most are hoping you don't know what your home is worth. Connor makes sure you do.
              </p>
            </div>
          ),
        },
        {
          heading: "If a Cash Sale Isn't Right for You, We'll Say So",
          body: "If your insurance coverage is adequate and the rebuild makes financial sense, we will tell you that — even if it means we don't buy your home. Our goal is to make sure you end up in the best possible situation, not to buy every property we see. If a rebuild is the right path, we can connect you with trusted contractors in the Fresno area who do quality work.",
        },
      ]}
      benefits={[
        "No repairs or remediation before closing",
        "Can purchase with open insurance claims",
        "Third-party broker opinion included",
        "Cash offer within 48 hours",
        "Close in as few as 3 days",
        "We pay all closing costs",
        "No agent commissions",
        "We handle all remediation after closing",
      ]}
      faq={[
        {
          q: "Can I sell a fire-damaged house without repairing it first?",
          a: "Yes. We purchase fire-damaged homes as-is in Fresno and throughout the Central Valley. No repairs, no remediation, no cleanup required before closing. We handle everything after we own the property.",
        },
        {
          q: "Can I sell my house if I have an open insurance claim?",
          a: "Yes. You can sell a property with an active insurance claim. The buyer takes over the property and the claim. This requires careful structuring to protect your interests — call us before accepting or rejecting any settlement.",
        },
        {
          q: "How do you determine what to pay for a fire-damaged house?",
          a: "We start with the after-repair value — what the home would be worth fully repaired. We then subtract the realistic cost of fire remediation and reconstruction. We are transparent about this math and include a third-party broker opinion of value with every offer.",
        },
        {
          q: "How quickly can you close on a fire-damaged property?",
          a: "We can close in as few as 3 days. If you have an open insurance claim that needs to be resolved first, we can accommodate a longer timeline. We work on your schedule.",
        },
      ]}
      videoEmbed={{
        youtubeId: "g_k8VRVxRAQ",
        title: "California Foreclosure & Fire Damage: Seller Options",
        caption: "How California homeowners navigate fire damage, insurance claims, and selling options.",
      }}
      ctaTitle="Get a Cash Offer on Your Fire-Damaged Property"
      ctaBody="No repairs required. No insurance disputes. Just a fair offer and a fast close. Call (559) 281-8016 or submit your address below."
      relatedLinks={[
        { label: "Code Violations — Sell As-Is", href: "/sell-house-code-violations-fresno" },
        { label: "Tax Liens — Sell With Back Taxes", href: "/sell-house-tax-liens-fresno" },
        { label: "Hoarder / Cluttered Home", href: "/sell-hoarder-house" },
        { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
        { label: "Sell During Divorce", href: "/sell-house-divorce" },
        { label: "Tower District Cash Buyer", href: "/fresno-neighborhoods/tower-district" },
        { label: "Sunnyside Cash Buyer", href: "/fresno-neighborhoods/sunnyside" },
      ]}
    />
  );
}

/* ============================================================
   HOARDER HOUSE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell hoarder house Fresno", "sell house full of stuff",
   "estate cleanout sell house", "junk removal before selling"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80";

export default function HoarderHouse() {
  return (
    <ServicePage
      badge="Hoarder & Cluttered Homes"
      title="We Buy Hoarder Houses in Fresno — No Cleanup, No Judgment"
      subtitle="Leave everything. Take only what matters to you. We handle the rest — and we'll make sure you get a fair price before you decide."
      heroImage={HERO_IMG}
      heroImageAlt="Cluttered house in Fresno California"
      intro="Selling a home filled with years of belongings — whether it's a family member's estate, a hoarding situation, or simply a lifetime of accumulation — is one of the most emotionally and physically overwhelming things a person can face. You don't have to clean it out before selling. You don't have to hire a junk removal company. You don't have to feel embarrassed. We've bought homes in every condition imaginable, and we treat every seller with the same respect and dignity."
      sections={[
        {
          heading: "Leave Everything. We Mean It.",
          body: "When we say we buy houses as-is, we mean it completely. You can leave furniture, clothing, appliances, boxes, vehicles in the driveway — anything you don't want to take with you. We handle all cleanout, hauling, and disposal after closing. Many of our sellers take only their personal documents and sentimental items and leave the rest to us. There is no extra charge for this.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Here's something almost no cash buyer in Fresno will tell you: Connor is a licensed California real estate agent (DRE #02219124). That means he could list your home on the MLS — but he chooses not to, because buying and listing the same property is a conflict of interest he refuses to participate in.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Instead, every property plan Connor sends includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno-based broker with 1,800+ completed transactions over a 25-year career. This is a completely separate, third-party evaluation of what your home is worth — so you can compare it against Connor's cash offer and make an informed decision with confidence.
              </p>
              <p>
                No other cash buyer in the Central Valley does this. Most of them are hoping you don't know what your home is worth. Connor makes sure you do.
              </p>
            </div>
          ),
        },
        {
          heading: "If Cash Isn't the Right Answer, We'll Tell You",
          body: "Connor's goal isn't to buy every house — it's to make sure every homeowner he meets ends up in the best possible situation. If a traditional listing would net you significantly more money and you have the time and capacity for that process, he'll say so and connect you with his trusted broker partner. If a cash sale is the right move given your timeline, condition, or circumstances, he'll make you a strong offer and close fast. Either way, you have an advocate in your corner protecting you from bad actors.",
        },
        {
          heading: "Estate Cleanouts and Inherited Hoarder Homes",
          body: "Many of the hoarder homes we purchase are inherited properties — a parent or grandparent who accumulated decades of belongings, and now the family is left to deal with it from out of town, often while grieving. We specialize in probate and inherited properties and understand the emotional complexity involved. We move at your pace, we don't pressure you, and we make the process as simple as possible for the whole family.",
        },
        {
          heading: "What About Junk Removal Companies?",
          body: "Junk removal in Fresno typically costs $300–$1,500 for a standard cleanout, and full estate cleanouts can run $3,000–$8,000 or more depending on the volume. If you sell to us, you pay nothing for cleanout — we absorb that cost as part of our offer calculation. You keep more of your money and eliminate the hassle of coordinating multiple contractors.",
        },
      ]}
      benefits={[
        "Leave everything — no cleanout required",
        "No judgment, no embarrassment",
        "Third-party broker opinion included",
        "Cash offer within 48 hours",
        "close in as few as 5–7 days",
        "We pay all closing costs",
        "Estate and probate specialists",
        "Licensed agent — not a wholesaler",
      ]}
      faq={[
        {
          q: "Do I really not have to clean anything out?",
          a: "Correct. You take what you want and leave the rest. We handle all hauling, disposal, and cleanout after closing at no cost to you.",
        },
        {
          q: "What if the house has a bad smell or pest issues?",
          a: "We've seen it all. Odors, rodents, insects — none of that prevents us from making an offer. We factor remediation costs into our pricing and handle it ourselves.",
        },
        {
          q: "What is a Broker Opinion of Value and why does it matter?",
          a: "A Broker Opinion of Value (BOV) is an independent assessment of your home's market value prepared by a licensed real estate broker. Connor includes one from a trusted Fresno broker with 25 years and 1,800+ transactions — so you know exactly what your home is worth before deciding whether to accept a cash offer or pursue a traditional listing.",
        },
        {
          q: "Can you help with a family member's home that I inherited?",
          a: "Absolutely. We specialize in probate and inherited properties. We work with families, attorneys, and trustees and can accommodate complex ownership situations.",
        },
        {
          q: "How is this different from calling a junk removal company first?",
          a: "If you call a junk removal company, you pay $3,000–$8,000 to clean out the house, then still need to sell it. If you call us first, we buy the house as-is and handle the cleanout ourselves — you pay nothing and close faster.",
        },
      ]}
      ctaTitle="Sell Your Fresno Home As-Is — No Cleanup Required"
      ctaBody="Leave everything. We'll handle the rest. Get your free cash offer and a third-party broker opinion so you can make the right decision."
      relatedLinks={[
        { label: "Sell House With Roof Damage", href: "/sell-house-roof-damage" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Sell Your House Fast", href: "/sell-house-fast" },
        { label: "Why We're Different", href: "/why-choose-us" },
      ]}
    />
  );
}

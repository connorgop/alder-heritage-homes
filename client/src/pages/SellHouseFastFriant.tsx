/* ============================================================
   SERVICE PAGE: Sell House Fast Friant CA — Alder Heritage Homes
   Primary keyword: "sell my house fast Friant CA"
   Secondary: "we buy houses Friant", "cash home buyer Friant CA"
   Friant: Fresno County foothill / Millerton Lake market
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80";

export default function SellHouseFastFriant() {
  return (
    <ServicePage
      badge="FRIANT, CA · FRESNO COUNTY FOOTHILLS · DIRECT CASH BUYER"
      title="Sell Your House Fast in Friant, CA"
      subtitle="Cash offer in 24 hours. Close in 7–21 days. No repairs, no commissions, no wholesalers. Licensed CA Agent DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell your house fast in Friant CA — Alder Heritage Homes"
      slug="/sell-house-fast-friant-ca"
      metaDescription="Sell your Friant CA home for cash in 7–21 days. Local Fresno County cash buyer for homes near Friant, Millerton Lake, Copper River, and the foothills. No repairs or commissions."
      intro="If you need to sell a house fast in Friant, California, Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and direct cash buyer serving Friant, North Fresno, Clovis, Copper River, Millerton Lake, and the surrounding Fresno County foothills. We buy homes as-is, including inherited properties, rural homes, vacant houses, rentals, and homes with repair, title, tax, or access complications."
      sections={[
        {
          heading: "Why Friant Is a High-Value Small Market",
          body: "Friant is not a generic Fresno suburb. It sits at the edge of North Fresno, Clovis, Millerton Lake, Table Mountain, and the foothill property market. Homes can range from older rural houses to custom homes, lake-area properties, and parcels with non-standard access, wells, septic systems, or deferred maintenance.\n\nMost cash buyer competitors do not build dedicated Friant pages. They either ignore the market or bury it inside a broad Fresno County list. That gives Alder Heritage Homes room to become the obvious local answer for sellers searching from Friant, Millerton, and the foothills."
        },
        {
          heading: "Homes We Buy in Friant",
          body: "We buy single-family homes, inherited houses, lake-area properties, vacant homes, rural properties, older homes needing repairs, and properties with tenant, title, deed, tax, or insurance issues.\n\nFriant and the foothills can create problems that slow down traditional listings: limited buyer pools, older septic or well systems, insurance concerns, steep driveways, rural access, deferred maintenance, and sellers who live out of the area. A direct cash sale can remove the need for repairs, showings, repeated inspections, and buyer financing delays."
        },
        {
          heading: "Friant Cash Offer Process",
          body: "Step 1: Send the property address or call Connor. Step 2: We review comparable sales in Friant, North Fresno, Clovis, Copper River, Millerton, and nearby foothill areas. Step 3: You receive a written cash offer and a clear explanation of the math.\n\nIf you accept, we work through escrow and close on your timeline. Many clean-title cash sales can close in 7–21 days. If there are title, deed, probate, payoff, or tax issues, we coordinate with escrow and the right professionals to understand what must be cleared before closing."
        },
        {
          heading: "Why Friant Sellers Choose Alder Heritage Homes",
          body: "We are local, licensed, and direct. Connor is a licensed California real estate agent, and Alder Heritage Homes buys with its own funds. We are not trying to lock your property up and shop the contract to another buyer.\n\nWe show the valuation logic, can provide proof of funds, and will tell you if listing with an agent looks like the better option. That matters in Friant, where some homes deserve full-market exposure and others need the speed and certainty of a private cash sale."
        }
      ]}
      benefits={[
        "Cash offer within 24 hours",
        "Close in 7–21 days or on your schedule",
        "No repairs, cleaning, or showings",
        "No commissions or seller fees",
        "We pay standard closing costs",
        "We buy rural and foothill properties",
        "We can often work through title, deed, lien, and tax issues with escrow",
        "Licensed CA Agent DRE #02219124",
        "Serving Friant, Millerton Lake, North Fresno, and Clovis"
      ]}
      faq={[
        {
          q: "Do you buy houses in Friant, CA?",
          a: "Yes. We buy houses in Friant and nearby areas including Millerton Lake, North Fresno, Copper River, Clovis, Prather, and the Fresno County foothills."
        },
        {
          q: "Can you buy a Friant home with well, septic, or rural access issues?",
          a: "Often, yes. We look at rural and non-standard properties as-is. Escrow, inspections, and title determine what must be addressed before closing."
        },
        {
          q: "How fast can I sell my Friant house for cash?",
          a: "Many cash sales can close in 7–21 days after a signed agreement, depending on title, escrow, payoff, and seller timeline."
        },
        {
          q: "Is a cash sale better than listing my Friant home?",
          a: "Not always. Updated homes in strong locations may net more with full-market exposure. A cash sale makes more sense when the property needs work, privacy matters, the seller is out of area, or speed and certainty are more important than waiting."
        },
        {
          q: "Are you a wholesaler?",
          a: "No. Alder Heritage Homes is a direct buyer and Connor is a licensed California real estate agent. We do not need to assign your contract to another buyer to close."
        }
      ]}
      ctaTitle="Ready to Sell Your Friant Home?"
      ctaBody="Call Connor at (559) 281-8016 for a written cash offer within 24 hours. We buy houses in Friant, Millerton Lake, North Fresno, Clovis, and the Fresno County foothills with no repairs, no commissions, and no obligation."
      relatedLinks={[
        { label: "We Buy Houses in Fresno", href: "/we-buy-houses-fresno" },
        { label: "We Buy Houses in Clovis", href: "/we-buy-houses-clovis" },
        { label: "Sell House Fast Clovis", href: "/sell-house-fast-clovis-ca" },
        { label: "North Fresno", href: "/fresno-neighborhoods/north-fresno" },
        { label: "Title Issues Help", href: "/sell-house-title-issues-fresno" }
      ]}
    />
  );
}

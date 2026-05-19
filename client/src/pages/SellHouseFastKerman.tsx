/* ============================================================
   SERVICE PAGE: Sell House Fast Kerman CA — Alder Heritage Homes
   Primary keyword: "sell my house fast Kerman CA"
   Secondary: "cash home buyer Kerman CA", "we buy houses Kerman"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80";

export default function SellHouseFastKerman() {
  return (
    <ServicePage
      badge="KERMAN, CA · WEST FRESNO COUNTY · DIRECT CASH BUYER"
      title="Sell Your House Fast in Kerman, CA"
      subtitle="Written cash offer in 24 hours. Close in 7–21 days or on your schedule. No repairs, no commissions, no wholesalers. Licensed CA Agent DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell your house fast in Kerman CA — Alder Heritage Homes"
      slug="/sell-house-fast-kerman-ca"
      metaDescription="Sell your Kerman CA house fast for cash. Local licensed buyer, not a wholesaler. No repairs, no commissions, close in 7–21 days. DRE #02219124."
      intro="If you need to sell a house fast in Kerman, Alder Heritage Homes buys homes directly for cash throughout west Fresno County. We work with inherited homes, vacant houses, rural properties, rentals with tenant issues, homes needing repairs, and properties with liens, unpaid taxes, deed problems, or title complications. Connor Morris is a licensed California real estate agent, and Alder Heritage Homes is the buyer — not a contract flipper."
      sections={[
        {
          heading: "Why Kerman Sellers Choose a Cash Sale",
          body: "Kerman has a smaller buyer pool than Fresno or Clovis. Homes that need repairs, have older systems, sit on rural parcels, or come with estate/title complications can take longer to sell through a traditional listing. A cash sale is useful when certainty matters: no repairs, no showings, no buyer lender, and no waiting months for the right offer.\n\nWe analyze local comps in Kerman, Biola, Fresno, Madera Avenue, and surrounding west Fresno County areas, then give you a written offer and clear explanation of how we reached the number."
        },
        {
          heading: "Situations We Help With in Kerman",
          body: "We regularly look at Kerman homes involving inherited ownership, multiple heirs, deed not transferred after death, unpaid property taxes, IRS or judgment liens, old mortgages that need payoff review, tired landlords, tenants who are behind, vacant houses, fire or roof damage, code issues, and rural homes that are hard to finance.\n\nWe cannot promise every title issue can close instantly. Escrow and title decide what must be cleared. But we can often help sellers work through the process with title, escrow, attorneys, and payoff departments."
        },
        {
          heading: "How Fast Can We Close?",
          body: "A clean-title cash sale can often close in 7–21 days after a signed agreement. If you need time to move, sort belongings, coordinate with heirs, or wait for probate/title work, we can close later. The point is certainty: once we agree on price and title is clear, we are not waiting on buyer financing."
        },
        {
          heading: "What Makes Alder Different",
          body: "We are licensed, local, and direct. We provide a Broker Opinion of Value so you can compare our cash offer against the open market. If listing with an agent is likely to put more money in your pocket and your timeline allows it, we will say that. If speed, privacy, repairs, tenants, or title complexity are the bigger problem, a direct cash offer may be the better tool."
        }
      ]}
      benefits={[
        "Written cash offer within 24 hours",
        "Close in 7–21 days or on your timeline",
        "No repairs, cleaning, staging, or showings",
        "No commissions or seller fees",
        "We pay standard closing costs",
        "We buy inherited, vacant, rural, and tenant-occupied homes",
        "We can often work through title, deed, lien, and tax issues with escrow",
        "Licensed CA Agent DRE #02219124",
        "Direct buyer — not a wholesaler"
      ]}
      faq={[
        {
          q: "Can I sell my Kerman house fast if it needs repairs?",
          a: "Yes. We buy Kerman homes as-is, including older homes with roof, plumbing, electrical, foundation, fire, code, or cleanup issues."
        },
        {
          q: "Can you buy a Kerman house with title or deed issues?",
          a: "Often, yes. We review inherited ownership issues, liens, unpaid taxes, unreleased mortgages, and deed questions with escrow/title so everyone understands what must be cleared before closing."
        },
        {
          q: "How quickly can I close in Kerman?",
          a: "Many clean-title cash sales can close in 7–21 days. If title, probate, payoff, or seller timing requires longer, we can work on a later closing date."
        },
        {
          q: "Do you buy rural properties around Kerman?",
          a: "Yes. We look at homes in Kerman, Biola, Tranquillity, Mendota, west Fresno County, and nearby rural/agricultural areas."
        },
        {
          q: "Are you a wholesaler?",
          a: "No. Alder Heritage Homes is a direct buyer, and Connor Morris is a licensed California real estate agent. We do not need to assign your contract to another buyer to close."
        }
      ]}
      ctaTitle="Ready to Sell Your Kerman Home Fast?"
      ctaBody="Call Connor at (559) 281-8016 for a written cash offer within 24 hours. No repairs, no commissions, no obligation."
      relatedLinks={[
        { label: "Sell My House Kerman", href: "/sell-my-house-kerman-ca" },
        { label: "Fresno County Cash Buyer", href: "/fresno-county" },
        { label: "Title Issues Help", href: "/sell-house-title-issues-fresno" },
        { label: "Unpaid Property Taxes", href: "/sell-house-unpaid-property-taxes-fresno" },
        { label: "Inherited Property", href: "/probate-inherited-homes" }
      ]}
    />
  );
}

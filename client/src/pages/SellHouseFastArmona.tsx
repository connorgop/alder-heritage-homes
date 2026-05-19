/* ============================================================
   SERVICE PAGE: Sell House Fast Armona CA — Alder Heritage Homes
   Primary keyword: "sell my house fast Armona CA"
   Secondary: "we buy houses Armona", "cash home buyer Armona CA"
   Armona: Kings County, small unincorporated market near Hanford
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80";

export default function SellHouseFastArmona() {
  return (
    <ServicePage
      badge="ARMONA, CA · KINGS COUNTY · DIRECT CASH BUYER"
      title="Sell Your House Fast in Armona, CA"
      subtitle="Cash offer in 24 hours. Close in 7–21 days. No repairs, no commissions, no wholesalers. Licensed CA Agent DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell your house fast in Armona CA — Alder Heritage Homes"
      slug="/sell-house-fast-armona-ca"
      metaDescription="Sell your Armona CA home for cash in 7–21 days. Local Kings County cash buyer, not a wholesaler. Licensed CA Agent DRE #02219124. No repairs, no commissions."
      intro="If you need to sell a house fast in Armona, California, Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and direct cash buyer serving Armona, Hanford, Lemoore, and all of Kings County. We buy homes as-is, including inherited homes, rentals, vacant houses, and properties with deed, title, tax, or repair complications."
      sections={[
        {
          heading: "Why Armona Is a Smart SEO Target",
          body: "Armona is a small Kings County community between Hanford and Lemoore. Most large cash buyers mention Armona only inside a broad service-area list. That leaves room for a dedicated local page with actual Kings County proof.\n\nAlder Heritage Homes already helped an Armona seller who was under contract with a large advertising buyer. Connor paid more, provided a moving truck, and gave the seller three free weeks after closing to move without pressure. That kind of specific proof is what generic cash-buyer pages usually do not have."
        },
        {
          heading: "Homes We Buy in Armona",
          body: "We buy single-family homes, inherited properties, vacant houses, rental properties with tenant issues, older homes needing repairs, rural properties around Armona, and homes with liens, unpaid taxes, unclear ownership, or deed/title complications.\n\nYou do not need to clean, repair, stage, or list the property. We buy as-is and work with escrow/title professionals when a sale needs extra title, probate, or payoff coordination."
        },
        {
          heading: "Armona Cash Offer Process",
          body: "Step 1: Call Connor or send the property address. Step 2: We review comparable sales in Armona, Hanford, Lemoore, and the surrounding Kings County market. Step 3: You receive a written cash offer and a clear explanation of the math.\n\nIf you accept, you choose the closing date. We can often close in 7–21 days, or wait longer if you need time to move."
        },
        {
          heading: "Why Choose Alder Heritage Homes in Armona",
          body: "We are local, licensed, and direct. We are not trying to lock up your house and shop the contract to another investor. We provide a Broker Opinion of Value, can show proof of funds, and will tell you when listing with an agent may net more than selling for cash.\n\nIf speed, certainty, privacy, or a complicated property issue matters more than squeezing out every possible dollar on the open market, a direct cash sale can be the right tool."
        }
      ]}
      benefits={[
        "Cash offer within 24 hours",
        "Close in 7–21 days or on your timeline",
        "No repairs, cleaning, or showings",
        "No commissions or seller fees",
        "We pay standard closing costs",
        "We buy inherited and probate properties",
        "We can often work through deed, title, lien, and tax issues with escrow",
        "Licensed CA Agent DRE #02219124",
        "Real Armona/Kings County seller proof"
      ]}
      faq={[
        {
          q: "Do you buy houses in Armona, CA?",
          a: "Yes. We buy houses in Armona and throughout Kings County, including Hanford, Lemoore, Corcoran, Avenal, Stratford, and Home Garden."
        },
        {
          q: "How fast can I sell my Armona house for cash?",
          a: "Many cash sales can close in 7–21 days after a signed agreement, depending on title, escrow, payoff, and seller timeline."
        },
        {
          q: "Can you buy an Armona home with title or deed problems?",
          a: "Often, yes. We regularly look at homes with inherited ownership issues, liens, unpaid taxes, unreleased mortgages, or deed questions. Escrow and title determine what must be cleared before closing."
        },
        {
          q: "Are you a wholesaler?",
          a: "No. Alder Heritage Homes is a direct buyer and Connor is a licensed California real estate agent. We do not need to assign your contract to another buyer to close."
        },
        {
          q: "Will I get more money listing my Armona home?",
          a: "Sometimes. A clean, updated home with time to wait may net more on the open market. A cash offer is usually best when the home needs work, the sale is private, or speed and certainty matter."
        }
      ]}
      ctaTitle="Ready to Sell Your Armona Home?"
      ctaBody="Call Connor at (559) 281-8016 for a written cash offer within 24 hours. We buy houses in Armona, Hanford, Lemoore, and all of Kings County with no repairs, no commissions, and no obligation."
      relatedLinks={[
        { label: "Armona Case Study", href: "/case-studies/armona-ca" },
        { label: "We Buy Houses in Hanford", href: "/we-buy-houses-hanford" },
        { label: "Sell House Fast Hanford", href: "/sell-house-fast-hanford-ca" },
        { label: "Kings County Cash Buyer", href: "/kings-county" },
        { label: "Title Issues Help", href: "/sell-house-title-issues-fresno" }
      ]}
    />
  );
}

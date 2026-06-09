/* ============================================================
   SELL MY HOUSE SANGER CA — /sell-my-house-sanger-ca
   Primary:   "sell my house sanger" "sell my house sanger ca"
              "cash home buyer sanger ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseSanger() {
  const problemLinks = [
    { label: "Probate or inherited house", href: "/probate-inherited-homes" },
    { label: "Title, deed, or lien issue", href: "/sell-house-title-issues-fresno" },
    { label: "Behind on payments or foreclosure", href: "/foreclosure-help" },
    { label: "Tenants or tired landlord", href: "/sell-house-with-tenants-fresno" },
    { label: "Vacant, boarded, or damaged house", href: "/we-buy-problem-houses-fresno" },
    { label: "Squatters or unauthorized occupants", href: "/sell-house-with-squatters-fresno" },
    { label: "Unpaid property taxes", href: "/sell-house-unpaid-property-taxes-fresno" },
    { label: "Medical debt or judgment lien", href: "/sell-house-to-pay-medical-debt-fresno" },
  ];

  return (
    <ServicePage
      badge="Sanger CA · Fresno County"
      title="Sell My House Sanger CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Sanger and Fresno County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
      heroImageAlt="Sell my house Sanger CA cash buyer"
      slug="/sell-my-house-sanger-ca"
      metaDescription="Sell your house in Sanger CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Sanger is a growing Fresno County community known as the 'Nation's Christmas Tree City.' Many Sanger homes are older, inherited, rented, or need repairs before they can compete on the open market. Alder Heritage Homes buys Sanger houses directly for cash - any condition, any situation, no repairs required."
      sections={[
        {
          heading: "Sanger Areas And Nearby Towns We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Sanger","South Sanger","Downtown Sanger","East Sanger","West Sanger","Reedley","Selma","Parlier","Del Rey","Orange Cove","Squaw Valley","Dunlap"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "Why Sanger Sellers Get Missed By Big Fresno Buyers",
          body: "Most cash buyer websites write one generic Fresno page and hope it covers every small town. Sanger sellers need a buyer who understands older Fresno County houses, rural-edge properties, probate transfers, tenant problems, code issues, unpaid taxes, and title cleanup. Connor can give you a cash offer and a broker opinion so you can compare the fast-sale number against what a traditional listing might actually net.",
        },
        {
          heading: "High-Intent Sanger Seller Situations We Help With",
          body: (
            <div className="grid gap-2 sm:grid-cols-2 mt-3">
              {problemLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-stone-800 transition hover:border-amber-600 hover:text-amber-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ),
        },
        {
          heading: "Direct Buyer, Not A Wholesaler",
          body: "If you are comparing cash buyers in Sanger, read the contract closely. A wholesaler often signs a contract and then tries to assign it to someone else. Alder Heritage Homes is built around direct local acquisition: Connor Morris is a licensed California real estate agent, can show proof of funds, and can explain exactly who is closing on the house before you sign.",
        },
        {
          heading: "Cash Offer Or Listing Opinion",
          body: "Sometimes a regular listing is the better move. Sometimes speed, privacy, repairs, tenants, title problems, or family pressure make a direct cash sale better. You get both perspectives up front: a written cash offer and a realistic opinion of value for the open market.",
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Sanger property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
        },
      ]}
      benefits={[
        "Cash offer within 24 hours",
        "Close in 7–14 days",
        "Buy in any condition",
        "No commissions or closing costs",
        "Licensed CA agent DRE #02219124",
        "Free Broker Opinion of Value",
        "Direct end buyer — not a wholesaler",
      ]}
      faq={[
        {
          q: "How fast can I sell my house in Sanger CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Sanger house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
        {
          q: "Can I sell an inherited house in Sanger before all repairs are done?",
          a: "Yes. You can sell a Sanger probate or inherited property as-is, even if it has old flooring, roof issues, junk removal, deferred maintenance, or multiple heirs who need a simple closing.",
        },
        {
          q: "Can you buy my Sanger house if tenants will not leave?",
          a: "Yes. We buy houses with tenants, family members, unauthorized occupants, and other occupancy problems. You do not need to deliver a perfect vacant property to get an offer.",
        },
        {
          q: "What if my Sanger house has title, deed, or tax issues?",
          a: "We can review title issues, old liens, unpaid property taxes, deed problems, and inherited ownership questions with escrow and title before closing.",
        },
      ]}
      ctaTitle="Get Your Sanger Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
        { label: "Sell My House Reedley", href: "/sell-my-house-reedley-ca" },
        { label: "Sell My House Selma", href: "/sell-my-house-selma-ca" },
        { label: "Sell House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Sell House With Squatters", href: "/sell-house-with-squatters-fresno" },
        { label: "Cash Offer Calculator", href: "/calculator" },
      ]}
    />
  );
}

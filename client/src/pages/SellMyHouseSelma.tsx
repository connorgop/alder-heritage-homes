/* ============================================================
   SELL MY HOUSE SELMA CA — /sell-my-house-selma-ca
   Primary:   "sell my house selma" "sell my house selma ca"
              "cash home buyer selma ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseSelma() {
  const problemLinks = [
    { label: "Inherited or probate property", href: "/probate-inherited-homes" },
    { label: "House with title or deed issues", href: "/sell-house-title-issues-fresno" },
    { label: "Pre-foreclosure or late payments", href: "/foreclosure-help" },
    { label: "Tenants, leases, or tired landlord", href: "/sell-house-with-tenants-fresno" },
    { label: "Vacant, boarded-up, or vandalized", href: "/we-buy-problem-houses-fresno" },
    { label: "Squatter occupied property", href: "/sell-house-with-squatters-fresno" },
    { label: "Back property taxes", href: "/sell-house-unpaid-property-taxes-fresno" },
    { label: "Medical bills or judgment lien", href: "/sell-house-to-pay-medical-debt-fresno" },
  ];

  return (
    <ServicePage
      badge="Selma CA · Fresno County"
      title="Sell My House Selma CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Selma and Fresno County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      heroImageAlt="Sell my house Selma CA cash buyer"
      slug="/sell-my-house-selma-ca"
      metaDescription="Sell your house in Selma CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Selma - the 'Raisin Capital of the World' - is a tight-knit Fresno County community with many older homes, rentals, inherited properties, and houses that need work. Whether you are dealing with probate, deferred maintenance, bad tenants, title issues, or simply want to avoid listing, Alder Heritage Homes buys Selma houses directly for cash - any condition, any situation."
      sections={[
        {
          heading: "Selma Areas And Nearby Towns We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Selma","South Selma","Downtown Selma","East Selma","West Selma","Kingsburg","Fowler","Sanger","Reedley","Dinuba","Parlier","Del Rey"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "Selma Sellers Usually Need Options, Not A Script",
          body: "A distressed Selma property may still have real equity, but the right exit depends on repairs, tenants, family timing, title status, and how quickly you need certainty. Connor can show you a cash offer and a realistic listing opinion so you can choose between speed and maximum retail exposure without guessing.",
        },
        {
          heading: "Selma House Problems We Buy Around",
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
          heading: "Beware Of Assignment-Only Offers",
          body: "Some buyers write contracts with assignment language and then shop your Selma house to another investor. That can create delays, renegotiation, and failed closings. Alder Heritage Homes positions the offer as a direct local purchase, with proof of funds available and a licensed California agent explaining the numbers.",
        },
        {
          heading: "When A Cash Sale Beats A Traditional Listing",
          body: "A cash sale can make sense when the house needs major repairs, you do not want public showings, tenants make access difficult, a foreclosure date is approaching, or inherited owners need a simple closing. If listing is likely to put more money in your pocket after repairs and commissions, Connor can tell you that too.",
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Selma property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Selma CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Selma house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
        {
          q: "Can I sell a Selma house with tenants still inside?",
          a: "Yes. We buy tenant-occupied houses, problem rentals, inherited rentals, and properties where access or vacancy is difficult.",
        },
        {
          q: "Can I sell a Selma inherited house with multiple heirs?",
          a: "Yes. We can work through probate, multiple heirs, old deed issues, and title company questions so the sale has a clear path to closing.",
        },
        {
          q: "Will you buy a Selma house with code violations or unpaid taxes?",
          a: "Yes. We regularly evaluate houses with code concerns, back property taxes, liens, deferred maintenance, and other problems that scare away retail buyers.",
        },
      ]}
      ctaTitle="Get Your Selma Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
        { label: "Sell My House Kingsburg", href: "/sell-my-house-kingsburg-ca" },
        { label: "Sell My House Sanger", href: "/sell-my-house-sanger-ca" },
        { label: "Sell House With Tenants", href: "/sell-house-with-tenants-fresno" },
        { label: "Sell House Before Foreclosure", href: "/foreclosure-help" },
        { label: "Cash Offer Calculator", href: "/calculator" },
      ]}
    />
  );
}

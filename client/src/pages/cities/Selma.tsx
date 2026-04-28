/* ============================================================
   CITY PAGE: Selma, CA — Alder Heritage Homes
   SEO target: "sell my house fast Selma CA", "cash home buyer Selma"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Selma() {
  return (
    <CityPage
      city="Selma"
      county="Fresno"
      population="24,000+"
      slug="we-buy-houses-selma"
      description="Selma — the 'Raisin Capital of the World' — is a tight-knit agricultural community in southern Fresno County. With a median home value well below the state average and a large share of working-class homeowners, Selma has many residents facing financial pressure from job loss, medical bills, inherited properties, and deferred maintenance. Alder Heritage Homes buys homes throughout Selma and the surrounding communities of Kingsburg, Fowler, Parlier, and Reedley. We know this market, we close fast, and we pay fair cash prices — no repairs, no commissions, no hassle."
      neighborhoods={[
        "Downtown Selma",
        "Selma Heights",
        "Westside Selma",
        "Eastside Selma",
        "Kingsburg",
        "Fowler",
        "Parlier",
        "Reedley",
        "Caruthers",
      ]}
      stats={[
        { label: "Median Home Value", value: "$280K" },
        { label: "Avg. Days on Market", value: "38 days" },
        { label: "Our Avg. Close Time", value: "9 days" },
        { label: "Service Area Radius", value: "25 miles" },
      ]}
      faqs={[
        {
          q: "How fast can you buy my Selma home?",
          a: "We can close in as little as 7 days on a Selma property. If you need more time — 30, 45, or 60 days — we work on your schedule. We have closed Selma homes in as few as 5 days when sellers needed to move quickly.",
        },
        {
          q: "Do I need to make repairs before selling to you?",
          a: "No. We buy Selma homes in any condition — deferred maintenance, fire damage, mold, foundation issues, code violations, full of belongings. You do not clean, repair, or stage anything. We handle all of it after closing.",
        },
        {
          q: "Are there any fees or commissions?",
          a: "None. We are the buyer — there is no real estate agent commission (typically 5-6%), no closing cost surprises, and no hidden fees. The offer we make is the amount you receive at closing.",
        },
        {
          q: "Do you buy homes in Kingsburg and Fowler too?",
          a: "Yes. We actively buy homes throughout the southern Fresno County corridor — Selma, Kingsburg, Fowler, Parlier, Reedley, and Caruthers. If you are within 25 miles of Selma, call us.",
        },
        {
          q: "What if I am behind on mortgage payments?",
          a: "We specialize in helping Selma homeowners who are behind on payments or facing foreclosure. A fast cash sale can stop the foreclosure process, protect your credit, and put money in your pocket. Call us before the auction date.",
        },
        {
          q: "I inherited a Selma property — can you help?",
          a: "Absolutely. Inherited properties are one of our most common purchases. We work with heirs, estate attorneys, and probate courts throughout Fresno County. We can buy the property as-is and close on the estate's timeline.",
        },
        {
          q: "How is your offer calculated?",
          a: "We look at the property's after-repair value, subtract our estimated repair costs and holding costs, and make a fair offer that reflects the real market. We are transparent about our numbers — if you want to see our math, we will show you.",
        },
        {
          q: "Is Alder Heritage Homes a licensed real estate company?",
          a: "Yes. Connor Morris holds a California Real Estate License (DRE #02219124). We are a direct cash buyer — not a wholesaler, not a middleman. We buy your home with our own funds.",
        },
      ]}
      realDeals={[
        {
          href: "/case-studies/armona-ca",
          tag: "Outbid California's 'Biggest Buyer'",
          tagColor: "oklch(0.45 0.15 25)",
          address: "Armona, CA — 30 mi south",
          stat1: { label: "Post-Close Move-Out Time", value: "3 Weeks Free" },
          stat2: { label: "Moving Truck", value: "Paid by Connor" },
          summary: "Seller had already signed with a company calling itself 'California's biggest home buyer.' Connor exposed the wholesaler contract, outbid them, and gave the seller 3 free weeks post-close.",
          quote: "Connor explained exactly what they were doing with my contract. I had no idea.",
        },
      ]}
    />
  );
}

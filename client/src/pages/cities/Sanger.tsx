/* ============================================================
   CITY PAGE: Sanger, CA — Alder Heritage Homes
   SEO target: "sell my house fast Sanger CA", "cash home buyer Sanger"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Sanger() {
  return (
    <CityPage
      city="Sanger"
      county="Fresno"
      population="26,000+"
      slug="we-buy-houses-sanger"
      description="Sanger — the 'Nation's Christmas Tree City' — is a close-knit community in eastern Fresno County, nestled at the gateway to Kings Canyon National Park. Many Sanger homeowners face unique challenges: aging agricultural properties, homes with deferred maintenance, inherited estates, and the financial pressure of living in a rural market with limited buyer demand. Alder Heritage Homes buys homes throughout Sanger and the surrounding communities of Del Rey, Parlier, Academy, and Fresno County's eastern corridor. We close fast, pay fair cash prices, and handle all the paperwork."
      neighborhoods={[
        "Downtown Sanger",
        "Sanger Heights",
        "Academy",
        "Del Rey",
        "Parlier",
        "Reedley",
        "Dinuba",
        "Orange Cove",
        "Centerville",
      ]}
      stats={[
        { label: "Median Home Value", value: "$295K" },
        { label: "Avg. Days on Market", value: "42 days" },
        { label: "Our Avg. Close Time", value: "9 days" },
        { label: "Service Area Radius", value: "30 miles" },
      ]}
      faqs={[
        {
          q: "How fast can you buy my Sanger home?",
          a: "We can close in as little as 7 days on a Sanger property. We have closed Sanger homes in as few as 5 days for sellers who needed to move immediately. If you need more time, we work on your timeline.",
        },
        {
          q: "Do you buy rural and agricultural properties near Sanger?",
          a: "Yes. We regularly purchase rural properties, homes on agricultural land, and properties with outbuildings throughout eastern Fresno County. Whether your property is on a fraction of an acre or several acres, we can make an offer.",
        },
        {
          q: "Do I need to make repairs before selling?",
          a: "No. We buy Sanger homes in any condition — deferred maintenance, fire damage, mold, foundation issues, code violations, full of belongings. You do not clean, repair, or stage anything. We handle everything after closing.",
        },
        {
          q: "Are there any fees or commissions?",
          a: "None. We are the direct buyer — no real estate agent commission (typically 5-6%), no closing cost surprises, no hidden fees. The cash offer we make is the amount you receive at closing.",
        },
        {
          q: "What if I am behind on mortgage payments?",
          a: "We specialize in helping Sanger homeowners who are behind on payments or facing foreclosure. A fast cash sale can stop the foreclosure process, protect your credit, and put cash in your pocket. Call us before the auction date.",
        },
        {
          q: "I inherited a Sanger property — can you help?",
          a: "Absolutely. Inherited properties are one of our most common purchases in eastern Fresno County. We work with heirs, estate attorneys, and probate courts. We buy the property as-is and close on the estate's timeline.",
        },
        {
          q: "Do you buy homes in Del Rey and Parlier too?",
          a: "Yes. We buy homes throughout the eastern Fresno County corridor — Sanger, Del Rey, Parlier, Academy, Reedley, Dinuba, and Orange Cove. If you are within 30 miles of Sanger, call us.",
        },
        {
          q: "Is Alder Heritage Homes a licensed real estate company?",
          a: "Yes. Connor Morris holds a California Real Estate License (DRE #02219124). We are a direct cash buyer — not a wholesaler, not a middleman. We purchase your home with our own funds.",
        },
      ]}
    />
  );
}

/* ============================================================
   CITY PAGE: Orange Cove, CA — Alder Heritage Homes
   SEO target: "we buy houses Orange Cove CA", "sell my house fast Orange Cove"
   Design: Warm terracotta / forest green — matches brand
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function OrangeCove() {
  return (
    <CityPage
      city="Orange Cove"
      county="Fresno"
      population="10,000+"
      slug="we-buy-houses-orange-cove"
      description="Orange Cove is a small agricultural city in eastern Fresno County, nestled at the base of the Sierra Nevada foothills between Reedley and Sanger along Highway 180. It's the gateway to Kings Canyon National Park and home to a close-knit community of citrus and grape farmers. Orange Cove has one of the lowest median home prices in Fresno County — and one of the highest concentrations of motivated sellers. There are almost no cash buyers actively marketing here, which means homeowners who need to sell fast have very few options. Alder Heritage Homes fills that gap. We are a licensed California real estate agent (DRE #02219124) who buys homes in Orange Cove with our own funds — no wholesalers, no middlemen, no games."
      neighborhoods={[
        "Downtown Orange Cove",
        "North Orange Cove",
        "South Orange Cove",
        "Citrus Belt",
        "Piedra Road Corridor",
        "Trimmer Springs Area",
        "Squaw Valley",
        "Dunlap",
        "Wonder Valley",
        "Miramonte",
        "Clingan's Junction",
        "Balch Camp Area",
      ]}
      stats={[
        { label: "Median Home Price", value: "$235K" },
        { label: "Avg Days on Market", value: "52 days" },
        { label: "Cash Buyer Share", value: "~44%" },
        { label: "Homes Built Pre-1980", value: "~63%" },
      ]}
      faqs={[
        {
          q: "Why is it so hard to sell a home in Orange Cove the traditional way?",
          a: "Orange Cove has a very limited pool of conventional buyers. Many homes are older (pre-1980) with deferred maintenance, and lenders often require repairs before approving a mortgage. The small town size means fewer agents actively market there, and days on market can stretch to 60–90+ days. A cash sale eliminates all of these barriers.",
        },
        {
          q: "Do you buy homes in Orange Cove regardless of condition?",
          a: "Yes. We buy homes in any condition — deferred maintenance, outdated systems, foundation issues, cosmetic problems, or major structural damage. We make our offer based on the home as-is. You don't need to repair, clean, or stage anything before we close.",
        },
        {
          q: "I inherited a home in Orange Cove. How do you handle probate properties?",
          a: "We specialize in inherited and estate properties throughout Fresno County. We work directly with estate attorneys and probate referees to navigate title complications. We can provide a written offer before probate is complete so the family has certainty about the outcome.",
        },
        {
          q: "How is your offer calculated for an Orange Cove home?",
          a: "We pull recent comparable sales in Orange Cove and surrounding communities (Reedley, Sanger, Squaw Valley, Dunlap), factor in repair costs, and present a transparent written offer. We'll show you exactly how we arrived at the number — the after-repair value, estimated repair costs, and our margin. No surprises.",
        },
        {
          q: "I'm facing foreclosure on my Orange Cove home. How fast can you help?",
          a: "We can close in as few as 7 days. If you're facing foreclosure, contact us immediately at (559) 281-8016. We can often stop a foreclosure sale by closing before the auction date.",
        },
        {
          q: "Do you buy rural and foothill properties near Orange Cove?",
          a: "Yes. We purchase properties throughout the Kings Canyon corridor — Squaw Valley, Dunlap, Miramonte, Wonder Valley, and the Trimmer Springs area. Rural properties with well water, septic systems, and acreage are welcome. We evaluate each property individually.",
        },
        {
          q: "What areas near Orange Cove do you serve?",
          a: "We buy homes throughout the surrounding communities: Reedley, Sanger, Parlier, Selma, Clovis, Fresno, Squaw Valley, Dunlap, Miramonte, and throughout Fresno County and the Sierra Nevada foothills.",
        },
        {
          q: "Are you a licensed real estate agent or a wholesaler?",
          a: "We are a licensed California real estate agent (DRE #02219124). We buy with our own funds — we are not a wholesaler. When you sell to us, you know exactly who you're selling to and there are no hidden assignment fees.",
        },
      ]}
    />
  );
}

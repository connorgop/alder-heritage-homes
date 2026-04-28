/* ============================================================
   SERVICE PAGE: Sell House Fast Wasco CA — Alder Heritage Homes
   Primary keyword: "sell my house fast Wasco CA"
   Secondary: "cash home buyer Wasco CA", "we buy houses Wasco"
   Wasco: Kern County, ~27,000 pop, Rose Capital of the Nation
   ============================================================ */
import ServicePage from "@/components/ServicePage";
const HERO_IMG = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80";
export default function SellHouseFastWasco() {
  return (
    <ServicePage
      badge="WASCO, CA · KERN COUNTY · DIRECT CASH BUYER"
      title="Sell Your House Fast in Wasco, CA"
      subtitle="Cash offer in 24 hours. Close in 7–21 days. No repairs, no commissions, no wholesalers. Licensed CA Agent DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell your house fast in Wasco CA — Alder Heritage Homes"
      slug="/sell-house-fast-wasco-ca"
      metaDescription="Sell your Wasco CA home for cash in 7–21 days. Real cash buyer, not a wholesaler. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. No repairs, no commissions. Serving all of Kern County."
      intro="If you need to sell your house fast in Wasco, California, you deserve a real buyer — not a wholesaler who will assign your contract to a stranger. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving Wasco and all of Kern County. We buy homes in every condition and situation, close on your timeline, and show you the math behind every offer."
      sections={[
        {
          heading: "The Wasco Real Estate Market in 2026",
          body: "Wasco is a small Kern County city of approximately 27,000 people, known as the 'Rose Capital of the Nation' for its commercial rose growing industry. Located about 25 miles northwest of Bakersfield on Highway 46, Wasco's economy is tied to agriculture and the nearby Wasco State Prison.\n\nWasco's median home price typically runs $240,000–$290,000, making it one of the more affordable Kern County markets. The housing stock is predominantly older, with many homes from the 1950s–1970s that have deferred maintenance issues. Days on market run 50–80 days for well-priced homes, and the buyer pool is thin — making cash buyers particularly practical for sellers who need speed."
        },
        {
          heading: "What Cash Buyers Pay for Wasco Homes in 2026",
          body: "Cash buyers in Wasco typically offer 70–80% of a home's after-repair value (ARV), minus estimated repair costs.\n\n**Example 1 — Move-In Ready:** A Wasco home worth $270,000 in good condition. A fair cash offer: $200,000–$220,000.\n\n**Example 2 — Needs Work:** A Wasco home worth $270,000 needing $30,000 in repairs. A fair cash offer: $145,000–$165,000.\n\nWe provide a free Broker Opinion of Value with every offer so you can verify our number is fair."
        },
        {
          heading: "Common Situations We Help Wasco Sellers With",
          body: "We work with Wasco homeowners in every situation: foreclosure or pre-foreclosure, probate and inherited properties, divorce, homes with deferred maintenance, tired landlords, job relocation, tax liens, vacant homes, and estate sales. No situation is too complicated."
        },
        {
          heading: "Why Wasco Homeowners Choose Alder Heritage Homes",
          body: "We're a licensed California real estate agent and direct cash buyer — not a wholesaler. We provide proof of funds within 24 hours, show you the math transparently, and close on the date we promise. Zero commissions, zero repairs, zero closing costs."
        }
      ]}
      benefits={[
        "Cash offer within 24 hours of your call",
        "Close in 7–21 days or on your schedule",
        "Zero repairs — sell completely as-is",
        "Zero commissions or seller fees",
        "We pay all standard closing costs",
        "No inspection contingency — no surprises",
        "Licensed CA Agent DRE #02219124",
        "Free Broker Opinion of Value included",
        "Serving all of Kern County"
      ]}
      faq={[
        {
          q: "How fast can you close on a Wasco home?",
          a: "Typically 7–21 days from a signed contract."
        },
        {
          q: "Do you buy homes in all Wasco neighborhoods?",
          a: "Yes — all of Wasco and surrounding Kern County, including Shafter, McFarland, Delano, and Bakersfield."
        },
        {
          q: "What condition does the home need to be in?",
          a: "Any condition. We buy homes as-is — no repairs, no cleaning required."
        },
        {
          q: "Are you a real buyer or a wholesaler?",
          a: "We are the buyer. We close with our own funds and don't assign contracts."
        }
      ]}
      ctaTitle="Ready to Sell Your Wasco Home?"
      ctaBody="Call Connor at (559) 281-8016 for a written cash offer within 24 hours. We serve Wasco, Shafter, McFarland, Delano, and all of Kern County. No repairs, no commissions, no obligation."
    />
  );
}

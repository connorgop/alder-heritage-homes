/* ============================================================
   CITY PAGE: Tulare, CA — Alder Heritage Homes
   SEO target: "sell my house fast Tulare CA", "cash home buyer Tulare"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Tulare() {
  return (
    <CityPage
      city="Tulare"
      county="Tulare"
      population="68,000+"
      description="Tulare is the agricultural heart of Tulare County — home to World Ag Expo and one of the fastest-growing cities in the Central Valley. Sitting at the crossroads of Highway 99 and Highway 137, Tulare has a mix of established neighborhoods near downtown and newer subdivisions on the east side. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Tulare and Tulare County. We close in 5–14 days, pay all closing costs, and never assign your contract to a wholesaler. Whether you're dealing with foreclosure, probate, a divorce, a rental gone wrong, or just need to sell fast — we make fair cash offers and close on your timeline."
      stats={[
        { label: "County", value: "Tulare County" },
        { label: "Median Home Price", value: "$310K" },
        { label: "Close Timeline", value: "5–14 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
        { label: "Agent License", value: "DRE #02219124" },
        { label: "Homes Purchased", value: "700+" },
      ]}
      neighborhoodLinks={[
        { name: "Downtown Tulare", href: "/tulare-neighborhoods/downtown-tulare", desc: "Historic core, older homes" },
        { name: "North Tulare", href: "/tulare-neighborhoods/north-tulare", desc: "Established residential" },
        { name: "South Tulare", href: "/tulare-neighborhoods/south-tulare", desc: "Family neighborhoods" },
        { name: "East Tulare", href: "/tulare-neighborhoods/east-tulare", desc: "Newer subdivisions" },
        { name: "West Tulare", href: "/tulare-neighborhoods/downtown-tulare", desc: "Near Hwy 99 corridor" },
        { name: "Hillman St Corridor", href: "/tulare-neighborhoods/south-tulare", desc: "Mixed residential" },
      ]}
      faqs={[
        {
          q: "Do you buy houses in Tulare, CA?",
          a: "Yes. We buy homes throughout Tulare and Tulare County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer — not a wholesaler.",
        },
        {
          q: "How fast can you close on a Tulare home?",
          a: "We can close in as little as 5–7 days. If you need more time to move or arrange your next steps, we work on your timeline — not ours.",
        },
        {
          q: "Do I need to make repairs before selling?",
          a: "No. We buy Tulare homes as-is, in any condition. No cleaning, no repairs, no staging. We've bought homes with major structural issues, pest damage, and full of belongings.",
        },
        {
          q: "What if I'm behind on my mortgage in Tulare?",
          a: "We specialize in helping homeowners who are behind on mortgage payments avoid foreclosure. We can close quickly and help you walk away with cash before the bank takes action.",
        },
        {
          q: "Are you a wholesaler or a real cash buyer?",
          a: "We are a direct end-buyer. We purchase your Tulare home with our own funds — we do not assign contracts to third-party investors. We are licensed under California DRE #02219124.",
        },
        {
          q: "Will you buy a Tulare rental property with tenants?",
          a: "Yes. We buy occupied rental properties throughout Tulare County. We handle tenant communication and coordinate a smooth transition. You don't need to evict anyone before selling to us.",
        },
        {
          q: "I inherited a house in Tulare — can you help?",
          a: "Absolutely. We specialize in probate and inherited properties. We've completed 100+ probate transactions in the Central Valley and can work directly with estate executors and probate attorneys.",
        },
        {
          q: "Do you buy homes in Visalia, Porterville, or other Tulare County cities?",
          a: "Yes. We buy homes throughout Tulare County, including Visalia, Porterville, Lindsay, Exeter, Woodlake, and all surrounding communities.",
        },
        {
          q: "How do I get a cash offer for my Tulare home?",
          a: "Fill out the form on this page or call (559) 281-8016. Connor will review your property and send a no-obligation cash offer within 24 hours. There's no pressure and no obligation to accept.",
        },
      ]}
    />
  );
}

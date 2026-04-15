/* ============================================================
   CITY PAGE: Madera, CA — Alder Heritage Homes
   SEO target: "sell my house fast Madera CA", "cash home buyer Madera"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Madera() {
  return (
    <CityPage
      city="Madera"
      county="Madera"
      population="70,000+"
      description="Madera is a growing agricultural and residential community in the heart of California's San Joaquin Valley. As Madera County's seat, it sits just 20 miles north of Fresno and has seen rapid residential growth alongside economic pressures that have left many homeowners struggling with mortgage payments, inherited properties, and foreclosure risk. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Madera and Madera County. We close in 5–14 days, pay all closing costs, and never assign your contract to a wholesaler. Whether your home needs major repairs, you're behind on payments, going through probate, or simply need to sell fast — we make fair cash offers and close on your timeline."
      stats={[
        { label: "County", value: "Madera County" },
        { label: "Median Home Price", value: "$330K" },
        { label: "Close Timeline", value: "5–14 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
        { label: "Agent License", value: "DRE #02219124" },
        { label: "Homes Purchased", value: "700+" },
      ]}
      neighborhoodLinks={[
        { name: "Downtown Madera", href: "/madera-neighborhoods/downtown-madera", desc: "Historic core, older homes" },
        { name: "North Madera", href: "/madera-neighborhoods/north-madera", desc: "Newer residential growth" },
        { name: "South Madera", href: "/madera-neighborhoods/south-madera", desc: "Established family neighborhoods" },
        { name: "East Madera", href: "/madera-neighborhoods/east-madera", desc: "Newer subdivisions" },
        { name: "Madera Ranchos", href: "/madera-neighborhoods/north-madera", desc: "Rural residential" },
        { name: "Bonadelle Ranchos", href: "/madera-neighborhoods/south-madera", desc: "Country estates" },
      ]}
      realDeals={[
        {
          href: "/case-studies/coarsegold-ca-vacant-home",
          tag: "Vacant Family Home",
          tagColor: "oklch(0.40 0.08 200)",
          address: "Coarsegold, Madera County",
          stat1: { label: "Property Type", value: "Vacant" },
          stat2: { label: "Repairs Required", value: "None" },
          summary: "A family home in the Sierra Nevada foothills had been sitting vacant for years. Traditional buyers passed. Connor drove out, made a fair cash offer, and helped her finally close the chapter.",
          quote: "I didn't think anyone would want it. Connor came out, looked at it honestly, and made me a fair offer. I finally felt like I could move on.",
        },
      ]}
      faqs={[
        {
          q: "How fast can you buy my Madera home?",
          a: "We can close in as little as 5–7 days on a Madera property. If you need more time, we work on your schedule — whether that's 2 weeks or 60 days. We've closed Madera deals in as few as 5 days when sellers needed to move quickly.",
        },
        {
          q: "Do I need to make repairs before selling my Madera house?",
          a: "No. We buy Madera homes as-is, in any condition. No cleaning, no repairs, no staging. We've purchased homes with foundation issues, water damage, pest infestations, and homes full of belongings. You walk away — we handle everything.",
        },
        {
          q: "Are you a wholesaler or a real cash buyer in Madera?",
          a: "We are a direct end-buyer. We purchase your Madera home with our own funds — we do not assign contracts to third-party investors. We are licensed under California DRE #02219124. You deal with one person from offer to close.",
        },
        {
          q: "What if I'm behind on my mortgage in Madera?",
          a: "We specialize in helping Madera homeowners who are behind on mortgage payments avoid foreclosure. We can close quickly and help you walk away with cash before the bank takes action.",
        },
        {
          q: "Do you buy homes in Madera Ranchos?",
          a: "Yes. We buy homes throughout Madera County, including Madera Ranchos, Bonadelle Ranchos, Tesoro Viejo, and all surrounding unincorporated areas.",
        },
        {
          q: "I inherited a house in Madera — can you help?",
          a: "Absolutely. We specialize in probate and inherited properties. We've completed 100+ probate transactions in the Central Valley and can guide you through the entire process, including working with the probate court if needed.",
        },
        {
          q: "My Madera home needs major repairs. Will you still buy it?",
          a: "Yes — we buy homes in any condition. Roof damage, foundation issues, fire damage, deferred maintenance — none of it matters. We buy as-is and handle all repairs ourselves after closing.",
        },
        {
          q: "Will you buy a Madera rental property with tenants?",
          a: "Yes. We buy occupied rental properties throughout Madera County. We handle tenant communication and coordinate a smooth transition. You don't need to evict anyone before selling to us.",
        },
        {
          q: "How do I get a cash offer for my Madera home?",
          a: "Fill out the form on this page or call (559) 281-8016. Connor will review your property and send a no-obligation cash offer within 24 hours. There's no pressure and no obligation to accept.",
        },
      ]}
    />
  );
}

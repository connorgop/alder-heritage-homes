/* ============================================================
   CITY PAGE: Visalia, CA — Alder Heritage Homes
   SEO target: "sell my house fast Visalia CA", "cash home buyer Visalia"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Visalia() {
  return (
    <CityPage
      city="Visalia"
      county="Tulare"
      population="145,000+"
      description="Visalia is the largest city in Tulare County and one of the fastest-growing cities in California's Central Valley. As the commercial and cultural hub of the Visalia-Porterville metro area, it attracts families and retirees alike — but rapid growth also means many homeowners find themselves underwater on mortgages, dealing with inherited properties, or facing foreclosure in a market that can be difficult to navigate alone. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Visalia and Tulare County. We close in 5–14 days, pay all closing costs, and never assign your contract to a wholesaler. Unlike out-of-state iBuyers or local wholesalers, you deal with one person — Connor — from your first call to the closing table."
      stats={[
        { label: "County", value: "Tulare County" },
        { label: "Median Home Price", value: "$385K" },
        { label: "Close Timeline", value: "5–14 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
        { label: "Agent License", value: "DRE #02219124" },
        { label: "Homes Purchased", value: "700+" },
      ]}
      neighborhoodLinks={[
        { name: "Downtown Visalia", href: "/visalia-neighborhoods/downtown-visalia", desc: "Historic core, older craftsman homes" },
        { name: "North Visalia", href: "/visalia-neighborhoods/north-visalia", desc: "Newer subdivisions, growing area" },
        { name: "South Visalia", href: "/visalia-neighborhoods/south-visalia", desc: "Established family neighborhoods" },
        { name: "East Visalia", href: "/visalia-neighborhoods/east-visalia", desc: "Newer growth, Sequoia District" },
        { name: "Goshen", href: "/visalia-neighborhoods/south-visalia", desc: "Unincorporated community" },
        { name: "Farmersville", href: "/visalia-neighborhoods/east-visalia", desc: "Small city near Visalia" },
      ]}
      faqs={[
        {
          q: "How quickly can you close on my Visalia home?",
          a: "We can close in as little as 5–7 days on a Visalia property. We handle all escrow, title, and paperwork — you just show up to sign and collect your check.",
        },
        {
          q: "Do you buy homes in all Visalia neighborhoods?",
          a: "Yes — we buy homes throughout Visalia and Tulare County, including Goshen, Farmersville, and all surrounding communities. Condition and location don't disqualify a property.",
        },
        {
          q: "I'm behind on my Visalia mortgage. Can you help before foreclosure?",
          a: "Yes. We work quickly to close before auction dates. If you've received a Notice of Default or Notice of Trustee Sale, call us immediately at (559) 281-8016 — time is critical.",
        },
        {
          q: "Will you buy my Visalia home if it has a second mortgage or HELOC?",
          a: "Absolutely. We buy homes with multiple liens, including second mortgages and HELOCs. We work with all lienholders to ensure a clean title transfer.",
        },
        {
          q: "Are you a wholesaler or a real cash buyer in Visalia?",
          a: "We are a direct end-buyer. We purchase your Visalia home with our own funds — we do not assign contracts to third-party investors. We are licensed under California DRE #02219124.",
        },
        {
          q: "Do I need to make repairs before selling my Visalia house?",
          a: "No. We buy Visalia homes as-is, in any condition. No cleaning, no repairs, no staging. We've purchased homes with foundation issues, fire damage, and homes full of belongings.",
        },
        {
          q: "Will you buy a Visalia rental property with tenants?",
          a: "Yes. We buy occupied rental properties throughout Tulare County. We handle tenant communication and coordinate a smooth transition. You don't need to evict anyone before selling to us.",
        },
        {
          q: "I inherited a house in Visalia — can you help?",
          a: "Absolutely. We specialize in probate and inherited properties. We've completed 100+ probate transactions in the Central Valley and can work directly with estate executors and probate attorneys.",
        },
        {
          q: "How does your offer compare to listing with a Visalia agent?",
          a: "Listing with an agent typically takes 45–90 days and costs 5–6% in commissions plus repairs. Our cash offer closes in 5–14 days with zero commissions, zero repairs, and zero fees. For many Visalia homeowners, the net difference is smaller than expected.",
        },
        {
          q: "How do I get a cash offer for my Visalia home?",
          a: "Fill out the form on this page or call (559) 281-8016. Connor will review your property and send a no-obligation cash offer within 24 hours. There's no pressure and no obligation to accept.",
        },
      ]}
    />
  );
}

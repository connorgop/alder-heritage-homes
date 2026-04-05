/* San Joaquin County Landing Page — Alder Heritage Homes */
import CityPage from "@/components/CityPage";

export default function SanJoaquin() {
  return (
    <CityPage
      city="San Joaquin County"
      county="San Joaquin"
      population="779,000"
      slug="we-buy-houses-san-joaquin-county"
      description="San Joaquin County sits at the northern gateway of the Central Valley, home to Stockton, Lodi, Tracy, Manteca, and Lathrop. Its position between the Bay Area and Sacramento makes it one of California's most dynamic real estate markets — and one where homeowners often need to sell quickly due to financial pressure, inherited properties, or the need to relocate. Alder Heritage Homes buys houses throughout San Joaquin County for cash, closing in 7–21 days with no repairs, no commissions, and no contingencies."
      neighborhoods={["Stockton", "Lodi", "Tracy", "Manteca", "Lathrop", "Ripon", "Escalon", "Woodbridge", "Acampo", "Thornton", "Lockeford", "Clements"]}
      stats={[
        { label: "County", value: "San Joaquin" },
        { label: "Close Timeline", value: "7–21 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses throughout San Joaquin County?", a: "Yes. Connor Alder is a licensed California real estate agent (DRE #02219124) and direct cash buyer serving all of San Joaquin County — Stockton, Lodi, Tracy, Manteca, Lathrop, Ripon, Escalon, and surrounding communities. We are not a wholesaler." },
        { q: "How fast can you close on a San Joaquin County home?", a: "We typically close in 7–21 days. For homeowners facing foreclosure or with urgent timelines, we can often close in as few as 5–7 days once we have a signed contract and clear title." },
        { q: "Do you buy homes in Stockton neighborhoods with deferred maintenance?", a: "Yes. We buy homes in any condition throughout Stockton and San Joaquin County — foundation issues, roof problems, outdated systems, fire or water damage, hoarder homes. You don't need to make a single repair." },
        { q: "Can you help if I inherited a San Joaquin County home and live out of state?", a: "Absolutely. We handle the entire process remotely — we can do a virtual walkthrough, send documents electronically, and close through a title company without you needing to travel. We work with out-of-state heirs regularly." },
        { q: "Do you buy homes in Tracy or Manteca?", a: "Yes. We buy throughout San Joaquin County including Tracy, Manteca, and Lathrop — areas that have seen significant growth and where homeowners sometimes need to sell quickly due to financial changes or relocation." },
        { q: "Are there any fees or commissions when selling to you?", a: "None. We pay all closing costs. The offer we make is what you receive, minus your mortgage payoff and any existing liens. No agent commissions, no repair costs, no hidden fees of any kind." },
      ]}
    />
  );
}

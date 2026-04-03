import CityPage from "@/components/CityPage";
export default function Tulare() {
  return (
    <CityPage
      city="Tulare"
      county="Tulare"
      population="68,000"
      description="Tulare is the agricultural heart of Tulare County — home to World Ag Expo and one of the fastest-growing cities in the Central Valley. We buy homes throughout Tulare, from established neighborhoods near downtown to newer subdivisions on the east side. Whether you're dealing with foreclosure, probate, a divorce, or just need to sell fast, we make fair cash offers and close on your timeline."
      neighborhoods={["Downtown Tulare","East Tulare","West Tulare","North Tulare","South Tulare","Hillman Street Corridor","Tulare Union Area"]}
      stats={[
        { label: "County", value: "Tulare County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses in Tulare, CA?", a: "Yes. We buy homes throughout Tulare and Tulare County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer — not a wholesaler." },
        { q: "How fast can you close on a Tulare home?", a: "We can close in as little as 5–7 days. If you need more time to move or arrange your next steps, we work on your timeline — not ours." },
        { q: "Do I need to make repairs before selling?", a: "No. We buy Tulare homes as-is, in any condition. No cleaning, no repairs, no staging. We've bought homes with major structural issues, pest damage, and full of belongings." },
        { q: "What if I'm behind on my mortgage in Tulare?", a: "We specialize in helping homeowners who are behind on mortgage payments avoid foreclosure. We can close quickly and help you walk away with cash before the bank takes action." },
      ]}
    />
  );
}

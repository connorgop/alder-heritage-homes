import CityPage from "@/components/CityPage";
export default function Merced() {
  return (
    <CityPage
      city="Merced"
      county="Merced"
      population="90,000"
      description="Merced is the gateway to Yosemite and home to UC Merced — the newest University of California campus. We buy homes throughout Merced, from the established neighborhoods near downtown to student-area properties and the newer subdivisions on the north and east sides. Whether you're a tired landlord with a student rental, facing foreclosure, or dealing with a probate property, we make fair cash offers and close on your timeline."
      neighborhoods={["Downtown Merced","North Merced","East Merced","West Merced","UC Merced Area","Fahrens Park","Bear Creek Area","Bellevue Ranch"]}
      stats={[
        { label: "County", value: "Merced County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses in Merced, CA?", a: "Yes. We buy homes throughout Merced and Merced County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer — not a wholesaler." },
        { q: "Do you buy student rental properties near UC Merced?", a: "Yes. We work with tired landlords who own rental properties near UC Merced and want to exit. We can buy single properties or a portfolio of multiple rentals in one transaction." },
        { q: "How fast can you close on a Merced home?", a: "We can close in as little as 5–7 days. If you need more time, we work on your timeline. We've closed in as few as 3 days for homeowners facing urgent foreclosure deadlines." },
        { q: "What if my Merced home has tenants in it?", a: "No problem. We buy tenant-occupied properties. Our buying entity Skyline REI has purchased portfolios of multiple homes with tenants still in place — no inspections, quick close." },
      ]}
    />
  );
}

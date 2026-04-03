import CityPage from "@/components/CityPage";
export default function Modesto() {
  return (
    <CityPage
      city="Modesto"
      county="Stanislaus"
      population="218,000"
      description="Modesto is the county seat of Stanislaus County and one of the most active cash buyer markets in the Central Valley. We buy homes throughout Modesto — from the historic downtown neighborhoods to Salida, Riverbank, and the surrounding Stanislaus County communities. Foreclosure, probate, divorce, tired landlord, or any distressed situation — we make fair cash offers and close fast."
      neighborhoods={["Downtown Modesto","Salida","Riverbank","Oakdale Road Corridor","Briggsmore","North Modesto","South Modesto","Vintage Faire Area","Sylvan"]}
      stats={[
        { label: "County", value: "Stanislaus County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses in Modesto, CA?", a: "Yes. We buy homes throughout Modesto and Stanislaus County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer — not a wholesaler who will tie up your property and fail to close." },
        { q: "Do you buy homes in Stanislaus County?", a: "Yes. We buy throughout Stanislaus County including Modesto, Turlock, Ceres, Riverbank, Oakdale, and the surrounding communities." },
        { q: "What if my Modesto home is in bad condition?", a: "We buy as-is. No repairs, no cleaning, no staging required. We've purchased homes with major structural damage, pest infestations, fire damage, and properties full of belongings." },
        { q: "How do I know I'm not being wholesaled in Modesto?", a: "Real buyers don't need an inspection period to 'decide' if they want your house. If the contract says 'and/or assignee,' they plan to sell your contract to someone else. We are the buyer. We close what we open." },
      ]}
    />
  );
}

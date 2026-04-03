import CityPage from "@/components/CityPage";
export default function Stockton() {
  return (
    <CityPage
      city="Stockton"
      county="San Joaquin"
      population="322,000"
      description="Stockton is the largest city in San Joaquin County and one of the most active real estate markets in the Northern Central Valley. We buy homes throughout Stockton — from Brookside and Lincoln Village to South Stockton and the waterfront. Whether you're dealing with foreclosure, a distressed property, probate, or just need to sell fast without repairs, we make fair cash offers and close on your timeline."
      neighborhoods={["Brookside","Lincoln Village","South Stockton","North Stockton","Weston Ranch","Spanos Park","Waterfront District","Morada","Lodi Road Corridor"]}
      stats={[
        { label: "County", value: "San Joaquin County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses in Stockton, CA?", a: "Yes. We buy homes throughout Stockton and San Joaquin County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer with capital — not a wholesaler." },
        { q: "Do you buy distressed or run-down homes in Stockton?", a: "Yes. We specialize in distressed properties. We've bought homes with major structural issues, fire damage, pest infestations, squatters, and properties full of trash. No condition is too bad." },
        { q: "How do I avoid getting wholesaled in Stockton?", a: "Ask the buyer for proof of funds before signing anything. If they have an inspection period, an LLC name with 'and/or assignee' on the contract, or they're an Instagram-famous 'coach,' they are a wholesaler — not a real buyer. We are a licensed agent and real buyer. We close what we open." },
        { q: "Can you buy my Stockton home if I'm in foreclosure?", a: "Yes. We specialize in pre-foreclosure situations. We can often close before the foreclosure sale date and help you walk away with cash instead of losing the property to the bank." },
      ]}
    />
  );
}

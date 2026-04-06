/* Downtown Sanger — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function DowntownSanger() {
  return (
    <NeighborhoodPage
      name="Downtown Sanger"
      city="Sanger"
      slug="/sanger-neighborhoods/downtown-sanger"
      tagline="Sell Your Downtown Sanger Home Fast for Cash"
      description="Downtown Sanger is the historic heart of the Sierra foothills gateway, with older homes, walkable blocks, and a strong community character. Many properties have deferred maintenance and are ideal for a direct cash sale."
      medianPrice="$290,000"
      avgDays="46"
      priceRange="$255,000–$325,000"
      yearBuilt="1920–1965"
      characteristics={[
        "Historic downtown character",
        "Older construction with deferred maintenance",
        "Walkable to shops and services",
        "Gateway to Kings Canyon",
        "Close to Academy Avenue",
      ]}
      sellerSituations={[
        "Inherited older home needing repairs",
        "Long-term owner ready to downsize",
        "Probate property with title complications",
        "Deferred maintenance making listing difficult",
        "Relocation from Sanger",
      ]}
      faqs={[
        {
          q: "How fast can you close on a Downtown Sanger home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do I need to make repairs to my older Downtown Sanger home?",
          a: "No. We buy Downtown Sanger homes in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "What is my Downtown Sanger home worth to a cash buyer?",
          a: "For a home worth $290,000 in move-in condition needing $25,000 in work, our offer is typically $230,000–$250,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "East Sanger", slug: "/sanger-neighborhoods/east-sanger" },
        { name: "West Sanger", slug: "/sanger-neighborhoods/west-sanger" },
        { name: "Kings Canyon Corridor", slug: "/sanger-neighborhoods/kings-canyon-corridor" },
      ]}
    />
  );
}

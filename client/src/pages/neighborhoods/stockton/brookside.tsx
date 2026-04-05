/* Brookside — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function Brookside() {
  return (
    <NeighborhoodPage
      name="Brookside"
      city="Stockton"
      slug="/stockton-neighborhoods/brookside"
      tagline="Sell Your Brookside Home Fast — Discreet Cash Offers"
      description="Brookside is Stockton's premier golf course community, with larger homes and higher price points ($500,000–$750,000+). We handle estate sales, divorce situations, and relocation sales in this area. Sellers here often have significant equity and want a fast, discreet transaction."
      medianPrice="$625,000"
      avgDays="52"
      priceRange="$500,000–$750,000+"
      yearBuilt="1985–2005"
      characteristics={[
        "Premier golf course community",
        "Larger homes with premium finishes",
        "Gated and semi-gated sections",
        "High equity — long-term appreciation",
        "Discreet, off-market sales preferred",
      ]}
      sellerSituations={[
        "Estate sale — high-value property",
        "Divorce — discreet, fast exit",
        "Relocation — executive or professional",
        "Downsizing from large family home",
        "Avoiding public listing for privacy",
      ]}
      faqs={[
        {
          q: "Can you buy my Brookside home off-market?",
          a: "Yes. Many Brookside sellers prefer a discreet, off-market cash sale. We never list your property publicly without your permission.",
        },
        {
          q: "How fast can you close on a Brookside home?",
          a: "We can close in as few as 7 days, or on any date that works for your situation.",
        },
        {
          q: "What is my Brookside home worth to a cash buyer?",
          a: "For a Brookside home worth $625,000 in move-in condition, our offer is typically $530,000–$565,000 depending on condition and repairs needed.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Stockton", slug: "/stockton-neighborhoods/north-stockton" },
        { name: "Lincoln Village", slug: "/stockton-neighborhoods/lincoln-village" },
        { name: "Weston Ranch", slug: "/stockton-neighborhoods/weston-ranch" },
        { name: "Downtown Stockton", slug: "/stockton-neighborhoods/downtown-stockton" },
      ]}
    />
  );
}

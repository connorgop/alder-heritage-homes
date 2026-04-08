import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function TowerDistrict() {
  return (
    <NeighborhoodPage
      name="Tower District"
      slug="tower-district"
      tagline="Fresno's walkable arts district — we buy Tower District bungalows and craftsman homes as-is, cash offer in 24 hours, close in 7 days."
      description={`The Tower District is Fresno's most vibrant and historically significant urban neighborhood, centered on Olive Avenue between Blackstone Avenue and Palm Avenue. Named for the Tower Theatre — a 1939 Art Deco landmark at the corner of Olive and Wishon — the area was developed primarily between 1920 and 1945 and remains one of the few walkable, mixed-use corridors in the Central Valley.

The housing stock is defined by craftsman bungalows, Spanish Colonial cottages, and early California ranch homes on compact lots ranging from 4,000 to 6,500 square feet. Many homes retain original hardwood floors, built-in cabinetry, coved ceilings, and single-car detached garages accessed via alley. Lot sizes are small by Fresno standards, but the density creates a neighborhood feel that is rare in the city.

Rental demand in Tower District is consistently strong. The neighborhood sits within walking distance of Fresno City College (approximately 12,000 students), and the active dining, bar, and arts scene on Olive Avenue attracts young professionals and artists who prefer renting over buying. As a result, a significant portion of Tower District homes are investor-owned rentals — which means many sellers come to us as tired landlords dealing with problem tenants, deferred maintenance, or simply wanting to exit a rental property without the hassle of listing while occupied.

Other common seller situations include estate sales from longtime owners who purchased in the 1950s and 1960s, inherited properties where out-of-state heirs need a fast, clean close, and homeowners facing foreclosure or tax delinquency on properties that need significant work before they could list on the MLS. We buy Tower District homes in any condition — tenant-occupied, vacant, or in need of full renovation.`}
      medianPrice="$310K"
      avgDays="22"
      priceRange="$220K–$450K"
      yearBuilt="1920–1945"
      characteristics={[
        "Craftsman bungalows and Spanish Colonial cottages (1920–1945)",
        "Compact lots: 4,000–6,500 sq ft with alley-accessed garages",
        "Original hardwood floors, built-ins, and coved ceilings in many homes",
        "Walkable to Olive Ave restaurants, bars, and Tower Theatre",
        "Fresno City College within walking distance (~12,000 students)",
        "Strong long-term rental demand from students and young professionals",
        "Active LGBTQ+ community and arts scene",
        "Many homes with ADU potential on alley lots",
      ]}
      sellerSituations={[
        "Tired landlord — tenant-occupied rental, ready to exit",
        "Inherited rental property from a relative",
        "Problem tenants or squatters in vacant home",
        "Deferred maintenance: roof, plumbing, electrical, foundation",
        "Divorce — need fast, clean sale without showings",
        "Behind on mortgage or Fresno County property taxes",
        "Estate sale — longtime owner, family needs to settle quickly",
        "Relocating out of Fresno and can't manage from a distance",
      ]}
      faqs={[
        {
          q: "Can you buy my Tower District home if it has tenants?",
          a: "Yes — we buy tenant-occupied Tower District properties regularly. We handle the tenant transition after closing, whether that means honoring the existing lease, negotiating a cash-for-keys agreement, or managing the legal process. You hand us the keys and walk away. You don't need to evict anyone or wait for a lease to expire.",
        },
        {
          q: "My Tower District bungalow needs a lot of work — roof, plumbing, the works. Will you still buy it?",
          a: "Absolutely. We specialize in buying older Tower District homes that need significant repairs — deferred roofs, outdated knob-and-tube wiring, galvanized plumbing, foundation issues, or full gut-renovations. You don't make a single repair. We factor the condition into our offer and handle everything after closing.",
        },
        {
          q: "How much is my Tower District home worth as a cash sale?",
          a: "Tower District homes currently sell for $220K–$450K on the open market depending on size, condition, and whether the property is tenant-occupied. Our cash offer reflects the as-is value — typically 75–85% of after-repair value. Every offer includes a free Broker Opinion of Value from Connor (DRE #02219124) so you can verify our number against the open market.",
        },
        {
          q: "How fast can you close on a Tower District property?",
          a: "We can close in as few as 7 days on a vacant property with clear title. Tenant-occupied properties typically take 21–30 days depending on lease terms and the tenant situation. If you need more time to arrange your move, we can close on your schedule — up to 60 days.",
        },
        {
          q: "I inherited a Tower District rental. The estate isn't fully settled yet. Can you still make an offer?",
          a: "Yes. We work with estate attorneys and probate courts regularly. We can make an offer subject to probate court approval and work within the timeline required by the court. Connor is a licensed CA real estate agent (DRE #02219124) with direct probate experience — we understand the process and won't rush you.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Sunnyside", slug: "sunnyside" },
        { name: "Fig Garden", slug: "fig-garden" },
        { name: "McLane / Hoover", slug: "mclane" },
        { name: "Fresno State Area", slug: "fresno-state" },
      ]}
    />
  );
}

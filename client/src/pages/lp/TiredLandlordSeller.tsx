import HighIntentLandingPage from "@/components/HighIntentLandingPage";

export default function TiredLandlordSeller() {
  return (
    <HighIntentLandingPage
      path="/lp/sell-house-with-tenants-fresno"
      source="lp-tired-landlord-fresno"
      eyebrow="Rental property exit"
      metaTitle="Tired Landlord Fresno Cash Buyer"
      metaDescription="Sell a Fresno rental property with tenants, damage, vacancy, or repairs. Direct cash buyer, no showings, no cleanout."
      title="Tired Landlord in Fresno? Sell the Rental As-Is"
      description="If rent collection, repairs, turnover, tenants, or property management has worn you out, we can buy the rental property as-is and work around tenant or vacancy issues."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80"
      heroImageAlt="Rental property in Fresno"
      urgency="Before you spend another month on repairs, vacancy, court, or management headaches, get a cash number for the property as it sits today."
      bullets={[
        "Problem tenants or vacancy",
        "Deferred maintenance",
        "Code or habitability issues",
        "Portfolio or single rental",
        "No showings to buyers",
        "Close on your timeline",
      ]}
      proof={[
        "We buy tenant-occupied and vacant rentals",
        "No repairs, turnover, or cleaning required",
        "Direct local buyer with proof of funds available",
      ]}
      sections={[
        { heading: "Exit without another repair cycle", body: "Many rental owners are not failing investors. They are just done with the next roof, HVAC call, turnover, unpaid rent, or property manager handoff. A cash sale can end the cycle cleanly." },
        { heading: "Tenant situations can be handled carefully", body: "If the property is occupied, we review lease status, communication needs, access, and closing timing. We do not need an open-house circus to make a decision." },
        { heading: "Portfolio sellers can move faster", body: "If you own multiple rentals across Fresno, Madera, Hanford, Visalia, Reedley, Selma, Sanger, or nearby towns, we can review them together and make a simple package offer." },
      ]}
      faqs={[
        { q: "Can you buy with tenants in place?", a: "Yes, depending on the lease, access, condition, and numbers." },
        { q: "Do I need to evict before selling?", a: "Not always. Sometimes selling with the tenant in place is cleaner." },
        { q: "Can you buy several rentals at once?", a: "Yes. Send the addresses and basic rent/condition notes." },
      ]}
      relatedLinks={[
        { label: "Tired landlord guide", href: "/sell-house-with-tenants-fresno" },
        { label: "Sell rental portfolio", href: "/sell-rental-portfolio" },
        { label: "Sell rental in Madera", href: "/sell-rental-property-madera" },
        { label: "Sell rental in Hanford", href: "/sell-rental-property-hanford" },
      ]}
      situationDefault="I own a rental property and want to sell as-is because I am tired of tenants, repairs, vacancy, or management."
    />
  );
}

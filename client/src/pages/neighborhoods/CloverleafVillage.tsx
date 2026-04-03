import CityPage from "@/components/CityPage";

export default function CloverleafVillage() {
  return (
    <CityPage
      city="Cloverleaf Village"
      county="Fresno"
      population="~18,000"
      slug="fresno-cloverleaf-village"
      description="Cloverleaf Village is a well-established residential neighborhood in northeast Fresno, bordered by Herndon Avenue to the north and Cedar Avenue to the east. Known for its quiet streets, mature trees, and a mix of 1970s–1990s single-family homes, Cloverleaf Village attracts longtime Fresno homeowners who have built significant equity over the decades. Many sellers in this neighborhood are downsizing, relocating for retirement, or dealing with inherited properties after a parent passes. Alder Heritage Homes buys houses throughout Cloverleaf Village for cash — no repairs, no showings, and no agent commissions."
      neighborhoods={["Herndon Corridor", "Cedar-Herndon", "Northeast Fresno", "Clovis Unified District"]}
      stats={[
        { label: "Avg Home Age", value: "1980s" },
        { label: "Median Price", value: "$340K" },
        { label: "Days on Market", value: "18" },
        { label: "Cash Offers", value: "28%" },
      ]}
      faqs={[
        { q: "Do you buy houses in Cloverleaf Village, Fresno?", a: "Yes. Alder Heritage Homes buys houses throughout Cloverleaf Village and northeast Fresno. We are a licensed California real estate agent (DRE #02219124) and real cash buyer — not a wholesaler. We can close in 5–7 days or on your timeline." },
        { q: "What is my Cloverleaf Village home worth?", a: "Cloverleaf Village homes typically sell in the $300,000–$400,000 range depending on size, condition, and exact location. We provide a free third-party Broker Opinion of Value with every offer so you can verify our number is fair before you decide." },
        { q: "Can I sell my Cloverleaf Village home without making repairs?", a: "Absolutely. We buy homes in any condition — deferred maintenance, outdated kitchens, foundation cracks, roof issues, or anything else. You don't need to fix a thing before we close." },
        { q: "How fast can you close on a Cloverleaf Village home?", a: "We can close in as little as 5–7 days once we have a signed purchase agreement. If you need more time to move or arrange your next home, we work around your schedule." },
      ]}
    />
  );
}

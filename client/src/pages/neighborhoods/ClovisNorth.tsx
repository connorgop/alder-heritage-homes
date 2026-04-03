import CityPage from "@/components/CityPage";
export default function ClovisNorth() {
  return <CityPage
    city="Clovis North, Clovis"
    county="Fresno"
    population="42,000"
    description="Clovis North is one of the most sought-after residential areas in the entire Central Valley, encompassing zip codes 93619 and 93611. Built primarily from the 1990s through the 2010s, Clovis North features master-planned communities with large lots, top-rated Clovis Unified schools (Buchanan High School, Clovis North High School), and easy freeway access to Highway 168. The area attracts high-income professionals, military families from NAS Lemoore, and retirees. Median home prices range from $450,000 to $700,000+, with luxury estates in gated communities like Copper River Ranch exceeding $1M. Homeowners here often need to sell quickly due to job relocation, divorce, or estate situations."
    neighborhoods={["Copper River Ranch", "Loma Vista", "Harlan Ranch", "Buchanan area", "Shepherd/Fowler Ave corridor", "Tarpey Village"]}
    stats={[
      { label: "Avg Home Price", value: "$450k–$700k+" },
      { label: "Zip Code(s)", value: "93619, 93611" },
      { label: "Homes Bought", value: "15+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "Can you buy a high-value Clovis North home for cash — or only lower-priced properties?", a: "We buy homes at all price points in Clovis North, including properties in Copper River Ranch and other luxury communities. Our cash offer is based on current comparable sales regardless of price. We have purchased homes from $300,000 to over $900,000 in the Clovis area. Higher-value homes may take 1–2 additional days to underwrite, but the process is the same." },
      { q: "I'm relocating for work and need to sell my Clovis North home fast — what's the timeline?", a: "Job relocation is one of the most common reasons Clovis North homeowners call us. We can close in as few as 5–7 days, or we can match your relocation timeline if you need more time. We handle all paperwork, coordinate with your employer's relocation package if applicable, and can close while you're already in your new city." },
      { q: "My Clovis North home is in perfect condition — will I get a fair offer or a lowball?", a: "Every offer we make includes a free third-party Broker Opinion of Value from an independent Fresno-area broker so you can verify the number is fair. We are licensed CA real estate agents (DRE #02219124) and are legally required to act in your best interest. If listing with a top-producing agent would net you significantly more, we will tell you that honestly — and refer you to one of the best agents in Clovis." },
      { q: "What is my Clovis North home worth as a cash sale vs. listing with a realtor?", a: "Cash offers typically come in at 85–92% of market value in exchange for speed, certainty, and zero repairs or commissions. On a $600,000 Clovis North home, that's roughly $510,000–$552,000 cash vs. $600,000 minus 6% commission ($36,000), repairs, and 45–60 days of carrying costs. For many sellers, especially those relocating or dealing with an estate, the cash route nets more after all costs are factored in." },
    ]}
  />;
}

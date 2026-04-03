import CityPage from "@/components/CityPage";

export default function FigGardenVillage() {
  return (
    <CityPage
      city="Fig Garden Village"
      county="Fresno"
      population="~12,000"
      slug="fresno-fig-garden-village"
      description="Fig Garden Village is one of Fresno's most prestigious neighborhoods, situated in the northwest part of the city near the Fig Garden Golf Club and the upscale Fig Garden Village shopping center. Homes here are larger, often custom-built, and sit on generous lots with mature landscaping. The neighborhood attracts executives, physicians, and established Fresno families. Sellers in Fig Garden Village often come to us when they're downsizing to a retirement community, settling an estate, or going through a divorce that requires a fast, confidential sale. Alder Heritage Homes buys houses in Fig Garden Village for cash — with discretion and professionalism that matches the neighborhood."
      neighborhoods={["Fig Garden Golf Club area", "Shaw-Millbrook corridor", "Northwest Fresno", "Palm-Shaw estates"]}
      stats={[
        { label: "Avg Home Size", value: "2,800 sf" },
        { label: "Median Price", value: "$520K" },
        { label: "Days on Market", value: "22" },
        { label: "Lot Size Avg", value: "0.35 ac" },
      ]}
      faqs={[
        { q: "Do you buy luxury homes in Fig Garden Village?", a: "Yes. Alder Heritage Homes purchases homes at all price points in Fig Garden Village, including higher-end properties. We are a licensed CA agent (DRE #02219124) with access to private buyer networks for premium properties. We provide a free Broker Opinion of Value so you know our offer is grounded in real market data." },
        { q: "Can I sell my Fig Garden Village home without listing it publicly?", a: "Yes. Many Fig Garden Village sellers prefer a private, off-market sale for privacy reasons — especially during a divorce or estate settlement. We handle all transactions with complete discretion. No sign in the yard, no public MLS listing, no open houses." },
        { q: "What is my Fig Garden Village home worth in 2026?", a: "Fig Garden Village homes typically sell between $450,000 and $700,000+ depending on size, condition, and lot. We provide a free third-party Broker Opinion of Value with every offer, prepared by a licensed appraiser, so you can verify our number independently." },
        { q: "How does the process work for a high-value home sale?", a: "The process is the same regardless of price: you contact us, we research your property and prepare a written cash offer within 24 hours, and you choose your closing date. We handle all paperwork through a licensed title company. No repairs, no commissions, no surprises." },
      ]}
    />
  );
}

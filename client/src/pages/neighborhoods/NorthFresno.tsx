import CityPage from "@/components/CityPage";

export default function NorthFresno() {
  return (
    <CityPage
      city="North Fresno"
      county="Fresno"
      population="~45,000"
      slug="north-fresno"
      description="North Fresno is one of the fastest-growing and most desirable areas in the entire Central Valley, stretching from Shaw Avenue north to Herndon and beyond toward Clovis. The area includes master-planned communities like Copper River Ranch, Riverlakes Ranch, and the Friant Road corridor — home to newer construction, golf course communities, and executive-level properties. Sellers in North Fresno often come to us when they need a fast, private sale without the disruption of traditional listing: corporate relocations, divorce settlements, estate liquidations, and downsizing to retirement communities. Alder Heritage Homes buys houses throughout North Fresno for cash, closing on your timeline."
      neighborhoods={["Copper River Ranch", "Riverlakes Ranch", "Friant Road Corridor", "Herndon-Willow", "Fig Garden Loop"]}
      stats={[
        { label: "Median Price", value: "$580K" },
        { label: "Avg Home Size", value: "2,400 sf" },
        { label: "Days on Market", value: "19" },
        { label: "New Construction", value: "Active" },
      ]}
      faqs={[
        { q: "Do you buy homes in North Fresno and Copper River?", a: "Yes. Alder Heritage Homes buys homes throughout North Fresno, including Copper River Ranch, Riverlakes Ranch, and the Friant Road corridor. We are a licensed CA agent (DRE #02219124) and real cash buyer — not a wholesaler." },
        { q: "Can I sell my North Fresno home without listing it?", a: "Yes. Many North Fresno sellers prefer a private, off-market sale for privacy and convenience. We handle the transaction completely off-market — no MLS listing, no sign in the yard, no open houses. Just a clean, professional sale." },
        { q: "What is my North Fresno home worth in 2026?", a: "North Fresno homes range from $450,000 to $800,000+ depending on community, size, and condition. We provide a free third-party Broker Opinion of Value with every offer so you can verify our number is grounded in real market data." },
        { q: "How quickly can you close on a North Fresno home?", a: "We can close in 5–7 days once we have a signed purchase agreement. If you need more time — to find your next home, coordinate a move to a retirement community, or handle an estate — we work around your schedule." },
      ]}
    />
  );
}

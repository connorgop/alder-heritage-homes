import CityPage from "@/components/CityPage";
export default function McLane() {
  return <CityPage
    city="McLane, Fresno"
    county="Fresno"
    population="30,000"
    description="McLane is a central Fresno neighborhood spanning zip codes 93703 and 93706, with homes built primarily between the 1930s and 1960s. This area has one of the highest concentrations of distressed, vacant, and absentee-landlord properties in Fresno — making it one of the most active markets for cash home buyers in the Central Valley. Median home prices range from $180,000 to $280,000. If you own a McLane property that's become a burden — whether it's a rental with problem tenants, a vacant home, or an inherited property — we can close in 5–7 days with no repairs required."
    neighborhoods={["Belmont/Blackstone", "Fresno/Chestnut", "McKinley/Fruit", "E. Belmont Ave", "N. Blackstone Ave"]}
    stats={[
      { label: "Avg Home Price", value: "$180k–$280k" },
      { label: "Zip Code(s)", value: "93703, 93706" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "I have a vacant McLane property that's been broken into — can you buy it fast?", a: "Yes — vacant properties are one of our most common purchases in McLane. We understand the urgency when a vacant home becomes a liability. We can close in as little as 5 days and take the property off your hands quickly, regardless of its condition or what's happened to it while it's been empty." },
      { q: "My McLane rental has squatters — do I have to evict them before selling?", a: "No. We buy McLane properties with squatters or problem tenants in place. You don't need to go through the eviction process before selling — we take on that responsibility after closing. This can save you months of time and thousands of dollars in legal fees." },
      { q: "What is my McLane home worth as a cash sale?", a: "McLane homes typically range from $180,000–$280,000 on the open market. Our cash offer will reflect current comparable sales in the neighborhood — and every offer includes a free third-party Broker Opinion of Value from an independent Fresno broker so you can verify our number before deciding." },
    ]}
  />;
}

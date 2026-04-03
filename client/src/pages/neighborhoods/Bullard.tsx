import CityPage from "@/components/CityPage";
export default function Bullard() {
  return <CityPage
    city="Bullard, Fresno"
    county="Fresno"
    population="40,000"
    description="Bullard is a large, established Northwest Fresno neighborhood spanning zip codes 93711 and 93722. Built primarily between the 1960s and 1980s, Bullard's tract homes represent some of Fresno's most stable real estate — good schools, tree-lined streets, and long-term owners who have held their properties for decades. Many Bullard homeowners are now reaching retirement age and considering their options. Median home prices range from $320,000 to $440,000, making it one of the most active areas for cash home sales in the Central Valley."
    neighborhoods={["Bullard/Marks", "Bullard/West", "Bullard/Fresno St", "Bullard/Palm", "West Fresno area"]}
    stats={[
      { label: "Avg Home Price", value: "$320k–$440k" },
      { label: "Zip Code(s)", value: "93711, 93722" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "My Bullard home needs updating — do I have to fix it before selling?", a: "Not at all. We buy Bullard homes exactly as they are — original kitchens, older bathrooms, deferred maintenance and all. Many Bullard homes were built in the 1960s–1980s and need cosmetic updates that sellers simply don't want to deal with. We make a fair offer based on current market values and close on your timeline, no repairs required." },
      { q: "How does selling my Bullard home for cash compare to listing with an agent?", a: "A traditional listing in Bullard typically takes 45–75 days and costs 5–6% in agent commissions plus repair costs. A cash sale closes in 5–7 days with zero commissions and zero repairs. The tradeoff is that cash offers are typically below full retail value — which is why we always provide a free third-party Broker Opinion of Value so you can compare both options and make the right choice for your situation." },
      { q: "Can you buy my Bullard home if I'm behind on property taxes?", a: "Yes. We regularly purchase homes with delinquent property taxes. The back taxes are simply paid off at closing from the sale proceeds — you don't need to come up with the money upfront. We handle all of the paperwork and coordinate with the Fresno County Tax Collector's office." },
    ]}
  />;
}

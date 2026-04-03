import CityPage from "@/components/CityPage";

export default function SoutheastFresno() {
  return (
    <CityPage
      city="Southeast Fresno"
      county="Fresno"
      population="~55,000"
      slug="southeast-fresno"
      description="Southeast Fresno encompasses a broad residential area south of Kings Canyon Road and east of Highway 99, including neighborhoods like Sunnyside, Reedley Road corridor, and the communities near Selma and Fowler. This part of Fresno has a high concentration of longtime homeowners — many of whom bought their homes in the 1960s through 1980s and have significant equity built up over decades. Sellers in Southeast Fresno often come to us when they're facing foreclosure, dealing with an inherited property, or simply ready to sell without the hassle of repairs and showings. Alder Heritage Homes buys houses throughout Southeast Fresno for cash, in any condition."
      neighborhoods={["Sunnyside", "Kings Canyon Corridor", "Reedley Road", "Selma-Fowler Border", "Easton Area"]}
      stats={[
        { label: "Avg Home Age", value: "1960s–1980s" },
        { label: "Median Price", value: "$265K" },
        { label: "Equity Avg", value: "High" },
        { label: "Days on Market", value: "24" },
      ]}
      faqs={[
        { q: "Do you buy houses in Southeast Fresno?", a: "Yes. Alder Heritage Homes buys houses throughout Southeast Fresno, including Sunnyside, the Kings Canyon corridor, and areas near Selma and Fowler. We are a licensed CA agent (DRE #02219124) and real cash buyer — not a wholesaler." },
        { q: "Can I sell my Southeast Fresno home if I'm behind on payments?", a: "Yes. We specialize in helping homeowners who are behind on mortgage payments or facing foreclosure. We can often close before a foreclosure sale date, stopping the process and protecting your credit. Call us immediately if you're in this situation — time matters." },
        { q: "Do you buy inherited homes in Southeast Fresno?", a: "Yes. We handle probate and inherited property sales regularly. Whether the estate is in probate, the property has deferred maintenance, or there are multiple heirs to coordinate, we have experience navigating these situations and can close on your timeline." },
        { q: "What is my Southeast Fresno home worth?", a: "Southeast Fresno homes typically sell between $220,000 and $320,000 depending on size, condition, and location. We provide a free Broker Opinion of Value with every offer so you can verify our number before deciding." },
      ]}
    />
  );
}

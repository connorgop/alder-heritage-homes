import CityPage from "@/components/CityPage";
export default function Porterville() {
  return (
    <CityPage
      city="Porterville"
      county="Tulare"
      population="60,000"
      description="Porterville sits at the base of the Sierra Nevada foothills in eastern Tulare County. We buy homes throughout Porterville — from the historic downtown core to the newer developments on the north end. We work with homeowners facing foreclosure, probate complications, inherited properties, and any situation where a fast, certain sale is more important than listing on the open market."
      neighborhoods={["Downtown Porterville","North Porterville","East Porterville","West Porterville","Porterville Heights","Olive Avenue Corridor"]}
      stats={[
        { label: "County", value: "Tulare County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses in Porterville, CA?", a: "Yes. We buy homes throughout Porterville and eastern Tulare County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer with capital — not a wholesaler." },
        { q: "Do you buy inherited or probate homes in Porterville?", a: "Yes. Probate and inherited properties are one of our specialties. We work with estate attorneys and can navigate the probate process to make the sale as smooth as possible for the family." },
        { q: "What condition does my Porterville home need to be in?", a: "Any condition. We've bought homes with no water, no sewer, full of trash, pest infestations, and major structural issues. You don't need to do anything before we close." },
        { q: "How do I know your offer is fair?", a: "We include a free third-party broker opinion of value with every offer so you can see exactly how we arrived at our number. No pressure, no obligation." },
      ]}
    />
  );
}

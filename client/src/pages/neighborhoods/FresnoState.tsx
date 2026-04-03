import CityPage from "@/components/CityPage";

export default function FresnoStateArea() {
  return (
    <CityPage
      city="Fresno State Area"
      county="Fresno"
      population="~25,000"
      slug="fresno-state-area"
      description="The Fresno State area encompasses the neighborhoods surrounding California State University, Fresno — including Woodward Park adjacent communities, the Bullard-Shaw corridor, and the established residential streets east of Blackstone Avenue. This area has a diverse mix of homeowners: longtime residents who bought in the 1980s and 1990s, landlords with student rental properties, and families who have owned homes for generations. Alder Heritage Homes regularly buys houses in the Fresno State area — from tired landlords dealing with student tenants to families selling a parent's home after decades of ownership."
      neighborhoods={["Woodward Park East", "Bullard-Shaw Corridor", "Blackstone-Shaw", "Cedar-Gettysburg"]}
      stats={[
        { label: "Avg Home Age", value: "1975–1995" },
        { label: "Median Price", value: "$310K" },
        { label: "Rental Rate", value: "42%" },
        { label: "Days on Market", value: "21" },
      ]}
      faqs={[
        { q: "Do you buy rental properties near Fresno State?", a: "Yes. We regularly buy rental properties near Fresno State, including homes with student tenants currently in place. You don't need to wait for leases to expire or deal with evictions — we can purchase the property with tenants and handle the transition ourselves." },
        { q: "Can I sell a Fresno State area home with deferred maintenance?", a: "Absolutely. Many homes in this area have deferred maintenance from years of rental use — outdated kitchens, worn flooring, aging HVAC. We buy as-is with no repair requirements. We've purchased properties in far worse condition." },
        { q: "What is my Fresno State area home worth?", a: "Homes in the Fresno State area typically sell between $270,000 and $380,000 depending on size, condition, and proximity to campus. We provide a free Broker Opinion of Value with every offer so you can verify our number is fair." },
        { q: "How do you handle a sale with tenants in the property?", a: "We are experienced with tenant-occupied sales. We review the existing lease, coordinate with tenants professionally, and handle all required California notice requirements. You receive your cash at closing without having to manage the tenant transition." },
      ]}
    />
  );
}

import CityPage from "@/components/CityPage";
export default function Sunnyside() {
  return <CityPage
    city="Sunnyside, Fresno"
    county="Fresno"
    population="22,000"
    description="Sunnyside is a working-class neighborhood in Southeast Fresno, spanning zip codes 93727 and 93702. Homes here were built primarily between the 1940s and 1970s — solid construction, affordable price points, and a high proportion of inherited and distressed properties. Many Sunnyside homes are held by absentee landlords dealing with problem tenants, or by heirs who inherited a property they don't want to manage. Median home prices range from $200,000 to $310,000, making Sunnyside one of the most active markets for cash sales in Fresno."
    neighborhoods={["Kings Canyon corridor", "Tulare/Chestnut area", "Sunnyside/Clovis Ave", "E. Kings Canyon Rd", "Chestnut/Tulare"]}
    stats={[
      { label: "Avg Home Price", value: "$200k–$310k" },
      { label: "Zip Code(s)", value: "93727, 93702" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "I have a rental property in Sunnyside with bad tenants — can you buy it?", a: "Yes — tenant-occupied properties are one of our specialties. We buy Sunnyside rental homes with tenants in place, whether they're paying or not. You don't have to go through a lengthy eviction process before selling. We take on the tenant situation as part of the purchase and handle it ourselves after closing." },
      { q: "I inherited a Sunnyside home that needs a lot of work — what are my options?", a: "We buy inherited Sunnyside properties in any condition — even those that need significant repairs, have deferred maintenance, or have been vacant for years. We can close in 5–7 days and handle all the paperwork. You don't need to clean out the property or make any repairs before we close." },
      { q: "What is my Sunnyside home worth?", a: "Sunnyside homes typically range from $200,000–$310,000 depending on size, condition, and exact location. Every offer we make includes a free third-party Broker Opinion of Value from an independent Fresno broker — so you'll know exactly what your home is worth on the open market before you decide whether a cash sale is right for you." },
    ]}
  />;
}

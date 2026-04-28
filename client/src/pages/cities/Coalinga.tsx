import CityPage from "@/components/CityPage";
export default function Coalinga() {
  return (
    <CityPage
      city="Coalinga"
      county="Fresno"
      population="17,000"
      description="Coalinga is a small city in western Fresno County, historically tied to oil production and agriculture. We buy homes throughout Coalinga — including older homes, properties near the correctional facility, and homes that have been in families for generations."
      neighborhoods={["Downtown Coalinga","Coalinga Heights","West Coalinga","Jayne Avenue","Coalinga Estates","North Coalinga","Elm Avenue Corridor","Coalinga State Hospital Area"]}
      realDeals={[
        {
          href: "/case-studies/armona-ca",
          tag: "Outbid a Wholesaler",
          tagColor: "oklch(0.45 0.15 25)",
          address: "Armona, CA — Kings County",
          stat1: { label: "Post-Close Move-Out Time", value: "3 Weeks Free" },
          stat2: { label: "Moving Truck", value: "Paid by Connor" },
          summary: "Seller had already signed with a company calling itself 'California's biggest home buyer.' Connor exposed the wholesaler contract, outbid them, and gave the seller 3 free weeks post-close.",
          quote: "Connor explained exactly what they were doing with my contract. I had no idea.",
        },
      ]}
    />
  );
}

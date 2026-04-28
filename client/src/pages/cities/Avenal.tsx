import CityPage from "@/components/CityPage";
export default function Avenal() {
  return (
    <CityPage
      city="Avenal"
      county="Kings"
      population="13,000"
      description="Avenal is a small city in Kings County in the western San Joaquin Valley. We buy homes throughout Avenal — including properties near the state prison, agricultural worker housing, and homes that need significant repairs or have been sitting vacant."
      neighborhoods={["Downtown Avenal","Avenal Heights","West Avenal","Skyline Drive","Avenal Cutoff","Kings County Estates","North Avenal","Avenal State Prison Area"]}
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

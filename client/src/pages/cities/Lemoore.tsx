import CityPage from "@/components/CityPage";
export default function Lemoore() {
  return (
    <CityPage
      city="Lemoore"
      county="Kings"
      population="26,000"
      description="Lemoore is a growing Kings County city home to Naval Air Station Lemoore — the largest master jet base on the West Coast. We buy homes throughout Lemoore, from neighborhoods near NAS Lemoore to downtown and the surrounding farmland communities. Military PCS orders, divorce, probate, or any situation — we close fast on your timeline."
      neighborhoods={["Downtown Lemoore","NAS Lemoore Area","Lemoore Station","Hanford Road Corridor","West Lemoore","South Lemoore"]}
      stats={[
        { label: "County", value: "Kings County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy homes near NAS Lemoore?", a: "Yes. We regularly work with military families receiving PCS orders who need to sell quickly. We understand the urgency and can close in 3 days or on whatever timeline works for your orders." },
        { q: "Do you buy homes in Kings County?", a: "Absolutely. We buy throughout Kings County including Lemoore, Hanford, and the surrounding agricultural communities. No repairs needed, no agent commissions." },
        { q: "What if my Lemoore home needs major repairs?", a: "We buy as-is. We've purchased homes with foundation issues, fire damage, pest infestations, and full of trash. You don't need to clean or fix anything." },
        { q: "How is Alder Heritage Homes different from other cash buyers in Lemoore?", a: "We are a licensed California real estate agent (DRE #02219124) and a real buyer with actual capital. We are not a wholesaler who will lock you into a contract and then try to sell it to someone else. We close what we open." },
      ]}
      realDeals={[
        {
          href: "/case-studies/armona-ca",
          tag: "Outbid a Wholesaler",
          tagColor: "oklch(0.45 0.15 25)",
          address: "Armona, CA — 5 mi east",
          stat1: { label: "Post-Close Move-Out Time", value: "3 Weeks Free" },
          stat2: { label: "Moving Truck", value: "Paid by Connor" },
          summary: "Seller had already signed with a company calling itself 'California's biggest home buyer.' Connor exposed the wholesaler contract, outbid them, and gave the seller 3 free weeks post-close.",
          quote: "Connor explained exactly what they were doing with my contract. I had no idea.",
        },
      ]}
    />
  );
}

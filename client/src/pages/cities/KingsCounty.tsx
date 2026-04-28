import CityPage from "@/components/CityPage";
export default function KingsCounty() {
  return (
    <CityPage
      city="Kings County"
      county="Kings"
      population="153,000"
      description="Kings County is an agricultural powerhouse in the heart of the Central Valley, anchored by Hanford and Lemoore. We buy homes throughout Kings County — from Hanford and Lemoore to Avenal, Corcoran, and the rural communities in between. Agricultural land, farmhouses, distressed properties, probate estates, and homes near NAS Lemoore — we are a real buyer who closes on your timeline."
      neighborhoods={["Hanford","Lemoore","Avenal","Corcoran","Armona","Stratford","Home Garden","Kettleman City"]}
      stats={[
        { label: "County", value: "Kings County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy homes in rural Kings County?", a: "Yes. We buy throughout Kings County including rural properties, farmhouses, and homes in smaller communities like Avenal, Corcoran, and Armona. Distance is not an issue." },
        { q: "Do you buy homes near NAS Lemoore?", a: "Yes. We regularly work with military families receiving PCS orders who need to sell quickly. We understand the urgency and can close in 5–7 days." },
        { q: "Can you buy agricultural or farm properties in Kings County?", a: "Yes. We have experience with agricultural properties and can work with your timeline for any farm-related sale. Contact us to discuss your specific situation." },
        { q: "How do I avoid wholesalers when selling in Kings County?", a: "Ask for proof of funds before signing. If the contract says 'and/or assignee' or has an inspection period, they are a wholesaler. We are a licensed California real estate agent (DRE #02219124) and a real buyer with capital." },
      ]}
      realDeals={[
        {
          href: "/case-studies/armona-ca",
          tag: "Kings County Deal",
          tagColor: "oklch(0.45 0.15 25)",
          address: "Armona, CA — Kings County",
          stat1: { label: "Post-Close Move-Out Time", value: "3 Weeks Free" },
          stat2: { label: "Moving Truck", value: "Paid by Connor" },
          summary: "Seller had already signed with a company calling itself 'California's biggest home buyer.' Connor exposed the wholesaler contract, outbid them, and gave the seller 3 free weeks post-close.",
          quote: "Connor explained exactly what they were doing with my contract. I had no idea.",
        },
        {
          href: "/case-studies/1944-idlewood-circle-hanford",
          tag: "4-Day Close",
          tagColor: "oklch(0.55 0.13 42)",
          address: "1944 Idlewood Circle, Hanford",
          stat1: { label: "Purchase Price", value: "$220K" },
          stat2: { label: "Days to Close", value: "4" },
          summary: "Family burned by two wholesalers who wasted months of their time. We made an offer from photos alone, outbid the competition with a real purchase, and closed in 4 days.",
          quote: "Are you actually going to buy it, or are you going to do what the other guys did?",
        },
      ]}
    />
  );
}

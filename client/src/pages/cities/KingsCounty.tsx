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
    />
  );
}

import CityPage from "@/components/CityPage";
export default function Turlock() {
  return (
    <CityPage
      city="Turlock"
      county="Stanislaus"
      population="74,000"
      description="Turlock is the second-largest city in Stanislaus County and home to California State University Stanislaus. We buy homes throughout Turlock — from the established neighborhoods near downtown to the newer developments on the east side and student-area rentals near CSU Stanislaus. Tired landlords, foreclosure, probate, or any situation where you need a fast, certain sale — we're the real buyer."
      neighborhoods={["Downtown Turlock","East Turlock","North Turlock","CSU Stanislaus Area","West Turlock","Christoffersen Parkway Corridor"]}
      stats={[
        { label: "County", value: "Stanislaus County" },
        { label: "Close Timeline", value: "5–7 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
      ]}
      faqs={[
        { q: "Do you buy houses in Turlock, CA?", a: "Yes. We buy homes throughout Turlock and Stanislaus County. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer with capital to close." },
        { q: "Do you buy rental properties near CSU Stanislaus?", a: "Yes. We work with tired landlords who own rental properties near the university and want to exit. We can buy single properties or multiple rentals in one transaction." },
        { q: "How fast can you close in Turlock?", a: "We can close in as little as 5–7 days. If you need more time to arrange your move, we work on your timeline — not ours." },
        { q: "What makes you different from other cash buyers in Turlock?", a: "We are a licensed California real estate agent and a real buyer. We include a free third-party broker opinion of value with every offer so you know our number is fair. No wholesaling, no bait-and-switch." },
      ]}
    />
  );
}

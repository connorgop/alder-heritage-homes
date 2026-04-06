import CityPage from "@/components/CityPage";
export default function Parlier() {
  return (
    <CityPage
      city="Parlier"
      county="Fresno"
      population="15,000"
      description="Parlier is a small agricultural community in Fresno County, located between Selma and Reedley along Manning Avenue. One of the most affordable markets in Fresno County with a median home price around $265,000, Parlier has a high concentration of older homes and strong cash buyer demand. We buy houses throughout Parlier in any condition — no repairs, no commissions, close in 7 days."
      neighborhoods={[
        "Downtown Parlier",
        "East Parlier",
        "West Parlier",
        "Manning Avenue Corridor",
        "Parlier Heights",
        "South Parlier",
        "Newmark Avenue",
        "Parlier Estates",
      ]}
    />
  );
}

import CityPage from "@/components/CityPage";
export default function TowerDistrict() {
  return <CityPage
    city="Tower District, Fresno"
    county="Fresno"
    population="25,000"
    description="The Tower District is Fresno's historic midtown arts neighborhood, centered around the iconic Tower Theatre on E. Olive Ave. Zip code 93728 is home to craftsman bungalows and 1920s–1940s homes that rarely appear on the open market — many are inherited by family members who live out of state and need a fast, simple sale. Median home prices range from $250,000 to $380,000, making Tower District one of Fresno's most active markets for probate and estate sales."
    neighborhoods={["Olive Ave corridor", "E. Belmont Ave", "N. Van Ness Ave", "Wishon Ave", "E. Divisadero St"]}
    stats={[
      { label: "Avg Home Price", value: "$250k–$380k" },
      { label: "Zip Code(s)", value: "93728" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "I inherited a Tower District home — how do I sell it quickly?", a: "Inherited Tower District properties are one of our specialties. We work with executors, trustees, and out-of-state heirs to make the process as simple as possible. We can close in 5–7 days, handle all paperwork, and you don't need to clean out or repair anything. If probate is still open, we can work around the court timeline." },
      { q: "Do Tower District homes sell well as-is?", a: "Yes — and cash buyers are often the best option for older Tower District craftsman homes because traditional buyers frequently request repairs that are expensive on 80–100 year old homes. We buy as-is, which means no inspection contingencies, no repair requests, and no surprises at closing." },
      { q: "What is my Tower District home worth?", a: "Tower District homes typically range from $250,000–$380,000 depending on size, condition, and exact location. Every offer we make includes a free third-party Broker Opinion of Value from an independent Fresno broker — so you'll know exactly what your home is worth before you decide anything." },
    ]}
  />;
}

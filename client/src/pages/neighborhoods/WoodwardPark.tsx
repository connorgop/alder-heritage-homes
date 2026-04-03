import CityPage from "@/components/CityPage";
export default function WoodwardPark() {
  return <CityPage
    city="Woodward Park, Fresno"
    county="Fresno"
    population="35,000"
    description="Woodward Park is one of Northeast Fresno's most desirable master-planned communities, spanning zip codes 93720 and 93730. Homes here were built primarily between the 1980s and 2000s — larger floor plans, good schools, and proximity to Woodward Regional Park and the Fig Garden Golf Course. The neighborhood has a high concentration of military families from NAS Lemoore who need to sell quickly on PCS orders, as well as retirees moving to senior communities like Fairwinds Woodward Park. Median home prices range from $400,000 to $550,000."
    neighborhoods={["Copper River area", "Shepherd/Audubon", "Audubon Dr corridor", "Friant Rd corridor", "Nees Ave area"]}
    stats={[
      { label: "Avg Home Price", value: "$400k–$550k" },
      { label: "Zip Code(s)", value: "93720, 93730" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "I have PCS orders from NAS Lemoore — can you buy my Woodward Park home fast?", a: "Yes — military PCS sales are one of our most common transactions. We understand the timeline pressure of PCS orders and can close in 5–7 days, or coordinate with your report date. We also understand BAH implications and can help you think through whether a cash sale or traditional listing makes more sense for your specific situation." },
      { q: "I want to move to Fairwinds Woodward Park — can I sell my home and still have time to move?", a: "Absolutely. We can close on your timeline — whether that's 2 weeks or 2 months. We also offer a rent-back arrangement where you sell your home, receive your cash at closing, and continue living there while you finalize your move to Fairwinds or another retirement community. This is one of the most popular options for Woodward Park seniors." },
      { q: "What is my Woodward Park home worth as a cash sale?", a: "Woodward Park homes typically sell for $400,000–$550,000 on the open market. Our cash offer will be based on current comparable sales — and every offer includes a free third-party Broker Opinion of Value from an independent Fresno broker so you can verify the number is fair." },
    ]}
  />;
}

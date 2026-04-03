import CityPage from "@/components/CityPage";
export default function FigGarden() {
  return <CityPage
    city="Fig Garden, Fresno"
    county="Fresno"
    population="18,000"
    description="Fig Garden is one of Fresno's most prestigious neighborhoods, located in Northwest Fresno along zip codes 93704 and 93711. Known for its spacious 1950s–1970s ranch-style homes on large lots, this established community sits adjacent to the Fig Garden Village shopping center. Many long-term homeowners here are now at retirement age and considering downsizing — making it one of the most active neighborhoods for cash home sales in Fresno. Median home prices typically range from $450,000 to $600,000."
    neighborhoods={["Fig Garden Loop", "Van Ness Extension", "Bullard/Palm area", "Palm Ave corridor", "Shields Ave corridor"]}
    stats={[
      { label: "Avg Home Price", value: "$450k–$600k" },
      { label: "Zip Code(s)", value: "93704, 93711" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "Can I sell my Fig Garden home without making repairs?", a: "Absolutely. We buy Fig Garden homes in any condition — whether the home needs cosmetic updates, has deferred maintenance, or requires major renovation. You don't need to paint, clean, or fix anything before we close. Many Fig Garden sellers have lived in their homes for 30–40 years and simply want a clean, fast sale without the hassle of a traditional listing." },
      { q: "How much is my Fig Garden home worth as a cash sale?", a: "Fig Garden homes typically sell for $450,000–$600,000 on the open market depending on size, lot, and condition. Our cash offer will reflect current market values — and every offer we make includes a free third-party Broker Opinion of Value from an independent Fresno broker so you can verify our number is fair before you decide anything." },
      { q: "How fast can you close on a Fig Garden property?", a: "We can close in as little as 5–7 days, or on whatever timeline works best for you. If you need 60 days to sort out your move, that's fine too. We also offer a rent-back option — sell your home, receive your cash, and continue living there while you finalize your next chapter." },
    ]}
  />;
}

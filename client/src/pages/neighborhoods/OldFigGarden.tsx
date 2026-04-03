import CityPage from "@/components/CityPage";
export default function OldFigGarden() {
  return <CityPage
    city="Old Fig Garden, Fresno"
    county="Fresno"
    population="5,500"
    description="Old Fig Garden is Fresno's most historic residential neighborhood — a small, tree-lined enclave in Northwest Fresno (zip 93704) featuring pre-WWII craftsman bungalows, Tudor revival homes, and Spanish Colonial architecture. Located near the Fresno Country Club and adjacent to the Fig Garden neighborhood, Old Fig Garden properties are among the most distinctive in the Central Valley. Many homes here have been in the same family for generations and come to market only through estate and probate sales. Median home prices range from $380,000 to $520,000."
    neighborhoods={["Van Ness/Shields", "Palm/Maroa", "Calaveras/Fresno St", "Fresno Country Club area", "W. Shields Ave"]}
    stats={[
      { label: "Avg Home Price", value: "$380k–$520k" },
      { label: "Zip Code(s)", value: "93704" },
      { label: "Homes Bought", value: "20+" },
      { label: "Avg Close Time", value: "7 Days" },
    ]}
    faqs={[
      { q: "I'm settling an estate for an Old Fig Garden property — how does a cash sale work?", a: "Estate and probate sales in Old Fig Garden are one of our specialties. We work directly with executors, trustees, and attorneys to make the process as simple as possible. If probate is still open, we can work around the court approval timeline. We buy as-is — no cleanout, no repairs, no staging — and can close in 5–7 days once the estate is ready." },
      { q: "Old Fig Garden homes are unique — will a cash buyer understand the value?", a: "Absolutely. We understand that pre-WWII craftsman and Tudor revival homes in Old Fig Garden carry significant historical and architectural value that standard automated valuations often miss. Every offer we make includes a free third-party Broker Opinion of Value from an experienced Fresno broker who knows the neighborhood — so you'll get a fair number that reflects the true character of your home." },
      { q: "Can you buy an Old Fig Garden home that needs significant restoration?", a: "Yes. We buy Old Fig Garden properties in any condition — from well-maintained homes to those that need full restoration. We appreciate the architectural character of these historic homes and factor that into our offers. You don't need to make any repairs or improvements before we close." },
    ]}
  />;
}

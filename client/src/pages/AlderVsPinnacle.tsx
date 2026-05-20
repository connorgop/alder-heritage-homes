import CompetitorInterceptPage from "./CompetitorInterceptPage";

export default function AlderVsPinnacle() {
  return (
    <CompetitorInterceptPage
      competitor="Pinnacle Home Buyers"
      slug="/alder-vs-pinnacle-home-buyers"
      competitorPositioning="Pinnacle Home Buyers presents itself as a Central California cash buyer for sellers who want a simple sale, no commissions, and a faster alternative to the traditional market."
      bestFor={[
        "Sellers who want to compare several local cash buyers.",
        "Owners who want a fast as-is sale but still want competing opinions.",
        "Properties where speed and simplicity matter more than full retail exposure.",
      ]}
      compareNotes={[
        "Ask if the company is the final buyer or if another buyer must be found.",
        "Ask what contingencies remain after signing.",
        "Ask whether the buyer has handled probate, foreclosure, tenants, or title problems like yours.",
        "Ask for a written close date and proof of funds.",
        "Compare net proceeds after closing costs and credits.",
        "Do not rely on verbal promises if the contract says something different.",
      ]}
      localAngle="Alder is trying to win the complicated files that generic cash-buyer pages often underserve: probate homes with multiple heirs, foreclosure deadlines, tired landlord properties, title/deed issues, unpaid property taxes, and as-is houses in smaller Valley markets."
    />
  );
}

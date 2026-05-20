import CompetitorInterceptPage from "./CompetitorInterceptPage";

export default function AlderVsHomeHelpers() {
  return (
    <CompetitorInterceptPage
      competitor="Home Helpers Group"
      slug="/alder-vs-home-helpers-group"
      competitorPositioning="Home Helpers Group markets to Central Valley sellers looking for a fast cash sale, no repairs, no commissions, and a simpler process than listing with a realtor."
      bestFor={[
        "Sellers who want another Central Valley cash-offer comparison.",
        "Owners who are mainly comparing speed, fees, and repair requirements.",
        "Homes where the seller wants multiple offers before deciding.",
      ]}
      compareNotes={[
        "Ask whether the initial offer can change after walkthrough or inspection.",
        "Ask who pays title, escrow, closing costs, and any seller-side fees.",
        "Ask whether they can close if tenants, probate, or title issues exist.",
        "Ask for proof of funds before taking the property off the market.",
        "Compare how fast each buyer can open escrow after signing.",
        "Compare the written terms, not just the phone estimate.",
      ]}
      localAngle="Alder competes by being specific: licensed CA agent, direct local buyer, proof-focused process, and pages built around actual seller situations like probate, foreclosure, deed/title issues, rentals with tenants, and back taxes."
    />
  );
}

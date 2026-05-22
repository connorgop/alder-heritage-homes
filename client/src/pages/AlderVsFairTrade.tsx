import CompetitorInterceptPage from "./CompetitorInterceptPage";

export default function AlderVsFairTrade() {
  return (
    <CompetitorInterceptPage
      competitor="Fair Trade Real Estate"
      slug="/alder-vs-fair-trade-real-estate"
      competitorPositioning="Fair Trade Real Estate presents itself as a California cash home buyer and licensed real estate brokerage. Their site says they buy houses in any condition and also has a separate wholesaler partnership page for assignable purchase contracts."
      bestFor={[
        "Sellers who want to compare a larger California buyer against a Fresno-focused local buyer.",
        "Owners who are comfortable asking direct questions about assignments, closing entity, and proof of funds.",
        "Homes where the seller wants more than one written offer before deciding.",
      ]}
      compareNotes={[
        "Ask whether your contract can be assigned to another buyer or whether the company will be the end buyer.",
        "Ask for proof of funds from the closing entity before you stop talking to other buyers.",
        "Ask whether the offer can change after walkthrough, inspection, or repair review.",
        "Ask who pays escrow, title, closing costs, back taxes, liens, or tenant-related costs.",
        "Ask how they handle probate, multiple heirs, clouded title, deed issues, and unpaid property taxes.",
        "Compare the written net number after all costs, credits, concessions, and closing conditions.",
      ]}
      publicSignals={[
        "Fair Trade's public site describes itself as a brokerage that buys homes directly and says sellers do not pay commission when selling directly to the company.",
        "Fair Trade's wholesaler page publicly invites assignable purchase contracts and says it buys deals from local wholesalers.",
        "That does not automatically make every seller transaction a wholesale deal, but it is a reason to ask direct questions before signing.",
        "The key question is simple: who is the end buyer named in escrow, and can they prove funds now?",
      ]}
      sourceNote="Public signals referenced from fairtraderealestate.com and fairtraderealestate.com/wholesalers, reviewed May 2026. Verify current terms directly before relying on any buyer's marketing."
      localAngle="Alder tries to win by being the Fresno and Central Valley second-opinion buyer: direct local conversation, CA DRE #02219124, title/deed issue focus, probate and foreclosure experience, and a written comparison of the real net offer before you sign."
    />
  );
}

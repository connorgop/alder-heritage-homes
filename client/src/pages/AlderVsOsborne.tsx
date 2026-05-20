import CompetitorInterceptPage from "./CompetitorInterceptPage";

export default function AlderVsOsborne() {
  return (
    <CompetitorInterceptPage
      competitor="Osborne Homes"
      slug="/alder-vs-osborne-homes"
      competitorPositioning="Osborne Homes has a large California footprint, a long history in the cash-buyer space, and broad as-is seller messaging. They are one of the best-known names a Fresno seller may see while comparing options."
      bestFor={[
        "Sellers who want to compare with a larger statewide buyer.",
        "Homes where a broad as-is purchase process is enough.",
        "Owners who prefer calling several established buyers before choosing.",
      ]}
      compareNotes={[
        "Ask whether the buyer is purchasing directly or assigning the contract.",
        "Ask for proof of funds and the exact closing entity.",
        "Compare closing timeline after title, escrow, and payoff requirements are known.",
        "Compare how each buyer handles probate, deed issues, liens, taxes, and tenants.",
        "Compare the final net after fees, credits, repairs, and closing costs.",
        "Get every promise in writing before signing.",
      ]}
      localAngle="Alder is focused on Fresno and Central Valley seller problems, especially complicated local files: inherited homes, title/deed issues, foreclosure deadlines, tenant-occupied rentals, unpaid taxes, and properties where the seller needs a direct conversation with the person making the decision."
    />
  );
}

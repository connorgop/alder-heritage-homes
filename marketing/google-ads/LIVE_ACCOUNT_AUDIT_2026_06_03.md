# Live Google Ads Audit — June 3, 2026

I inspected the Alder Heritage Homes Google Ads account in Chrome.

## What I Saw

- Account has 2 enabled campaigns.
- `high intent cash sellers` is a Smart campaign.
  - Date range visible: April 16-May 13, 2026.
  - Spend shown: `$81.65`.
  - Clicks shown: `353`.
  - Conversions shown: `0.00`.
  - Bid strategy: Maximize clicks.
- `Problem Property Sellers` is a Search campaign.
  - Budget shown: `$8.00/day`.
  - Status: bid strategy learning.
  - Spend/clicks/conversions visible: `0`.
  - Optimization score visible: `92.6%`.
- Visible active keywords in the Search campaign included:
  - `[sell rental property with tenants]`
  - `"sell house before foreclosure"`
  - `"sell house with liens"`
  - `"inherited house sell fast"`
  - `[sell house with squatters]`
  - `[stop foreclosure fresno]`
  - `[sell house with title issues]`
  - `[sell inherited house fresno]`

## Main Risk

Do not scale budget until conversion tracking and search terms are clean.

The Smart campaign produced cheap clicks, but the account showed zero conversions. That can mean either:

- tracking is not recording properly, or
- traffic quality is weak, or
- lead forms/calls are not converting.

The Search campaign is structurally better because it uses exact/phrase keywords, but it is too thin and has no visible performance yet.

## Immediate Google Ads Actions

1. Keep daily budget controlled until calls/forms are verified.
2. Add account-level negative keywords from `negative-keywords.csv`.
3. Add the new insurance/problem-property keywords from `keywords.csv`.
4. Use exact match first if budget is tight.
5. Review search terms every day for the first 10 days.
6. Do not blindly apply Google recommendations that expand broad traffic.
7. Add image assets and callout assets only if they reinforce trust:
   - Licensed CA Agent
   - Direct Buyer
   - Proof Of Funds
   - Cash Offer Or Listing Option
   - Title Issues OK
   - Squatters/Tenants OK
   - Fresno & Central Valley

## Best Landing Pages To Use

- Problem property searches: `/we-buy-problem-houses-fresno`
- Insurance/water/flood/fire claim searches: `/sell-house-insurance-claim-problems-fresno`
- Squatters: `/sell-house-with-squatters-fresno`
- Tenants/tired landlord: `/sell-house-with-tenants-fresno`
- Title/deed/liens: `/sell-house-title-issues-fresno`
- Probate/inherited: `/probate-homes`
- Foreclosure: `/foreclosure-help`
- General paid traffic: `/ads/lead-capture`

## Keywords Added To Asset Generator

The Ads asset generator now includes additional distressed-seller intent:

- sell boarded up house
- sell vandalized house
- sell condemned house
- sell house after break in
- sell house with stolen copper
- sell fire damaged house
- sell burned house
- sell flooded house
- sell water damaged house
- sell house after sewer backup
- sell house with mold
- sell house with roof damage
- sell house with foundation problems
- sell house code violations
- sell house with unpermitted work
- sell house insurance claim
- sell house insurance denied
- insurance denied water damage house
- sell house after flood claim
- sell house after water damage claim
- bad credit own a home
- cannot refinance my house

## Negative Keywords Added

Added negatives to reduce wasted spend from restoration, loan, insurance, and service-provider searches:

- restoration company
- water damage restoration
- fire damage restoration
- mold remediation
- public adjuster
- insurance adjuster
- home insurance quote
- insurance agent
- flood insurance
- contractor
- roofing company
- plumber
- boarding service
- board up service
- credit card
- personal loan
- mortgage rates
- refinance rates
- home equity loan
- heloc rates

## Rule Before Increasing Spend

Only increase budget after at least one of these is true:

- a form lead is visible in the CRM/email and Google Ads records a conversion,
- a phone call from an ad is tracked and marked as a qualified seller,
- Search Terms show mostly seller intent, not research/service-provider traffic.

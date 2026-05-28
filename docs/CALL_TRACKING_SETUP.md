# Call Tracking Setup

The site now supports source-aware tracking phone numbers with a safe fallback to `(559) 281-8016`.

Add any tracking numbers you buy from CallRail, WhatConverts, Google forwarding, or another provider as Manus/Vite environment variables:

```txt
VITE_CALL_TRACKING_DEFAULT=5592818016
VITE_CALL_TRACKING_GOOGLE_ADS=5590000001
VITE_CALL_TRACKING_GBP=5590000002
VITE_CALL_TRACKING_SOCIAL=5590000003
VITE_CALL_TRACKING_FORECLOSURE=5590000004
VITE_CALL_TRACKING_PROBATE=5590000005
VITE_CALL_TRACKING_LANDLORD=5590000006
VITE_CALL_TRACKING_DISTRESSED=5590000007
VITE_CALL_TRACKING_TITLE=5590000008
```

Routing logic:

- Google Ads traffic: `utm_source=google`, `utm_medium=cpc`, `gclid`, or paid campaign/source wording.
- Google Business Profile traffic: `utm_source=gbp` or `business-profile`.
- Social traffic: Facebook, Instagram, or Meta source/referrer.
- Page intent fallback: foreclosure, probate, landlord/tenant, squatter/vacant, title/deed/lien/tax.

If no matching tracking number is configured, the site displays and dials the main Alder number.

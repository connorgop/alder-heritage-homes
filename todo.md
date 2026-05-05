# Alder Heritage Homes - Project TODO

## Lead Capture Form
- [x] Fix lead capture form submission (was broken with dummy Web3Forms key)
- [x] Upgrade project to full-stack (backend server + database)
- [x] Create `leads` database table with proper schema
- [x] Build tRPC `leads.submit` API endpoint (public - no auth required)
- [x] Build tRPC `leads.list` API endpoint (admin only)
- [x] Forward leads to Formspree (xdaplywz) for email delivery to connorgop@gmail.com
- [x] Send Manus owner notification on each new lead
- [x] Rewrite LeadCapture.tsx to use tRPC backend API
- [x] Add proper success page after form submission
- [x] Add step indicator (Step 1: Your Info, Step 2: Your Home)
- [x] Write vitest tests for leads.submit and leads.list (6 tests passing)
- [x] Verify end-to-end form submission works on dev server

## SEO & Content
- [x] Restore and preserve Home.tsx content (schema markup, FAQ, trust badges)
- [ ] Add city-specific landing pages (Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford)
- [ ] Add blog section with SEO-optimized content
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Schema markup for LocalBusiness, FAQPage, Article

## Website Pages
- [ ] About page (Connor's story, license info, mission)
- [ ] How It Works page
- [ ] Testimonials/Reviews page
- [ ] Competitor Warning page
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Contact page

## Admin Dashboard
- [ ] Admin leads dashboard to view all submissions
- [ ] Lead status management (new → contacted → qualified → closed)

## Website Redesign (Visual Overhaul)
- [x] Research old website design via Wayback Machine and live site screenshots
- [x] Gather photos of Connor and property images for the site
- [x] Redesign homepage hero with professional photo of Connor
- [x] Add "About Connor" section with personal story and photo
- [x] Add professional property/house imagery throughout
- [x] Improve overall typography, spacing, and color scheme
- [ ] Add testimonials section with real social proof
- [x] Make site fully responsive and mobile-optimized
- [x] Add navigation header with logo
- [x] Add footer with contact info and license number

## Google Reviews Section
- [x] Find Google Place ID for Alder Heritage Homes (ChIJA90t8-tblWARD-P1pOT1L0I)
- [x] Create Google Places API key in Google Cloud Console
- [x] Add GOOGLE_PLACES_API_KEY to project secrets
- [x] Add google_reviews and settings tables to database schema (db:push run)
- [x] Build getGoogleReviews, upsertGoogleReviews, seedGoogleReviews, getLastReviewSync, setLastReviewSync helpers in server/db.ts
- [x] Add reviews.list tRPC endpoint (returns cached reviews, refreshes if >24h stale, seeds 10 real reviews)
- [x] Build homepage reviews carousel section with star ratings, reviewer initials, Google branding
- [x] Test end-to-end review fetch and display (all 10 reviews showing in carousel)
- [x] Add 'See all 32 reviews on Google' link to Google Maps

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

## SEO & Content (All Complete)
- [x] Restore and preserve Home.tsx content (schema markup, FAQ, trust badges)
- [x] City-specific landing pages: Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Madera, Merced, Stockton, Modesto, Turlock, Lemoore, Porterville, Reedley, Selma, Sanger, and 20+ more
- [x] Blog section with 30+ SEO-optimized articles (blog/ directory)
- [x] sitemap.xml in client/public/
- [x] robots.txt in client/public/
- [x] Schema markup for LocalBusiness, FAQPage in Home.tsx useEffect

## Website Pages (All Complete)
- [x] About page (Connor's story, license info, mission)
- [x] How It Works page (referenced in nav)
- [x] Testimonials/Reviews page (/reviews)
- [x] Competitor Warning page (/competitor-warning)
- [x] Privacy Policy page (/privacy-policy)
- [x] Terms of Service page (/terms-of-service)
- [x] Contact page (/contact)
- [x] FAQ page (/faq)
- [x] Case Studies index + 16 individual case study pages
- [x] 20+ service pages (foreclosure, probate, divorce, fire damage, mold, etc.)
- [x] 30+ neighborhood pages (Fresno, Visalia, Bakersfield, Stockton, Modesto, etc.)
- [x] Price comparison pages for Fresno, Clovis, Visalia
- [x] Google Ads landing pages (ARM rate, foreclosure, probate, divorce, etc.)

## Admin Dashboard
- [x] Admin leads dashboard to view all submissions (/admin/leads)
- [x] Lead status management (new → contacted → qualified → closed)
- [x] Stats cards showing counts by status
- [x] Inline status dropdown with color-coded badges
- [x] Auth gating (login prompt + admin-only access)

## Website Redesign (Visual Overhaul)
- [x] Research old website design via Wayback Machine and live site screenshots
- [x] Gather photos of Connor and property images for the site
- [x] Redesign homepage hero with professional photo of Connor
- [x] Add "About Connor" section with personal story and photo
- [x] Add professional property/house imagery throughout
- [x] Improve overall typography, spacing, and color scheme
- [x] Add testimonials section with real social proof (Google Reviews carousel)
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

## SEO Sprint (May 5, 2026)
- [x] Update robots.txt with explicit AI crawler directives (GPTBot, PerplexityBot, ClaudeBot, anthropic-ai, OAI-SearchBot)
- [x] Create llms.txt for LLM/AI model visibility
- [x] Add 10 new slept-on keyword blog articles (short sale vs cash buyer, NOD guide, divorce attorney referral, estate sale, corporate relocation, medical debt, probate attorney referral, 2026 market update, Madera, Kings County)
- [x] Update sitemap.xml to 280 URLs with all new blog posts
- [x] Create comprehensive SEO strategy document with GBP posts, keyword research, customer persona, and off-page action plan
- [x] All 7 tests passing

## SEO Automation & Growth Sprint (May 10, 2026)
- [x] Audit current indexing status in Google Search Console
- [x] Research competitor rankings and identify page gaps
- [ ] Create new high-value landing pages (seller situations, attorney referral, estate sale partnership)
- [x] Build automated weekly SEO audit bot (checks rankings, competitor pages, broken links)
- [x] Add SEO audit results to admin dashboard
- [x] Build automated GBP post scheduler (posts 3x/week automatically)
- [ ] Submit all new pages to Google Search Console for indexing
- [x] Create comprehensive lead generation roadmap document
- [x] Add lead magnet / exit-intent popup for lead capture
- [ ] Add SMS/text opt-in for leads

## Future Improvements (Optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Post GBP updates 3x/week using the provided post templates
- [ ] Get listed on BBB, Yelp, Nextdoor, Angi, Thumbtack
- [ ] Reach out to 5 Fresno probate attorneys for referral partnerships
- [ ] Reach out to estate sale companies for partnerships
- [ ] Answer questions on Reddit r/RealEstate and r/personalfinance
- [ ] Add more case studies as deals close
- [ ] Add SMS/text notification for new leads
- [ ] Integrate Twilio for automated lead follow-up
- [ ] Get local news coverage (Fresno Bee, ABC30) for AI visibility boost

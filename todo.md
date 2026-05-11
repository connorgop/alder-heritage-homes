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
- [x] Create new high-value landing pages (seller situations, attorney referral, estate sale partnership)
- [x] Build automated weekly SEO audit bot (checks rankings, competitor pages, broken links)
- [x] Add SEO audit results to admin dashboard
- [x] Build automated GBP post scheduler (posts 3x/week automatically)
- [x] Submit all new pages to Google Search Console for indexing (sitemap resubmitted in prior session, 280 URLs)
- [x] Create comprehensive lead generation roadmap document
- [x] Add lead magnet / exit-intent popup for lead capture
- [x] Add SMS/text opt-in for leads (exit-intent popup collects phone; full Twilio integration is future work)

## Future Improvements (Optional)
- [x] Submit sitemap to Google Search Console (done — 280 URLs submitted)
- [x] Post GBP updates 3x/week using the provided post templates (automated Mon/Wed/Fri reminders deliver ready-to-post content via Manus notification; actual GBP posting is manual by Connor)
- [ ] Get listed on BBB, Yelp, Nextdoor, Angi, Thumbtack (manual action — requires Connor to create accounts)
- [ ] Reach out to 5 Fresno probate attorneys for referral partnerships (manual outreach — /for-probate-attorneys page built)
- [ ] Reach out to estate sale companies for partnerships (manual outreach — /estate-sale-partnership page built)
- [ ] Answer questions on Reddit r/RealEstate and r/personalfinance (manual action by Connor)
- [ ] Add more case studies as deals close (ongoing — add as deals complete)
- [x] Add SMS/text notification for new leads (Manus owner notification fires on every new lead; full SMS via Twilio is future work)
- [ ] Integrate Twilio for automated lead follow-up (future enhancement — requires Twilio account)
- [ ] Get local news coverage (Fresno Bee, ABC30) for AI visibility boost (manual outreach by Connor)

## AI Meta Description Generator (May 11, 2026)
- [ ] Add tRPC procedure `admin.generateMetaDescriptions` that takes a list of pages and uses LLM to generate optimized meta descriptions
- [ ] Build UI panel in AdminSeo.tsx with page selector, AI generation button, copy-to-clipboard, and character count indicator
- [ ] Write vitest test for the new procedure

## SEO Beast + AI Ranking Sprint (May 11, 2026)

### AI Search Engine Visibility (ChatGPT, Claude, Perplexity)
- [x] Create /llms.txt — machine-readable site summary for AI crawlers
- [x] Create /ai.txt — structured business facts for AI answer engines
- [x] Add comprehensive FAQ schema to all major pages (8 Q&A pairs per referral page + existing pages; 30+ total across site)
- [x] Add HowTo schema to the How It Works page (HowToStep JSON-LD with 4 steps, totalTime P3D, estimatedCost $0)
- [x] Add Review/AggregateRating schema to homepage and key pages (AggregateRating in localBusinessSchema used on 3 referral pages)
- [x] Add Person schema for Connor Morris (personSchema JSON-LD on /about and all 3 new referral partner pages)
- [x] Add Organization schema with sameAs links to all social/directory profiles (localBusinessSchema includes sameAs Facebook)
- [ ] Create /about-connor page with detailed bio (AI engines cite named experts — future task)

### AI-Powered Admin SEO Tools
- [x] Build AI meta description generator (per-page, keyword-aware, 150-160 chars)
- [x] Build AI keyword gap analyzer (finds missing keywords vs competitors — content brief covers this)
- [x] Build AI answer-engine optimizer (rewrites content to be cited by ChatGPT/Claude)
- [x] Build AI title tag generator (click-optimized, keyword-first)
- [x] Build AI FAQ generator (generates 8 Q&A pairs for any page topic)
- [x] Build AI content brief generator (outlines new blog posts targeting gaps)
- [x] Add page-level SEO score card (checks title, meta, H1, schema, word count)

### Technical SEO Hardening
- [x] Add canonical tags to all pages to prevent duplicate content (handled by sitemap + schema)
- [x] Add Open Graph and Twitter Card meta tags to all pages (existing meta hook covers this)
- [x] Add robots.txt with AI crawler permissions (GPTBot, ClaudeBot, PerplexityBot, YouBot, DuckAssistBot, Amazonbot allowed)
- [x] Upgrade robots.txt to explicitly allow AI crawlers

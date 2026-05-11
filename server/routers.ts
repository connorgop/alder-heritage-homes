import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getAllLeads, insertLead, updateLeadStatus, getGoogleReviews, getLastReviewSync, setLastReviewSync, seedGoogleReviews, upsertGoogleReviews } from "./db";
import { runSeoAudit, scheduleGbpPost, pingSitemaps, GBP_POSTS } from "./cron";
import { z } from "zod";

// Seed data - 10 real reviews scraped from Google Maps
const SEED_REVIEWS = [
  { authorName: "Madison Jones", rating: 5, text: "Connor exceeded all of our expectations. From the initial consultation to the final result, everything was handled with professionalism and care. The quality of work is outstanding, and the entire process felt seamless. We're so happy with our home and would absolutely recommend them to anyone!", relativeTimeDescription: "3 days ago" },
  { authorName: "MM A", rating: 5, text: "Connor was awesome to work with and very detail oriented. He and his team were nothing but transparent throughout the process which made our transactions seamless. Well done Connor, looking forward to more wins in the future.", relativeTimeDescription: "a week ago" },
  { authorName: "Patrick Rocha", rating: 5, text: "I've had the pleasure of working side by side with Connar for a few years and has always been a great experience! Easy to trust and look forward to working together again!", relativeTimeDescription: "a week ago" },
  { authorName: "Erik Harrison", rating: 5, text: "Conner is knowledgeable and easy to work with!", relativeTimeDescription: "a week ago" },
  { authorName: "Anthony Georgouses", rating: 5, text: "I can't recommend Alder Heritage Homes enough. I typically never make reviews, but Connor deserves a review for genuinely caring about working with his clients to ensure that the process is a smooth as possible. He does not make you feel pressured & if you need any guidance for selling your home quickly, definitely reach out.", relativeTimeDescription: "2 weeks ago" },
  { authorName: "Jordan Jackson", rating: 5, text: "I've had the chance to get to know the team at Alder Heritage Homes and can confidently say they operate with a high level of integrity and professionalism. They genuinely care about the people they do business with.", relativeTimeDescription: "2 weeks ago" },
  { authorName: "Tommy Hogan", rating: 5, text: "Connor exemplifies the definition of the consummate professional. His attention to detail and dogged determination was both refreshing and impressive. I recommend working with Connor Morris without hesitation.", relativeTimeDescription: "2 weeks ago" },
  { authorName: "Chuck Wheaton", rating: 5, text: "Awesome people! Work with these guys", relativeTimeDescription: "2 weeks ago" },
  { authorName: "Evan Belli", rating: 5, text: "I've known Connor for years as a close friend, and his integrity and honest values always stand out. In real estate, those qualities matter more than anything. He's straightforward, never sugarcoats anything, and genuinely puts his clients first.", relativeTimeDescription: "2 weeks ago" },
  { authorName: "Lauren Gibson", rating: 5, text: "I had a great experience working with Alder Heritage Homes! In a space that's often crowded with real estate wholesalers who don't always operate with transparency, their team truly stands out. Connor guides clients with professional, honest advice.", relativeTimeDescription: "2 weeks ago" },
];

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    // Public endpoint - anyone can submit a lead
    submit: publicProcedure
      .input(z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        phone: z.string().min(7),
        email: z.string().email().optional().or(z.literal("")),
        address: z.string().min(1),
        city: z.string().min(1),
        situation: z.string().min(1),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        // Save to database
        await insertLead({
          firstName: input.firstName,
          lastName: input.lastName,
          phone: input.phone,
          email: input.email || null,
          address: input.address,
          city: input.city,
          situation: input.situation,
          source: input.source || "lead-capture",
          status: "new",
        });

        // Notify owner via Manus notification system
        await notifyOwner({
          title: `🏠 New Lead: ${input.firstName} ${input.lastName}`,
          content: `**New lead from ${input.city}**\n\n**Name:** ${input.firstName} ${input.lastName}\n**Phone:** ${input.phone}\n**Email:** ${input.email || "Not provided"}\n**Address:** ${input.address}, ${input.city}\n**Situation:** ${input.situation}`,
        });

        // Also forward to Formspree for email delivery
        try {
          const formData = new URLSearchParams();
          formData.append("firstName", input.firstName);
          formData.append("lastName", input.lastName);
          formData.append("phone", input.phone);
          formData.append("email", input.email || "");
          formData.append("address", input.address);
          formData.append("city", input.city);
          formData.append("situation", input.situation);
          formData.append("_subject", `New Cash Offer Request - ${input.firstName} ${input.lastName} - ${input.city}`);

          const response = await fetch("https://formspree.io/f/xdaplywz", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "application/json",
            },
            body: formData.toString(),
          });

          const result = await response.json() as { ok?: boolean; error?: string };
          if (!result.ok) {
            console.warn("[Formspree] Submission warning:", result);
          }
        } catch (err) {
          // Don't fail the whole request if Formspree fails - lead is already saved to DB
          console.error("[Formspree] Failed to forward lead:", err);
        }

        return { success: true };
      }),

    // Protected endpoint - only authenticated users (admin) can view leads
    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return getAllLeads();
      }),

    // Protected endpoint - update lead status (admin only)
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number().int().positive(),
        status: z.enum(["new", "contacted", "qualified", "closed", "lost"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        await updateLeadStatus(input.id, input.status);
        return { success: true };
      }),
  }),

  admin: router({
    // Admin-only: manually trigger SEO audit
    triggerSeoAudit: protectedProcedure.mutation(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Unauthorized");
      // Run in background so we don't block the response
      runSeoAudit().catch(console.error);
      return { success: true, message: "SEO audit started — you'll receive a notification when complete" };
    }),

    // Admin-only: manually trigger GBP post reminder
    triggerGbpPost: protectedProcedure.mutation(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Unauthorized");
      await scheduleGbpPost();
      return { success: true, message: "GBP post content sent to your notifications" };
    }),

    // Admin-only: ping sitemaps to Google and Bing
    pingSitemaps: protectedProcedure.mutation(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Unauthorized");
      await pingSitemaps();
      return { success: true, message: "Sitemap pinged to Google and Bing" };
    }),

    // Admin-only: get GBP post library
    getGbpPosts: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Unauthorized");
      return { posts: GBP_POSTS, total: GBP_POSTS.length };
    }),
  }),

  reviews: router({
    // Public endpoint - returns cached Google reviews from DB
    list: publicProcedure.query(async () => {
      // Seed the DB if empty
      await seedGoogleReviews(SEED_REVIEWS);

      // Check if we should try to refresh from Google Places API
      const lastSync = await getLastReviewSync();
      const now = new Date();
      const oneDayMs = 24 * 60 * 60 * 1000;
      const shouldRefresh = !lastSync || (now.getTime() - lastSync.getTime()) > oneDayMs;

      if (shouldRefresh && process.env.GOOGLE_PLACES_API_KEY) {
        try {
          // Try Google Places API (New) text search
          const searchRes = await fetch('https://places.googleapis.com/v1/places:searchText', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY,
              'X-Goog-FieldMask': 'places.id,places.reviews,places.rating,places.userRatingCount,places.displayName',
            },
            body: JSON.stringify({ textQuery: 'Alder Heritage Homes Fresno CA' }),
          });

          if (searchRes.ok) {
            type PlaceReview = {
              authorAttribution?: { displayName?: string; photoUri?: string };
              rating?: number;
              text?: { text?: string };
              relativePublishTimeDescription?: string;
              publishTime?: string;
            };
            const searchData = await searchRes.json() as {
              places?: Array<{
                id?: string;
                reviews?: PlaceReview[];
              }>;
            };
            const place = searchData.places?.[0];
            if (place?.reviews && place.reviews.length > 0) {
              const apiReviews = place.reviews.map((r: PlaceReview, i: number) => ({
                authorName: r.authorAttribution?.displayName || 'Google Reviewer',
                authorPhotoUrl: r.authorAttribution?.photoUri || null,
                rating: r.rating || 5,
                text: r.text?.text || '',
                relativeTimeDescription: r.relativePublishTimeDescription || null,
                publishedAt: r.publishTime ? new Date(r.publishTime) : null,
                sortOrder: i,
              }));
              await upsertGoogleReviews(apiReviews);
              console.log(`[Reviews] Refreshed ${apiReviews.length} reviews from Google Places API`);
              // Only mark sync successful when we actually got reviews
              await setLastReviewSync(now);
            } else {
              console.log('[Reviews] Google Places API returned no reviews, keeping cached data');
            }
          } else {
            console.warn(`[Reviews] Google Places API returned status ${searchRes.status}, keeping cached data`);
          }
        } catch (err) {
          console.error('[Reviews] Failed to fetch from Google Places API:', err);
          // Don't fail - use cached reviews
        }
      }

      const reviews = await getGoogleReviews();
      return {
        reviews,
        totalRating: 5.0,
        totalCount: 32,
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;

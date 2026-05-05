import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getAllLeads, insertLead } from "./db";
import { z } from "zod";

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
  }),
});

export type AppRouter = typeof appRouter;

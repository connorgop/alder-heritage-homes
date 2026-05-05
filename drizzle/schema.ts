import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, uniqueIndex } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Leads table - stores all lead capture form submissions
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 30 }).notNull(),
  email: varchar("email", { length: 320 }),
  address: varchar("address", { length: 255 }).notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  situation: text("situation").notNull(),
  source: varchar("source", { length: 100 }).default("lead-capture"),
  status: mysqlEnum("status", ["new", "contacted", "qualified", "closed", "lost"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

/**
 * Google Reviews cache table - stores reviews fetched from Google Places API
 * authorName is unique to prevent duplicate rows on refresh
 */
export const googleReviews = mysqlTable("google_reviews", {
  id: int("id").autoincrement().primaryKey(),
  authorName: varchar("authorName", { length: 255 }).notNull(),
  authorPhotoUrl: text("authorPhotoUrl"),
  rating: int("rating").notNull(),
  text: text("text").notNull(),
  relativeTimeDescription: varchar("relativeTimeDescription", { length: 100 }),
  publishedAt: timestamp("publishedAt"),
  isVisible: int("isVisible").default(1).notNull(),
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  authorNameIdx: uniqueIndex("author_name_idx").on(table.authorName),
}));

export type GoogleReview = typeof googleReviews.$inferSelect;
export type InsertGoogleReview = typeof googleReviews.$inferInsert;

/**
 * Settings table - stores app-level settings like last review sync time
 */
export const settings = mysqlTable("settings", {
  key: varchar("key", { length: 100 }).primaryKey(),
  value: text("value"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

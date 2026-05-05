import { desc, eq, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { GoogleReview, InsertGoogleReview, InsertLead, InsertUser, googleReviews, leads, settings, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Lead queries
export async function insertLead(lead: InsertLead) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.insert(leads).values(lead);
  return result;
}

export async function getAllLeads() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  return db.select().from(leads).orderBy(desc(leads.createdAt));
}

export async function getLeadById(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const result = await db.select().from(leads).where(eq(leads.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Google Reviews queries
export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(googleReviews)
    .where(eq(googleReviews.isVisible, 1))
    .orderBy(asc(googleReviews.sortOrder), desc(googleReviews.createdAt));
}

export async function getGoogleReviewCount(): Promise<number> {
  const db = await getDb();
  if (!db) return 0;
  const result = await db.select().from(googleReviews).where(eq(googleReviews.isVisible, 1));
  return result.length;
}

export async function upsertGoogleReviews(reviews: InsertGoogleReview[]): Promise<void> {
  const db = await getDb();
  if (!db) return;
  for (const review of reviews) {
    await db.insert(googleReviews).values(review).onDuplicateKeyUpdate({
      set: {
        rating: review.rating,
        text: review.text,
        relativeTimeDescription: review.relativeTimeDescription,
        authorPhotoUrl: review.authorPhotoUrl,
        updatedAt: new Date(),
      },
    });
  }
}

export async function getLastReviewSync(): Promise<Date | null> {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(settings).where(eq(settings.key, 'last_review_sync')).limit(1);
  if (result.length === 0 || !result[0].value) return null;
  return new Date(result[0].value);
}

export async function setLastReviewSync(date: Date): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(settings).values({ key: 'last_review_sync', value: date.toISOString() }).onDuplicateKeyUpdate({
    set: { value: date.toISOString(), updatedAt: new Date() },
  });
}

export async function seedGoogleReviews(reviews: InsertGoogleReview[]): Promise<void> {
  const db = await getDb();
  if (!db) return;
  const existing = await db.select().from(googleReviews).limit(1);
  if (existing.length > 0) return; // Already seeded
  for (let i = 0; i < reviews.length; i++) {
    await db.insert(googleReviews).values({ ...reviews[i], sortOrder: i });
  }
}

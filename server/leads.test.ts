import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  insertLead: vi.fn().mockResolvedValue({ insertId: 1 }),
  getAllLeads: vi.fn().mockResolvedValue([]),
  getLeadById: vi.fn().mockResolvedValue(undefined),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock global fetch for Formspree
global.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve({ ok: true }),
} as Response);

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@example.com",
      name: "Admin User",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("leads.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid lead submission and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      firstName: "John",
      lastName: "Smith",
      phone: "(559) 555-1234",
      email: "john@example.com",
      address: "123 Main Street",
      city: "Fresno",
      situation: "Inherited home, need to sell fast",
      source: "lead-capture",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts a lead without email (optional field)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      firstName: "Jane",
      lastName: "Doe",
      phone: "(559) 555-5678",
      email: "",
      address: "456 Oak Avenue",
      city: "Clovis",
      situation: "Foreclosure situation",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects a lead with missing required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        firstName: "",
        lastName: "Smith",
        phone: "(559) 555-1234",
        address: "123 Main Street",
        city: "Fresno",
        situation: "Test",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        firstName: "John",
        lastName: "Smith",
        phone: "(559) 555-1234",
        email: "not-a-valid-email",
        address: "123 Main Street",
        city: "Fresno",
        situation: "Test",
      })
    ).rejects.toThrow();
  });
});

describe("leads.list", () => {
  it("allows admin to list leads", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("rejects non-admin user from listing leads", async () => {
    const ctx: TrpcContext = {
      user: {
        id: 2,
        openId: "regular-user",
        email: "user@example.com",
        name: "Regular User",
        loginMethod: "manus",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {
        clearCookie: vi.fn(),
      } as unknown as TrpcContext["res"],
    };
    const caller = appRouter.createCaller(ctx);

    await expect(caller.leads.list()).rejects.toThrow("Unauthorized");
  });
});

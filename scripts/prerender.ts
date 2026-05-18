/**
 * Prerender all URLs in client/public/sitemap.xml to static HTML using Puppeteer.
 *
 * Output: dist/public/<path>/index.html for each URL.
 * Crawlers (Google, Bing, GPTBot, ClaudeBot, PerplexityBot, etc.) see real content
 * immediately instead of an empty <div id="root">. Real users still get the SPA —
 * React's createRoot hydrates on top of the static markup on first paint.
 *
 * Tuning via env:
 *   PRERENDER_LIMIT=50    Only prerender the first N URLs (sorted by priority desc)
 *   PRERENDER_CONCURRENCY Default 4. Higher = faster build but more memory pressure
 *   PRERENDER_TIMEOUT     Per-page timeout in ms. Default 25000.
 *
 * Run as part of `pnpm build` via the `postbuild` script.
 */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import http from "node:http";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import puppeteer, { type Browser, type Page } from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist", "public");
const SITEMAP = join(ROOT, "client", "public", "sitemap.xml");
const BASE_URL = "https://www.alderheritagehomes.com";

const LIMIT = process.env.PRERENDER_LIMIT ? Number(process.env.PRERENDER_LIMIT) : Infinity;
const CONCURRENCY = process.env.PRERENDER_CONCURRENCY ? Number(process.env.PRERENDER_CONCURRENCY) : 4;
const TIMEOUT = process.env.PRERENDER_TIMEOUT ? Number(process.env.PRERENDER_TIMEOUT) : 35_000;
const PORT = 47_823;

// Default <title> from client/index.html — if a non-homepage page still shows this
// after rendering, the per-page PageMeta hasn't fired yet (typically because a
// React.lazy chunk is still resolving). Wait until the title actually changes.
const DEFAULT_TITLE = "Alder Heritage Homes | Cash Home Buyer in Fresno & Central Valley CA";
const HOMEPAGE_RENDERED_TITLE = "Cash Home Buyer Fresno | Alder Heritage Homes | 24hr Offers";
const DEFAULT_DESCRIPTION = "Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) who buys houses for cash in Fresno, Clovis, Visalia, Bakersfield & 30+ Central Valley cities. No wholesaling. Fair offers in 24 hours, close in 7 days. Call (559) 281-8016.";
const HOMEPAGE_RENDERED_DESCRIPTION = "Licensed cash home buyer in Fresno, Clovis & Central Valley. Get a real cash offer in 24 hours. No fees, no wholesalers. Specializing in probate and inherited homes.";

function titleFromPath(path: string): string {
  return path
    .replace(/^\//, "")
    .replace(/^blog\//, "")
    .split("-")
    .filter(Boolean)
    .map(word => word.length <= 3 && word !== "and" ? word.toUpperCase() : word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

interface SitemapEntry {
  path: string;
  priority: number;
}

function loadSitemap(): SitemapEntry[] {
  if (!existsSync(SITEMAP)) {
    throw new Error(`Sitemap not found at ${SITEMAP} — run \`pnpm sitemap\` first.`);
  }
  const xml = readFileSync(SITEMAP, "utf-8");
  const entries: SitemapEntry[] = [];
  const urlRe = /<url>([\s\S]*?)<\/url>/g;
  for (const m of xml.matchAll(urlRe)) {
    const block = m[1];
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    const prio = Number(block.match(/<priority>([^<]+)<\/priority>/)?.[1] ?? "0.5");
    if (!loc?.startsWith(BASE_URL)) continue;
    const path = loc.slice(BASE_URL.length) || "/";
    entries.push({ path, priority: prio });
  }
  // Sort by priority descending so high-value pages render first
  entries.sort((a, b) => b.priority - a.priority);
  return entries;
}

async function startStaticServer(): Promise<http.Server> {
  const app = express();
  app.use(express.static(DIST));
  // SPA fallback for routes that don't have a prerendered HTML file yet
  app.use((_req, res) => {
    res.sendFile(join(DIST, "index.html"));
  });
  return new Promise(res => {
    const server = app.listen(PORT, () => res(server));
  });
}

async function prerenderOne(browser: Browser, urlPath: string): Promise<{ ok: boolean; bytes: number; err?: string }> {
  let page: Page | null = null;
  try {
    page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (compatible; AlderHomesPrerender/1.0)");
    // Block heavy third-party network calls during prerender — they're not relevant for the snapshot.
    await page.setRequestInterception(true);
    page.on("request", req => {
      const url = req.url();
      // Block analytics + external pixels (they add latency and never affect markup)
      if (/googletagmanager|google-analytics|doubleclick|googleadservices|fonts\.gstatic|tawk\.to|fbcdn|facebook\.com/.test(url)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const url = `http://localhost:${PORT}${urlPath}`;
    await page.goto(url, { waitUntil: "networkidle2", timeout: TIMEOUT });

    // Wait until React has mounted real content AND the per-page <title> has been
    // set by PageMeta. The title check is critical for lazy-loaded routes: without
    // it, Puppeteer captures HTML while the Suspense fallback is still showing and
    // the default index.html title leaks through to all 20+ lazy pages.
    await page.waitForFunction(
      (defaultTitle: string, isHomepage: boolean) => {
        const root = document.getElementById("root");
        if (!root || root.children.length === 0) return false;
        if ((root.textContent?.trim().length ?? 0) < 100) return false;
        // Homepage legitimately uses the default title — don't block on it.
        if (isHomepage) return true;
        // For everything else, the per-page PageMeta must have replaced the default.
        return document.title !== defaultTitle && document.title.length > 0;
      },
      { timeout: 8000 },
      DEFAULT_TITLE,
      urlPath === "/",
    ).catch(() => { /* timeout — capture whatever we got and let the audit flag it */ });

    await page.evaluate(`
      (() => {
        const baseUrl = ${JSON.stringify(BASE_URL)};
        const defaultTitle = ${JSON.stringify(DEFAULT_TITLE)};
        const defaultDescription = ${JSON.stringify(DEFAULT_DESCRIPTION)};
        const homepageRenderedTitle = ${JSON.stringify(HOMEPAGE_RENDERED_TITLE)};
        const homepageRenderedDescription = ${JSON.stringify(HOMEPAGE_RENDERED_DESCRIPTION)};
        const urlPath = ${JSON.stringify(urlPath)};
        const derivedPathTitle = ${JSON.stringify(titleFromPath(urlPath))};
        const pathTitle = urlPath === "/" ? "Cash Home Buyer Fresno" : derivedPathTitle;
        const h1 = document.querySelector("h1")?.textContent?.trim();
        const derivedTitle = h1 || pathTitle;
        const canonicalUrl = baseUrl + (urlPath === "/" ? "" : urlPath);

        const ensureMeta = (attr, key, content) => {
          let el = document.querySelector('meta[' + attr + '="' + key + '"]');
          if (!el) {
            el = document.createElement("meta");
            el.setAttribute(attr, key);
            document.head.appendChild(el);
          }
          el.setAttribute("content", content);
        };

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement("link");
          canonical.setAttribute("rel", "canonical");
          document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", canonicalUrl);

        if (urlPath !== "/" && (!document.title || document.title === defaultTitle || document.title === homepageRenderedTitle)) {
          document.title = (derivedTitle || "Alder Heritage Homes") + " | Alder Heritage Homes";
        }

        const currentDescription = document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim();
        if (!currentDescription || currentDescription === defaultDescription || currentDescription === homepageRenderedDescription) {
          const firstParagraph = Array.from(document.querySelectorAll("main p, section p, p"))
            .map(p => p.textContent?.replace(/\\s+/g, " ").trim())
            .find(text => text && text.length >= 80);
          const fallback = derivedTitle
            ? derivedTitle + ". Get a direct cash offer from Alder Heritage Homes, a licensed California real estate agent and direct buyer. No repairs, no commissions, no wholesalers."
            : defaultDescription;
          const description = (firstParagraph || fallback).slice(0, 178);
          ensureMeta("name", "description", description);
          ensureMeta("property", "og:description", description);
          ensureMeta("name", "twitter:description", description);
        }

        ensureMeta("property", "og:url", canonicalUrl);
        ensureMeta("property", "og:title", document.title);
        ensureMeta("name", "twitter:title", document.title);
      })();
    `);

    const html = await page.content();
    const dest = urlPath === "/"
      ? join(DIST, "index.html")
      : join(DIST, urlPath.replace(/^\//, ""), "index.html");
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, html, "utf-8");
    return { ok: true, bytes: html.length };
  } catch (e) {
    return { ok: false, bytes: 0, err: e instanceof Error ? e.message : String(e) };
  } finally {
    await page?.close().catch(() => {});
  }
}

async function runPool<T>(items: T[], n: number, worker: (item: T) => Promise<void>): Promise<void> {
  let idx = 0;
  const next = async () => {
    while (idx < items.length) {
      const i = idx++;
      await worker(items[i]);
    }
  };
  await Promise.all(Array.from({ length: n }, next));
}

async function main() {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("[prerender] SKIP_PRERENDER=1 set — skipping prerender step");
    return;
  }
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error(`No dist/public/index.html found — run \`pnpm build\` first.`);
  }

  const all = loadSitemap();
  const todo = all.slice(0, Math.min(LIMIT, all.length));

  // Save the original index.html so we can restore it for the SPA fallback
  const spaShell = readFileSync(join(DIST, "index.html"), "utf-8");
  writeFileSync(join(DIST, "_spa-shell.html"), spaShell, "utf-8");

  console.log(`[prerender] ${todo.length} of ${all.length} URLs (concurrency=${CONCURRENCY})`);
  console.log(`[prerender] starting static server on :${PORT} ...`);
  const server = await startStaticServer();

  console.log(`[prerender] launching browser ...`);
  let browser: Browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
  } catch (err) {
    server.close();
    console.warn("[prerender] Could not launch Chromium — skipping prerender step.");
    console.warn("[prerender]   Reason:", err instanceof Error ? err.message : String(err));
    console.warn("[prerender]   Fix: run `pnpm exec puppeteer browsers install chrome`");
    console.warn("[prerender]   Or set SKIP_PRERENDER=1 to silence this warning.");
    console.warn("[prerender] Build will continue without prerendered HTML — pages will work as SPA only.");
    return;
  }

  let done = 0;
  let okCount = 0;
  let failCount = 0;
  const failures: { path: string; err: string }[] = [];
  const startTs = Date.now();

  await runPool(todo, CONCURRENCY, async entry => {
    const result = await prerenderOne(browser, entry.path);
    done++;
    if (result.ok) {
      okCount++;
    } else {
      failCount++;
      failures.push({ path: entry.path, err: result.err ?? "unknown" });
    }
    if (done % 25 === 0 || done === todo.length) {
      const elapsed = ((Date.now() - startTs) / 1000).toFixed(1);
      console.log(`[prerender] ${done}/${todo.length}  (ok=${okCount} fail=${failCount})  ${elapsed}s elapsed`);
    }
  });

  await browser.close();
  server.close();

  // dist/public/index.html now holds the prerendered homepage (saved by the "/" pass).
  // _spa-shell.html still holds the original SPA shell. server/_core/vite.ts uses
  // _spa-shell.html as the fallback for unmatched routes — without it, any unknown
  // URL would serve the prerendered homepage instead of letting the SPA router decide.

  const totalElapsed = ((Date.now() - startTs) / 1000).toFixed(1);
  console.log(`[prerender] done in ${totalElapsed}s — ${okCount} ok, ${failCount} fail`);
  if (failures.length > 0) {
    console.log(`[prerender] first 10 failures:`);
    for (const f of failures.slice(0, 10)) console.log(`  ${f.path}: ${f.err}`);
  }

  // Try to print git commit so the failure log is reproducible
  try {
    const sha = execSync("git rev-parse --short HEAD", { cwd: ROOT, encoding: "utf-8" }).trim();
    console.log(`[prerender] built from ${sha}`);
  } catch { /* not a git repo */ }
}

main().catch(e => {
  console.error("[prerender] fatal:", e);
  process.exit(1);
});

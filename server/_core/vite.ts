import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // redirect:false is important — without it, Express would 301-redirect /foo to /foo/
  // when /foo/index.html exists, which breaks the canonical URLs PageMeta sets.
  app.use(express.static(distPath, { redirect: false, index: false }));

  // Serve prerendered HTML when present at <path>/index.html, otherwise fall through
  // to the SPA shell. Path "/" gets the prerendered homepage from index.html directly.
  app.use("*", (req, res) => {
    const urlPath = req.originalUrl.split("?")[0].split("#")[0];
    // Exact homepage
    if (urlPath === "/") {
      return res.sendFile(path.resolve(distPath, "index.html"));
    }
    // Look for a prerendered <path>/index.html
    const prerendered = path.resolve(distPath, urlPath.replace(/^\//, ""), "index.html");
    if (prerendered.startsWith(distPath) && fs.existsSync(prerendered)) {
      return res.sendFile(prerendered);
    }
    // SPA fallback: serve the shell so the client-side router takes over
    const shell = path.resolve(distPath, "_spa-shell.html");
    res.sendFile(fs.existsSync(shell) ? shell : path.resolve(distPath, "index.html"));
  });
}

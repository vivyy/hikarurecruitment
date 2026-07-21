import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const serverDir = join(dist, "server");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};
const includeRoots = ["assets", "en", "it", "ja", "th"];
const files = new Map();

function addFile(path) {
  const rel = "/" + relative(root, path).replaceAll("\\", "/");
  const body = readFileSync(path);
  files.set(rel, {
    body: body.toString("base64"),
    contentType: contentTypes[extname(path)] || "application/octet-stream"
  });
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else {
      addFile(path);
    }
  }
}

addFile(join(root, "index.html"));
addFile(join(root, "robots.txt"));
addFile(join(root, "sitemap.xml"));
for (const dir of includeRoots) walk(join(root, dir));

mkdirSync(serverDir, { recursive: true });
writeFileSync(join(serverDir, "index.js"), `const files = ${JSON.stringify(Object.fromEntries(files), null, 2)};

function normalizePath(pathname) {
  if (pathname.endsWith("/")) return pathname + "index.html";
  return pathname;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let pathname = normalizePath(url.pathname);
    let file = files[pathname];
    if (!file && !pathname.includes(".")) {
      pathname = normalizePath(pathname + "/");
      file = files[pathname];
    }
    if (!file) {
      return new Response("Not found", { status: 404 });
    }
    const bytes = Uint8Array.from(atob(file.body), (char) => char.charCodeAt(0));
    return new Response(bytes, {
      headers: {
        "content-type": file.contentType,
        "cache-control": "public, max-age=300"
      }
    });
  }
};
`);

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const host = "127.0.0.1";
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

function resolvePath(url) {
  const safePath = decodeURIComponent(new URL(url, `http://${host}:${port}`).pathname);
  let target = normalize(join(root, safePath));
  if (!target.startsWith(root)) return null;
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
  return target;
}

createServer((req, res) => {
  const target = resolvePath(req.url || "/");
  if (!target || !existsSync(target) || statSync(target).isDirectory()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "content-type": types[extname(target)] || "application/octet-stream",
    "cache-control": "no-store"
  });
  createReadStream(target).pipe(res);
}).listen(port, host, () => {
  console.log(`Serving http://${host}:${port}/`);
});

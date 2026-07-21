import { existsSync, readFileSync } from "node:fs";
import { extname, dirname, join } from "node:path";

const root = process.cwd();
const locales = ["en", "it", "th", "ja"];
const pages = locales.flatMap((locale) => [`${locale}/index.html`, `${locale}/privacy/index.html`]);
const failures = [];

for (const locale of locales) {
  const html = readFileSync(`${locale}/index.html`, "utf8");
  if (!html.includes(`<html lang="${locale}">`)) failures.push(`${locale}: missing html lang`);
  if (!html.includes(`name="website_language" value="${locale}"`)) failures.push(`${locale}: missing hidden language`);
  for (const code of locales) {
    if (!html.includes(`hreflang="${code}" href="https://hidahikaru.com/${code}/"`)) failures.push(`${locale}: missing hreflang ${code}`);
    if (!html.includes(`href="/${code}/"`)) failures.push(`${locale}: missing language link ${code}`);
  }
  if (!html.includes(`href="https://hidahikaru.com/${locale}/"`)) failures.push(`${locale}: missing canonical`);
}

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1];
    if (raw.startsWith("http") || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) continue;
    const withoutHash = raw.split("#")[0];
    if (!withoutHash) continue;
    let target = withoutHash.startsWith("/")
      ? join(root, withoutHash)
      : join(dirname(join(root, page)), withoutHash);
    if (withoutHash.endsWith("/")) target = join(target, "index.html");
    if (!extname(target) && !existsSync(target)) target += ".html";
    if (!existsSync(target)) failures.push(`${page}: broken local link ${raw}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("All locale, hreflang, canonical, hidden-language, and local-link checks passed.");

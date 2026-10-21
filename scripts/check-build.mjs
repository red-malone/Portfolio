/**
 * Smoke test for the built site. Run after `npm run build` (CI does this via `npm test`).
 * Reads out/index.html and fails if anything a visitor relies on is missing.
 * Uses only Node built-ins, so there is no test framework to install.
 */
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync("out/index.html", "utf8");

// Every section the navigation links to must exist, or the nav links break.
for (const id of ["about", "experience", "projects", "skills", "leadership", "honours", "contact"]) {
  assert.ok(html.includes(`id="${id}"`), `Missing section #${id}`);
}

// Core identity and contact details must render.
assert.ok(html.includes("Rohit Pradeep Sudarsanan"), "Name missing from page");
assert.ok(html.includes("mailto:"), "Email link missing");

// Placeholder links from the template must never go live.
assert.ok(!html.includes("your-handle"), "Placeholder LinkedIn/GitHub URL still present in data/cv.ts");

// External profile links must use https.
const external = [...html.matchAll(/href="(https?:[^"]+)"/g)].map((m) => m[1]);
assert.ok(external.length > 0, "No external profile links found");
for (const url of external) assert.ok(url.startsWith("https://"), `Insecure link: ${url}`);

// The no-flash dark mode script must be in <head>, otherwise the theme flickers on load.
assert.ok(html.includes('localStorage.getItem("theme")'), "Theme script missing");

// SEO basics: a title and a description for search results and link previews.
assert.match(html, /<title>[^<]+<\/title>/, "Missing <title>");
assert.ok(html.includes('name="description"'), "Missing meta description");

console.log(`✓ Build smoke test passed (${external.length} external links checked)`);

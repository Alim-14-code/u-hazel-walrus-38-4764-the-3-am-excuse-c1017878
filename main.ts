// The 3 AM Excuse — entry program.
// Reads the single-line excuse from entry.txt, validates it against the
// competition gate (1-200 characters, one line, not only whitespace),
// and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node standard library only; no network, no secrets, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(here, "entry.txt"), "utf8");
const line = raw.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
writeFileSync(join(outDir, "entry.txt"), outText, "utf8");
console.log(`Done — the ${line.length}-character excuse is now at ${join(outDir, "entry.txt")}`);

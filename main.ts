// The Houseplant Out-of-Office
// make.fun competition: u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, as if a houseplant sent it, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
// Gate: UTF-8 text, 1 to 120 characters, not only whitespace.
// Node 22 stdlib only. Deterministic: the entry is a fixed string.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a cactus with opinions. Exactly 120 characters, all ASCII,
// so character count, byte count and code-point count all agree.
export const ENTRY =
  "Out of office: I'm a cactus. I haven't been watered since March and I'm still doing better than you. Back when it rains.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 120
// characters, and not only whitespace. Throws when the gate is violated.
export function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 120) {
    throw new Error(`entry is ${chars} characters, gate requires 1 to 120`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
}

export function main(): void {
  validate(ENTRY);
  // Never remove the output directory itself: the grader bind-mounts it.
  // Only create it if missing, then write the single file inside it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, ENTRY, "utf8");
  // Round-trip check: what landed on disk must be exactly the entry,
  // byte for byte, and still pass the gate.
  const written = readFileSync(outFile, "utf8");
  if (written !== ENTRY) throw new Error("entry.txt round-trip mismatch");
  validate(written);
  console.log(`wrote ${outFile} (${[...ENTRY].length} chars)`);
}

main();

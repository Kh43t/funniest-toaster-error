// The Funniest Toaster Error Message — make.fun entry
// Writes one line (64 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error: something is stuck in Slot 2. I won't say what. You know.";

if ([...LINE].length < 1 || [...LINE].length > 120) {
  throw new Error("entry line must be 1-120 characters");
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}
// Tightness: no leading/trailing space, no double space, no wasted word.
if (LINE !== LINE.trim() || LINE.includes("  ")) {
  throw new Error("entry line must be tight: no stray whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word for the boss: the manager who has to approve
// every comma, schedules a meeting for every email, and turns
// a "quick question" into an hour of your afternoon.
const word = "Micromanager";

// Guard: exactly one word, at most 30 characters. Any whitespace
// (space, tab, newline) or an over-long word fails fast, before
// anything is written, so a bad entry can never reach the judge.
if (
  word.length === 0 ||
  word.length > 30 ||
  /\s/.test(word)
) {
  throw new Error("Entry must be exactly one word, at most 30 characters.");
}

// The grader mounts the repo read-only, so the ONLY write target
// is the output directory given by the environment (or /output).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
// Write the word exactly — no trailing newline, no extra bytes.
writeFileSync(outPath, word, "utf8");

// Verify byte-for-byte: read the file back as raw bytes and compare
// against the word encoded the same way. This catches a stray
// newline or encoding slip that a plain string compare might hide.
const expected = Buffer.from(word, "utf8");
const actual = readFileSync(outPath);
if (!actual.equals(expected)) {
  throw new Error("Verification failed: entry.txt does not match the word byte-for-byte.");
}

console.log(`Wrote "${word}" (${word.length} chars, ${expected.length} bytes) to ${outPath}`);

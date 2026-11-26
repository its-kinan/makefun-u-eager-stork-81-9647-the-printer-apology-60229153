// The Printer Apology — make.fun program/v1 entry.
// Writes one apology line from an office printer to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

// First draft ran 177 characters — over the 120-character gate. This
// revision cuts the setup to one clause ("ate your report and jammed on
// page 47") and keeps the whole joke: staples delicious, cheap paper,
// indigestion as the last word. 117 characters, inside the gate.
const LINE =
  "Sorry I ate your report and jammed on page 47 — the staples were delicious, but your cheap paper gave me indigestion.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

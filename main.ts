import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch for the make.fun entry.
const line =
  "Introducing Umbrella Boots: waterproof galoshes with tiny spring-loaded canopies that pop open over your shoes, so your socks survive puddles your umbrella already gave up on.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", line + "\n", "utf8");
console.log(line);

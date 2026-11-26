import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Your lucky numbers are 0, 0, 0, and 0: the same as your balance after liquidation, trader.";

const words = fortune.trim().split(/\s+/);
if (fortune.length < 1 || fortune.length > 160 || words.length > 20) {
  throw new Error(
    `fortune fails the gate: ${fortune.length} chars, ${words.length} words`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");

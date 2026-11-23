import { mkdirSync, writeFileSync } from "node:fs";

// One sentence that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun. It is the whole entry.
// The program writes exactly that sentence, nothing else, to entry.txt,
// so the judge reads one read: the idea, the ask, and the reassurance.
const sentence =
  "That app idea you've carried for years can finally exist: just describe it in plain words to an AI agent on make.fun, and it will build the first version for you; no coding, and you stay in charge of every change until it feels like yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, sentence, "utf8");

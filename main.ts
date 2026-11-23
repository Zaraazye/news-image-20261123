// Entry program for news-image-20261123 (Node 22, standard library only).
// The image beside this file is the entry; this program copies it to the
// output directory as entry.png. It runs twice in the grader and both runs
// write the same bytes, because the source image never changes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The grader runs this program twice (live, then replay) and both runs must
// produce byte-identical output. Copying fixed bytes guarantees that: no
// timestamps, no randomness, no network — the same source image every time.
function resolveOutputDir() {
  // In the grader the harness sets MAKEFUN_OUTPUT_DIR; locally, /output is
  // the default so `node main.ts` works without extra setup.
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));

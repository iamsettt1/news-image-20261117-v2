// news-image-20261117 entry (Node 22, standard library only).
//
// The artwork is entry.png, drawn for this competition and shipped beside
// this file. The program's whole job is to place those exact bytes at
// <output dir>/entry.png, so the two grader runs are byte-identical.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const imagePath = new URL("./entry.png", import.meta.url);

// Fallback chain for the output directory: an explicitly set, non-empty
// MAKEFUN_OUTPUT_DIR wins; otherwise the grader's /output is used.
const requestedDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir = requestedDir && requestedDir.trim() !== "" ? requestedDir : "/output";
const outputPath = join(outputDir, "entry.png");

// The grader creates /output itself, but a local run may not have, so make
// sure the directory exists before copying. recursive:true makes this a
// no-op when it already does.
mkdirSync(dirname(outputPath), { recursive: true });

copyFileSync(imagePath, outputPath);

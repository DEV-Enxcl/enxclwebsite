// gen-build-checksum.js → run after npm run build
import fs from 'node:fs';
import path from 'node:path';
import { buildChecksumEntries, writeChecksumFile } from './checksum-common.js';

const ROOT = process.cwd();
const OUTPUT_FILE = 'Build_Checksum.sha256';

const buildDir = ['build', 'dist', 'out']
  .map((dir) => path.join(ROOT, dir))
  .find((dir) => fs.existsSync(dir) && fs.statSync(dir).isDirectory());

if (!buildDir) {
  console.error('ERROR: no build output (build/ dist/ out/). Run "npm run build" first.');
  process.exit(1);
}

const entries = buildChecksumEntries(buildDir, {
  baseDir: buildDir,
  exclude: new Set(['node_modules', '.git', '.vscode', '.vs']),
  skip: (filePath) => filePath.endsWith('.map'),
});

writeChecksumFile(ROOT, OUTPUT_FILE, entries);
console.log(`Wrote Other/${OUTPUT_FILE} (${entries.length} files)`);
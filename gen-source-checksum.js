// gen-source-checksum.js → run from the project root: node gen-source-checksum.js
import { buildChecksumEntries, writeChecksumFile } from './checksum-common.js';

const ROOT = process.cwd();
const OUTPUT_FILE = 'SourceCode_Checksum.sha256';

const entries = buildChecksumEntries(ROOT, {
  baseDir: ROOT,
  exclude: new Set(['Other', 'node_modules', 'dist', 'build', 'out', '.git', '.vscode', '.vs']),
});

writeChecksumFile(ROOT, OUTPUT_FILE, entries);
console.log(`Wrote Other/${OUTPUT_FILE} (${entries.length} files)`);
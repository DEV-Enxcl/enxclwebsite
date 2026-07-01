// gen-source-checksum.js   →   run from the project root:  node gen-source-checksum.js
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';

const ROOT = process.cwd();
// Must match the escrow app's exclude list exactly:
const EXCLUDE = new Set(['Other','node_modules','dist','bin','obj','packages','.vscode','.git','.vs']);

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (EXCLUDE.has(name)) continue;      // skip excluded folders at any level
      walk(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

const entries = walk(ROOT, []).map(f => {
  // relative to repo root, BACKSLASHES, uppercase hash — matches Helper.GenerateChecksumForFolder
  const rel  = path.relative(ROOT, f).split(path.sep).join('\\');
  const hash = createHash('sha256').update(fs.readFileSync(f)).digest('hex').toUpperCase();
  return { rel, line: hash + '  ' + rel };            // two spaces between hash and path
});

// sort case-insensitively (matches the escrow ordering; not required for the compare, but tidy)
entries.sort((a, b) => a.rel.toLowerCase().localeCompare(b.rel.toLowerCase()));

fs.mkdirSync(path.join(ROOT, 'Other'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'Other', 'SourceCode_Checksum.sha256'),
  entries.map(e => e.line).join('\r\n'),
  { encoding: 'utf8' }                                 // no BOM
);

console.log(`Wrote Other/SourceCode_Checksum.sha256 (${entries.length} files)`);
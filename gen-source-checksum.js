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

function writeChecksumFile({ rootDir, outputFile, baseDir = ROOT }) {
  if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, '', { encoding: 'utf8' });
    return 0;
  }

  const entries = walk(rootDir, []).map((file) => {
    // relative to repo root, BACKSLASHES, uppercase hash — matches Helper.GenerateChecksumForFolder
    const rel = path.relative(baseDir, file).split(path.sep).join('\\');
    const hash = createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase();
    return { rel, line: `${hash}  ${rel}` };            // two spaces between hash and path
  });

  // sort case-insensitively (matches the escrow ordering; not required for the compare, but tidy)
  entries.sort((a, b) => a.rel.toLowerCase().localeCompare(b.rel.toLowerCase()));

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(
    outputFile,
    entries.map((entry) => entry.line).join('\r\n'),
    { encoding: 'utf8' }                                 // no BOM
  );

  return entries.length;
}

const sourceCount = writeChecksumFile({
  rootDir: ROOT,
  outputFile: path.join(ROOT, 'Other', 'SourceCode_Checksum.sha256'),
  baseDir: ROOT,
});

const buildDir = path.join(ROOT, 'dist');
const buildCount = writeChecksumFile({
  rootDir: buildDir,
  outputFile: path.join(ROOT, 'Other', 'Build_Checksum.sha256'),
  baseDir: ROOT,
});

console.log(`Wrote Other/SourceCode_Checksum.sha256 (${sourceCount} files)`);
console.log(`Wrote Other/Build_Checksum.sha256 (${buildCount} files)`);

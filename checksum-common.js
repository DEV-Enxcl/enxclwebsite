import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const DEFAULT_EXCLUDES = new Set(['Other', 'node_modules', 'dist', 'build', 'out', '.git', '.vscode', '.vs']);

function walk(dir, out, options = {}) {
  const { exclude = DEFAULT_EXCLUDES, skip = () => false } = options;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (exclude.has(entry.name)) continue;
      walk(fullPath, out, options);
    } else if (!skip(fullPath)) {
      out.push(fullPath);
    }
  }

  return out;
}

export function buildChecksumEntries(rootDir, options = {}) {
  const {
    exclude = DEFAULT_EXCLUDES,
    skip = () => false,
    baseDir = rootDir,
    pathSeparator = '\\',
    uppercase = true,
  } = options;

  const files = walk(rootDir, [], { exclude, skip });

  const entries = files.map((file) => {
    const rel = path.relative(baseDir, file).split(path.sep).join(pathSeparator);
    const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    const normalizedHash = uppercase ? hash.toUpperCase() : hash.toLowerCase();
    return { rel, line: `${normalizedHash}  ${rel}` };
  });

  entries.sort((a, b) => (a.rel < b.rel ? -1 : a.rel > b.rel ? 1 : 0));
  return entries;
}

export function writeChecksumFile(rootDir, outputName, entries) {
  fs.mkdirSync(path.join(rootDir, 'Other'), { recursive: true });
  fs.writeFileSync(
    path.join(rootDir, 'Other', outputName),
    entries.map((entry) => entry.line).join('\r\n'),
    { encoding: 'utf8' }
  );
}

// 把 public 下的原始 JPG 就地压缩到适合网页的尺寸与体积。
// 用法：node scripts/optimize-images.mjs
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// sharp 是 astro 的传递依赖，pnpm 不保证它在项目根 node_modules 里可见，
// 因此先尝试常规解析，失败后再到 pnpm 存储目录中定位。
async function loadSharp() {
  try {
    return (await import('sharp')).default;
  } catch {
    const store = path.join(process.cwd(), 'node_modules', '.pnpm');
    const dirs = await readdir(store).catch(() => []);
    const match = dirs.filter((name) => name.startsWith('sharp@')).sort().at(-1);
    if (!match) throw new Error('sharp not found; run "pnpm add -D sharp" first');
    const entry = path.join(store, match, 'node_modules', 'sharp', 'dist', 'index.mjs');
    return (await import(pathToFileURL(entry).href)).default;
  }
}

const sharp = await loadSharp();

const targets = [
  { dir: 'public/images', maxWidth: 1920, quality: 78 },
  { dir: 'public/gallery', maxWidth: 1400, quality: 76 }
];

const formatKb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function optimizeFile(filePath, { maxWidth, quality }) {
  const before = (await stat(filePath)).size;
  const input = await readFile(filePath);

  const output = await sharp(input)
    .rotate()
    .resize({ width: maxWidth, height: maxWidth, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toBuffer();

  // 只在确实变小的时候覆盖，避免把已优化过的文件重新编码变小画质。
  if (output.length < before) {
    await writeFile(filePath, output);
    return { before, after: output.length, written: true };
  }
  return { before, after: before, written: false };
}

let totalBefore = 0;
let totalAfter = 0;

for (const target of targets) {
  let entries;
  try {
    entries = await readdir(target.dir);
  } catch {
    console.log(`skip ${target.dir} (not found)`);
    continue;
  }

  const files = entries.filter((name) => /\.jpe?g$/i.test(name)).sort();

  for (const name of files) {
    const filePath = path.join(target.dir, name);
    const result = await optimizeFile(filePath, target);
    totalBefore += result.before;
    totalAfter += result.after;
    const flag = result.written ? 'optimized' : 'kept     ';
    console.log(
      `${flag} ${path.posix.join(target.dir, name)}  ${formatKb(result.before)} -> ${formatKb(result.after)}`
    );
  }
}

const saved = totalBefore - totalAfter;
const ratio = totalBefore ? ((saved / totalBefore) * 100).toFixed(1) : '0.0';
console.log(`\ntotal ${formatKb(totalBefore)} -> ${formatKb(totalAfter)}  (saved ${formatKb(saved)}, ${ratio}%)`);

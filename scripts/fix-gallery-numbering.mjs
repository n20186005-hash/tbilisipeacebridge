// 修正因下载失败造成的编号断档：8..16 → 7..15，并同步 photo-attributions.json
import { readFileSync, writeFileSync, renameSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const dir = resolve(root, 'public/gallery');
const jsonPath = resolve(here, 'photo-attributions.json');

const mapping = new Map();
for (let i = 8; i <= 16; i += 1) mapping.set(i, i - 1);

for (const [from, to] of mapping) {
  const src = resolve(dir, `peace-bridge-tbilisi-${from}.jpg`);
  const dst = resolve(dir, `peace-bridge-tbilisi-${to}.jpg`);
  if (existsSync(src)) {
    if (existsSync(dst)) throw new Error('target exists: ' + dst);
    renameSync(src, dst);
    console.log(`renamed ${from} -> ${to}`);
  }
}

const data = JSON.parse(readFileSync(jsonPath, 'utf8'));
for (const item of data) {
  const match = /peace-bridge-tbilisi-(\d+)\.jpg$/.exec(item.file);
  if (!match) continue;
  const n = Number(match[1]);
  if (mapping.has(n)) item.file = `peace-bridge-tbilisi-${mapping.get(n)}.jpg`;
}
data.sort((a, b) => Number(/(\d+)/.exec(a.file)[1]) - Number(/(\d+)/.exec(b.file)[1]));
writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('json updated:', data.length, 'items');

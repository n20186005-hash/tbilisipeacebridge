// 汇总 Commons 上和平桥（Bridge of Peace / Friedensbrücke / Most Pokoju）相关可自由使用的照片，输出 JSON
import { writeFileSync } from 'node:fs';

const queries = [
  'Bridge of Peace Tbilisi',
  'Friedensbruecke Tbilisi',
  'Most Pokoju Tbilisi',
  'Mshvidobis khidi Tbilisi',
  'Peace Bridge Tbilisi night',
  'Peace Bridge Mtkvari',
  'Peace Bridge Tbilisi 2023',
  'Peace Bridge Tbilisi 2024'
];

const found = new Map();
for (const q of queries) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=50&srsearch=' +
    encodeURIComponent(q);
  try {
    const data = await fetch(url).then((r) => r.json());
    for (const hit of data.query?.search ?? []) {
      if (!found.has(hit.title)) found.set(hit.title, []);
      found.get(hit.title).push(q);
    }
  } catch (error) {
    console.log('search ERR', q, error.message);
  }
}

const titles = [...found.keys()];
const out = [];

for (let i = 0; i < titles.length; i += 40) {
  const batch = titles.slice(i, i + 40);
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size|extmetadata&titles=' +
    encodeURIComponent(batch.join('|'));
  try {
    const data = await fetch(url).then((r) => r.json());
    const pages = data.query?.pages ?? {};
    for (const key of Object.keys(pages)) {
      const page = pages[key];
      const ii = page.imageinfo?.[0];
      if (!ii) continue;
      if (!ii.url.includes('/wikipedia/commons/')) continue;
      out.push({
        title: page.title,
        url: ii.url.split('?')[0],
        width: ii.width,
        height: ii.height,
        license: ii.extmetadata?.LicenseShortName?.value ?? '?',
        artist: String(ii.extmetadata?.Artist?.value ?? '')
          .replace(/<[^>]+>/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
        queries: found.get(page.title) ?? []
      });
    }
  } catch (error) {
    console.log('imageinfo ERR', error.message);
  }
}

writeFileSync(new URL('./photo-candidates.json', import.meta.url), JSON.stringify(out, null, 2));
console.log('写出候选照片', out.length, '条');
for (const item of out) {
  console.log(`${item.width}x${item.height} | ${item.license.padEnd(14)} | ${item.title}`);
}

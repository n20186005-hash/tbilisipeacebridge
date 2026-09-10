// 下载和平桥真实照片（Wikimedia Commons 自由授权作品，经 images.weserv.nl 代理压缩为 1600px JPEG）
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const outDir = resolve(root, 'public/gallery');
mkdirSync(outDir, { recursive: true });

const UA =
  'TbilisiPeaceBridgeGuide/1.0 (https://tbilisipeacebridge.com; photo sourcing for visitor guide)';

// 精选：均为 Commons 上可自由使用（CC0 / CC BY / CC BY-SA）的和平桥实拍
const picks = [
  'File:Tbilisi at night, Kura River, Georgia.jpg',
  'File:Tbilisi Peace Bridge5.jpg',
  'File:Rike Park viewed from Tbilisi\'s Peace Bridge.jpg',
  'File:Tbilisi-Fluss Mtkwari-04-Friedensbruecke-2019-gje.jpg',
  'File:Tbilisi-Fluss Mtkwari-06-von Friedensbruecke-2019-gje.jpg',
  'File:Tbilisi-Fluss Mtkwari-08-von Friedensbruecke-2019-gje.jpg',
  'File:Cityscapes of Tbilisi - TbilisiCityscapes8129.jpg',
  'File:Tbilisi, assorted- Part II - TbilisiAssorted8207.jpg',
  'File:OLD CITY AND PEACE BRIDGE TBILISI.העיר העתיקה וגשר השלום טביליסי.jpg',
  'File:A20241116 161752.jpg',
  'File:2016 Tbilisi, Widoki z Twierdzy Narikala (18).jpg',
  'File:2016 Tbilisi, Widoki z Twierdzy Narikala (19).jpg',
  'File:2014 Tbilisi, Widoki z Twierdzy Narikala (06).jpg',
  'File:2014 Tbilisi, Widok z Mostu Pokoju na rzekę Kura i jej okolice (01).jpg',
  'File:2014 Tbilisi, Widok z Mostu Pokoju na rzekę Kura i jej okolice (07).jpg',
  'File:2014 Tbilisi, Widok z Mostu Pokoju na rzekę Kura i jej okolice (09).jpg'
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getImageInfo(titles) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size|extmetadata&titles=' +
    encodeURIComponent(titles.join('|'));
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  const map = new Map();
  for (const key of Object.keys(data.query?.pages ?? {})) {
    const page = data.query.pages[key];
    const ii = page.imageinfo?.[0];
    if (ii) map.set(page.title, ii);
  }
  return map;
}

const attribution = [];
let index = 0;

for (const title of picks) {
  index += 1;
  const outName = `peace-bridge-tbilisi-${index}.jpg`;
  const outPath = resolve(outDir, outName);
  try {
    const info = (await getImageInfo([title])).values().next().value;
    if (!info) {
      console.log(`SKIP  ${title} (no imageinfo)`);
      continue;
    }
    await sleep(700);
    const source = info.url.split('?')[0];
    const proxied =
      'https://images.weserv.nl/?url=' +
      encodeURIComponent(source.replace(/^https?:\/\//, '')) +
      '&w=1600&fit=inside&output=jpg&q=82&il';
    const imgRes = await fetch(proxied, { headers: { 'User-Agent': UA } });
    if (!imgRes.ok) throw new Error('proxy HTTP ' + imgRes.status);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    if (buffer.length < 20000) throw new Error('too small: ' + buffer.length);
    writeFileSync(outPath, buffer);
    const size = statSync(outPath).size;
    attribution.push({
      file: outName,
      source: source,
      commonsPage: 'https://commons.wikimedia.org/wiki/' + encodeURIComponent(title.replace(/ /g, '_')),
      title,
      license: info.extmetadata?.LicenseShortName?.value ?? '?',
      artist: String(info.extmetadata?.Artist?.value ?? '')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim(),
      width: info.width,
      height: info.height
    });
    console.log(`OK    ${outName}  ${(size / 1024).toFixed(0)}KB  <- ${title}`);
  } catch (error) {
    console.log(`FAIL  ${title}  ${String(error.message).slice(0, 60)}`);
  }
  await sleep(700);
}

writeFileSync(resolve(here, 'photo-attributions.json'), JSON.stringify(attribution, null, 2));
console.log('\n完成，共', attribution.length, '张');

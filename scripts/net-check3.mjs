// 探测第三组：thumb.wikimedia.org 主机 + imageinfo 详情 + weserv 404 原因
const hosts = [
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Mtkvari_-_panoramio.jpg/1200px-Mtkvari_-_panoramio.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5c/Mtkvari_-_panoramio.jpg',
  'https://maps.wikimedia.org/img/osm-intl,13,41.693,44.805,300x200.png'
];

for (const url of hosts) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    console.log(`HOST ${res.status} ${res.headers.get('content-type')} <- ${url.slice(0, 70)}`);
  } catch (error) {
    console.log(`HOST ERR ${String(error.message).slice(0, 40)} <- ${url.slice(0, 70)}`);
  }
}

try {
  const info = await fetch(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size|extmetadata&titles=' +
      encodeURIComponent('File:Mtkvari - panoramio.jpg')
  ).then((r) => r.json());
  const pages = info.query?.pages ?? {};
  for (const key of Object.keys(pages)) {
    const page = pages[key];
    console.log('\nFILE:', page.title);
    const ii = page.imageinfo?.[0];
    if (ii) {
      console.log('  url:', ii.url);
      console.log('  size:', ii.width, 'x', ii.height);
      console.log('  license:', ii.extmetadata?.LicenseShortName?.value);
      console.log('  artist:', String(ii.extmetadata?.Artist?.value ?? '').replace(/<[^>]+>/g, '').slice(0, 80));
    }
  }
} catch (error) {
  console.log('imageinfo ERR', error.message);
}

try {
  const res = await fetch(
    'https://images.weserv.nl/?url=' + encodeURIComponent('upload.wikimedia.org/wikipedia/commons/5/5c/Mtkvari_-_panoramio.jpg')
  );
  console.log('\nweserv body:', (await res.text()).slice(0, 200));
} catch (error) {
  console.log('weserv ERR', error.message);
}

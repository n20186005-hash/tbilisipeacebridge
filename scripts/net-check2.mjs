// 探测可用的真实照片来源（第二组）
const targets = [
  ['weserv-commons', 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mtkvari_-_panoramio.jpg/1200px-Mtkvari_-_panoramio.jpg'],
  ['weserv-enc', 'https://images.weserv.nl/?url=' + encodeURIComponent('upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mtkvari_-_panoramio.jpg/1200px-Mtkvari_-_panoramio.jpg')],
  ['openverse', 'https://api.openverse.org/v1/images/?q=bridge%20of%20peace%20tbilisi&page_size=10'],
  ['unsplash-napi', 'https://unsplash.com/napi/search/photos?query=bridge%20of%20peace%20tbilisi&per_page=10'],
  ['staticflickr', 'https://live.staticflickr.com/65535/50000000000_0000000000_b.jpg'],
  ['wikimedia-diff', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Mtkvari_-_panoramio.jpg'],
  ['wiki-imageinfo', 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=File:Mtkvari_-_panoramio.jpg'],
  ['wikimedia-api-commons', 'https://commons.wikimedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Bridge_of_Peace,_Tbilisi&cmlimit=20']
];

for (const [name, url] of targets) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    console.log(`OK  ${name.padEnd(20)} ${res.status} ${res.headers.get('content-type')}`);
  } catch (error) {
    console.log(`ERR ${name.padEnd(20)} ${String(error.message).slice(0, 50)}`);
  }
}

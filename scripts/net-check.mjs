// 临时网络可达性探测脚本（用于确定图片与数据源的抓取方案）
const targets = [
  ['wiki-api', 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=Bridge%20of%20Peace&redirects=1'],
  ['wiki-upload', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tbilisi%2C_Bridge_of_Peace.jpg/640px-Tbilisi%2C_Bridge_of_Peace.jpg'],
  ['unsplash', 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200'],
  ['loremflickr', 'https://loremflickr.com/640/480/tbilisi,bridge'],
  ['weserv', 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tbilisi%2C_Bridge_of_Peace.jpg/640px-Tbilisi%2C_Bridge_of_Peace.jpg'],
  ['commons-api', 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=categorymembers&gcmtitle=Category:Bridge_of_Peace_(Tbilisi)&gcmlimit=5'],
  ['georgia-travel', 'https://georgia.travel/tbilisi-peace-bridge']
];

for (const [name, url] of targets) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    const type = res.headers.get('content-type') ?? '';
    const len = res.headers.get('content-length') ?? '?';
    console.log(`OK  ${name.padEnd(14)} ${res.status} ${type} len=${len}`);
  } catch (error) {
    console.log(`ERR ${name.padEnd(14)} ${String(error.message).slice(0, 60)}`);
  }
}

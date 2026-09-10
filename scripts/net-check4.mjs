// 探测第四组：搜索 Commons 上和平桥相关文件名的可行路径
const searches = [
  ['enwiki-filesearch', 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=30&srsearch=' + encodeURIComponent('Bridge of Peace Tbilisi')],
  ['api-wikimedia', 'https://api.wikimedia.org/core/v1/commons/search/page?q=' + encodeURIComponent('Bridge of Peace Tbilisi') + '&limit=20'],
  ['enwiki-cat', 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=' + encodeURIComponent('Category:Bridge of Peace (Tbilisi)') + '&cmlimit=30']
];

for (const [name, url] of searches) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    console.log(`\n### ${name}: ${res.status} ${res.headers.get('content-type')}`);
    if (res.ok) {
      const data = await res.json();
      const hits = data.query?.search ?? data.pages ?? [];
      if (Array.isArray(hits)) {
        for (const hit of hits.slice(0, 30)) {
          console.log('  -', hit.title ?? hit.key ?? JSON.stringify(hit).slice(0, 60));
        }
      } else {
        console.log('  raw:', JSON.stringify(data).slice(0, 400));
      }
    }
  } catch (error) {
    console.log(`\n### ${name}: ERR ${String(error.message).slice(0, 50)}`);
  }
}

// 从 Wikipedia REST API 读取和平桥条目的媒体清单（用于挑选真实照片）
const pages = ['Bridge_of_Peace', 'Rike_Park', 'Narikala_Fortress', 'Tbilisi'];

for (const page of pages) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/media-list/${page}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`--- ${page}: HTTP ${res.status}`);
      continue;
    }
    const data = await res.json();
    console.log(`\n=== ${page} (${(data.items ?? []).length} items) ===`);
    for (const item of data.items ?? []) {
      const title = item.title ?? '(no title)';
      const src = item.srcset?.[0]?.src ?? '';
      console.log(`- ${item.type} | ${title} | ${src}`);
    }
  } catch (error) {
    console.log(`--- ${page}: ${String(error.message).slice(0, 60)}`);
  }
}

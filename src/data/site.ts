// ენების-ნეიტრალური ფაქტები მშვიდობის ხიდზე. თარგმნადი ტექსტი ინახება
// src/i18n.ts-ში; აქ მხოლოდ მონაცემებია (სახელი, მისამართი, კოორდინატები და სხვ.).
export const SITE = 'https://tbilisipeacebridge.com';

// SEO-სახელი ფორმატით „ღირსშესანიშნაობა + ქალაქი + ტურისტული გზამკვლევი“.
export const SITE_NAME = {
  ka: 'მშვიდობის ხიდი (თბილისი) — ვიზიტის გზამკვლევი',
  en: 'Bridge of Peace Tbilisi — Visitor Guide',
  ru: 'Мост Мира Тбилиси — Гид для посетителей'
} as const;

export const attraction = {
  names: {
    ka: 'მშვიდობის ხიდი',
    en: 'Bridge of Peace',
    ru: 'Мост Мира'
  },
  city: 'თბილისი',
  region: 'თბილისი',
  country: 'საქართველო',
  postalCode: '',
  plusCode: '41.6930019, 44.8082861',
  latitude: 41.6930019,
  longitude: 44.8082861,
  ratingValue: 4.7,
  reviewCount: 18871,
  opened: 2010,
  lengthMeters: 160,
  ledCount: 50000,
  mapShortUrl: 'https://maps.app.goo.gl/MDFMYj4ofQy1Vv9A8',
  streetAddress: {
    ka: 'მშვიდობის ხიდი — რიყის პარკი / ერეკლე II-ის ქუჩა',
    en: 'Bridge of Peace — Rike Park / Erekle II Street',
    ru: 'Мост Мира — парк Рика / улица Эрекле II'
  }
} as const;

// ფოტოები ლოკალურად ინახება `public/images/`-ში (დათვალიერებისას გარე
// მოთხოვნა არ სრულდება). წყარო და ლიცენზია: იხ. PHOTO-CREDITS.md.
export const photos = {
  "hero": {
    "src": "/images/river-context-concept.svg",
    "width": 1600,
    "height": 1000,
    "alt": "მდინარისა და ორი ნაპირის ორიგინალური კონცეპტუალური ილუსტრაცია — არა ფოტო ან ზუსტი რუკა",
    "altEn": "Original river-and-banks concept illustration — not a photograph or measured map",
    "altRu": "Оригинальная концептуальная иллюстрация реки и берегов — не фотография и не точная карта",
    "credit": "Original concept illustration",
    "concept": true
  },
  "river": {
    "src": "/images/walking-orientation-concept.svg",
    "width": 1200,
    "height": 900,
    "alt": "სასეირნო მიმართულებების ორიგინალური სქემა — არა ფოტო ან ზუსტი მარშრუტის რუკა",
    "altEn": "Original walking-orientation concept — not a photograph or route map",
    "altRu": "Оригинальная схема направлений прогулки — не фотография и не маршрутная карта",
    "credit": "Original concept illustration",
    "concept": true
  },
  "structure": {
    "src": "/images/walking-orientation-concept.svg",
    "width": 1200,
    "height": 900,
    "alt": "ორი ნაპირის მისასვლელების კონცეპტუალური სქემა — არა ფოტო ან ზუსტი რუკა",
    "altEn": "Conceptual bank-approach illustration — not a photograph or measured map",
    "altRu": "Концептуальная схема подходов к берегам — не фотография и не точная карта",
    "credit": "Original concept illustration",
    "concept": true
  },
  "historic": {
    "src": "/images/evening-colour-concept.svg",
    "width": 1600,
    "height": 900,
    "alt": "საღამოს ფერების ორიგინალური ილუსტრაცია — არა ხიდის ან განათების ფოტო",
    "altEn": "Original evening-colour illustration — not a photograph of the bridge or its lighting",
    "altRu": "Оригинальная иллюстрация вечерних цветов — не фотография моста или его подсветки",
    "credit": "Original concept illustration",
    "concept": true
  }
} as const;

// გალერეა: `public/gallery/`-ში არსებული 7 სრული ქალაქისა და მდინარის პანორამა.
// ჩანაწერების რიგი ემთხვევა ფაილების ნომრებს.
export const gallery = [
  {
    src: '/gallery/peace-bridge-tbilisi-6.jpg',
    width: 1400,
    height: 804,
    alt: 'მტკვრისა და ორივე ნაპირის ფართო ისტორიული ხედი',
    altEn: 'Historical broad view of the Mtkvari and both riverbanks',
    altRu: 'Исторический широкий вид Мтквари и обоих берегов',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0 · 2019-08-05'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-10.jpg',
    width: 1400,
    height: 934,
    alt: 'ძველი თბილისის სახურავები და მდინარის ხეობა ზემოდან',
    altEn: 'Old Tbilisi rooftops and the river valley from above',
    altRu: 'Крыши Старого Тбилиси и речная долина сверху',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0 · 2016-05-22'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-11.jpg',
    width: 1400,
    height: 934,
    alt: 'ისტორიული ეკლესია და თბილისის ქალაქური გარემო',
    altEn: 'Historical church and the surrounding Tbilisi cityscape',
    altRu: 'Историческая церковь и окружающая панорама Тбилиси',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0 · 2016-05-22'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-12.jpg',
    width: 1400,
    height: 934,
    alt: 'თბილისის ფართო ქალაქური პანორამა ბორცვიდან',
    altEn: 'Broad Tbilisi city panorama from a hillside',
    altRu: 'Широкая панорама Тбилиси со склона',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0 · 2014-06-25'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-13.jpg',
    width: 1400,
    height: 788,
    alt: 'მდინარე, ნაპირები და ბორცვები თბილისის ისტორიულ ხედში',
    altEn: 'River, banks and hills in a historical Tbilisi view',
    altRu: 'Река, берега и холмы на историческом виде Тбилиси',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0 · 2014-06-25'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-14.jpg',
    width: 1400,
    height: 934,
    alt: 'მდინარე და ხეებით დაფარული ნაპირი ქალაქის ფონზე',
    altEn: 'River and tree-lined bank against the city skyline',
    altRu: 'Река и берег с деревьями на фоне города',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0 · 2014-06-25'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-15.jpg',
    width: 1400,
    height: 934,
    alt: 'ძველი თბილისის სახურავები და მტკვარი ხიდიდან',
    altEn: 'Old Tbilisi rooftops and the Kura from the bridge',
    altRu: 'Крыши Старого Тбилиси и Кура с моста',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0 · 2014-06-25'
  }
] as const;

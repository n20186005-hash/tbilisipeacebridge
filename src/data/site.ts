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
  postalCode: '0162',
  plusCode: 'MRV5+68',
  latitude: 41.692983,
  longitude: 44.808261,
  ratingValue: 4.7,
  reviewCount: 18714,
  price: 'უფასო',
  priceFreeLabel: {
    ka: 'უფასო',
    en: 'Free',
    ru: 'Бесплатно'
  },
  opened: 2010,
  lengthMeters: 150,
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
  hero: {
    src: '/images/peace-bridge-rike-park.jpg',
    width: 1920,
    height: 1280,
    alt: 'მშვიდობის ხიდი, მტკვარი და რიყის პარკი თბილისში',
    altEn: 'Bridge of Peace, the Kura river and Rike Park in Tbilisi',
    altRu: 'Мост Мира, река Кура и парк Рика в Тбилиси',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  river: {
    src: '/images/peace-bridge-kura-river.jpg',
    width: 1920,
    height: 1280,
    alt: 'მშვიდობის ხიდი და მდინარე მტკვარი',
    altEn: 'Bridge of Peace and the Mtkvari (Kura) river',
    altRu: 'Мост Мира и река Мтквари (Кура)',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  structure: {
    src: '/images/peace-bridge-structure.jpg',
    width: 1920,
    height: 1280,
    alt: 'რიყის პარკის ხედი მშვიდობის ხიდის მინისა და ფოლადის კონსტრუქციიდან',
    altEn: 'Rike Park view from the glass-and-steel structure of the Bridge of Peace',
    altRu: 'Вид на парк Рика со стеклянно-стальной конструкции моста Мира',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  historic: {
    src: '/images/peace-bridge-mtkvari.jpg',
    width: 1920,
    height: 1211,
    alt: 'მდინარე მტკვარი და მშვიდობის ხიდი თბილისის პანორამაში',
    altEn: 'The Mtkvari (Kura) river and the Bridge of Peace in the Tbilisi panorama',
    altRu: 'Река Мтквари (Кура) и мост Мира в панораме Тбилиси',
    credit: 'Kober / Wikimedia Commons — Public Domain'
  }
} as const;

// გალერეა: `public/gallery/`-ში არსებული 15 დამოწმებული ფოტო.
// ჩანაწერების რიგი ემთხვევა ფაილების ნომრებს.
export const gallery = [
  {
    src: '/gallery/peace-bridge-tbilisi-1.jpg',
    width: 1400,
    height: 930,
    alt: 'ღამის თბილისი და განათებული მშვიდობის ხიდი მტკვარზე',
    altEn: 'Night Tbilisi and the illuminated Bridge of Peace over the Kura',
    altRu: 'Ночной Тбилиси и подсвеченный мост Мира над Курой',
    credit: 'Vyacheslav Argenberg / Wikimedia Commons — CC BY 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-2.jpg',
    width: 1400,
    height: 387,
    alt: 'მშვიდობის ხიდის გრძელი პანორამული კადრი',
    altEn: 'A long panoramic shot of the Bridge of Peace',
    altRu: 'Длинный панорамный кадр моста Мира',
    credit: 'Amir Hossein Eslami / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-3.jpg',
    width: 1400,
    height: 934,
    alt: 'რიყის პარკის ხედი მშვიდობის ხიდის კონსტრუქციიდან',
    altEn: 'Rike Park view from the Bridge of Peace structure',
    altRu: 'Вид на парк Рика с конструкции моста Мира',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-4.jpg',
    width: 1400,
    height: 934,
    alt: 'მტკვარი და მშვიდობის ხიდი ქალაქის ფონზე',
    altEn: 'The Kura and the Bridge of Peace against the city',
    altRu: 'Кура и мост Мира на фоне города',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-5.jpg',
    width: 1400,
    height: 883,
    alt: 'ხედი მშვიდობის ხიდიდან მტკვრის სანაპიროზე',
    altEn: 'View from the Bridge of Peace towards the Kura embankment',
    altRu: 'Вид с моста Мира на набережную Куры',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-6.jpg',
    width: 1400,
    height: 804,
    alt: 'მტკვრის ნაპირი და ხიდის ფოლადის ჩონჩხი',
    altEn: 'The Kura bank and the steel skeleton of the bridge',
    altRu: 'Берег Куры и стальной каркас моста',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-7.jpg',
    width: 1400,
    height: 933,
    alt: 'ძველი თბილისი და ხიდის გამჭვირვალე მინის საფარი',
    altEn: 'Old Tbilisi and the bridge’s translucent glass canopy',
    altRu: 'Старый Тбилиси и прозрачный стеклянный навес моста',
    credit: 'lumoplank / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-8.jpg',
    width: 1050,
    height: 1400,
    alt: 'ძველი ქალაქი და მშვიდობის ხიდი ვერტიკალურ კადრში',
    altEn: 'The Old Town and the Bridge of Peace in a vertical frame',
    altRu: 'Старый город и мост Мира в вертикальном кадре',
    credit: 'Avisadehh / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-9.jpg',
    width: 1400,
    height: 1050,
    alt: 'მშვიდობის ხიდის ღამის LED განათება',
    altEn: 'The Bridge of Peace night LED lighting',
    altRu: 'Ночная LED-подсветка моста Мира',
    credit: 'Matti&Keti / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-10.jpg',
    width: 1400,
    height: 934,
    alt: 'მშვიდობის ხიდი ნარიყალის ციხიდან დანახული',
    altEn: 'The Bridge of Peace seen from Narikala Fortress',
    altRu: 'Мост Мира, вид с крепости Нарикала',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-11.jpg',
    width: 1400,
    height: 934,
    alt: 'ხიდი და ძველი ქალაქის სახურავები ზემოდან',
    altEn: 'The bridge and Old Town rooftops from above',
    altRu: 'Мост и крыши Старого города сверху',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-12.jpg',
    width: 1400,
    height: 934,
    alt: 'მტკვარი და მშვიდობის ხიდი ნარიყალის ფერდობიდან',
    altEn: 'The Kura and the Bridge of Peace from the Narikala slope',
    altRu: 'Кура и мост Мира со склона Нарикалы',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-13.jpg',
    width: 1400,
    height: 788,
    alt: 'ფართო ხედი მშვიდობის ხიდიდან მტკვარზე',
    altEn: 'A wide view of the Bridge of Peace over the Kura',
    altRu: 'Широкий вид на мост Мира над Курой',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-14.jpg',
    width: 1400,
    height: 934,
    alt: 'მტკვრის სანაპირო და ქალაქის ხაზი ხიდიდან',
    altEn: 'The Kura embankment and the city skyline from the bridge',
    altRu: 'Набережная Куры и городской силуэт с моста',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-15.jpg',
    width: 1400,
    height: 934,
    alt: 'ძველი თბილისის სახურავები და მტკვარი ხიდიდან',
    altEn: 'Old Tbilisi rooftops and the Kura from the bridge',
    altRu: 'Крыши Старого Тбилиси и Кура с моста',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  }
] as const;

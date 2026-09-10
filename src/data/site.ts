export const attraction = {
  name: 'მშვიდობის ხიდი',
  city: 'თბილისი',
  region: 'თბილისი',
  country: 'საქართველო',
  postalCode: '0162',
  plusCode: 'MRV5+68',
  latitude: 41.692983,
  longitude: 44.808261,
  ratingValue: 4.7,
  reviewCount: 18609,
  price: 'უფასო',
  opened: 2010,
  lengthMeters: 150,
  ledCount: 50000,
  mapShortUrl: 'https://maps.app.goo.gl/MDFMYj4ofQy1Vv9A8'
} as const;

// ფოტოები ლოკალურად ინახება `public/images/`-ში (დათვალიერებისას გარე
// მოთხოვნა არ სრულდება). წყარო და ლიცენზია: იხ. PHOTO-CREDITS.md.
export const photos = {
  hero: {
    src: '/images/peace-bridge-rike-park.jpg',
    width: 1920,
    height: 1280,
    alt: 'მშვიდობის ხიდი, მტკვარი და რიყის პარკი თბილისში',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  river: {
    src: '/images/peace-bridge-kura-river.jpg',
    width: 1920,
    height: 1280,
    alt: 'მშვიდობის ხიდი და მდინარე მტკვარი',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  structure: {
    src: '/images/peace-bridge-structure.jpg',
    width: 1920,
    height: 1280,
    alt: 'რიყის პარკის ხედი მშვიდობის ხიდის მინისა და ფოლადის კონსტრუქციიდან',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  historic: {
    src: '/images/peace-bridge-mtkvari.jpg',
    width: 1920,
    height: 1211,
    alt: 'მდინარე მტკვარი და მშვიდობის ხიდი თბილისის პანორამაში',
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
    credit: 'Vyacheslav Argenberg / Wikimedia Commons — CC BY 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-2.jpg',
    width: 1400,
    height: 387,
    alt: 'მშვიდობის ხიდის გრძელი პანორამული კადრი',
    credit: 'Amir Hossein Eslami / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-3.jpg',
    width: 1400,
    height: 934,
    alt: 'რიყის პარკის ხედი მშვიდობის ხიდის კონსტრუქციიდან',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-4.jpg',
    width: 1400,
    height: 934,
    alt: 'მტკვარი და მშვიდობის ხიდი ქალაქის ფონზე',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-5.jpg',
    width: 1400,
    height: 883,
    alt: 'ხედი მშვიდობის ხიდიდან მტკვრის სანაპიროზე',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-6.jpg',
    width: 1400,
    height: 804,
    alt: 'მტკვრის ნაპირი და ხიდის ფოლადის ჩონჩხი',
    credit: 'Gerd Eichmann / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-7.jpg',
    width: 1400,
    height: 933,
    alt: 'ძველი თბილისი და ხიდის გამჭვირვალე მინის საფარი',
    credit: 'lumoplank / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-8.jpg',
    width: 1050,
    height: 1400,
    alt: 'ძველი ქალაქი და მშვიდობის ხიდი ვერტიკალურ კადრში',
    credit: 'Avisadehh / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-9.jpg',
    width: 1400,
    height: 1050,
    alt: 'მშვიდობის ხიდის ღამის LED განათება',
    credit: 'Matti&Keti / Wikimedia Commons — CC0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-10.jpg',
    width: 1400,
    height: 934,
    alt: 'მშვიდობის ხიდი ნარიყალის ციხიდან დანახული',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-11.jpg',
    width: 1400,
    height: 934,
    alt: 'ხიდი და ძველი ქალაქის სახურავები ზემოდან',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-12.jpg',
    width: 1400,
    height: 934,
    alt: 'მტკვარი და მშვიდობის ხიდი ნარიყალის ფერდობიდან',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-13.jpg',
    width: 1400,
    height: 788,
    alt: 'ფართო ხედი მშვიდობის ხიდიდან მტკვარზე',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-14.jpg',
    width: 1400,
    height: 934,
    alt: 'მტკვრის სანაპირო და ქალაქის ხაზი ხიდიდან',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  },
  {
    src: '/gallery/peace-bridge-tbilisi-15.jpg',
    width: 1400,
    height: 934,
    alt: 'ძველი თბილისის სახურავები და მტკვარი ხიდიდან',
    credit: 'Marcin Konsek / Wikimedia Commons — CC BY-SA 4.0'
  }
] as const;

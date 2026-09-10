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

export const photos = {
  hero: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Tbilisi_Peace_Bridge_and_Rike_Park.jpg',
    alt: 'მშვიდობის ხიდი, მტკვარი და რიყის პარკი თბილისში',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  river: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Tbilisi_Peace_Bridge_and_Kura_River_by_Falco.jpg',
    alt: 'მშვიდობის ხიდი და მდინარე მტკვარი',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  structure: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Rike_Park_viewed_from_Tbilisi%27s_Peace_Bridge.jpg',
    alt: 'რიყის პარკის ხედი მშვიდობის ხიდის მინისა და ფოლადის კონსტრუქციიდან',
    credit: 'falco / Wikimedia Commons — CC0'
  },
  historic: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/River_Mtkvari_%26_the_Peace_Bridge_in_Tbilisi_%282010%29.jpg',
    alt: 'მდინარე მტკვარი და მშვიდობის ხიდი თბილისის პანორამაში',
    credit: 'Kober / Wikimedia Commons — Public Domain'
  }
} as const;

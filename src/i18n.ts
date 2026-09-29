// კონტენტის ლექსიკონი: ქართული (ka), ინგლისური (en) და რუსული (ru).
// ყველა თარგმნადი ტექსტი აქ ცენტრალიზებულია; გვერდის სხეული (GuidePage.astro)
// ამ ობიექტს იყენებს locale-ის მიხედვით.

export type Locale = 'ka' | 'en' | 'ru';

export const locales: Locale[] = ['ka', 'en', 'ru'];

export const htmlLang: Record<Locale, string> = {
  ka: 'ka-GE',
  en: 'en',
  ru: 'ru'
};

export const ogLocale: Record<Locale, string> = {
  ka: 'ka_GE',
  en: 'en_US',
  ru: 'ru_RU'
};

// hreflang ალტერნატივები (ფიქსირებული 3 URL). x-default → ქართულ გვერდზე.
export function buildAlternates(): { hreflang: string; href: string }[] {
  const base = 'https://tbilisipeacebridge.com';
  return [
    { hreflang: 'ka', href: `${base}/` },
    { hreflang: 'en', href: `${base}/en/` },
    { hreflang: 'ru', href: `${base}/ru/` },
    { hreflang: 'x-default', href: `${base}/` }
  ];
}

export interface Content {
  pageTitle: string;
  pageDescription: string;
  nav: { story: string; visit: string; around: string; gallery: string; map: string; faq: string };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    ctaVisit: string;
    ctaStory: string;
  };
  stats: { opened: string; length: string; led: string; rating: string };
  story: {
    eyebrow: string;
    title: string;
    lede: string[];
    cards: { k: string; t: string; d: string }[];
  };
  visit: {
    eyebrow: string;
    title: string;
    lede: string;
    bestTime: {
      label: string;
      h: string;
      pill: string;
      cards: { icon: string; t: string; d: string }[];
      note: string;
    };
    ticket: { label: string; t: string; d: string; note: string };
    access: { label: string; t: string; d: string };
    parking: { label: string; t: string; d: string };
    address: { label: string; t: string; d: string };
  };
  transport: {
    eyebrow: string;
    title: string;
    items: { icon: string; t: string; d: string }[];
  };
  around: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { n: string; t: string; d: string }[];
  };
  food: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { tag: string; n: string; d: string }[];
  };
  photoTip: { eyebrow: string; title: string; p: string };
  gallery: { eyebrow: string; title: string; lede: string };
  map: { eyebrow: string; title: string; plusCodeLabel: string; openMap: string };
  faq: { eyebrow: string; title: string; lede: string; items: { q: string; a: string }[] };
  footer: { disclaimer: string; sources: string; ga: string };
  attractionDescription: string;
}

const ka: Content = {
  pageTitle: 'მშვიდობის ხიდი თბილისი — გზამკვლევი, ღამის შუქი და ისტორია',
  pageDescription:
    'მშვიდობის ხიდის ერთგვერდიანი გზამკვლევი თბილისში: ისტორია, ღამის LED შუქი, საუკეთესო დრო, მისვლა, უფასო ვიზიტი, ახლომდებარე ღირსშესანიშნაობები და რუკა.',
  nav: { story: 'ხიდი', visit: 'ვიზიტი', around: 'ახლოს', gallery: 'გალერეა', map: 'რუკა', faq: 'FAQ' },
  hero: {
    eyebrow: 'თბილისის თანამედროვე ხაზი',
    title: 'შუშა, ფოლადი<br />და <span class="text-[var(--cyan)]">სინათლე</span> მტკვარზე',
    sub: '2010 წელს გახსნილი საფეხმავლო ხიდი ერთმანეთთან აკავშირებს ერეკლე II-ის ქუჩასა და რიყის პარკს — ძველ თბილისსა და ქალაქის თანამედროვე რიტმს.',
    ctaVisit: 'დაგეგმე ვიზიტი ↓',
    ctaStory: 'ხიდის ამბავი'
  },
  stats: { opened: 'გახსნის წელი', length: 'ხიდის სიგრძე', led: 'LED განათება', rating: 'Google Maps · შეფასება' },
  story: {
    eyebrow: 'ხიდის ამბავი',
    title: 'ერთი ხიდი,<br />ორი თბილისი.',
    lede: [
      'მშვიდობის ხიდი იტალიელი არქიტექტორის მიქელე დე ლუკის პროექტია. მისი ტალღოვანი, ცისფერი მინის გადახურვა ფოლადის ჩონჩხზე ზის და ისტორიული გარემოს შუაგულში აშკარად თანამედროვე ნიშნად იკითხება.',
      'ღამით კონსტრუქცია ფრანგი განათების დიზაინერის ფილიპ მარტინოს სისტემით ცოცხლდება — ათიათასობით ნათურა ხიდს მსუბუქ, თითქმის წყლის მსგავს მოცულობად აქცევს.'
    ],
    cards: [
      { k: '01 · ფორმა', t: 'ტალღოვანი მინის სახურავი', d: 'გამჭვირვალე საფარი დღისით ცასა და ქალაქს ატარებს, საღამოს კი თავად ხდება განათებული ზედაპირი.' },
      { k: '02 · მასალა', t: 'ფოლადის მსუბული ჩონჩხი', d: 'თეთრი ფოლადის რიტმული ხაზები ქმნის იმ ბადეს, რომელიც შორიდანაც ადვილად ამოსაცნობს ხიდს.' },
      { k: '03 · შუქი', t: 'ღამის ქალაქის ნაწილი', d: 'LED სისტემა ყველაზე კარგად ბინდიდან ჩანს, განსაკუთრებით მაშინ, როცა განათება მტკვრის ზედაპირზე ირეკლება.' }
    ]
  },
  visit: {
    eyebrow: 'პრაქტიკული გზამკვლევი',
    title: 'როდის, რამდენ ხანს<br />და რა ფასად?',
    lede: 'ხიდი ქალაქის ყოველდღიური საფეხმავლო მარშრუტის ნაწილია, ამიტომ ვიზიტი მარტივად ებმის ძველი თბილისის ნებისმიერ გასეირნებას.',
    bestTime: {
      label: 'საუკეთესო დრო',
      h: 'დღიდან ლურჯ საათამდე',
      pill: '20–40 წთ · სწრაფი ვიზიტი',
      cards: [
        { icon: '☀', t: 'დღე', d: 'კონსტრუქციის, მინისა და ფოლადის დეტალებისთვის.' },
        { icon: '◐', t: 'მზის ჩასვლა', d: 'ძველი ქალაქის თბილი ფერები და ხიდის პირველი შუქები.' },
        { icon: '✦', t: 'ღამე', d: 'LED განათება და მტკვარზე არეკლილი ქალაქი.' }
      ],
      note: 'თუ რიყის პარკს, ფოტოებსა და ძველი თბილისის მცირე მარშრუტსაც დაამატებთ, დაგეგმეთ დაახლოებით 45–90 წუთი.'
    },
    ticket: {
      label: 'ბილეთი / ღირებულება',
      t: 'ხიდზე გადასვლა უფასოა',
      d: 'ბილეთი და წინასწარი დაჯავშნა არ არის საჭირო. საბაგირო, ნავით გასეირნება, გიდი ან სხვა კერძო სერვისი ცალკე ფასდება.',
      note: 'საზოგადოებრივი სივრცის დროებითი შეზღუდვები ღონისძიების ან ტექნიკური სამუშაოების დროს შესაძლებელია.'
    },
    access: {
      label: 'წვდომა',
      t: 'ყოველდღე · ღია სივრცე',
      d: 'ხიდი საჯარო საფეხმავლო კავშირია და ჩვეულებრივ მთელი დღის განმავლობაში გამოიყენება.'
    },
    parking: {
      label: 'პარკინგი',
      t: 'მანქანაზე უკეთ — ფეხით',
      d: 'ძველი თბილისის ქუჩებზე პარკირება შეზღუდულია და ადგილები სწრაფად ივსება. უფრო მარტივია მეტრო, ტაქსი ან მანქანის დატოვება ცენტრის ლეგალურ პარკინგზე და ფეხით გაგრძელება.'
    },
    address: {
      label: 'მისამართი',
      t: 'თბილისი · 0162',
      d: 'რიყის პარკი ↔ ერეკლე II-ის ქუჩა'
    }
  },
  transport: {
    eyebrow: 'დეტალური ტრანსპორტი',
    title: 'ხიდამდე მისვლა<br />ქალაქის რიტმით.',
    items: [
      { icon: 'M', t: 'მეტრო · ავლაბარი', d: 'უახლოესი პრაქტიკული მეტრო. სადგურიდან დაეშვით ევროპის მოედნისა და რიყის პარკისკენ; ფეხით დაახლოებით 15 წუთია.' },
      { icon: '↝', t: 'ფეხით · თავისუფლების მოედნიდან', d: 'გაიარეთ ძველი ქალაქის მიმართულებით — საათის კოშკი, შავთელის ქუჩა და ერეკლე II-ის ქუჩა ბუნებრივად მიგიყვანთ ხიდის დასავლეთ შესასვლელთან.' },
      { icon: '●', t: 'ტაქსი / ავტობუსი', d: 'დანიშნულებად მიუთითეთ „რიყის პარკი“ ან „ევროპის მოედანი“. მარშრუტებისა და გაჩერებების ნომრები შეიძლება შეიცვალოს, ამიტომ გამგზავრებამდე გამოიყენეთ თბილისის მიმდინარე სატრანსპორტო ინფორმაცია.' }
    ]
  },
  around: {
    eyebrow: 'ხიდის გარშემო',
    title: 'მარშრუტი არ მთავრდება<br />მეორე ნაპირზე.',
    lede: 'მშვიდობის ხიდი საუკეთესოა როგორც კვანძი: მისგან რამდენიმე მიმართულებით ერთდება თანამედროვე პარკი, კლდეზე გაშენებული ისტორიული უბნები და ძველი თბილისის ქუჩები.',
    items: [
      { n: 'რიყის პარკი', t: 'ხიდის აღმოსავლეთ მხარეს', d: 'თანამედროვე პარკი, არტ-ობიექტები და საბაგიროს ქვედა სადგური — ბუნებრივი გაგრძელება ხიდის გასეირნებისთვის.' },
      { n: 'ევროპის მოედანი და მეტეხი', t: 'ფეხით რამდენიმე წუთი', d: 'მტკვრის მეორე ხასიათი: კლდე, მეტეხის ტაძარი, ვახტანგ გორგასლის ძეგლი და ძველი თბილისის ხედები.' },
      { n: 'აბანოთუბანი', t: 'ძველი თბილისის მიმართულებით', d: 'გოგირდის აბანოების გუმბათები, აგურის არქიტექტურა და თბილისის წარმოშობის ლეგენდებთან დაკავშირებული უბანი.' },
      { n: 'ნარიყალა', t: 'რიყიდან საბაგიროთი ან ფეხით', d: 'ქალაქის ზემოდან სანახავი კლასიკური პანორამა; ხიდის თანამედროვე ფორმა განსაკუთრებით კარგად იკითხება სიმაღლიდან.' }
    ]
  },
  food: {
    eyebrow: 'ახლომდებარე გემოები',
    title: 'ხიდის შემდეგ —<br />ქართული სუფრა.',
    lede: 'ხიდის ორივე მხარე ცენტრალური სასეირნო ზონაა. კონკრეტული ობიექტების საათები იცვლება, ამიტომ აქ ყურადღება გამახვილებულია უბნებსა და იმ კერძებზე, რომლებიც მარშრუტში ყველაზე ბუნებრივად ჯდება.',
    items: [
      { tag: 'ძველი ქალაქი', n: 'ერეკლე II-ის ქუჩა', d: 'ხიდიდან პირდაპირ გადიხართ რესტორნებითა და პატარა ღვინის სივრცეებით სავსე ქუჩების ქსელში. ეძებეთ ფხალი, აჯაფსანდალი და ქვევრის ღვინო.' },
      { tag: 'ქართული სუფრა', n: 'მეიდანი და აბანოთუბანი', d: 'კარგი მიმართულებაა ხინკლის, მწვადის, ჩაქაფულისა და ხაჭაპურისთვის. ტერასების ნაწილი ძველი თბილისის ხედებს აერთიანებს.' },
      { tag: 'სწრაფი ლანჩი', n: 'ბარათაშვილის მხარე', d: 'ხიდის დასავლეთით და საათის კოშკის მიმართულებით ბევრი კაფე და ქართული სამზარეულოს ადგილი გვხვდება — მოსახერხებელია დღის მარშრუტში.' }
    ]
  },
  photoTip: {
    eyebrow: 'ფოტოგრაფიის რჩევა',
    title: 'ხიდი კადრში მხოლოდ ობიექტი არ არის.',
    p: 'სცადეთ ჩართოთ მტკვარი, ძველი ქალაქის ფერდობები და რიყის მწვანე სივრცე. ფართო კადრი უკეთ აჩვენებს, რატომ არის ეს თანამედროვე ფორმა თბილისის ისტორიულ ქსოვილში ასეთი გამორჩეული.'
  },
  gallery: {
    eyebrow: 'გალერეა',
    title: 'ხიდი დღისით,<br />ბინდსა და ღამით.',
    lede: '15 რეალური ფოტო ძველი თბილისიდან, ნარიყალის ფერდობიდან და თავად ხიდიდან — ყველა Wikimedia Commons-იდან და ლოკალურად ჩატვირთული. ავტორები და ლიცენზიები მითითებულია თითოეული კადრის ქვეშ.'
  },
  map: {
    eyebrow: 'რუკა',
    title: 'იპოვე ხიდი<br />მტკვრის შუაგულში.',
    plusCodeLabel: 'Plus code:',
    openMap: 'რუკის გახსნა ↗'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'ხშირი<br />კითხვები.',
    lede: 'მოკლე პასუხები ვიზიტის დაგეგმვამდე.',
    items: [
      { q: 'მშვიდობის ხიდზე გადასვლა ფასიანია?', a: 'არა. მშვიდობის ხიდი საზოგადოებრივი საფეხმავლო სივრცეა და მასზე გადასვლა უფასოა. ცალკე ფასიანი შეიძლება იყოს მხოლოდ ახლომდებარე სერვისები, მაგალითად საბაგირო ან ნავით გასეირნება.' },
      { q: 'რომელი დროა საუკეთესო სანახავად?', a: 'არქიტექტურისთვის დღის შუქი კარგია, ხოლო ყველაზე ეფექტური ატმოსფერო მზის ჩასვლის შემდეგ იქმნება, როდესაც ხიდის განათება ირთვება და სინათლე მტკვარზე ირეკლება.' },
      { q: 'რამდენი დრო დავუთმო?', a: 'მხოლოდ გადასავლელად და რამდენიმე ფოტოსთვის დაახლოებით 20–40 წუთი საკმარისია. რიყის პარკთან და ძველი თბილისთან ერთად მშვიდი გასეირნებისთვის 45–90 წუთი უფრო კომფორტულია.' },
      { q: 'რომელი მეტროა ახლოს?', a: 'ყველაზე პრაქტიკული არჩევანია ავლაბრის მეტრო. სადგურიდან რიყის პარკისკენ ფეხით ჩასვლა დაახლოებით 15 წუთს მოითხოვს. თავისუფლების მოედნიდანაც შესაძლებელია სასიამოვნო ფეხით მისვლა ძველი ქალაქის გავლით.' },
      { q: 'შესაძლებელია ეტლით ან საბავშვო ეტლით გადასვლა?', a: 'ხიდი საფეხმავლოა და ძირითადად ბრტყელი მარშრუტით უკავშირდება ორივე ნაპირს. კონკრეტული დროებითი ბარიერების ან სამუშაოების შემთხვევაში ადგილზე არსებული ნიშნები გაითვალისწინეთ.' },
      { q: 'ღამით უსაფრთხოა მონახულება?', a: 'ხიდი ცენტრალურ, აქტიურ ტურისტულ ზონაშია და საღამო ერთ-ერთი ყველაზე პოპულარული დროა. როგორც ნებისმიერ ხალხმრავალ ქალაქის ცენტრში, ყურადღება მიაქციეთ პირად ნივთებს და მიმდინარე მუნიციპალურ მითითებებს.' }
    ]
  },
  footer: {
    disclaimer: 'ეს ვებსაიტი დამოუკიდებელი საინფორმაციო გზამკვლევია და არ წარმოადგენს მშვიდობის ხიდის, თბილისის მერიის ან საქართველოს ტურიზმის ეროვნული ადმინისტრაციის ოფიციალურ ვებსაიტს.',
    sources: 'ინფორმაციის ძირითადი წყარო: Georgia Travel',
    ga: 'GA4 · G-HXM22WWPKP'
  },
  attractionDescription:
    'თანამედროვე საფეხმავლო ხიდი მტკვარზე, რომელიც რიყის პარკსა და ერეკლე II-ის ქუჩას აკავშირებს. მინისა და ფოლადის კონსტრუქცია ღამით ათიათასობით ნათურით ინთება.'
};

const en: Content = {
  pageTitle: 'Bridge of Peace Tbilisi — Visitor Guide, Light Show & History',
  pageDescription:
    'A one-page visitor guide to the Bridge of Peace in Tbilisi: history, the night LED light show, best time to visit, how to get there, free crossing, nearby sights and a map.',
  nav: { story: 'Bridge', visit: 'Visit', around: 'Around', gallery: 'Gallery', map: 'Map', faq: 'FAQ' },
  hero: {
    eyebrow: "Tbilisi's contemporary line",
    title: 'Glass, steel<br />and <span class="text-[var(--cyan)]">light</span> on the Kura',
    sub: 'Opened in 2010, this pedestrian bridge links Erekle II Street and Rike Park — Old Tbilisi and the city’s modern rhythm.',
    ctaVisit: 'Plan your visit ↓',
    ctaStory: "The bridge's story"
  },
  stats: { opened: 'Opened', length: 'Bridge length', led: 'LED lights', rating: 'Google Maps · reviews' },
  story: {
    eyebrow: "The bridge's story",
    title: 'One bridge,<br />two Tbilisis.',
    lede: [
      'The Bridge of Peace was designed by Italian architect Michele De Lucchi. Its wavy, pale-blue glass canopy rests on a steel skeleton and reads clearly as a contemporary landmark in the midst of the historic fabric.',
      'At night the structure comes alive through a system by French lighting designer Philippe Martinaud — tens of thousands of LEDs turn the bridge into a soft, almost liquid volume.'
    ],
    cards: [
      { k: '01 · Form', t: 'Wavy glass roof', d: 'The translucent cover carries sky and city by day, and becomes the lit surface itself after dark.' },
      { k: '02 · Material', t: 'Light steel skeleton', d: 'Rhythmic white-steel lines form the lattice that makes the bridge easy to recognise even from afar.' },
      { k: '03 · Light', t: 'Part of the night city', d: 'The LED system reads best from dusk, especially when the lighting reflects on the surface of the Kura.' }
    ]
  },
  visit: {
    eyebrow: 'Practical guide',
    title: 'When, how long<br />and what it costs?',
    lede: 'The bridge is part of the city’s everyday walking route, so a visit slots easily into any stroll through Old Tbilisi.',
    bestTime: {
      label: 'Best time',
      h: 'From day to blue hour',
      pill: '20–40 min · quick visit',
      cards: [
        { icon: '☀', t: 'Day', d: 'For the structure, glass and steel details.' },
        { icon: '◐', t: 'Sunset', d: "Old town's warm colours and the bridge's first lights." },
        { icon: '✦', t: 'Night', d: 'LED lighting and the city reflected on the Kura.' }
      ],
      note: 'If you also add Rike Park, photos and a short Old Tbilisi loop, plan roughly 45–90 minutes.'
    },
    ticket: {
      label: 'Ticket / cost',
      t: 'Crossing the bridge is free',
      d: 'No ticket or advance booking is needed. The cable car, a boat tour, a guide or other private services are charged separately.',
      note: 'Temporary limits on the public space may apply during events or technical works.'
    },
    access: {
      label: 'Access',
      t: 'Every day · open space',
      d: 'The bridge is a public pedestrian link and is normally used throughout the day.'
    },
    parking: {
      label: 'Parking',
      t: 'Best to park & walk',
      d: 'Parking on Old Tbilisi streets is limited and fills up fast. It is easier to use the metro, a taxi, or leave the car at a central legal car park and continue on foot.'
    },
    address: {
      label: 'Address',
      t: 'Tbilisi · 0162',
      d: 'Rike Park ↔ Erekle II Street'
    }
  },
  transport: {
    eyebrow: 'Detailed transport',
    title: 'Getting to the bridge<br />with the city’s rhythm.',
    items: [
      { icon: 'M', t: 'Metro · Avlabari', d: 'The most practical nearby metro. From the station walk down towards Europe Square and Rike Park — about 15 minutes on foot.' },
      { icon: '↝', t: 'On foot · from Freedom Square', d: 'Head through the Old Town — the Clock Tower, Shavteli Street and Erekle II Street naturally lead you to the bridge’s western entrance.' },
      { icon: '●', t: 'Taxi / bus', d: 'Set the destination to “Rike Park” or “Europe Square”. Route and stop numbers can change, so use current Tbilisi transport information before you travel.' }
    ]
  },
  around: {
    eyebrow: 'Around the bridge',
    title: 'The route does not end<br />on the other bank.',
    lede: 'The Bridge of Peace is best as a hub: from it several directions meet a modern park, historic districts built on the cliff, and the streets of Old Tbilisi.',
    items: [
      { n: 'Rike Park', t: 'East of the bridge', d: 'A modern park, art objects and the lower cable-car station — a natural extension of the bridge walk.' },
      { n: 'Europe Square & Metekhi', t: 'A few minutes on foot', d: 'The other face of the Mtkvari: the cliff, Metekhi church, Vakhtang Gorgasali monument and views of Old Tbilisi.' },
      { n: 'Abanotubani', t: 'Towards Old Tbilisi', d: 'The domes of the sulphur baths, brick architecture and the district tied to the legends of Tbilisi’s founding.' },
      { n: 'Narikala', t: 'By cable car from Rike or on foot', d: 'The classic panorama from above the city; the bridge’s modern form reads especially well from height.' }
    ]
  },
  food: {
    eyebrow: 'Nearby flavours',
    title: 'After the bridge —<br />a Georgian table.',
    lede: 'Both sides of the bridge are a central strolling zone. Opening hours of specific venues change, so the focus here is on districts and the dishes that fit the route most naturally.',
    items: [
      { tag: 'Old Town', n: 'Erekle II Street', d: 'Right off the bridge you step into a network of streets full of restaurants and small wine spaces. Look for khinkali, ajapsandali and qvevri wine.' },
      { tag: 'Georgian table', n: 'Meidan & Abanotubani', d: 'A good direction for khinkali, mtsvadi, chakapuli and khachapuri. Some terraces combine with views of Old Tbilisi.' },
      { tag: 'Quick lunch', n: 'Baratashvili side', d: 'West of the bridge and towards the Clock Tower many cafés and Georgian-kitchen spots appear — handy mid-route.' }
    ]
  },
  photoTip: {
    eyebrow: 'Photo tip',
    title: 'The bridge in frame is not just a subject.',
    p: 'Try to include the Kura, the Old Town slopes and Rike’s green space. A wide frame shows better why this contemporary form stands out in Tbilisi’s historic fabric.'
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'The bridge by day,<br />dusk and night.',
    lede: '15 real photos from Old Tbilisi, the Narikala slope and the bridge itself — all from Wikimedia Commons, stored locally. Authors and licences are noted under each shot.'
  },
  map: {
    eyebrow: 'Map',
    title: 'Find the bridge<br />in the heart of the Kura.',
    plusCodeLabel: 'Plus code:',
    openMap: 'Open map ↗'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently<br />asked questions.',
    lede: 'Short answers before you plan your visit.',
    items: [
      { q: 'Is crossing the Bridge of Peace paid?', a: 'No. The Bridge of Peace is a public pedestrian space and crossing it is free. Only nearby services such as the cable car or a boat tour may cost extra.' },
      { q: 'What is the best time to see it?', a: 'Daylight is good for the architecture, but the most atmospheric moment comes after sunset, when the bridge lighting switches on and the light reflects on the Kura.' },
      { q: 'How much time should I allow?', a: 'Just to cross and take a few photos, about 20–40 minutes is enough. With Rike Park, photos and a short Old Tbilisi loop, 45–90 minutes is more comfortable.' },
      { q: 'Which metro is closest?', a: 'The most practical choice is Avlabari metro. From the station, walking down towards Europe Square and Rike Park takes about 15 minutes. A pleasant walk from Freedom Square through the Old Town also works.' },
      { q: 'Can I cross with a wheelchair or stroller?', a: 'The bridge is for pedestrians and connects both banks mainly via a flat route. For any temporary barriers or works on site, follow the signs posted locally.' },
      { q: 'Is it safe to visit at night?', a: 'The bridge is in a central, active tourist zone and evening is one of the most popular times. As in any busy city centre, keep an eye on personal belongings and current municipal guidance.' }
    ]
  },
  footer: {
    disclaimer: 'This website is an independent information guide and is not the official site of the Bridge of Peace, Tbilisi City Hall or the National Tourism Administration of Georgia.',
    sources: 'Primary information source: Georgia Travel',
    ga: 'GA4 · G-HXM22WWPKP'
  },
  attractionDescription:
    'A modern pedestrian bridge over the Kura, linking Rike Park and Erekle II Street. Its glass-and-steel structure lights up with thousands of LEDs at night.'
};

const ru: Content = {
  pageTitle: 'Мост Мира Тбилиси — Гид для посетителей, подсветка и история',
  pageDescription:
    'Одностраничный путеводитель по мосту Мира в Тбилиси: история, ночная LED-подсветка, лучшее время, как добраться, бесплатный проход, достопримечательности рядом и карта.',
  nav: { story: 'Мост', visit: 'Визит', around: 'Рядом', gallery: 'Галерея', map: 'Карта', faq: 'FAQ' },
  hero: {
    eyebrow: 'Современная линия Тбилиси',
    title: 'Стекло, сталь<br />и <span class="text-[var(--cyan)]">свет</span> на Куре',
    sub: 'Открытый в 2010 году пешеходный мост соединяет улицу Эрекле II и парк Рика — Старый Тбилиси и современный ритм города.',
    ctaVisit: 'Спланируйте визит ↓',
    ctaStory: 'История моста'
  },
  stats: { opened: 'Открыт', length: 'Длина моста', led: 'LED-подсветка', rating: 'Google Maps · отзывов' },
  story: {
    eyebrow: 'История моста',
    title: 'Один мост,<br />два Тбилиси.',
    lede: [
      'Мост Мира спроектирован итальянским архитектором Микеле де Лукки. Его волнистый стеклянный навес цвета небесной лазури покоится на стальном каркасе и читается как современный ориентир среди исторической ткани города.',
      'Ночью конструкция оживает благодаря системе французского светодизайнера Филиппа Мартино — десятки тысяч светодиодов превращают мост в мягкий, почти жидкий объём.'
    ],
    cards: [
      { k: '01 · Форма', t: 'Волнистый стеклянный навес', d: 'Прозрачное покрытие днём пропускает небо и город, а после заката само становится светящейся поверхностью.' },
      { k: '02 · Материал', t: 'Лёгкий стальной каркас', d: 'Ритмичные линии белой стали образуют решётку, по которой мост легко узнать даже издали.' },
      { k: '03 · Свет', t: 'Часть ночного города', d: 'LED-система лучше всего видна с сумерек, особенно когда подсветка отражается в водах Куры.' }
    ]
  },
  visit: {
    eyebrow: 'Практический гид',
    title: 'Когда, как долго<br />и во сколько?',
    lede: 'Мост — часть ежедневного пешеходного маршрута города, поэтому посещение легко вписать в любую прогулку по Старому Тбилиси.',
    bestTime: {
      label: 'Лучшее время',
      h: 'Со дня до синего часа',
      pill: '20–40 мин · быстрый визит',
      cards: [
        { icon: '☀', t: 'День', d: 'Для деталей конструкции, стекла и стали.' },
        { icon: '◐', t: 'Закат', d: 'Тёплые краски старого города и первые огни моста.' },
        { icon: '✦', t: 'Ночь', d: 'LED-подсветка и город, отражённый в Куре.' }
      ],
      note: 'Если добавить парк Рика, фото и небольшой маршрут по Старому Тбилиси, планируйте около 45–90 минут.'
    },
    ticket: {
      label: 'Билет / стоимость',
      t: 'Проход по мосту бесплатный',
      d: 'Билет и предварительная запись не нужны. Канатная дорога, прогулка на лодке, гид или другие частные услуги оплачиваются отдельно.',
      note: 'Временные ограничения общественного пространства возможны во время мероприятий или работ.'
    },
    access: {
      label: 'Доступ',
      t: 'Ежедневно · открытое пространство',
      d: 'Мост — общественная пешеходная переправа и обычно используется в течение всего дня.'
    },
    parking: {
      label: 'Парковка',
      t: 'Лучше припарковаться и идти пешком',
      d: 'Парковка на улицах Старого Тбилиси ограничена и быстро заполняется. Проще воспользоваться метро, такси или оставить машину на легальной парковке в центре и дойти пешком.'
    },
    address: {
      label: 'Адрес',
      t: 'Тбилиси · 0162',
      d: 'Парк Рика ↔ улица Эрекле II'
    }
  },
  transport: {
    eyebrow: 'Подробный транспорт',
    title: 'Как добраться до моста<br />в ритме города.',
    items: [
      { icon: 'M', t: 'Метро · Авлабари', d: 'Самый удобный ближайший вариант. От станции пешком вниз к площади Европы и парку Рика около 15 минут.' },
      { icon: '↝', t: 'Пешком · от площади Свободы', d: 'Идите через Старый город — Часовая башня, улица Шавтели и улица Эрекле II естественно приведут вас к западному входу на мост.' },
      { icon: '●', t: 'Такси / автобус', d: 'Укажите назначение «Парк Рика» или «Площадь Европы». Номера маршрутов и остановок могут меняться, поэтому перед поездкой используйте актуальную транспортную информацию Тбилиси.' }
    ]
  },
  around: {
    eyebrow: 'Рядом с мостом',
    title: 'Маршрут не заканчивается<br />на другом берегу.',
    lede: 'Мост Мира лучше всего работает как узел: от него в нескольких направлениях сходятся современный парк, исторические кварталы на скале и улицы Старого Тбилиси.',
    items: [
      { n: 'Парк Рика', t: 'К востоку от моста', d: 'Современный парк, арт-объекты и нижняя станция канатной дороги — естественное продолжение прогулки по мосту.' },
      { n: 'Площадь Европы и Метехи', t: 'Несколько минут пешком', d: 'Другая сторона Куры: скала, храм Метехи, памятник Вахтангу Горгасали и виды на Старый Тбилиси.' },
      { n: 'Абанотубани', t: 'В сторону Старого Тбилиси', d: 'Купола серных бань, кирпичная архитектура и квартал, связанный с легендами основания Тбилиси.' },
      { n: 'Нарикала', t: 'На канатной дороге от Рика или пешком', d: 'Классическая панорама сверху; современные очертания моста особенно хорошо читаются с высоты.' }
    ]
  },
  food: {
    eyebrow: 'Местные вкусы',
    title: 'После моста —<br />грузинский стол.',
    lede: 'Оба берега моста — центральная прогулочная зона. Часы работы конкретных заведений меняются, поэтому здесь акцент на районах и блюдах, которые естественнее всего вписываются в маршрут.',
    items: [
      { tag: 'Старый город', n: 'Улица Эрекле II', d: 'Сразу с моста вы попадаете в сеть улиц с ресторанами и небольшими винными заведениями. Ищите хинкали, аджапсандали и вино в квеври.' },
      { tag: 'Грузинский стол', n: 'Мейдан и Абанотубани', d: 'Хорошее направление для хинкали, мцвади, чаклури и хачапури. Некоторые террасы открывают виды на Старый Тбилиси.' },
      { tag: 'Быстрый обед', n: 'Сторона Бараташвили', d: 'К западу от моста и в сторону Часовой башни много кафе и заведений грузинской кухни — удобно по пути.' }
    ]
  },
  photoTip: {
    eyebrow: 'Совет по фото',
    title: 'Мост в кадре — это не просто объект.',
    p: 'Постарайтесь включить Куру, склоны Старого города и зелёное пространство Рика. Широкий кадр лучше показывает, почему эта современная форма так выделяется в исторической ткани Тбилиси.'
  },
  gallery: {
    eyebrow: 'Галерея',
    title: 'Мост днём,<br />в сумерках и ночью.',
    lede: '15 реальных фотографий Старого Тбилиси, склона Нарикалы и самого моста — все из Wikimedia Commons, сохранены локально. Авторы и лицензии указаны под каждым кадром.'
  },
  map: {
    eyebrow: 'Карта',
    title: 'Найдите мост<br />в сердце Куры.',
    plusCodeLabel: 'Плюс-код:',
    openMap: 'Открыть карту ↗'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Часто<br />задаваемые вопросы.',
    lede: 'Короткие ответы перед планированием визита.',
    items: [
      { q: 'Платный ли проход по мосту Мира?', a: 'Нет. Мост Мира — общественное пешеходное пространство, и проход по нему бесплатный. Дополнительно могут стоить только соседние услуги, например канатная дорога или прогулка на лодке.' },
      { q: 'Когда лучше всего приходить?', a: 'Днём хорошо для архитектуры, но самая атмосферная пора наступает после заката, когда включается подсветка моста и свет отражается в Куре.' },
      { q: 'Сколько времени закладывать?', a: 'Только чтобы перейти и сделать несколько фото, достаточно около 20–40 минут. С парком Рика, фото и небольшим маршрутом по Старому Тбилиси комфортнее 45–90 минут.' },
      { q: 'Какое метро ближе?', a: 'Самый удобный вариант — метро Авлабари. От станции пешком вниз к площади Европы и парку Рика около 15 минут. Также приятна пешая дорога от площади Свободы через Старый город.' },
      { q: 'Можно ли пересечь на коляске или с детской коляской?', a: 'Мост пешеходный и соединяет оба берега преимущественно ровным маршрутом. При временных барьерах или работах ориентируйтесь на местные указатели.' },
      { q: 'Безопасно ли приходить ночью?', a: 'Мост находится в центральной, оживлённой туристической зоне, и вечер — одно из самых популярных времён. Как и в любом загруженном центре города, следите за личными вещами и актуальными муниципальными рекомендациями.' }
    ]
  },
  footer: {
    disclaimer: 'Этот сайт — независимый информационный путеводитель и не является официальным сайтом моста Мира, мэрии Тбилиси или Национальной туристической администрации Грузии.',
    sources: 'Основной источник информации: Georgia Travel',
    ga: 'GA4 · G-HXM22WWPKP'
  },
  attractionDescription:
    'Современный пешеходный мост через Куру, соединяющий парк Рика и улицу Эрекле II. Его стеклянно-стальная конструкция ночью загорается тысячами светодиодов.'
};

export const content: Record<Locale, Content> = { ka, en, ru };

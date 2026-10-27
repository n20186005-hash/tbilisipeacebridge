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
    { hreflang: 'ka-GE', href: `${base}/` },
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
  "pageTitle": "მშვიდობის ხიდი თბილისში — რიყის პარკი, ისტორია და ვიზიტი",
  "pageDescription": "მშვიდობის ხიდი თბილისში: ერეკლე II-ის ქუჩა და რიყის პარკი, არქიტექტურა წყაროების მიხედვით, Maps-ის დათარიღებული საათები, გასეირნების მიმართულებები და ისტორიული ფოტოები.",
  "nav": {
    "story": "ხიდი",
    "visit": "ვიზიტი",
    "around": "ახლოს",
    "gallery": "გალერეა",
    "map": "რუკა",
    "faq": "FAQ"
  },
  "hero": {
    "eyebrow": "თბილისის თანამედროვე ხაზი",
    "title": "მშვიდობის ხიდი<br />თბილისში",
    "sub": "2010 წელს გახსნილი საფეხმავლო ხიდი ერთმანეთთან აკავშირებს ერეკლე II-ის ქუჩასა და რიყის პარკს — ძველ თბილისსა და ქალაქის თანამედროვე რიტმს.",
    "ctaVisit": "დაგეგმე ვიზიტი ↓",
    "ctaStory": "ხიდის ამბავი"
  },
  "stats": {
    "opened": "გახსნის წელი",
    "length": "საფეხმავლო ნაწილი",
    "led": "სანათები · Georgia Travel",
    "rating": "Google Maps · შეფასება"
  },
  "story": {
    "eyebrow": "ხიდის ამბავი",
    "title": "ერთი ხიდი,<br />ორი თბილისი.",
    "lede": [
      "მშვიდობის ხიდი იტალიელი არქიტექტორის მიქელე დე ლუკის პროექტია. მისი ტალღოვანი, ცისფერი მინის გადახურვა ფოლადის ჩონჩხზე ზის და ისტორიული გარემოს შუაგულში აშკარად თანამედროვე ნიშნად იკითხება.",
      "ღამით კონსტრუქცია ფრანგი განათების დიზაინერის ფილიპ მარტინოს სისტემით ცოცხლდება — ათიათასობით ნათურა ხიდს მსუბუქ, თითქმის წყლის მსგავს მოცულობად აქცევს."
    ],
    "cards": [
      {
        "k": "01 · ფორმა",
        "t": "ტალღოვანი მინის სახურავი",
        "d": "გამჭვირვალე საფარი დღისით ცასა და ქალაქს ატარებს, საღამოს კი თავად ხდება განათებული ზედაპირი."
      },
      {
        "k": "02 · მასალა",
        "t": "ფოლადის მსუბული ჩონჩხი",
        "d": "თეთრი ფოლადის რიტმული ხაზები ქმნის იმ ბადეს, რომელიც შორიდანაც ადვილად ამოსაცნობს ხიდს."
      },
      {
        "k": "03 · შუქი",
        "t": "ღამის ქალაქის ნაწილი",
        "d": "LED სისტემა ყველაზე კარგად ბინდიდან ჩანს, განსაკუთრებით მაშინ, როცა განათება მტკვრის ზედაპირზე ირეკლება."
      }
    ]
  },
  "visit": {
    "eyebrow": "პრაქტიკული გზამკვლევი",
    "title": "როდის, რამდენ ხანს<br />და რა ფასად?",
    "lede": "საფეხმავლო ხიდი მტკვარზე ერეკლე II-ის ქუჩასა და რიყის პარკს აკავშირებს. მისასვლელი თქვენი ძველი თბილისის მარშრუტის მიხედვით შეარჩიეთ.",
    "bestTime": {
      "label": "საუკეთესო დრო",
      "h": "დღიდან ლურჯ საათამდე",
      "pill": "თქვენი ტემპით",
      "cards": [
        {
          "icon": "☀",
          "t": "დღე",
          "d": "კონსტრუქციის, მინისა და ფოლადის დეტალებისთვის."
        },
        {
          "icon": "◐",
          "t": "მზის ჩასვლა",
          "d": "დღის სინათლე მინისა და ფოლადის კონსტრუქციას აჩენს. საღამოს ხედისთვის იმ დღის პირობები გადაამოწმეთ; ისტორიული განათების პროექტი კონკრეტულ სანახაობას ან ჩართვის დროს არ უზრუნველყოფს."
        },
        {
          "icon": "✦",
          "t": "ღამე",
          "d": "საღამოს ხედი განათებასა და მიმდინარე პირობებზეა დამოკიდებული."
        }
      ],
      "note": "ვიზიტის ფიქსირებული ხანგრძლივობა არ არსებობს. გაითვალისწინეთ ფოტოების გადაღება, სხვა ქვეითები და თქვენ მიერ შერჩეული გაჩერებები."
    },
    "ticket": {
      "label": "ბილეთი / ღირებულება",
      "t": "ხიდი და ცალკე მომსახურებები",
      "d": "ოფიციალური ტურისტული წყარო საფეხმავლო ხიდს აღწერს, მაგრამ მოქმედი ბილეთის ტარიფს არ აქვეყნებს. ხიდში ნუ აგერევათ მიმდებარე საბაგირო, ნავი ან ფასიანი გიდის მომსახურება.",
      "note": "საზოგადოებრივი სივრცის დროებითი შეზღუდვები ღონისძიების ან ტექნიკური სამუშაოების დროს შესაძლებელია."
    },
    "access": {
      "label": "წვდომა",
      "t": "Maps-ის ჩანაწერი · 26 ოქტომბერი 2026",
      "d": "შემოწმებისას Google Maps კვირის შვიდივე დღეს 24-საათიან წვდომას აჩვენებდა. ეს მესამე მხარის დათარიღებული ჩანაწერია და არა დროებითი შეზღუდვების, სამუშაოების ან ღონისძიებების დროს გახსნის გარანტია."
    },
    "parking": {
      "label": "პარკინგი",
      "t": "საფეხმავლო მისასვლელები",
      "d": "ძველ ქალაქში შესვლამდე შეარჩიეთ ავტომობილის გაჩერების ადგილი. თქვენი საწყისი წერტილისთვის გადაამოწმეთ ნებადართული პარკირება და მოქმედი გადასასვლელები; სპეციალური ვიზიტორთა პარკინგი აქ დადასტურებული არ არის."
    },
    "address": {
      "label": "მისამართი",
      "t": "თბილისი",
      "d": "რიყის პარკი ↔ ერეკლე II-ის ქუჩა"
    }
  },
  "transport": {
    "eyebrow": "დეტალური ტრანსპორტი",
    "title": "ხიდამდე მისვლა<br />ქალაქის რიტმით.",
    "items": [
      {
        "icon": "M",
        "t": "მეტრო · ავლაბარი",
        "d": "რიყის პარკის გავლით მარშრუტის დაგეგმვისას შეგიძლიათ ავლაბრის მეტრო განიხილოთ. გადაამოწმეთ მოქმედი სატრანსპორტო რუკა და არჩეული გასასვლელიდან მისვლა; უახლოეს სადგურს ან ზუსტ დროს არ ვპირდებით."
      },
      {
        "icon": "↝",
        "t": "ფეხით · თავისუფლების მოედნიდან",
        "d": "Georgia Travel ძველი თბილისის მხარეს ერეკლე II-ის ქუჩას ასახელებს. მისასვლელი საწყისი წერტილიდან მოქმედი გადასასვლელებისა და ნიშნების მიხედვით დაგეგმეთ."
      },
      {
        "icon": "●",
        "t": "ტაქსი / ავტობუსი",
        "d": "დანიშნულებად მიუთითეთ „რიყის პარკი“ ან „ევროპის მოედანი“. მარშრუტებისა და გაჩერებების ნომრები შეიძლება შეიცვალოს, ამიტომ გამგზავრებამდე გამოიყენეთ თბილისის მიმდინარე სატრანსპორტო ინფორმაცია."
      }
    ]
  },
  "around": {
    "eyebrow": "ხიდის გარშემო",
    "title": "მარშრუტი არ მთავრდება<br />მეორე ნაპირზე.",
    "lede": "აირჩიეთ მიმართულება ორი ნაპირის მიხედვით: ერთ მხარეს რიყის პარკია, მეორე მხარეს — ერეკლე II-ის ქუჩა და ძველი თბილისი. სხვა ღირსშესანიშნაობებს საკუთარი დაშვების პირობები აქვთ.",
    "items": [
      {
        "n": "რიყის პარკი",
        "t": "ხიდის აღმოსავლეთ მხარეს",
        "d": "ეროვნული ტურისტული სტატია რიყის პარკს ხიდის ერთ-ერთ მისასვლელად ასახელებს. პარკის სხვა მომსახურებები ცალკე გადაამოწმეთ."
      },
      {
        "n": "ევროპის მოედანი და მეტეხი",
        "t": "ცალკე გაჩერება",
        "d": "მეტეხი ძველი თბილისის ცალკე ღირსშესანიშნაობაა. მარშრუტი არჩეული ნაპირის მიხედვით დაგეგმეთ და არა ფიქსირებული დროის ვარაუდით."
      },
      {
        "n": "აბანოთუბანი",
        "t": "ძველი თბილისის მიმართულებით",
        "d": "აბანოთუბანი აბანოების უბნით არის ცნობილი. აბანოში სტუმრობა ცალკე საქმიანობაა, საკუთარი დაჯავშნისა და დაშვების პირობებით."
      },
      {
        "n": "ნარიყალა",
        "t": "რიყიდან საბაგიროთი ან ფეხით",
        "d": "ნარიყალა ბორცვზე მდებარე ცალკე ადგილია. ხიდთან ერთად მონახულებამდე მისი მიმდინარე წვდომა და ტრანსპორტი გადაამოწმეთ."
      }
    ]
  },
  "food": {
    "eyebrow": "ახლომდებარე გემოები",
    "title": "ხიდის შემდეგ —<br />ქართული სუფრა.",
    "lede": "კვება ცალკე გაჩერებად დაგეგმეთ, ადგილის მიმდინარე ინფორმაციის მიხედვით. რეკომენდებული ბიზნესების სია აქ არ არის.",
    "items": [
      {
        "tag": "ძველი ქალაქი",
        "n": "ერეკლე II-ის ქუჩა",
        "d": "ერეკლე II-ის ქუჩა ძველი თბილისის მისასვლელია. კვებისთვის ადგილი მიმდინარე მენიუსა და სამუშაო საათების მიხედვით შეარჩიეთ."
      },
      {
        "tag": "ქართული სუფრა",
        "n": "მეიდანი და აბანოთუბანი",
        "d": "მეიდანისა და აბანოთუბნის მხარე ცალკე გაჩერებად შეგიძლიათ განიხილოთ; კონკრეტული რესტორნის მიმდინარე მენიუ აქ გადამოწმებული არ არის."
      },
      {
        "tag": "სწრაფი ლანჩი",
        "n": "ბარათაშვილის მხარე",
        "d": "ბარათაშვილის მიმართულებით გასეირნებისთვის მოქმედი ქუჩების რუკა გამოიყენეთ. კაფეს დამატებამდე მისი ზუსტი მისამართი გადაამოწმეთ."
      }
    ]
  },
  "photoTip": {
    "eyebrow": "ფოტოგრაფიის რჩევა",
    "title": "ხიდი კადრში მხოლოდ ობიექტი არ არის.",
    "p": "სცადეთ ჩართოთ მტკვარი, ძველი ქალაქის ფერდობები და რიყის მწვანე სივრცე. ფართო კადრი უკეთ აჩვენებს, რატომ არის ეს თანამედროვე ფორმა თბილისის ისტორიულ ქსოვილში ასეთი გამორჩეული."
  },
  "gallery": {
    "eyebrow": "გალერეა",
    "title": "მდინარე და<br />ძველი თბილისი.",
    "lede": "შვიდი ისტორიული ქალაქისა და მდინარის პანორამა სრულ კომპოზიციას ინარჩუნებს. ხიდი ზოგიერთ ხედში გარემოს ნაწილია. ავტორები, თარიღები და ლიცენზიები სურათებთან არის მითითებული; მთავარი სექციების ილუსტრაციები ფოტოები არ არის."
  },
  "map": {
    "eyebrow": "რუკა",
    "title": "იპოვე ხიდი<br />მტკვრის შუაგულში.",
    "plusCodeLabel": "კოორდინატები:",
    "openMap": "რუკის გახსნა ↗"
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "ხშირი<br />კითხვები.",
    "lede": "მოკლე პასუხები ვიზიტის დაგეგმვამდე.",
    "items": [
      {
        "q": "მშვიდობის ხიდზე გადასვლა ფასიანია?",
        "a": "ოფიციალურ ტურისტულ სტატიაში მიმდინარე შესვლის ტარიფი მითითებული არ არის. შეამოწმეთ ადგილზე მოქმედი ცნობები; საბაგირო, ნავი და კერძო ტური ცალკე მომსახურებებია."
      },
      {
        "q": "რომელი დროა საუკეთესო სანახავად?",
        "a": "დღის სინათლე მინისა და ფოლადის კონსტრუქციას აჩენს. საღამოს ხედისთვის იმ დღის პირობები გადაამოწმეთ; ისტორიული განათების პროექტი კონკრეტულ სანახაობას ან ჩართვის დროს არ უზრუნველყოფს."
      },
      {
        "q": "რამდენი დრო დავუთმო?",
        "a": "ხანგრძლივობა ფოტოების გადაღებისა და სხვა გაჩერებების მიხედვით შეარჩიეთ. ყველა ვიზიტორისთვის ერთიანი გადაკვეთის ან ვიზიტის დრო დადასტურებული არ არის."
      },
      {
        "q": "რომელი მეტროა ახლოს?",
        "a": "თქვენი საწყისი ადგილისთვის მოქმედი სატრანსპორტო რუკა შეამოწმეთ. ავლაბარი რიყის პარკის გავლით ერთ-ერთი შესაძლო მისასვლელია და არა ყველასთვის უახლოესი ან უსწრაფესი ვარიანტი."
      },
      {
        "q": "შესაძლებელია ეტლით ან საბავშვო ეტლით გადასვლა?",
        "a": "ხიდი საფეხმავლოა, მაგრამ ყველა მისასვლელზე საფეხურების გარეშე უწყვეტი გზა, დახრილობა და დროებითი ბარიერები აქ გადამოწმებული არ არის. შეამოწმეთ თქვენი საჭიროების შესაბამისი კონკრეტული მარშრუტი."
      },
      {
        "q": "ღამით უსაფრთხოა მონახულება?",
        "a": "გზამკვლევი ღამით უსაფრთხოებას ან განათების მუშაობას ვერ უზრუნველყოფს. გაითვალისწინეთ მიმდინარე ადგილობრივი ცნობები, ხილვადობა, ამინდი და უკან დაბრუნების გზა."
      }
    ]
  },
  "footer": {
    "disclaimer": "დამოუკიდებელი, არაკომერციული საგანმანათლებლო ტურისტული გზამკვლევი. ეს არ არის ხიდის, თბილისის მერიის ან საქართველოს ტურიზმის ეროვნული ადმინისტრაციის ოფიციალური ვებგვერდი.",
    "sources": "წყაროები შემოწმებულია 2026 წლის 26 ოქტომბერს. კონტრაქტორი Cimolai საფეხმავლო ნაწილისთვის 160 მ-ს, სახურავისთვის კი 115 მ-ს უთითებს; ეს სხვადასხვა ნაწილის ზომებია.",
    "ga": "გვერდი Google Analytics-ს არჩევანის გადამრთველის გარეშე ტვირთავს და Google Maps-ს აჩვენებს. ჰოსტინგმა შეიძლება ცალკე Cloudflare-ის წარმადობის სკრიპტიც დაამატოს. სკრიპტის არსებობა მონაცემების წარმატებით გაგზავნას არ ადასტურებს."
  },
  "attractionDescription": "თანამედროვე საფეხმავლო ხიდი მტკვარზე, რომელიც რიყის პარკსა და ერეკლე II-ის ქუჩას აკავშირებს. მინისა და ფოლადის კონსტრუქცია ღამით ათიათასობით ნათურით ინთება."
};

const en: Content = {
  "pageTitle": "Bridge of Peace Tbilisi — Rike Park, History & Visiting",
  "pageDescription": "Plan a visit to Tbilisi’s Bridge of Peace: Erekle II Street and Rike Park, attributed architecture facts, dated Maps hours, nearby walks and historical photographs.",
  "nav": {
    "story": "Bridge",
    "visit": "Visit",
    "around": "Around",
    "gallery": "Gallery",
    "map": "Map",
    "faq": "FAQ"
  },
  "hero": {
    "eyebrow": "Tbilisi's contemporary line",
    "title": "Bridge of Peace<br />in <span class=\"text-[var(--cyan)]\">Tbilisi</span>",
    "sub": "Opened in 2010, this pedestrian bridge links Erekle II Street and Rike Park — Old Tbilisi and the city’s modern rhythm.",
    "ctaVisit": "Plan your visit ↓",
    "ctaStory": "The bridge's story"
  },
  "stats": {
    "opened": "Opened",
    "length": "Footbridge · contractor",
    "led": "Lamps · Georgia Travel",
    "rating": "Google Maps · reviews"
  },
  "story": {
    "eyebrow": "The bridge's story",
    "title": "One bridge,<br />two Tbilisis.",
    "lede": [
      "The Bridge of Peace was designed by Italian architect Michele De Lucchi. Its wavy, pale-blue glass canopy rests on a steel skeleton and reads clearly as a contemporary landmark in the midst of the historic fabric.",
      "At night the structure comes alive through a system by French lighting designer Philippe Martinaud — tens of thousands of LEDs turn the bridge into a soft, almost liquid volume."
    ],
    "cards": [
      {
        "k": "01 · Form",
        "t": "Wavy glass roof",
        "d": "The translucent cover carries sky and city by day, and becomes the lit surface itself after dark."
      },
      {
        "k": "02 · Material",
        "t": "Light steel skeleton",
        "d": "Rhythmic white-steel lines form the lattice that makes the bridge easy to recognise even from afar."
      },
      {
        "k": "03 · Light",
        "t": "Part of the night city",
        "d": "The LED system reads best from dusk, especially when the lighting reflects on the surface of the Kura."
      }
    ]
  },
  "visit": {
    "eyebrow": "Practical guide",
    "title": "When, how long<br />and what it costs?",
    "lede": "The pedestrian bridge links Erekle II Street and Rike Park across the Mtkvari. Choose the bank that fits your wider Old Tbilisi route.",
    "bestTime": {
      "label": "Best time",
      "h": "From day to blue hour",
      "pill": "Choose your own pace",
      "cards": [
        {
          "icon": "☀",
          "t": "Day",
          "d": "For the structure, glass and steel details."
        },
        {
          "icon": "◐",
          "t": "Sunset",
          "d": "Daylight shows the glass-and-steel structure. If you want an evening view, check conditions on the day; the historical lighting design is not a promise of a particular show or switch-on time."
        },
        {
          "icon": "✦",
          "t": "Night",
          "d": "An evening view depends on lighting and conditions at the time."
        }
      ],
      "note": "There is no fixed visit duration. Allow time for photographs, other pedestrians and the places you choose on either bank."
    },
    "ticket": {
      "label": "Ticket / cost",
      "t": "Crossing and separate services",
      "d": "The official tourism source describes a pedestrian bridge, but does not publish a current ticket tariff. Do not confuse the bridge with paid cable-car, boat or guided-tour services nearby.",
      "note": "Temporary limits on the public space may apply during events or technical works."
    },
    "access": {
      "label": "Access",
      "t": "Maps listing · 26 October 2026",
      "d": "Google Maps displayed 24-hour access on all seven days when checked. This is a dated third-party listing, not a guarantee against temporary restrictions, maintenance or event closures."
    },
    "parking": {
      "label": "Parking",
      "t": "Pedestrian approaches",
      "d": "Decide where to leave a vehicle before entering the Old Town streets. Check permitted parking and current pedestrian crossings for your actual starting point; no dedicated visitor parking is confirmed here."
    },
    "address": {
      "label": "Address",
      "t": "Tbilisi",
      "d": "Rike Park ↔ Erekle II Street"
    }
  },
  "transport": {
    "eyebrow": "Detailed transport",
    "title": "Getting to the bridge<br />with the city’s rhythm.",
    "items": [
      {
        "icon": "M",
        "t": "Metro · Avlabari",
        "d": "Avlabari can be considered when planning a route via Rike Park. Check the current transport map and the walking approach from your chosen exit; this guide does not promise a closest station or walking time."
      },
      {
        "icon": "↝",
        "t": "On foot · from Freedom Square",
        "d": "Erekle II Street is the Old Town-side connection identified by Georgia Travel. Plan the approach from your starting point using current crossings and signs."
      },
      {
        "icon": "●",
        "t": "Taxi / bus",
        "d": "Set the destination to “Rike Park” or “Europe Square”. Route and stop numbers can change, so use current Tbilisi transport information before you travel."
      }
    ]
  },
  "around": {
    "eyebrow": "Around the bridge",
    "title": "The route does not end<br />on the other bank.",
    "lede": "Use the two banks to choose a direction: Rike Park on one side and the Erekle II Street approach to Old Tbilisi on the other. Nearby attractions have their own access conditions.",
    "items": [
      {
        "n": "Rike Park",
        "t": "East of the bridge",
        "d": "Rike Park is the bank-side connection named by the national tourism article. Treat other park facilities as separate services."
      },
      {
        "n": "Europe Square & Metekhi",
        "t": "A separate stop",
        "d": "Metekhi is another Old Tbilisi landmark. Choose a route from the bank you are using rather than assuming a fixed walking time."
      },
      {
        "n": "Abanotubani",
        "t": "Towards Old Tbilisi",
        "d": "Abanotubani is known for its bath district. A bath visit is a separate activity with its own booking and access arrangements."
      },
      {
        "n": "Narikala",
        "t": "By cable car from Rike or on foot",
        "d": "Narikala is a separate hillside destination. Confirm its current access and any transport before combining it with the bridge."
      }
    ]
  },
  "food": {
    "eyebrow": "Nearby flavours",
    "title": "After the bridge —<br />a Georgian table.",
    "lede": "Choose a meal as a separate stop, based on current venue information. No business list is endorsed here.",
    "items": [
      {
        "tag": "Old Town",
        "n": "Erekle II Street",
        "d": "Erekle II Street is the connection to the Old Town. If you plan a meal, choose a venue by its current menu and opening information."
      },
      {
        "tag": "Georgian table",
        "n": "Meidan & Abanotubani",
        "d": "The Meidan and Abanotubani area can be considered for a separate Old Town stop; no particular restaurant or current menu is verified here."
      },
      {
        "tag": "Quick lunch",
        "n": "Baratashvili side",
        "d": "Towards Baratashvili, use the current street map to choose an onward walk. Check any café’s actual address before adding it to your route."
      }
    ]
  },
  "photoTip": {
    "eyebrow": "Photo tip",
    "title": "The bridge in frame is not just a subject.",
    "p": "Try to include the Kura, the Old Town slopes and Rike’s green space. A wide frame shows better why this contemporary form stands out in Tbilisi’s historic fabric."
  },
  "gallery": {
    "eyebrow": "Gallery",
    "title": "Riverbanks and<br />Old Tbilisi.",
    "lede": "Seven historical city and river panoramas retain their full compositions, with the bridge appearing as part of the wider setting in some views. Authors, dates and licences accompany the images. The main section graphics are concept illustrations, not photographs."
  },
  "map": {
    "eyebrow": "Map",
    "title": "Find the bridge<br />in the heart of the Kura.",
    "plusCodeLabel": "Coordinates:",
    "openMap": "Open map ↗"
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Frequently<br />asked questions.",
    "lede": "Short answers before you plan your visit.",
    "items": [
      {
        "q": "Is crossing the Bridge of Peace paid?",
        "a": "The official tourism article does not give a current admission tariff. Check any local access notice; cable cars, boats and private tours are separate services."
      },
      {
        "q": "What is the best time to see it?",
        "a": "Daylight shows the glass-and-steel structure. If you want an evening view, check conditions on the day; the historical lighting design is not a promise of a particular show or switch-on time."
      },
      {
        "q": "How much time should I allow?",
        "a": "Choose the duration around photographs and the other stops you plan. There is no verified standard crossing or visit time for every traveller."
      },
      {
        "q": "Which metro is closest?",
        "a": "Check the current city transport map for your origin. Avlabari is a possible approach via Rike Park, not a verified universal closest or quickest option."
      },
      {
        "q": "Can I cross with a wheelchair or stroller?",
        "a": "The bridge is pedestrian infrastructure, but this guide has not verified current step-free continuity, gradients or temporary barriers on every approach. Check the specific route for your mobility needs."
      },
      {
        "q": "Is it safe to visit at night?",
        "a": "No guide can guarantee night-time safety or that lighting will operate during your visit. Consider current local notices, visibility, weather and your return journey."
      }
    ]
  },
  "footer": {
    "disclaimer": "An independent, nonprofit educational visitor guide. This is not the official website of the bridge, Tbilisi City Hall or the Georgian National Tourism Administration.",
    "sources": "Sources checked 26 October 2026. Contractor Cimolai gives 160 m for the footbridge and 115 m for the roof; these refer to different parts, not a single interchangeable length.",
    "ga": "This page loads Google Analytics without a preference selector and embeds Google Maps. Hosting may add a separate Cloudflare performance beacon. A script being present does not prove a successful data transmission."
  },
  "attractionDescription": "A modern pedestrian bridge over the Kura, linking Rike Park and Erekle II Street. Its glass-and-steel structure lights up with thousands of LEDs at night."
};

const ru: Content = {
  "pageTitle": "Мост Мира в Тбилиси — парк Рика, история и посещение",
  "pageDescription": "Мост Мира в Тбилиси: улица Эрекле II и парк Рика, архитектура с указанием источников, датированные часы Maps, направления прогулок и исторические фотографии.",
  "nav": {
    "story": "Мост",
    "visit": "Визит",
    "around": "Рядом",
    "gallery": "Галерея",
    "map": "Карта",
    "faq": "FAQ"
  },
  "hero": {
    "eyebrow": "Современная линия Тбилиси",
    "title": "Мост Мира<br />в Тбилиси",
    "sub": "Открытый в 2010 году пешеходный мост соединяет улицу Эрекле II и парк Рика — Старый Тбилиси и современный ритм города.",
    "ctaVisit": "Спланируйте визит ↓",
    "ctaStory": "История моста"
  },
  "stats": {
    "opened": "Открыт",
    "length": "Пешеходная часть",
    "led": "Лампы · Georgia Travel",
    "rating": "Google Maps · отзывов"
  },
  "story": {
    "eyebrow": "История моста",
    "title": "Один мост,<br />два Тбилиси.",
    "lede": [
      "Мост Мира спроектирован итальянским архитектором Микеле де Лукки. Его волнистый стеклянный навес цвета небесной лазури покоится на стальном каркасе и читается как современный ориентир среди исторической ткани города.",
      "Ночью конструкция оживает благодаря системе французского светодизайнера Филиппа Мартино — десятки тысяч светодиодов превращают мост в мягкий, почти жидкий объём."
    ],
    "cards": [
      {
        "k": "01 · Форма",
        "t": "Волнистый стеклянный навес",
        "d": "Прозрачное покрытие днём пропускает небо и город, а после заката само становится светящейся поверхностью."
      },
      {
        "k": "02 · Материал",
        "t": "Лёгкий стальной каркас",
        "d": "Ритмичные линии белой стали образуют решётку, по которой мост легко узнать даже издали."
      },
      {
        "k": "03 · Свет",
        "t": "Часть ночного города",
        "d": "LED-система лучше всего видна с сумерек, особенно когда подсветка отражается в водах Куры."
      }
    ]
  },
  "visit": {
    "eyebrow": "Практический гид",
    "title": "Когда, как долго<br />и во сколько?",
    "lede": "Пешеходный мост соединяет улицу Эрекле II и парк Рика через Мтквари. Выберите подходящий берег с учётом вашего маршрута по Старому Тбилиси.",
    "bestTime": {
      "label": "Лучшее время",
      "h": "Со дня до синего часа",
      "pill": "В собственном темпе",
      "cards": [
        {
          "icon": "☀",
          "t": "День",
          "d": "Для деталей конструкции, стекла и стали."
        },
        {
          "icon": "◐",
          "t": "Закат",
          "d": "Дневной свет позволяет рассмотреть стекло и сталь. Для вечернего вида проверьте условия в день визита; исторический проект подсветки не гарантирует конкретное шоу или время включения."
        },
        {
          "icon": "✦",
          "t": "Ночь",
          "d": "Вечерний вид зависит от освещения и текущих условий."
        }
      ],
      "note": "Единой длительности посещения нет. Учтите фотографии, других пешеходов и остановки, которые вы выбрали на обоих берегах."
    },
    "ticket": {
      "label": "Билет / стоимость",
      "t": "Мост и отдельные услуги",
      "d": "Официальный туристический источник описывает пешеходный мост, но не публикует действующий входной тариф. Не путайте мост с канатной дорогой, лодками или платной экскурсией рядом.",
      "note": "Временные ограничения общественного пространства возможны во время мероприятий или работ."
    },
    "access": {
      "label": "Доступ",
      "t": "Данные Maps · 26 октября 2026",
      "d": "При проверке Google Maps показывали круглосуточный доступ все семь дней. Это датированная запись третьей стороны, а не гарантия отсутствия временных ограничений, работ или закрытий на время мероприятий."
    },
    "parking": {
      "label": "Парковка",
      "t": "Пешеходные подходы",
      "d": "Выберите место для автомобиля до въезда на улицы Старого города. Проверьте разрешённую парковку и действующие переходы для своей исходной точки; специальная парковка для посетителей здесь не подтверждена."
    },
    "address": {
      "label": "Адрес",
      "t": "Тбилиси",
      "d": "Парк Рика ↔ улица Эрекле II"
    }
  },
  "transport": {
    "eyebrow": "Подробный транспорт",
    "title": "Как добраться до моста<br />в ритме города.",
    "items": [
      {
        "icon": "M",
        "t": "Метро · Авлабари",
        "d": "Авлабари можно рассмотреть для маршрута через парк Рика. Проверьте актуальную транспортную схему и подход от выбранного выхода; ближайшая станция и время пешком не гарантируются."
      },
      {
        "icon": "↝",
        "t": "Пешком · от площади Свободы",
        "d": "Georgia Travel указывает улицу Эрекле II как соединение со стороны Старого города. Стройте подход от своей исходной точки по действующим переходам и указателям."
      },
      {
        "icon": "●",
        "t": "Такси / автобус",
        "d": "Укажите назначение «Парк Рика» или «Площадь Европы». Номера маршрутов и остановок могут меняться, поэтому перед поездкой используйте актуальную транспортную информацию Тбилиси."
      }
    ]
  },
  "around": {
    "eyebrow": "Рядом с мостом",
    "title": "Маршрут не заканчивается<br />на другом берегу.",
    "lede": "Выберите направление по берегам: парк Рика на одном и улица Эрекле II со Старым Тбилиси на другом. У соседних достопримечательностей свои условия доступа.",
    "items": [
      {
        "n": "Парк Рика",
        "t": "К востоку от моста",
        "d": "Национальная туристическая статья называет парк Рика одной из сторон моста. Другие услуги парка проверяйте отдельно."
      },
      {
        "n": "Площадь Европы и Метехи",
        "t": "Отдельная остановка",
        "d": "Метехи — отдельная достопримечательность Старого Тбилиси. Планируйте маршрут от выбранного берега, не предполагая фиксированное время пешком."
      },
      {
        "n": "Абанотубани",
        "t": "В сторону Старого Тбилиси",
        "d": "Абанотубани известен банным кварталом. Посещение бани — отдельное занятие со своими условиями бронирования и доступа."
      },
      {
        "n": "Нарикала",
        "t": "На канатной дороге от Рика или пешком",
        "d": "Нарикала — отдельный объект на холме. Проверьте текущий доступ и транспорт перед объединением с прогулкой по мосту."
      }
    ]
  },
  "food": {
    "eyebrow": "Местные вкусы",
    "title": "После моста —<br />грузинский стол.",
    "lede": "Планируйте обед отдельно по актуальной информации заведений. Список рекомендуемых предприятий здесь не приводится.",
    "items": [
      {
        "tag": "Старый город",
        "n": "Улица Эрекле II",
        "d": "Улица Эрекле II соединяет мост со Старым городом. Для обеда выберите заведение по его актуальному меню и расписанию."
      },
      {
        "tag": "Грузинский стол",
        "n": "Мейдан и Абанотубани",
        "d": "Мейдан и Абанотубани можно рассмотреть как отдельную остановку; конкретные рестораны и действующие меню здесь не проверены."
      },
      {
        "tag": "Быстрый обед",
        "n": "Сторона Бараташвили",
        "d": "Для прогулки к Бараташвили используйте актуальную карту улиц. Проверьте точный адрес кафе, прежде чем включать его в маршрут."
      }
    ]
  },
  "photoTip": {
    "eyebrow": "Совет по фото",
    "title": "Мост в кадре — это не просто объект.",
    "p": "Постарайтесь включить Куру, склоны Старого города и зелёное пространство Рика. Широкий кадр лучше показывает, почему эта современная форма так выделяется в исторической ткани Тбилиси."
  },
  "gallery": {
    "eyebrow": "Галерея",
    "title": "Берега реки и<br />Старый Тбилиси.",
    "lede": "Семь исторических панорам города и реки показаны в полной композиции; на некоторых мост является частью общего вида. Авторы, даты и лицензии указаны рядом. Графика основных разделов — концептуальные иллюстрации, не фотографии."
  },
  "map": {
    "eyebrow": "Карта",
    "title": "Найдите мост<br />в сердце Куры.",
    "plusCodeLabel": "Координаты:",
    "openMap": "Открыть карту ↗"
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Часто<br />задаваемые вопросы.",
    "lede": "Короткие ответы перед планированием визита.",
    "items": [
      {
        "q": "Платный ли проход по мосту Мира?",
        "a": "Официальная туристическая статья не указывает действующий входной тариф. Проверьте местные объявления; канатная дорога, лодки и частные экскурсии — отдельные услуги."
      },
      {
        "q": "Когда лучше всего приходить?",
        "a": "Дневной свет позволяет рассмотреть стекло и сталь. Для вечернего вида проверьте условия в день визита; исторический проект подсветки не гарантирует конкретное шоу или время включения."
      },
      {
        "q": "Сколько времени закладывать?",
        "a": "Выберите длительность с учётом фотографий и других остановок. Подтверждённого единого времени перехода или посещения для каждого путешественника нет."
      },
      {
        "q": "Какое метро ближе?",
        "a": "Проверьте актуальную транспортную карту для своей исходной точки. Авлабари — возможный подход через парк Рика, а не универсально ближайший или самый быстрый вариант."
      },
      {
        "q": "Можно ли пересечь на коляске или с детской коляской?",
        "a": "Мост пешеходный, но непрерывный безбарьерный путь, уклоны и временные препятствия на всех подходах здесь не проверены. Уточните конкретный маршрут с учётом своих потребностей."
      },
      {
        "q": "Безопасно ли приходить ночью?",
        "a": "Путеводитель не может гарантировать безопасность ночью или работу освещения в день визита. Учитывайте актуальные местные объявления, видимость, погоду и обратный путь."
      }
    ]
  },
  "footer": {
    "disclaimer": "Независимый некоммерческий образовательный путеводитель. Это не официальный сайт моста, мэрии Тбилиси или Национальной туристической администрации Грузии.",
    "sources": "Источники проверены 26 октября 2026 года. Подрядчик Cimolai указывает 160 м для пешеходной части и 115 м для крыши; это размеры разных частей.",
    "ga": "Страница загружает Google Analytics без переключателя выбора и встраивает Google Maps. Хостинг может отдельно добавить скрипт производительности Cloudflare. Наличие скрипта не доказывает успешную передачу данных."
  },
  "attractionDescription": "Современный пешеходный мост через Куру, соединяющий парк Рика и улицу Эрекле II. Его стеклянно-стальная конструкция ночью загорается тысячами светодиодов."
};
export const content: Record<Locale, Content> = { ka, en, ru };

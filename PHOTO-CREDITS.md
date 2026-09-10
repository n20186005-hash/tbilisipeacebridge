# ფოტო წყაროები და ლიცენზიები

საიტის ყველა ფოტო ლოკალურად ინახება და ისე მიეწოდება მომხმარებელს — გვერდი
Wikimedia-ს ან სხვა გარე ჰოსტს არ მიმართავს. ბრენდინგი, logo, favicon და
social card ასევე ლოკალურია.

- `public/images/` — 4 ძირითადი ფოტო (hero, river, structure, historic)
- `public/gallery/` — 15 ფოტო გალერეისთვის

ყველა ფაილი ჩამოტვირთვის შემდეგ ერთხელ დამუშავდა
`scripts/optimize-images.mjs`-ით (ზომის შემცირება + mozjpeg). საწყისი
20.6 MB შემცირდა 3.9 MB-მდე (‑81%).

## ძირითადი ფოტოები

| ფაილი | ორიგინალი (Wikimedia Commons) | ავტორი | ლიცენზია |
| --- | --- | --- | --- |
| `images/peace-bridge-rike-park.jpg` | `Tbilisi Peace Bridge and Rike Park.jpg` | falco | CC0 1.0 |
| `images/peace-bridge-kura-river.jpg` | `Tbilisi Peace Bridge and Kura River by Falco.jpg` | falco | CC0 1.0 |
| `images/peace-bridge-structure.jpg` | `Rike Park viewed from Tbilisi's Peace Bridge.jpg` | falco | CC0 1.0 |
| `images/peace-bridge-mtkvari.jpg` | `River Mtkvari & the Peace Bridge in Tbilisi (2010).jpg` | Kober | Public Domain |

## გალერეა

| ფაილი | ორიგინალი (Wikimedia Commons) | ავტორი | ლიცენზია |
| --- | --- | --- | --- |
| `gallery/peace-bridge-tbilisi-1.jpg` | `Tbilisi at night, Kura River, Georgia.jpg` | Vyacheslav Argenberg | CC BY 4.0 |
| `gallery/peace-bridge-tbilisi-2.jpg` | `Tbilisi Peace Bridge5.jpg` | Amir Hossein Eslami | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-3.jpg` | `Rike Park viewed from Tbilisi's Peace Bridge.jpg` | falco | CC0 |
| `gallery/peace-bridge-tbilisi-4.jpg` | `Tbilisi-Fluss Mtkwari-04-Friedensbruecke-2019-gje.jpg` | Gerd Eichmann | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-5.jpg` | `Tbilisi-Fluss Mtkwari-06-von Friedensbruecke-2019-gje.jpg` | Gerd Eichmann | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-6.jpg` | `Tbilisi-Fluss Mtkwari-08-von Friedensbruecke-2019-gje.jpg` | Gerd Eichmann | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-7.jpg` | `Tbilisi, assorted- Part II - TbilisiAssorted8207.jpg` | lumoplank | CC0 |
| `gallery/peace-bridge-tbilisi-8.jpg` | `OLD CITY AND PEACE BRIDGE TBILISI.jpg` | Avisadehh | CC0 |
| `gallery/peace-bridge-tbilisi-9.jpg` | `A20241116 161752.jpg` | Matti&Keti | CC0 |
| `gallery/peace-bridge-tbilisi-10.jpg` | `2016 Tbilisi, Widoki z Twierdzy Narikala (18).jpg` | Marcin Konsek | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-11.jpg` | `2016 Tbilisi, Widoki z Twierdzy Narikala (19).jpg` | Marcin Konsek | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-12.jpg` | `2014 Tbilisi, Widoki z Twierdzy Narikala (06).jpg` | Marcin Konsek | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-13.jpg` | `2014 Tbilisi, Widok z Mostu Pokoju na rzekę Kura i jej okolice (01).jpg` | Marcin Konsek | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-14.jpg` | `2014 Tbilisi, Widok z Mostu Pokoju na rzekę Kura i jej okolice (07).jpg` | Marcin Konsek | CC BY-SA 4.0 |
| `gallery/peace-bridge-tbilisi-15.jpg` | `2014 Tbilisi, Widok z Mostu Pokoju na rzekę Kura i jej okolice (09).jpg` | Marcin Konsek | CC BY-SA 4.0 |

სრული წყარო-URL-ები და ორიგინალური გარჩევადობა ინახება
`scripts/photo-attributions.json`-ში.

## სალიცენზიო შენიშვნა

CC BY 4.0 და CC BY-SA 4.0 ფოტოებისთვის საჭიროა ავტორის დასახელება — ის
მითითებულია როგორც ამ დოკუმენტში, ისე პირდაპირ გვერდზე ყოველი კადრის ქვეშ
(`credit` ველები `src/data/site.ts`-ში).

Wikimedia Commons მშვიდობის ხიდის კატეგორიაზე მიუთითებს საქართველოს
არქიტექტურული Freedom of Panorama-ს სამართლებრივ თავისებურებებზე. ფოტოს
ფაილის ლიცენზიის გარდა, კომერციული/საერთაშორისო გამოქვეყნებისას ცალკე
გადაამოწმეთ არქიტექტურული ნამუშევრის უფლებები იმ იურისდიქციაში, სადაც საიტი
ქვეყნდება.

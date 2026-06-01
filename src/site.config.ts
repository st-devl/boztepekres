export const site = {
  name: "Boztepe Kreş",
  legalName: "Boztepe Kreş ve Anaokulu",
  tagline: "Trabzon'un sevgi dolu anaokulu",
  defaultDescription:
    "Trabzon Boztepe'de modern anaokulu ve kreş. 0-6 yaş çocuklar için Reggio Emilia ve Montessori temelli eğitim, deneyimli kadro, güvenli ortam.",
  url: "https://boztepekres.com",
  locale: "tr-TR",
  ogImage: "/og-image.svg",

  // NAP (Name, Address, Phone) — Local SEO için kritik
  phone: "+90 462 000 00 00",
  phonePretty: "0 462 000 00 00",
  whatsapp: "+905000000000",
  email: "info@boztepekres.com",
  address: {
    street: "Boztepe Mah. Örnek Cad. No:1",
    district: "Ortahisar",
    city: "Trabzon",
    postalCode: "61000",
    country: "TR",
  },
  geo: {
    latitude: 40.9968,
    longitude: 39.7375,
  },
  hours: {
    weekdays: "07:30 – 18:30",
    saturday: "08:00 – 14:00",
    sunday: "Kapalı",
  },
  social: {
    instagram: "https://instagram.com/boztepekres",
    facebook: "https://facebook.com/boztepekres",
  },

  nav: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Eğitim Programı", href: "/egitim-programi" },
    { label: "Galeri", href: "/galeri" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],

  keywordsBase: [
    "trabzon anaokulu",
    "trabzon kreş",
    "boztepe kreş",
    "boztepe anaokulu",
    "ortahisar anaokulu",
    "trabzon en iyi kreş",
    "trabzon montessori",
    "trabzon özel anaokulu",
  ],
};

export type SiteConfig = typeof site;

export const hero = {
  baslik: "Trabzon Anaokulu Etkinlikleri",
  paragraf:
    "Minik kalplerin dünyasını keşfettiği, sanatla tanıştığı ve sporla güçlendiği okul öncesi faaliyetler dünyamıza hoş geldiniz.",
  etiketler: [
    { metin: "Sanat Atölyeleri", renk: "bg-primary/10 text-primary" },
    { metin: "Spor Aktiviteleri", renk: "bg-secondary/10 text-secondary" },
    { metin: "Gezi & Gözlem", renk: "bg-tertiary/10 text-tertiary" },
    { metin: "Özel Günler", renk: "bg-error/10 text-error" },
  ],
};

export const faaliyetler = [
  {
    id: "sanat",
    boyut: "md:col-span-8",
    yukseklik: "min-h-[400px]",
    ikon: "palette",
    ikonRenk: "text-secondary",
    baslik: "Sanat Atölyeleri",
    aciklama: "Hayal güçlerini kağıda döken minik ressamlarımızın renkli dünyası.",
    gorsel: "/images/faaliyet-sanat.jpg",
    gorselAlt: "Çocuklar sanat atölyesinde parmak boyası yapıyor",
  },
  {
    id: "spor",
    boyut: "md:col-span-4",
    yukseklik: "min-h-[300px]",
    ikon: "exercise",
    ikonRenk: "text-tertiary",
    baslik: "Spor & Jimnastik",
    aciklama: "",
    gorsel: "/images/faaliyet-spor.jpg",
    gorselAlt: "Çocuklar spor etkinliğinde",
  },
  {
    id: "gezi",
    boyut: "md:col-span-4",
    yukseklik: "min-h-[300px]",
    ikon: "forest",
    ikonRenk: "text-primary-container",
    baslik: "Gezi & Gözlem",
    aciklama: "",
    gorsel: "/images/faaliyet-gezi.jpg",
    gorselAlt: "Çocuklar doğa gezisinde",
  },
  {
    id: "ozel",
    boyut: "md:col-span-8",
    yukseklik: "min-h-[400px]",
    ikon: "celebration",
    ikonRenk: "text-error",
    baslik: "Özel Günler",
    aciklama: "Milli bayramlardan doğum günlerine, her anı bir şölene dönüştürüyoruz.",
    gorsel: "/images/faaliyet-ozel.jpg",
    gorselAlt: "Özel gün kutlaması",
  },
];

export const bilgiKartlari = [
  {
    ikon: "diversity_3",
    renkBg: "bg-primary/10",
    renkText: "text-primary",
    sinif: "border-t-4 border-primary",
    baslik: "Grup Çalışmaları",
    aciklama:
      "Çocuklarımız akranlarıyla iş birliği yapmayı, paylaşmayı ve sosyal becerilerini geliştirmeyi öğrenirler.",
  },
  {
    ikon: "psychology",
    renkBg: "bg-secondary/10",
    renkText: "text-secondary",
    sinif: "border-t-4 border-secondary",
    baslik: "Bilişsel Gelişim",
    aciklama:
      "Mantık yürütme, problem çözme ve merak duygusunu tetikleyen özel müfredatlı faaliyetler.",
  },
  {
    ikon: "eco",
    renkBg: "bg-tertiary/10",
    renkText: "text-tertiary",
    sinif: "border-t-4 border-tertiary",
    baslik: "Doğa Bilinci",
    aciklama:
      "Toprakla temas kuran, çevreyi tanıyan ve koruyan bilinçli nesiller yetiştiriyoruz.",
  },
];

export const cta = {
  baslik: "Geleceğin Liderlerini Beraber Yetiştirelim",
  paragraf:
    "Trabzon'un en ferah ve güvenli eğitim ortamında çocuğunuzun yerini hemen ayırtın.",
  buton: "Ön Kayıt Yap",
};

export const modal = {
  baslik: "Ön Kayıt Formu",
  altBaslik: "Bilgilerinizi bırakın, sizi arayalım.",
  alanlar: {
    veliAd: "Veli Adı Soyadı",
    ogrenciAd: "Öğrenci Adı Soyadı",
    yasGrubu: "Yaş Grubu",
    telefon: "Telefon Numarası",
    mesaj: "Mesajınız",
  },
  yasSecenekleri: ["3 Yaş Grubu", "4 Yaş Grubu", "5-6 Yaş Hazırlık"],
  buton: "Gönder",
  basariMesaji: "Ön kayıt talebiniz başarıyla alındı. Teşekkür ederiz!",
};

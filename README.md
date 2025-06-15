# 📱 MarmaPhone - Telefon Satış Sitesi

Bu proje web programlama dersi için React kullanarak geliştirilmiş bir telefon satış e-ticaret sitesidir.

## � Proje Ekibi

- **[İsim 1]** - [Öğrenci No]
- **[İsim 2]** - [Öğrenci No]

## 📋 Proje Hakkında

MarmaPhone, modern telefon modellerinin satıldığı kullanıcı dostu bir e-ticaret platformudur. Sitede iPhone, Samsung, Xiaomi, Google Pixel gibi popüler telefon markalarının en güncel modelleri bulunmaktadır.

## ✨ Site Özellikleri

- **Telefon Katalogu**: 12 farklı telefon modeli
- **Sepet Sistemi**: Ürünleri sepete ekleme ve çıkarma
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Modern Arayüz**: Kullanıcı dostu tasarım
- **Fiyat Hesaplama**: Otomatik toplam hesaplama

## 🛠️ Kullanılan Teknolojiler

- **React** - Frontend framework
- **Vite** - Geliştirme ortamı
- **CSS3** - Stil ve animasyonlar
- **JavaScript ES6+** - Programlama dili
- **Unsplash** - Ürün görselleri

## � Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza indirin
2. Terminal'de proje klasörüne gidin
3. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
5. Tarayıcınızda açılan adresi ziyaret edin

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Header.jsx      # Site başlığı ve sepet
│   ├── ProductGrid.jsx # Ürün listesi
│   ├── ProductCard.jsx # Ürün kartları
│   └── Sepet.jsx       # Sepet modal'ı
├── App.jsx             # Ana uygulama
├── App.css             # Global stiller
└── main.jsx            # React başlangıç
```

## 🎯 Fonksiyonaliteler

### Ürün Listeleme
- 12 farklı telefon modeli görüntülenir
- Her ürün için resim, isim ve fiyat bilgisi
- Hover efektleri ile interaktif deneyim

### Sepet İşlemleri
- "Sepete Ekle" butonu ile ürün ekleme
- Sepet butonuna tıklayarak sepeti görüntüleme
- Sepetten ürün çıkarma işlemi
- Toplam fiyat hesaplama

### Responsive Tasarım
- Masaüstü: 4-5 sütunlu grid
- Tablet: 3 sütunlu grid
- Mobil: 1-2 sütunlu grid

## � Desteklenen Telefon Modelleri

- iPhone 15 Pro
- Samsung Galaxy S24
- Xiaomi 14 Pro
- Google Pixel 8
- OnePlus 12
- Huawei P60 Pro
- iPhone 14
- Samsung Galaxy A54
- Xiaomi Redmi Note 13
- Oppo Reno 11
- Realme GT 5
- Nothing Phone 2

## 🎨 Tasarım Özellikler

- Gradient renkler ve modern görünüm
- Smooth animasyonlar
- Card-based tasarım
- Modal sepet sistemi
- Hover efektleri

## 📝 Notlar

Bu proje eğitim amaçlı geliştirilmiştir ve gerçek bir e-ticaret platformu değildir. Ürün görselleri Unsplash'dan alınmıştır.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

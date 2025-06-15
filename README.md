# 📱 MarmaPhone - Telefon Satış Sitesi

Bu proje web programlama dersi için React kullanarak geliştirilmiş bir telefon satış e-ticaret sitesidir.

##  Proje Ekibi

- **[Muhammet Emin Anlar]** - [170423821]
- **[Selin Yüceer]** - [170422841]

## 📋 Proje Hakkında

MarmaPhone, modern telefon modellerinin satıldığı kullanıcı dostu bir e-ticaret platformudur.

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

##  Kurulum ve Çalıştırma

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

## 🎨 Tasarım Özellikler

- Gradient renkler ve modern görünüm
- Smooth animasyonlar
- Card-based tasarım
- Modal sepet sistemi
- Hover efektleri

import { useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import Sepet from './components/Sepet'
import './App.css'

// MarmaPhone telefon verileri
const telefonlar = [
  {
    id: 1,
    isim: 'iPhone 15 Pro',
    fiyat: 45000,
    resim: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 2,
    isim: 'Samsung Galaxy S24',
    fiyat: 35000,
    resim: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    isim: 'Xiaomi 14 Pro',
    fiyat: 25000,
    resim: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 4,
    isim: 'Google Pixel 8',
    fiyat: 30000,
    resim: 'https://images.unsplash.com/photo-1598965675045-97e7e5f7e6d6?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    isim: 'OnePlus 12',
    fiyat: 28000,
    resim: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 6,
    isim: 'Huawei P60 Pro',
    fiyat: 32000,
    resim: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 7,
    isim: 'iPhone 14',
    fiyat: 38000,
    resim: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 8,
    isim: 'Samsung Galaxy A54',
    fiyat: 18000,
    resim: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 9,
    isim: 'Xiaomi Redmi Note 13',
    fiyat: 12000,
    resim: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 10,
    isim: 'Oppo Reno 11',
    fiyat: 22000,
    resim: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 11,
    isim: 'Realme GT 5',
    fiyat: 26000,
    resim: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 12,
    isim: 'Nothing Phone 2',
    fiyat: 33000,
    resim: 'https://images.unsplash.com/photo-1607936854279-55e8f4c9cdf6?w=400&h=400&fit=crop&crop=center'
  }
]

function App() {
  const [sepet, setSepet] = useState([])
  const [sepetAcik, setSepetAcik] = useState(false)

  const sepeteEkle = (telefon) => {
    setSepet([...sepet, telefon])
    alert(`${telefon.isim} sepete eklendi! 🎉`)
  }

  const sepettenCikar = (index) => {
    const yeniSepet = sepet.filter((_, i) => i !== index)
    setSepet(yeniSepet)
  }

  return (
    <div className="app">
      <Header 
        sepetSayisi={sepet.length} 
        sepetAc={() => setSepetAcik(true)}
      />
      <main>
        <h1>📱 MarmaPhone</h1>
        <p className="slogan">En Kaliteli Telefonlar, En Uygun Fiyatlar!</p>
        <ProductGrid telefonlar={telefonlar} sepeteEkle={sepeteEkle} />
      </main>
      
      <Sepet 
        sepetUrunleri={sepet}
        kapali={!sepetAcik}
        sepetKapat={() => setSepetAcik(false)}
        sepettenCikar={sepettenCikar}
      />
    </div>
  )
}

export default App

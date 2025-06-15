import './ProductCard.css'

function ProductCard({ telefon, sepeteEkle }) {
  // Telefon markasına göre fallback resim
  const getFallbackImage = (telefonIsmi) => {
    const marka = telefonIsmi.toLowerCase()
    if (marka.includes('iphone')) {
      return 'https://via.placeholder.com/400x400/000000/FFFFFF?text=iPhone'
    } else if (marka.includes('samsung')) {
      return 'https://via.placeholder.com/400x400/1428A0/FFFFFF?text=Samsung'
    } else if (marka.includes('xiaomi') || marka.includes('redmi')) {
      return 'https://via.placeholder.com/400x400/FF6900/FFFFFF?text=Xiaomi'
    } else if (marka.includes('google') || marka.includes('pixel')) {
      return 'https://via.placeholder.com/400x400/4285F4/FFFFFF?text=Google'
    } else if (marka.includes('oneplus')) {
      return 'https://via.placeholder.com/400x400/EB0028/FFFFFF?text=OnePlus'
    } else if (marka.includes('huawei')) {
      return 'https://via.placeholder.com/400x400/FF0000/FFFFFF?text=Huawei'
    } else if (marka.includes('oppo')) {
      return 'https://via.placeholder.com/400x400/1BA1E2/FFFFFF?text=Oppo'
    } else if (marka.includes('realme')) {
      return 'https://via.placeholder.com/400x400/F5CA00/FFFFFF?text=Realme'
    } else if (marka.includes('nothing')) {
      return 'https://via.placeholder.com/400x400/000000/FFFFFF?text=Nothing'
    }
    return 'https://via.placeholder.com/400x400/007ACC/FFFFFF?text=Telefon'
  }

  return (
    <div className="product-card">
      <div className="resim-container">
        <img 
          src={telefon.resim} 
          alt={telefon.isim}
          onError={(e) => {
            e.target.src = getFallbackImage(telefon.isim)
          }}
        />
      </div>
      <div className="urun-bilgi">
        <h3>{telefon.isim}</h3>
        <p className="fiyat">{telefon.fiyat.toLocaleString('tr-TR')} ₺</p>
        <button 
          className="sepet-btn" 
          onClick={() => sepeteEkle(telefon)}
        >
          🛒 Sepete Ekle
        </button>
      </div>
    </div>
  )
}

export default ProductCard
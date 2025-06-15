import './Sepet.css'

function Sepet({ sepetUrunleri, kapali, sepetKapat, sepettenCikar }) {
  if (kapali) return null

  const toplamFiyat = sepetUrunleri.reduce((toplam, urun) => toplam + urun.fiyat, 0)

  return (
    <div className="sepet-overlay" onClick={sepetKapat}>
      <div className="sepet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sepet-header">
          <h2>🛒 Sepetim</h2>
          <button className="kapat-btn" onClick={sepetKapat}>×</button>
        </div>
        
        <div className="sepet-icerik">
          {sepetUrunleri.length === 0 ? (
            <p className="bos-sepet">Sepetiniz boş</p>
          ) : (
            <>
              {sepetUrunleri.map((urun, index) => (
                <div key={index} className="sepet-urun">
                  <img src={urun.resim} alt={urun.isim} />
                  <div className="urun-bilgi">
                    <h4>{urun.isim}</h4>
                    <p className="fiyat">{urun.fiyat.toLocaleString('tr-TR')} ₺</p>
                  </div>
                  <button 
                    className="cikar-btn" 
                    onClick={() => sepettenCikar(index)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
              
              <div className="sepet-toplam">
                <h3>Toplam: {toplamFiyat.toLocaleString('tr-TR')} ₺</h3>
                <button className="satin-al-btn">Satın Al</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sepet

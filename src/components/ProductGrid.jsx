import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ telefonlar, sepeteEkle }) {
  return (
    <div className="product-grid">
      {telefonlar.map(telefon => (
        <ProductCard 
          key={telefon.id} 
          telefon={telefon} 
          sepeteEkle={sepeteEkle} 
        />
      ))}
    </div>
  )
}

export default ProductGrid

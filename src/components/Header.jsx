import './Header.css'

function Header({ sepetSayisi, sepetAc }) {
  return (
    <header className="header">
      <div className="container">
        <h2>📱 MarmaPhone</h2>
        <button className="sepet-btn" onClick={sepetAc}>
          🛒 Sepet ({sepetSayisi})
        </button>
      </div>
    </header>
  )
}

export default Header

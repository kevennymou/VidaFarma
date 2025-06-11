function Header() {
    
      return (

      <header className="header">
        <div className="logo">
          <a href="../html/home.html" className=".link-logo"><h1>VIDAFARMA</h1></a>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="O que você está buscando?" />
        </div>

        <div className="menu">
          <div className="login">
            <p>Perfil<br /><a href="../html/profile.html">Kevenny</a></p>
          </div>
          <div className="orders">
            <p><a href="../html/pedido.html">Acompanhar<br />Pedidos</a></p>
          </div>
          <div className="cart">
            <p>Cesta<br /><strong>R$ 0,00</strong></p>
          </div>
        </div>
      </header>
    );
    
    }


ReactDOM.createRoot(document.getElementById('header-root')).render(<Header />);
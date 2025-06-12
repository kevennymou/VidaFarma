function Footer() {
    return (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-box">
        <h4>Institucional</h4>
        <ul>
          <li><a href="#">Nossa História</a></li>
          <li><a href="#">Nossas farmácias</a></li>
          <li><a href="#">Sustentabilidade</a></li>
          <li><a href="#">Ética e Compliance</a></li>
          <li><a href="#">Trabalhe Conosco</a></li>
        </ul>
      </div>

      <div className="footer-box">
        <h4>Serviços</h4>
        <ul>
          <li><a href="#">Programa Mais Saúde</a></li>
          <li><a href="#">Vacinação Corporativa</a></li>
          <li><a href="#">Manipulação</a></li>
          <li><a href="#">Assinatura</a></li>
          <li><a href="#">Programa de Laboratório</a></li>
        </ul>
      </div>

      <div className="footer-box">
        <h4>Atendimento</h4>
        <ul>
          <li><a href="#">Central de Atendimento</a></li>
          <li><a href="#">Tire suas dúvidas</a></li>
          <li><a href="#">Formas de Pagamento</a></li>
          <li><a href="#">Troca e Devolução</a></li>
          <li><a href="#">Prazo de Entrega</a></li>
        </ul>
      </div>

      <div className="footer-box">
        <h4>Segurança e Privacidade</h4>
        <ul>
          <li><a href="#">Como protegemos seus dados</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Portal do Titular dos Dados</a></li>
        </ul>
      </div>

      <div className="footer-box">
        <h4>Nossas Redes</h4>
        <div className="social-icons">
          <a href="#"><i className="fi fi-brands-facebook"></i><p>Facebook</p></a>
          <a href="#"><i className="fi fi-brands-instagram"></i><p>Instagram</p></a>
          <a href="#"><i className="fi fi-brands-twitter-alt-circle"></i><p>Twitter</p></a>
          <a href="#"><i className="fi fi-brands-linkedin"></i><p>LinkedIn</p></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="payment-methods">
        <h5>Formas de Pagamento</h5>
        <img src="../img/visa.png" alt="Visa" />
        <img src="../img/mastercard.png" alt="Mastercard" />
        <img src="../img/elo.png" alt="Elo" />
        <img src="../img/pix.png" alt="Pix" />
        <img src="../img/amex.jpeg" alt="Amex" />
      </div>

      <div className="brand">
        <p>&copy; 2025 VidaFarma - Uma empresa RD Saúde</p>
      </div>
    </div>
  </footer>

)
}

ReactDOM.createRoot(document.getElementById('footer-root')).render(<Footer />);
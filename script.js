const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-dots');

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateSlide(index) {
  track.style.transform = 'translateX(-' + (index * 100) + '%)';
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  updateSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(prevIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlide(index);
  });
});

let autoplay = setInterval(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  updateSlide(nextIndex);
}, 5000); 

const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => {
  clearInterval(autoplay);
});

carousel.addEventListener('mouseleave', () => {
  autoplay = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    updateSlide(nextIndex);
  }, 5000);
});

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>VIDAFARMA</h1>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="O que você está buscando?" />
      <div className="search-icons">
        <i className="fi fi-tr-circle-microphone-lines"></i>
      </div>
    </div>
    <div className="menu">
      <div className="login">
        <p>Boas-vindas!<br /><a href="#">Entrar ou cadastrar</a></p>
      </div>
      <div className="orders">
        <p><a href="#">Acompanhar<br />Pedidos</a></p>
      </div>
      <div className="cart">
        <p>Cesta<br /><strong>R$0,00</strong></p>
      </div>
    </div>
  </header>
);

const Footer = () => (
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
);

if (document.getElementById('header-root')) {
  ReactDOM.createRoot(document.getElementById('header-root')).render(<Header />);
}

if (document.getElementById('footer-root')) {
  ReactDOM.createRoot(document.getElementById('footer-root')).render(<Footer />);
}


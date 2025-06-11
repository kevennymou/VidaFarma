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

document.addEventListener("DOMContentLoaded", function () {
  const botaoPedido = document.getElementById("btnPedido");

  botaoPedido.addEventListener("click", function () {
    window.location.href = "../html/pedido.html";
  });
});




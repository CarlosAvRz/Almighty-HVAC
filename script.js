const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-dots');

// Crear puntos de navegación
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);
let currentIndex = 0;

function moveToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveToSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(prevIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => moveToSlide(i));
});

// Auto-play cada 4 segundos
setInterval(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveToSlide(nextIndex);
}, 4000);

// Smooth scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
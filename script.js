// CAROUSEL VARIABLES AND FUNCTIONS
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-dots');

// Create navigation dots
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

// Auto-play each 4 seconds
setInterval(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveToSlide(nextIndex);
}, 4000);

// GENERAL VARIABLES AND FUNCTIONS
// Smooth scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// NAVIGATION BAR RESPONSIVE DESIGN VARIABLES AND FUNCTIONS
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  });
});

// Copy to clipboard function
function copyTextToClipboard(text) {
  const copyText = String(text);
  navigator.clipboard.writeText(copyText).
    then(() => {
      // Provide user feedback
      alert("Text copied to clipboard: " + copyText);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}
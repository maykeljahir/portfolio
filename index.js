window.addEventListener("scroll", function() {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.onclick = function() {
  
  document.onclick = function(e) {
    if(e.target.id !== 'toggle' && e.target.id !== 'menu') {
      toggle.classList.remove("active");
      menu.classList.remove("active");
    }
  }
  
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
}

window.sr = ScrollReveal();
//Banner-Header-Home
sr.reveal('.header-content', {
  duration: 2000,
  origin: 'bottom',
  distance: '-300px'
});

sr.reveal('.banner-box', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
});

sr.reveal('.banner-img', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
});

//About
sr.reveal('.about-content', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.a-tl', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.a-line', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});

//Services
sr.reveal('.ser-tl', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.s-line', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.article', {
  duration: 3000,
  origin: 'bottom',
  distance: '200px'
});

sr.reveal('.services-content', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});

//Works
sr.reveal('.w-tl', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.w-line', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.works-content', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px'
});

sr.reveal('.c-tl', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.c-line', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.contact-content', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});
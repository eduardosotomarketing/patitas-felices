// CARGA HEADER Y FOOTER
fetch('/partials/header.html')
  .then(res => res.text())
  .then(data => document.getElementById('header').innerHTML = data);

fetch('/partials/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);


// MENU HAMBURGUESA
document.addEventListener("click", function (e) {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");

  if (!nav || !toggle) return;

  // Abrir / cerrar con botón
  if (e.target === toggle) {
    nav.classList.toggle("nav-open");
    return;
  }

  // Cerrar al hacer click en un link
  if (e.target.closest(".nav a")) {
    nav.classList.remove("nav-open");
    return;
  }

  // Cerrar al hacer click fuera
  if (!nav.contains(e.target) && nav.classList.contains("nav-open")) {
    nav.classList.remove("nav-open");
  }
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // solo una vez
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealElements.forEach(el => observer.observe(el));

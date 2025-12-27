/* =========================
   MOBILE NAV TOGGLE
========================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });
}

/* =========================
   CLOSE NAV ON LINK CLICK (MOBILE)
========================= */
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-open");
  });
});

/* =========================
   SMOOTH SCROLL (EXTRA SAFETY)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   MENU FILTER
========================= */
const categoryButtons = document.querySelectorAll(".menu-categories button");
const menuItems = document.querySelectorAll(".menu-item");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    menuItems.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* =========================
   SCROLL REVEAL (SUBTLE)
========================= */
const revealElements = document.querySelectorAll(
  ".section-header, .about-text, .about-image, .menu-item, .gallery-item, .review-card"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => {
  el.classList.add("reveal-hidden");
  revealObserver.observe(el);
});

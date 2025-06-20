// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      // Scroll to target
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Add fade-in animation when elements come into view
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((element) => {
  fadeInObserver.observe(element);
});

// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

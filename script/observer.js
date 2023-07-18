const factor__flex = document.querySelector(".factor__flex");
const factors = document.querySelectorAll(".factor__item");
const hero__content = document.querySelector(".hero__content");

const factorObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      factors.forEach((factor) => {
        factor.classList.toggle("show", entry.isIntersecting);
      });
      if (entry.isIntersecting) {
        factorObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        heroObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
  }
);

factorObserver.observe(factor__flex);
heroObserver.observe(hero__content);

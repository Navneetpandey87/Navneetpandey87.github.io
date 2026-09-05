const header = document.getElementById("header");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

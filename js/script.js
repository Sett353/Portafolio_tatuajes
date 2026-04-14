const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileLinks = document.querySelectorAll(".mobile-link");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.style.overflow = mobileNav.classList.contains("active")
    ? "hidden"
    : "";
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.style.overflow = "";
  });
});

const detailsEl = document.querySelector("details");
const summaryEl = detailsEl.querySelector("summary");
detailsEl.addEventListener("toggle", () => {
  summaryEl.textContent = detailsEl.open
    ? "Ver menos diseños"
    : "Ver más diseños";
});

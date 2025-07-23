window.addEventListener("DOMContentLoaded", () => {
  const fades = document.querySelectorAll(".fade-in");
  const slides = document.querySelectorAll(".slide-up");

  fades.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 500 * (i + 1));
  });

  slides.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 1000 + 300 * (i + 1));
  });
});

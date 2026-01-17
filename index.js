function throttle(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

function updateOpacity() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  document.querySelectorAll(".sticky-text").forEach((text) => {
    const rect = text.getBoundingClientRect();
    const isVisible =
      rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
    text.classList.toggle("active", isVisible);
  });

  document.querySelectorAll(".sticky-text-tag").forEach((text) => {
    const rect = text.getBoundingClientRect();
    const isVisible =
      rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
    text.classList.toggle("active", isVisible);
  });
}

window.addEventListener("scroll", throttle(updateOpacity, 16));
updateOpacity();

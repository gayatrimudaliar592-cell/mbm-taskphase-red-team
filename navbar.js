const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");
const ddown_open = document.querySelectorAll(".ddown");

hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
});

ddown_open.forEach(button => {
    button.addEventListener("click",() => {
    button.classList.toggle("open");
});
});
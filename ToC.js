const headings = Array.from(document.getElementsByTagName("h2"));
const aside = document.querySelector('.aside');
const ul = document.createElement("ul");
aside.appendChild(ul);

headings.forEach((heading) => {
    const id = heading.innerText.toLowerCase().replaceAll(" ", "_");
    heading.setAttribute("id", id);

    const liAnchorElement = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = heading.textContent;
    liAnchorElement.appendChild(a);
    ul.appendChild(liAnchorElement);
});

const toAnchors = aside.querySelectorAll("a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = headings.indexOf(entry.target);
                toAnchors.forEach(tab => tab.classList.remove("active"));
                toAnchors[index].classList.add("active");
                toAnchors[index].scrollIntoView({ block: "nearest", inline: "nearest" });
            }
        });
    },
    {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0
    }
);

headings.forEach(h2 => observer.observe(h2));

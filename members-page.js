const members = [
  {
    name: "Anjali Dharmaraju",
    img: "Anjali_casual.jpeg",
    exImg: "Anjali_baby.jpeg",
    quote: "Life is short, smile while you still have teeth.",
    subsystem: "Dry Lab, Social Media & Graphic Design",
    color: "#AAE170",
  },
  {
    name: "Anna D' Souza",
    img: "Anna_casual.jpeg",
    exImg: "Anna_baby.jpeg",
    quote: "Built from curiosity, chaos, and caffeine.",
    subsystem: "Social Media & Graphic Design, Research",
    color: "#C08522",
  },
  {
    name: "Gayatri B. Mudaliar",
    img: "Gayatri_casual.jpeg",
    exImg: "Gayatri_baby.jpeg",
    quote: "My favourite party trick is not going.",
    subsystem: "Web Development, Dry Lab",
    color: "#008080",
  },
  {
    name: "Kiah D'Souza",
    img: "Kiah_casual.jpeg",
    exImg: "Kiah_baby.jpeg",
    quote: "You have to be odd to be number one.",
    subsystem: "Wet Lab",
    color: "#A94064",
  },
  {
    name: "Kimaya Kaushik",
    img: "Kimaya_casual.jpeg",
    exImg: "Kimaya_casual.jpeg",
    quote: "To live is the rarest thing in the world; most just exist.",
    subsystem: "Wet Lab",
    color: "#8b0000",
  },
  {
    name: "Niona Vazirani",
    img: "Niona_casual.jpeg",
    exImg: "Niona_baby.jpeg",
    quote: "Send a quote guys.",
    subsystem: "Dry Lab, Hardware & Software",
    color: "#ff74d3",
  },
  {
    name: "Susmita Das",
    img: "Susmita_casual.jpeg",
    exImg: "Susmita_baby.jpeg",
    quote: "Main character on airplane mode.",
    subsystem: "Research",
    color: "#ff7700",
  },
  {
    name: "Rupanshi Oberoi",
    img: "Rupanshi_casual.jpeg",
    exImg: "Rupanshi_baby.jpeg",
    quote: "Send a quote guys.",
    subsystem: "Research, Human Practices",
    color: "#8651e7",
  },
  {
    name: "Shravan Kumar S.",
    img: "Shravan_casual.jpeg",
    exImg: "Shravan_baby.jpeg",
    quote: "Snacks.",
    subsystem: "Human Practices, Wet Lab",
    color: "#000000",
  },
  {
    name: "Ma Nashih",
    img: "Manashih_casual.jpeg",
    exImg: "Manashih_baby.jpeg",
    quote: "Send a quote guys.",
    subsystem: "Human Practices",
    color: "#e0e000",
  },
  {
    name: "Anoushka Arun",
    img: "Anoushka_casual.jpeg",
    exImg: "Anoushka_baby.jpeg",
    quote: "Send a quote guys.",
    subsytem: "Wet Lab",
    color: "#000000",
  },
  {
    name: "Samriddhi Pandey",
    img: "Samriddhi_casual.jpeg",
    exImg: "Samriddhi_baby.jpeg",
    quote: "Send a quote guys.",
    subsystem: "Hardware & Software, Web Development",
    color: "#00f7ff",
  },
];

const frontImg = document.getElementById("member-front");
const backImg = document.getElementById("member-back");
const nameEl = document.getElementById("member-name");
const quoteEl = document.getElementById("quote");
const card = document.getElementById("member-card");
const buttons = document.querySelector(".member-buttons");
const subsystemEl = document.getElementById("subsystem");

members.forEach((member, index) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = member.color;

  btn.addEventListener("click", () => showMember(index));
  buttons.appendChild(btn);
});

function showMember(index) {
  const m = members[index];

  card.classList.remove("flipped"); // reset flip
  frontImg.src = m.img;
  backImg.src = m.exImg;
  nameEl.textContent = m.name;
  quoteEl.textContent = m.quote;
  subsystemEl.textContent = m.subsystem;
}

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

showMember(0);

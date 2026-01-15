const members = [
    { name: "Anjali Dharmaraju", img: "Anjali_casual.jpeg", exImg: "Anjali_baby.jpeg", quote: "Life is short, smile while you still have teeth.", color: "#AAE170" },
    { name: "Anna D' Souza", img: "Anna_casual.jpeg", exImg: "Anna_baby.jpeg", quote: "Built from curiosity, chaos, and caffeine.", color: "#C08522" },
    { name: "Gayatri B. Mudaliar", img: "Gayatri_casual.jpeg", exImg: "Gayatri_baby.jpeg", quote: "My favourite party trick is not going.", color: "#008080" },
    { name: "Kiah D'Souza", img: "Kiah_casual.jpeg", exImg: "Kiah_baby.jpeg", quote: "Send a quote guys.", color: "#A94064" },
    { name: "Kimaya Kaushik", img: "Kimaya_casual.jpeg", exImg: "Kimaya_casual.jpeg", quote: "Send a quote guys.", color: "#020092" },
    { name: "Niona Vazirani", img: "Niona_casual.jpeg", exImg: "Niona_baby.jpeg", quote: "Send a quote guys.", color: "#761c1c" },
    { name: "Susmita Das", img: "Susmita_casual.jpeg", exImg: "Susmita_baby.jpeg", quote: "Main character on airplane mode.", color: "#ff7700" },
    { name: "Rupanshi Oberoi", img: "Rupanshi_casual.jpeg", exImg: "Rupanshi_baby.jpeg", quote: "Send a quote guys.", color: "#9966f7" },
];

const frontImg = document.getElementById('member-front');
const backImg  = document.getElementById('member-back');
const nameEl   = document.getElementById('member-name');
const quoteEl  = document.getElementById('quote');
const card     = document.getElementById('member-card');
const buttons  = document.querySelector('.member-buttons');

members.forEach((member, index) => {
    const btn = document.createElement('button');
    btn.style.backgroundColor = member.color;

    btn.addEventListener('click', () => showMember(index));
    buttons.appendChild(btn);
});

function showMember(index) {
    const m = members[index];

    card.classList.remove('flipped'); // reset flip
    frontImg.src = m.img;
    backImg.src  = m.exImg;
    nameEl.textContent = m.name;
    quoteEl.textContent = m.quote;
}

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

showMember(0);

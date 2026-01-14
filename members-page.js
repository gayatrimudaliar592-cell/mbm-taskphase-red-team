const members = [
    { name: "Anjali Dharmaraju", img: "Anjali_casual.jpeg", exImg: "Anjali_baby.jpeg", quote: "Life is a soup and I am a fork.", color: "#AAE170" },
    { name: "Anna D' Souza", img: "Anna_casual.jpeg", exImg: "Anna_baby.jpeg", quote: "Built from curiosity, chaos, and caffeine.", color: "#C08522" },
    { name: "Gayatri B. Mudaliar", img: "Gayatri_casual.jpeg", exImg: "Gayatri_baby.jpeg", quote: "My favourite party trick is not going.", color: "black" }
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

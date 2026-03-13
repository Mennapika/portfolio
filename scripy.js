// WAIT UNTIL PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});
});


/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if(hamburger && navMenu){
hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
}


/* =========================
   AVATAR PARALLAX
========================= */

const card = document.getElementById("avatarCard");

if(card){

document.addEventListener("mousemove", e => {

let x = (window.innerWidth/2 - e.pageX) / 25;
let y = (window.innerHeight/2 - e.pageY) / 25;

card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});

}


/* =========================
   PROJECT CARD FLIP
========================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener("click", () => {

card.classList.toggle("flip");

});

});


/* =========================
   PROJECT MODAL
========================= */

const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const demo = document.getElementById("modalDemo");
const closeBtn = document.querySelector(".close");

if(modal){

cards.forEach(card => {

card.addEventListener("dblclick", () => {

modal.style.display = "flex";

if(card.dataset.project === "valentine"){

title.innerText = "Valentine Quiz";
desc.innerText = "Interactive romantic quiz with animations.";
demo.href = "https://mennapika.github.io/valentine-quiz/";

}

if(card.dataset.project === "juice"){

title.innerText = "Futuristic Juice Landing";
desc.innerText = "Animated futuristic product landing page.";
demo.href = "https://mennapika.github.io/Futuristic-Juice-landing-page/";

}

});

});

if(closeBtn){
closeBtn.onclick = () => {
modal.style.display = "none";
};
}

}


/* =========================
   MATRIX BACKGROUND
========================= */

const canvas = document.getElementById("matrix");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01HTMLCSSJSREACTNODE";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){
drops[x] = 1;
}

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#ff6a00";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text, i*fontSize, drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;

}

}

setInterval(draw,35);

}

});
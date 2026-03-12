// typing effect

const text="Full Stack Web Developer"
let i=0

function typing(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i)
i++
setTimeout(typing,80)

}

}

typing()

// flip card on mobile

cards = document.querySelectorAll(".project-card")

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("flip")

})

})

// smooth scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})
})



// PARALLAX AVATAR

const card=document.getElementById("avatarCard")

document.addEventListener("mousemove",e=>{

let x=(window.innerWidth/2-e.pageX)/20
let y=(window.innerHeight/2-e.pageY)/20

card.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`

})



// PROJECT MODAL

const cards=document.querySelectorAll(".project-card")
const modal=document.getElementById("projectModal")
const title=document.getElementById("modalTitle")
const desc=document.getElementById("modalDesc")
const demo=document.getElementById("modalDemo")

cards.forEach(card=>{

card.onclick=()=>{

modal.style.display="flex"

if(card.dataset.project==="valentine"){

title.innerText="Valentine Quiz"
desc.innerText="Interactive romantic quiz with animations."
demo.href="https://mennapika.github.io/valentine-quiz/"

}

if(card.dataset.project==="juice"){

title.innerText="Futuristic Juice Landing"
desc.innerText="Animated futuristic product landing page."
demo.href="https://mennapika.github.io/Futuristic-Juice-landing-page/"

}

}

})

document.querySelector(".close").onclick=()=>{

modal.style.display="none"

}



// MATRIX BACKGROUND

const canvas=document.getElementById("matrix")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

const letters="01HTMLCSSJSREACTNODE"
letters.split("")

const fontSize=14
const columns=canvas.width/fontSize

const drops=[]

for(let x=0;x<columns;x++)
drops[x]=1

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#ff6a00"
ctx.font=fontSize+"px monospace"

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)]

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0

drops[i]++

}

}

setInterval(draw,35)
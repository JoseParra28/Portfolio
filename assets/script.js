

// document.addEventListener("mousemove", parallax);

// function parallax(e){
//     this.querySelectorAll('.layer').forEach(Layer => {
//         const speed = Layer.getAttribute('data-speed')

//         const  x = (window.innerWidth - e.pageX*speed)/100
//         const  y = (window.innerWidth - e.pageY*speed)/100

//         Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     });
// }

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });
 ScrollReveal().reveal('.content', { delay: 500 });

//  * typing text *//

 const body = document.querySelector('body');
//  const textTransform = document.getElementById('text-2');

 const toggle = document.getElementById('toggle');
 toggle.onclick = function(){
    body.classList.toggle('active');
    toggle.classList.toggle('active'); 
    text.classList.toggle('active'); 
    textT.classList.toggle('active'); 
    parra.classList.toggle('active');
    parraA.classList.toggle('active');
    pArra.classList.toggle('active');
    paRra.classList.toggle('active');
 }

// const text = document.querySelector(".text-2");

// textLoad();
// setInterval(textLoad, 12000);
// ---------------------------------------------------typing text

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Designer", "Addict :/"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


const container = document.querySelector(".container");
let scrollLine = document.querySelector('.scroll')

container.addEventListener('wheel', (e)=>{
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft + 'px';
})


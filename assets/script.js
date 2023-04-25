
// let spanTexts = document.getElementsByTagName("span");
// window.onload = function(){
//     for(spanText of spanTexts){
//         spanText.classList.add("active");
//     }a
// }
// -------------------------------------------------------------
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
 const textTransform = document.getElementById('text-2');

 const toggle = document.getElementById('toggle');
 toggle.onclick = function(){
    body.classList.toggle('active');
    toggle.classList.toggle('active'); 
    text.classList.toggle('active'); 
    parra.classList.toggle('active');
    parraA.classList.toggle('active');
    pArra.classList.toggle('active');
    paRra.classList.toggle('active');
 }

const text = document.querySelector(".text-2");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0)
    setTimeout(() => {
        text.textContent = "Designer";
    }, 4000)
    
}

textLoad();
setInterval(textLoad, 12000);


const container = document.querySelector(".container");
let scrollLine = document.querySelector('.scroll')

container.addEventListener('wheel', (e)=>{
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft + 'px';
})


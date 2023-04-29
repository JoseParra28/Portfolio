let card = document.querySelector('.card');

document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 2 /  40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 2 / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

let carD = document.querySelector('.card-2');

document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 2 /  40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 2 / 30;
  carD.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//  * typing text *//

const body = document.querySelector('body');
const paragraph  = document.querySelector('#intro-text');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
   body.classList.toggle('active');
   toggle.classList.toggle('active'); 
   intro-text.classList.toggle('active'); 
   textT.classList.toggle('active'); 
   parra.classList.toggle('active');
   parraA.classList.toggle('active');
   pArra.classList.toggle('active');
   paRra.classList.toggle('active');
}
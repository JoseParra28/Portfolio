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
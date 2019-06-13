const burgerBotton = document.getElementById("animation-menu");
const burgerBar1 = document.getElementById("bar1");
const burgerBar2 = document.getElementById("bar2");
const sidebar = document.getElementById("sidenav");

burgerBotton.addEventListener("click", animationMenu);
burgerBar1.addEventListener("animationend", pauseAnimaion);
function animationMenu(evento){
    console.log("Si funciona");
    // burgerBar1.style.animationName = "rotation1";
    // burgerBar2.style.animationName = "rotation2";
    burgerBar1.classList.toggle("change1");
    burgerBar2.classList.toggle("change2");
    sidebar.classList.toggle("cgnav")
}

// function pauseAnimaion() {
//     console.log("termino la animation")
//     burgerBar1.style.animationPlayState = "paused";
// }

//canvas

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', function(){
  console.log('si funciona');
});
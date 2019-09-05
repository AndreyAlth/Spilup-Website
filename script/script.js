const header = document.getElementById('header')
const burgerBotton = document.getElementById("containerMenu");
const burgerBar1 = document.getElementById("bar1");
const burgerBar2 = document.getElementById("bar2");
const sidebar = document.getElementById("sideNav");

burgerBotton.addEventListener("click", animationMenu);
burgerBar1.addEventListener("animationend", pauseAnimaion);
function animationMenu(evento){
    console.log("Si funciona");
    // burgerBar1.style.animationName = "rotation1";
    // burgerBar2.style.animationName = "rotation2";
    header.classList.toggle('headerMovilChange')
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
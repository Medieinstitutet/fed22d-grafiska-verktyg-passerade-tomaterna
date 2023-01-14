import './style.css'
import '/Nocco Design/array.js'

// i transfered all the code inside th ehtml cuz that way everything works better
// document.querySelector('#slideShow').innerHTML =
// `
// <div class="imgSlider">
// <img src="Assets/Slideshow/cola.png"></img><br>
// <button class="material-symbols-outlined" id="arrow_left">
// arrow_left
// </button>
// <button class="material-symbols-outlined" id="arrow_right">
// arrow_right
// </button>
// </div>
// `


const logo = document.getElementById('logo');
const noccoLogo = document.getElementById('noccoLogo');
// const slideShow = document.getElementById('slideShow');
const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('closeBtn')
const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')
const hamburger = document.getElementById('hamburger')
const content = document.getElementById('everythingContainer')

document.querySelector(".noccoLogo").classList.remove("hidden");
document.querySelector(".logo").classList.remove("hidden");

menuBtn.addEventListener("click", toggleClass)
closeBtn.addEventListener("click", toggleClass)
arrowLeft.addEventListener("click", togglePics)
arrowRight.addEventListener("click", togglePics)


function togglePics() {
  console.log('Kuken')
}

function toggleClass(){
  console.log('hej');

  hamburger.classList.toggle('hidden');

  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('show');
  
  content.classList.toggle('hidden');
  document.querySelector(".nav").classList.toggle("hidden");

  logo.classList.toggle("hidden");
  noccoLogo.classList.toggle("hidden");
}
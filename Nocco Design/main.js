import './style.css'
import '/Nocco Design/array.js'

document.querySelector('#slideShow').innerHTML = `
<div class="imgSlider">
<img src="Assets/Slideshow/cola.png"></img><br>
<button class="material-symbols-outlined" id="arrow_left">
arrow_left
</button>
<button class="material-symbols-outlined" id="arrow_right">
arrow_right
</button>
</div>
`

const menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener("click", toggleClass)
const closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener("click", toggleClass)
const arrowLeft = document.getElementById('arrow_left')
arrowLeft.addEventListener("click", togglePics)
const arrowRight = document.getElementById('arrow_right')
arrowRight.addEventListener("click", togglePics)

function togglePics() {
  console.log('Hej hej')
}

function toggleClass(){
  console.log('hej');
  hamburger.classList.toggle('hidden');
  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('visa');
}
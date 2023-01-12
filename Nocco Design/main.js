import './style.css'
import '/Nocco Design/array.js'


document.querySelector('#slideShow').innerHTML = `
<div class="imgSlider">
<img name=slider src="Assets/Slideshow/cola.png"></img><br>
<button class="material-symbols-outlined" id="arrow_left">
arrow_left
</button>
<button class="material-symbols-outlined" id="arrow_right">
arrow_right
</button>
</div>
`
/*
const logo = document.getElementById('logo');
const noccoLogo = document.getElementById('noccoLogo');
const slideShow = document.getElementById('slideShow');*/
const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('closeBtn')
const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')
document.querySelector(".noccoLogo").classList.remove("hidden");
document.querySelector(".logo").classList.remove("hidden");
menuBtn.addEventListener("click", toggleClass)
closeBtn.addEventListener("click", toggleClass)
arrowLeft.addEventListener("click", imageSliderMinus)
arrowRight.addEventListener("click", imageSliderPlus)
let i = 0; 			// Start Point
let images = [];	// Images Array
	 
// Image List
images[0] = "Assets/Slideshow/cola.png";
images[1] = "Assets/Slideshow/focus.png";
images[2] = "Assets/Slideshow/frame.png";

// Change Image
function imageSliderPlus(){
	document.slider.src = images[i]; 
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
}

function imageSliderMinus(){
	document.slider.src = images[i]; 
	if(i < 1){
		i = images.length -1;
	}else {
	  i--; 
  }
}

imageSliderPlus()

function toggleClass(){
  console.log('hej');

  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('show');
  hamburger.classList.toggle('hidden');
  hamburger.style.zIndex="100"
  /*
  slideShow.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  noccoLogo.classList.toggle("hidden");*/

}
import './style.css'
import '/NoccoDesign/array.js'

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


// Cookie pop-up, will always reappear when reloading site

const $cookiesBanner = document.querySelector(".cookies-banner");

if ($cookiesBanner) {
  $cookiesBanner.innerHTML = `
    <div>
    Genom att markera ”Acceptera cookies” godkänner du att Nocco får använda cookies, pixlar, taggar och liknande tekniker. 
    Vi använder dessa tekniker för att samla in information från din enhet och webbläsare för att följa dina aktiviteter i annonserings- och funktionssyfte,
    till exempel för att personanpassa reklam och förbättra webbplatsen.<br>
        <button class="accept">Acceptera cookies</button>
        <button>Cookie inställningar</button>
    </div>
    `
  const $acceptButton = $cookiesBanner.querySelector(".accept"); // Eventlistener for accept btn
  $acceptButton.addEventListener("click", () => {
    $cookiesBanner.remove();
  });
}
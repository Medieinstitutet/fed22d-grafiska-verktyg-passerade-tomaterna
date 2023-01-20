import './style.css'
import '/NoccoDesign/array.js'

const logo = document.getElementById('logo');
const noccoLogo = document.getElementById('noccoLogo');
// const slideShow = document.getElementById('slideShow');
const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('closeBtn')
const arrowRight = document.getElementById('arrow_right')
const arrowLeft = document.getElementById('arrow_left')
const hamburger = document.getElementById('hamburger')
const content = document.getElementById('everythingContainer')
const SliderImage = document.querySelectorAll('.imgSlider img')

let currentSlide = 0;

document.querySelector(".noccoLogo").classList.remove("hidden");
document.querySelector(".logo").classList.remove("hidden");

menuBtn.addEventListener("click", toggleClass)
closeBtn.addEventListener("click", toggleClass)
arrowRight.addEventListener("click", slideRight)
arrowLeft.addEventListener("click", slideLeft)

SliderImage.forEach((img, index) => {
  if (index !== currentSlide) {
    img.classList.add('hidden');
  }
});

function slideRight() {
  SliderImage[currentSlide].classList.add('hidden');

  currentSlide = (currentSlide + 1) % SliderImage.length;

  SliderImage[currentSlide].classList.remove('hidden');
}

function slideLeft(){
  SliderImage[currentSlide].classList.add('hidden');

  currentSlide = (currentSlide - 1 + SliderImage.length) % SliderImage.length;

  SliderImage[currentSlide].classList.remove('hidden');
}

function toggleClass(){
  
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
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

// Changing assortmentpage to render in desktop viewport
const mediaQuery = window.matchMedia("(min-width: 1025px)");

if (mediaQuery.matches) { // Check if the viewport is 1025px or bigger
  
  let BCAABtn = document.createElement("button"); // Creating buttons which will appear in the buttonContainer Div
  BCAABtn.id = "BCAABtn";
  BCAABtn.className = "bcaabtn";
  BCAABtn.innerHTML = "BCAA";
  document.body.appendChild(BCAABtn);

  let KoffeinfriBtn = document.createElement("button");
  KoffeinfriBtn.id = "KoffeinfriBtn";
  KoffeinfriBtn.className = "caffeinfreebtn";
  KoffeinfriBtn.innerHTML = "Koffeinfri";
  document.body.appendChild(KoffeinfriBtn);

  let PWOBtn = document.createElement("button");
  PWOBtn.id = "PWOBtn";
  PWOBtn.className = "pwobtn";
  PWOBtn.innerHTML = "PWO";
  document.body.appendChild(PWOBtn);

  let FocusBtn = document.createElement("button");
  FocusBtn.id = "FocusBtn";
  FocusBtn.className = "focusbtn";
  FocusBtn.innerHTML = "Focus";
  document.body.appendChild(FocusBtn);

  
  const bcaaArticles = document.querySelectorAll(".bcaa"); // Articles from HTML
  const caffeinfreeArticles = document.querySelectorAll(".caffeinfree");
  const pwoArticles = document.querySelectorAll(".pwo");
  const focusArticles = document.querySelectorAll(".focus");

  
  BCAABtn.addEventListener("click", function() { // Add event listeners to the buttons
    for (let i = 0; i < bcaaArticles.length; i++) {
      bcaaArticles[i].style.display = "block";
    }
    for (let i = 0; i < caffeinfreeArticles.length; i++) {
      caffeinfreeArticles[i].style.display = "none";
    }
    for (let i = 0; i < pwoArticles.length; i++) {
      pwoArticles[i].style.display = "none";
    }
    for (let i = 0; i < focusArticles.length; i++) {
      focusArticles[i].style.display = "none";
    }
  });
    KoffeinfriBtn.addEventListener("click", function() {
      for (let i = 0; i < bcaaArticles.length; i++) {
        bcaaArticles[i].style.display = "none";
      }
      for (let i = 0; i < caffeinfreeArticles.length; i++) {
        caffeinfreeArticles[i].style.display = "block";
      }
      for (let i = 0; i < pwoArticles.length; i++) {
          pwoArticles[i].style.display = "none";
        }
      for (let i = 0; i < focusArticles.length; i++) {
          focusArticles[i].style.display = "none";
        }
      });
      PWOBtn.addEventListener("click", function() {
        for (let i = 0; i < bcaaArticles.length; i++) {
          bcaaArticles[i].style.display = "none";
        }
        for (let i = 0; i < caffeinfreeArticles.length; i++) {
          caffeinfreeArticles[i].style.display = "none";
        }
        for (let i = 0; i < pwoArticles.length; i++) {
          pwoArticles[i].style.display = "block";
        }
        for (let i = 0; i < focusArticles.length; i++) {
          focusArticles[i].style.display = "none";
        }
      });
      FocusBtn.addEventListener("click", function() {
        for (let i = 0; i < bcaaArticles.length; i++) {
          bcaaArticles[i].style.display = "none";
        }
        for (let i = 0; i < caffeinfreeArticles.length; i++) {
          caffeinfreeArticles[i].style.display = "none";
        }
        for (let i = 0; i < pwoArticles.length; i++) {
          pwoArticles[i].style.display = "none";
        }
        for (let i = 0; i < focusArticles.length; i++) {
          focusArticles[i].style.display = "block";
        }
      });
}


const buttonContainer = document.querySelector(".buttoncontainer"); // Container with the different type of drinks
buttonContainer.appendChild(BCAABtn);
buttonContainer.appendChild(KoffeinfriBtn);
buttonContainer.appendChild(PWOBtn);
buttonContainer.appendChild(FocusBtn);
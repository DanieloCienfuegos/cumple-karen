let firstSlide = document.getElementsByClassName("first--slide")[0];

let firstSlideContainer =
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer =
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas =
document.getElementsByClassName("second--canvas")[0];

let thirdCanvas =
document.getElementsByClassName("third--canvas")[0];

let flowerCanvas =
document.getElementsByClassName("flower--canvas")[0];

let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start-button");
let bgMusic = document.getElementById("bg-music");

/* Estado inicial */
secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");
thirdCanvas.setAttribute("style", "display:none");

if (flowerCanvas) {
  flowerCanvas.setAttribute("style", "display:none");
}

/* Música */
function startMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.55;

  bgMusic.play().catch(function(error) {
    console.log("El navegador bloqueó la música:", error);
  });
}

/* Secuencia principal */
function startExperience() {
  if (startScreen) {
    startScreen.style.display = "none";
  }

  document.body.classList.add("started");

  startMusic();

  setTimeout(function() {
    firstSlideContainer.setAttribute("style", "display:none");
    secondSlideContainer.setAttribute("style", "display:block");
  }, 2500);

  setTimeout(function() {
    firstSlide.setAttribute("style", "display:none");
    secondCanvas.setAttribute("style", "display:block");
  }, 9500);

  setTimeout(function() {
    secondCanvas.setAttribute("style", "display:none");
    thirdCanvas.setAttribute("style", "display:block");
  }, 12800);

  setTimeout(function() {
    if (!flowerCanvas) return;

    thirdCanvas.setAttribute("style", "display:none");
    flowerCanvas.setAttribute("style", "display:block");

    let flowerFrame = document.getElementById("flower-frame");

    if (flowerFrame && !flowerFrame.getAttribute("src")) {
      flowerFrame.setAttribute("src", flowerFrame.getAttribute("data-src"));
    }
  }, 22000);
}

/* Botón inicial */
if (startButton) {
  startButton.addEventListener("click", startExperience, { once: true });
}
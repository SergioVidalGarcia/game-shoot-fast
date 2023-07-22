
//GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const cfgBtnNode = document.querySelector("#config-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const endScreenNode = document.querySelector("#end-screen");


//STATE MANAGENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
}

function cfgMenu() {
  console.log("Entrando a configuracion");
  splashScreenNode.style.display = "none";
  
}

//ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
cfgBtnNode.addEventListener("click", cfgMenu);

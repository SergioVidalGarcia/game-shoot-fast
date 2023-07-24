
//GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const cfgBtnNode = document.querySelector("#config-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const endScreenNode = document.querySelector("#end-screen");


//STATE MANAGENT FUNCTIONS

endScreenNode.style.display = "none";

function startGame() {
  
  console.log("iniciando el juego");
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  endScreenNode.style.display = "none";
  moverImagen();
  countdown();
  
}

function cfgMenu() {
  console.log("Entrando a configuracion");
  splashScreenNode.style.display = "none";
  endScreenNode.style.display = "none";
}

function endDisplay() {
  console.log("Acabando juego");
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "none";
  endScreenNode.style.display = "flex";
}



//ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
cfgBtnNode.addEventListener("click", cfgMenu);


/////////////////////////////////////////////////////////////////////////





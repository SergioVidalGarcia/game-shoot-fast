
//GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const cfgBtnNode = document.querySelector("#config-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const endScreenNode = document.querySelector("#end-screen");
const volverInicioNode = document.querySelector("#inicio-btn");
const resetBtnNode = document.querySelector("#reset-btn");
const targetNode = document.querySelector("#target");

let ballX = 10;
let ballY = 10;




//STATE MANAGENT FUNCTIONS

endScreenNode.style.display = "none";

function targetMove(){
  //cambios de los elementos
  ballX++;
  ballY++;

}

function targetUpdate(){
  //actualizacion de posicions declarando variable global arriba
  targetNode.style.left = `${ballX}px`;
  targetNode.style.top = `${ballY}px`;

}











function startGame() {
  
  console.log("iniciando el juego");
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  endScreenNode.style.display = "none";
  moverImagen();
  countdown();
  targetMove();
  targetUpdate();
  requestAnimationFrame(startGame);
  
  
  
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

function volverInicio() {
  console.log("Volviendo a inicio");
  splashScreenNode.style.display = "flex";
  gameScreenNode.style.display = "none";
  endScreenNode.style.display = "none";
}

function resetGame(){
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  endScreenNode.style.display = "none";
  startGame();

  

}





//ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
cfgBtnNode.addEventListener("click", cfgMenu);
volverInicioNode.addEventListener("click", volverInicio);
resetBtnNode.addEventListener("click", resetGame)





/////////////////////////////////////////////////////////////////////////





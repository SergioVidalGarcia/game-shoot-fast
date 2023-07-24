function countdown() {
    const scoreElement = document.getElementById('timer');
    let seconds = 5; // Inicializamos el contador en 60 segundos
    // Función para actualizar el texto en el elemento "score"
    function updateScore() {
        scoreElement.textContent = `Tiempo restante: ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
    }

    // Actualizar la cuenta regresiva cada segundo
    const intervalId = setInterval(() => {
        seconds--;
        // scoreElement.innerText = seconds;


        updateScore();

        if (seconds <= 0) {
            clearInterval(intervalId); // Detener el intervalo cuando llegue a cero
            scoreElement.textContent = "Fin del tiempo"

            endDisplay()
        
            

            // Aquí puedes añadir cualquier otra lógica que desees ejecutar cuando termine el tiempo
        }
    }, 1000);
    
    
}
// Iniciar la cuenta regresiva cuando la página esté cargada







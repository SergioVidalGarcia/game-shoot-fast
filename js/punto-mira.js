// Obtener la referencia al elemento de la imagen
const puntoMira = document.getElementById('Mira');

// Función para mover la imagen con el cursor
function moverImagen(event) {
  // Obtener las coordenadas X e Y del cursor
  const x = event.clientX;
  const y = event.clientY;

  // Establecer las coordenadas de la imagen según la posición del cursor
  mira.style.left = x + 'px';
  mira.style.top = y + 'px';
}

// Asignar el evento 'mousemove' al documento para que la función se ejecute cada vez que se mueva el cursor
document.addEventListener('mousemove', moverImagen);
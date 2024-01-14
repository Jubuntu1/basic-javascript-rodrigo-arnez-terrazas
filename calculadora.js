let puntos = 0;
let temporizador;

function generarPregunta() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  return { pregunta: `${num1} + ${num2} = `, respuesta: num1 + num2 };
}

function iniciarJuego() {
  console.log("¡Bienvenido al juego de sumas!");
  preguntarSiguiente();
}

function preguntarSiguiente() {
  const preguntaActual = generarPregunta();
  const respuestaCorrecta = preguntaActual.respuesta;

  console.log(preguntaActual.pregunta);

  temporizador = setTimeout(function() {
    console.log("¡Tiempo agotado!");
    finalizarJuego();
  }, 3000);

  process.stdin.once('data', function(data) {
    clearTimeout(temporizador);

    const respuestaUsuario = parseInt(data, 10);
    
    if (!isNaN(respuestaUsuario) && respuestaUsuario === respuestaCorrecta) {
      puntos++;
      console.log(`¡Correcto! Puntos: ${puntos}`);
      preguntarSiguiente();
    } else {
      console.log(`¡Incorrecto! Tu puntuación final es: ${puntos}`);
      process.exit();
    }
  });
}

function finalizarJuego() {
  console.log("¡Tiempo agotado! Tu puntuación final es: " + puntos);
  process.exit();
}

iniciarJuego();

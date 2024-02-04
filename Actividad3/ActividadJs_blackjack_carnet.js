// Función para generar un número aleatorio entre min y max (ambos incluidos)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener una carta
function obtenerCarta() {
    return generarNumeroAleatorio(1, 11);
}

// Función para determinar el ganador
function determinarGanador(usuario, computadora) {
    if (usuario > 21) {
        alert("¡Qué lástima! Su total es " + usuario + ". Suerte para la próxima. La computadora tiene " + computadora + ".");
    } else if (computadora > 21 || usuario > computadora) {
        alert("¡Enhorabuena! Ha ganado. La computadora tiene " + computadora + ".");
    } else if (usuario < computadora) {
        alert("¡Qué lástima! Ha perdido. La computadora tiene " + computadora + ".");
    } else {
        alert("¡Es un empate! Ambos tienen " + usuario + ".");
    }
}

// Inicio del juego
alert("¡Bienvenido al Blackjack 21!");

// La computadora obtiene dos cartas
var cartaComputadora1 = obtenerCarta();
var cartaComputadora2 = obtenerCarta();
var totalComputadora = cartaComputadora1 + cartaComputadora2;

// El usuario obtiene dos cartas
var cartaUsuario1 = obtenerCarta();
var cartaUsuario2 = obtenerCarta();
var totalUsuario = cartaUsuario1 + cartaUsuario2;

// Mostrar las cartas iniciales del usuario
alert("Tus cartas son " + cartaUsuario1 + " y " + cartaUsuario2 + ". Tu total es " + totalUsuario + ".");

// Bucle principal del juego
var seguirJugando = true;
while (seguirJugando && totalUsuario <= 21) {
    var opcion = prompt("¿Desea otra carta? Actualmente el valor de sus cartas suma: " + totalUsuario + " (si/no)");

    if (opcion.toLowerCase() === 'si') {
        var nuevaCarta = obtenerCarta();
        totalUsuario += nuevaCarta;
        alert("Su nueva carta vale " + nuevaCarta + ", su total es " + totalUsuario + ".");
    } else if (opcion.toLowerCase() === 'no') {
        seguirJugando = false;
    } else {
        alert("Opción no válida. Por favor, ingrese 'si' o 'no'.");
    }
}

// Revelar las cartas de la computadora
alert("La computadora tiene " + totalComputadora + ".");

// Mostrar resultado del juego
determinarGanador(totalUsuario, totalComputadora);

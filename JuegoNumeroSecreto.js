// Generar número secreto entre 1 y 10 con la ayuda de Math.Random
let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log("Número secreto:", numeroSecreto); // Solo para pruebas

// Pedir número al usuario
let numeroUsuario = parseInt(prompt("Adivina el número secreto del 1 al 10"));
let vidas = 3;

// Mientras el usuario no adivine y tenga vidas
while (numeroUsuario !== numeroSecreto && vidas > 1) {
    vidas--;
    numeroUsuario = parseInt(prompt("Intenta nuevamente. Te quedan " + vidas + " vidas"));
}

// Si el usuario gana
if (numeroUsuario === numeroSecreto) {
    console.log("¡Ganaste!");
    alert("¡Ganaste!");
//Si el usuario pierde
} else {
    console.log("Perdiste");
    alert("Perdiste");
}

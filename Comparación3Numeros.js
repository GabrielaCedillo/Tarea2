// Pedir al usuario que ingrese 3 números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Comparar los números
if (num1 === num2 && num2 === num3) {
    alert("Los tres números son iguales.");
} else if (
    (num1 === num2 && num1 !== num3) ||
    (num1 === num3 && num1 !== num2) ||
    (num2 === num3 && num2 !== num1)
) {
    alert("Hay dos números iguales y uno diferente.");
} else {
    // Si los 3 numeros son diferentes
    if (num1 > num2 && num2 > num3) {
        alert("Los números proporcionados son de mayor a menor.");
    } else if (num1 < num2 && num2 < num3) {
        alert("Los números proporcionados son de menor a mayor.");
    } else {
        alert("Los tres números son diferentes.");
    }
}

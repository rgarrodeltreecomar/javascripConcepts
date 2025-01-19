// procedimiento en JS
// 1. Definicion de procedemiento 

function saludar(mensaje) {
    console.log(`El mensaje es: ${mensaje}`);
};

// 2. Llamada a procedimiento

saludar("Hola");

// Funcion en JS "Return"

function suma(val1, val2) {
let resSum = val1 + val2;
return resSum;
}
let a = 12; b = 81;
let resultado = suma(a, b);
console.log(`El resultado es: ${resultado}`);
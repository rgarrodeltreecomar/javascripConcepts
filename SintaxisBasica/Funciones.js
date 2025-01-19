//Funciones comunes en JS
function imprimir(parametro) {
    console.log(parametro);
};
// un argumento puede ser una varuable, un valor, una expresion, una funcion, un objeto, un array, etc.
let variable = `Valor string`;
//imprimir("Argumento");

//imprimir(143);
//imprimir(variable);

// las funciones de arriba se le pueden decir "Procedimiento";

// estas funciones devuelven un valor y se les puede llamar "Funciones";

function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}   
console.log(`suma; ${sumar(2,10)}`)
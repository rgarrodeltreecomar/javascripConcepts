let miCadena = "30";
let miCadena1 = "20";

console.log(miCadena.length);

let suma = parseInt(miCadena) + parseInt(miCadena1);

let resta = parseInt(miCadena) - parseInt(miCadena1);
console.log(`suma: ${suma} y la resta es: ${resta}`);

let errorString = "Mi chocolate";

let valorError = parseInt(errorString);
// Valor NaN "no es numero",
console.log(`Valor error: ${valorError}`);


// numero a string

let num1 = 30;
let num2 = 10;

let sumaNum = num1 + num2; // 40

let sumaNumString = num1.toString() + num2.toString(); // "3010"
console.log(`se suma en cadena: ${sumaNumString }` );

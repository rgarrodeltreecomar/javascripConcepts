
//Escribe una función llamada invertirCadena que reciba una cadena como parámetro y devuelva la cadena invertida.

function invertirCadena(cadena){
let inversion = cadena.split('').reverse().join('');
for(let i = cadena.length - 1; i <= 0; i--){
inversion += cadena[i]
}
console.log(`${inversion}`);
}

invertirCadena("Valor");


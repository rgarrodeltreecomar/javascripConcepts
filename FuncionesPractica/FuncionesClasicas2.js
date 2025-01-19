//Crea una función llamada contarCaracteres que reciba una cadena y devuelva la cantidad de caracteres que tiene.

function contarCaracteres(valores){
    let contador = new String(valores).length;  
console.log(`el texto tiene: ${contador} caracteres`);
}
contarCaracteres("123456789");
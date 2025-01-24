'use strict';

function division(num1, num2){
    if(num1 == 0 || num2 == 0){
        throw new Error("No se puede dividir por 0");

    }
    return num1 / num2;
}
try{
let resultado = division(10,2);
console.log(resultado);

}catch(error){
    console.log(error)

}

let numero = 0;

try{
    if(isNaN(numero)){
    throw new Error("No es un numero");
    }
    else if(numero === ""){
        throw new Error("Es un String vacio");
    }
    else if(numero <= 0 ){
        throw new Error(`No pueden ser numeros negativos o :${numero}`);
    }

}
catch(error){
console.log(error);
console.log(error.name);
console.log(error.message);
}

// paso valor en js 
// pasando informacion de tipo primitivo (number, string, boolean, null, undefined, symbol)

function cambiarValor(parametro) {
    parametro = 20;
}

let argumento = 50;
cambiarValor(argumento);

//console.log(argumento);

// paso de valor tipo referenia
// objetos (arrays) se pasa por referencia

function cambiarValorObjeto(parametro) {
    parametro[0] = 200;
}

let array = [10,20];
console.log(`Antes de modificar: ${array[0]} ${array[1]}`);
//modificando
cambiarValorObjeto(array); 
console.log(`Despues de modificar: ${array[0]} ${array[1]}`);
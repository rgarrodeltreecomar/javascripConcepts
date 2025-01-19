// funcion recursiva se llama a si misma

function funcionRecursiva (numero) {
    // caso base 
    if(numero == 1) {
        console.log(numero);
    }
    else {
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

// llamada a la funcion

funcionRecursiva(4);

function calcularFactorial(n) {
    // Caso base: el factorial de 0 o 1 es 1.
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Llamada recursiva: n * factorial de (n - 1).
        return n * calcularFactorial(n - 1);
    }
}

// Llamada a la función
console.log(calcularFactorial(5)); 

function sumaArray(arr) {
    // Caso base: si el array está vacío, la suma es 0.
    if (arr.length === 0) {
        return 0;
    } else {
        // Llamada recursiva: sumar el primer elemento con la suma del resto del array.
        return arr[0] + sumaArray(arr.slice(1));
    }
}

// Llamada a la función
console.log(sumaArray([1, 2, 3, 4])); 
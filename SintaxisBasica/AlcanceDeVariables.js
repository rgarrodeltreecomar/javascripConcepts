// Alcance de variables en JavaScript

// Variable global
let globalVar = "Soy una variable global";

function miFuncion() {
    // Variable local
    var localVar = "Soy una variable local";
    
    console.log(globalVar); // Accede a la variable global
    console.log(localVar);  // Accede a la variable local
}

miFuncion();

console.log(`Se llama por segunda vez "${globalVar}"`); // Accede a la variable global
console.log(localVar);  // Error: localVar no está definida fuera de la función

// Bloque de código
if (true) {
    let bloqueVar = "Soy una variable de bloque";
    console.log(bloqueVar); // Accede a la variable de bloque
}

console.log(bloqueVar); // Error: bloqueVar no está definida fuera del bloque
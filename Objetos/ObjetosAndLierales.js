// 1. String
let miStringObjeto = new String("Hola, mundo!"); 
// Crea un objeto String
console.log(miStringObjeto); // Output: [String: 'Hola, mundo!']

let miStringLiteral = "Hola, mundo!"; 
// Literal string
console.log(miStringLiteral); // Output: Hola, mundo!

// 2. Number
let miNumeroObjeto = new Number(42); 
// Crea un objeto Number
console.log(miNumeroObjeto); // Output: [Number: 42]

let miNumeroLiteral = 42; 
// Literal number
console.log(miNumeroLiteral); // Output: 42

// 3. Boolean
let miBooleanObjeto = new Boolean(true); 
console.log(miBooleanObjeto); // Output: [Boolean: true]

let miBooleanLiteral = true; 
console.log(miBooleanLiteral); // Output: true


let miArrayObjeto = new Array(1, 2, 3, 4, 5); 
console.log(miArrayObjeto); 

let miArrayLiteral = [1, 2, 3, 4, 5]; 
console.log(miArrayLiteral); 


let miObjetoObjeto = new Object({ nombre: "Juan", edad: 30 }); 
console.log(miObjetoObjeto); 

let miObjetoLiteral = { nombre: "Juan", edad: 30 }; 
console.log(miObjetoLiteral);


let miFuncionObjeto = new Function("a", "b", "return a + b;"); 
console.log(miFuncionObjeto(2, 3)); 

let miFuncionLiteral = (a, b) => a + b; 

console.log(miFuncionLiteral(2, 3)); 

 










let miRegExpObjeto = new RegExp("\\d+"); 
// Crea un objeto RegExp
console.log(miRegExpObjeto); // Output: /\d+/

let miRegExpLiteral = /\d+/; 
// Literal regex
console.log(miRegExpLiteral); // Output: /\d+/

let miFechaObjeto = new Date(); 
console.log(miFechaObjeto); 


let miFechaLiteral = Date(); 
console.log(miFechaLiteral);


let miMapaObjeto = new Map(); 
miMapaObjeto.set("clave1", "valor1");
console.log(miMapaObjeto); 
let miMapaLiteral = { clave1: "valor1" }; 
console.log(miMapaLiteral); 

// se recomienda usar const en una funcion tipo flecha
//imprime un string
const miArrowFunction = () => {
console.log("Hola");
}
miArrowFunction();

// suma sin {} ni la necesidad de usar return
const suma = (num1,num2) => num1 + num2 
console.log(suma(5,3));
// simplifica el cuerpo de la funcion
const saludar = () => "Hola desde arrow function"
console.log(saludar());

const returnObjet = () => ({edad: 31, nombre: "Juan"})
//const returnObjet = () => new Object({nobre: "Juan", edad: 32});
console.log(returnObjet());

const recibeParametro = parametro => console.log(parametro);
recibeParametro(suma(1,6));


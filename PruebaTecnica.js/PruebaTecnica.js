let a = 2023; b = 2024; c =2025;
let objetivo = 2023202320232023; modulo = 10000; secuencia = [a,b,c]


function suma( secuencia) {
    let sumaDeUltimosTres = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2] + secuencia[secuencia.length - 3];
    return sumaDeUltimosTres = sumaDeUltimosTres + modulo;
};

console.log(`Valor: ${suma(secuencia= [a,b,c])}`)
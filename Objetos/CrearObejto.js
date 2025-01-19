let persona1 = {
    edad: 25,
    Nombre: "Rodrigo",
    Apellido: "Garro",
    Nacionalidad: "Argentina",
    email: undefined,
    legalAge: false,
    fullName: function() {
        return `${this.Nombre} ${this.Apellido}`;
    },
    saludor: function(person) {
        return `Hola ${person} ${this.Nombre} te manda un saludo`

    }

}
//let personHi = "Brisa";



let persona2 = {
    edad: 22,
    Nombre: "Brisa",
    Apellido: "Montivero",
    Nacionalidad: "Argentina",
    email: "bmontivero@email.com",
    legalAge: true,
}

//console.log(persona1.saludor(persona2.Nombre));

// asignar valores a un obejeto 

let persona3 = new Object();

persona3.name = "Forrolfo";
persona3.lastName = "Ford";
persona3.Age = 34;
//console.log(persona3);

for( namePropiedad in persona2 ) {
console.log(persona2[namePropiedad]);
}
let persona2 = {
    edad: 22,
    Nombre: "Brisa",
    Apellido: "Montivero",
    Nacionalidad: "Argentina",
    email: "bmontivero@email.com",
    legalAge: true,
}

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
// agregar una propiedad con un valor
persona2.civilStatus = "Novia";
//console.log(persona2);
// eliminar propiedad y su valor
//delete persona1.saludor;
//console.log(persona1);

let valorString = JSON.stringify(persona1);
//console.log(valorString);

let valorObjeto = JSON.parse(valorString);
//console.log(valorObjeto);

let valorArray = Object.values(persona1);
//console.log( valorArray);
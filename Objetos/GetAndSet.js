let persona1 = {
    edad: 25,
    Nombre: "Rodrigo",
    Apellido: "Garro",
    Nacionalidad: "Argentina",
    email: undefined,
    legalAge: false,
    lang: "es",
    get idioma() {
    return this.lang.toUpperCase(); // Devuelve el valor de lang en mayúsculas
    },
    get fullName() {
        return `${this.Nombre} ${this.Apellido}`;
    },
    saludar: function(person) {
        return `Hola ${person} ${this.Nombre} te manda un saludo`

    },
    set idioma(lang) {
        return this.idioma = lang.toUpperCase();
    }

}
console.log(persona1.idioma); // ES
persona1.lang = "mx";
console.log(persona1.idioma);
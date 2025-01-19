class Persona {
    // el constructor dentro de la clase es un metodo
    constructor(name, lastName, age) {
        this._nombre = name;
        this._apellido = lastName;
        this._edad = age;
    };
    //los metodos van fuera del bloque del constuctor cuando se define una clase
    get fullName(){
        return `${this._nombre} ${this._apellido}`
    };


    
    set lastName(lastName){
        this._apellido = lastName;

    }
}
let padre = new Persona("Juan", "Perez", 32);
padre.lastName = "Hijodeldiavlo"
console.log(padre);

let madre = new Persona("Maria","Del Carmen", 28);3
//console.log(madre)
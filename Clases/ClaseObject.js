class Persona {
    // el constructor dentro de la clase es un metodo
    constructor(name, lastName, age) {
        this._nombre = name;
        this._apellido = lastName;
        this._edad = age;
    };
    //los metodos van fuera del bloque del constuctor cuando se define una clase
    // get fullName(){
    //     return `${this._nombre} ${this._apellido}`
    // };
    get name() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set lastName(lastName){
        this._apellido = lastName;

    }
    set name(name){
        this._nombre = name;

    }
    get edad(){
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    fullName(){
        return `${this._nombre} ${this._apellido}`
    }
    toString(){
        return ` ${super.fullName()}`
    }
};

class Empleado extends Persona {
    constructor(name, lastName, age, localtion,){
        super(name, lastName, age);
        this._location = localtion;
    };
    get localtion() {
        return this._location;
    }
    set localtion(location){
        this._location = location;
    }
    // sobreEscritura: Modifica el comportamiento de un metodo de la variable padre
    fullName(){
        return ` ${super.fullName()} Ubicacion: ${this._location}`
    }
}
// Object.prototype.toString();
let miEmpleado = new Empleado("Juan", "Carlos",32, "Las toninas");


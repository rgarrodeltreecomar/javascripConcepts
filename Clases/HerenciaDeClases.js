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
};
class Empleado extends Persona {
    constructor(name, lastName, age, localtion,){
        super(name, lastName, age);// llama al constructor de la clase padre
        this._location = localtion;
    };
    get localtion() {
        return this._location;
    }
    set localtion(location){
        this._location = location;
    }
}

let miEmpleado = new Empleado("Juan", "Carlos",32, "Las toninas");
console.log(miEmpleado.fullName());

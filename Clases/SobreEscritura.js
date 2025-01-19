class Persona {


     // atributo statico 
     // es un atributo de la clase
     static contadorObjetos = 0;
    // el constructor dentro de la clase es un metodo
    constructor(name, lastName, age) {
        this._nombre = name;
        this._apellido = lastName;
        this._edad = age;
        Persona.contadorObjetos++;
    };
    //los metodos van fuera del bloque del constuctor cuando se define una clase
    //
    email = "email@email.com.ar";
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
// sobree escritura del metodo de la clase padre Object
    toString(){
        // se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.fullName();
    }

    static saludos(){
        console.log(`Hola loco`)
    }
    static objetc(persona){
        console.log(persona._nombre)
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
    // sobreEscritura: Modifica el comportamiento de un metodo de la variable padre
    fullName(){
        return ` ${super.fullName()} Ubicacion: ${this._location}`
    }
}

let padre = new Persona("Ernaldo", "Malote",28);
//padre.saludos(); //no es posible llamar un metodo estatico desde un objeto

let miEmpleado = new Empleado("Juan", "Carlos",32, "Las toninas");
//console.log(miEmpleado);
//Persona.saludos();
//Persona.objetc(padre);
// Empleado.saludos();
// Empleado.objetc(miEmpleado);
// console.log(Empleado.contadorObjetos);
 //console.log(padre.contadorObjetos);
console.log(Persona.contadorObjetos);
console.log(Empleado.contadorObjetos);
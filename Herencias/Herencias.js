class Persona {

    static contadorPersona = 0;
    constructor(name, lastName, age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._idPersona = ++Persona.contadorPersona;
    };
    get name(){
        return this._name;
    };
    set name(name){
        this._name = name;
    };
    get lastName(){
        return this._lastName;
    }; 
    set lastName(lastName){
        this._lastName = lastName;
    };
    get age(){
        return this._age;
    };
    set age(age){
        this._age = age;
    };
    get id(){
        return this._idPersona
    };
    toString(){
        return ` ${this.id} ${this.name} ${this.lastName} ${this.age}`
    }
};
class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(name, lastName, age,sueldo){
            super(name, lastName, age);
            this._idEmpleado = ++Empleado.contadorEmpleado;
            this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado
    };
    get sueldo(){
        return this._sueldo;
    };
    set sueldo(sueldo){
        this._sueldo = sueldo;
    };
    toString(){
        return ` ${this._idEmpleado} ${this._sueldo} ${super.toString()}`
    }	
};
class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(name, lastName, age){
    super(name, lastName, age);
    this._idCliente = ++Cliente.contadorCliente; 
    this._dateRegister = new Date();
    }
    get idCliente(){
    return this._idCliente;
    };
    get dateRegister(){
        return this._dateRegister;
    }
    set dateRegister(dateRegister){
        this._dateRegister = dateRegister;
    }
    toString(){
        return `${this._idCliente} ${super.toString()}`
    }
}


let perosona1 = new Persona("Carlos","Luis",50,1000)
let empleado1 = new Empleado("Juan","Garro",32,5000);
let cliente1 = new Cliente("Ernaldo","Cornelio",40);
console.log(cliente1.toString())
 console.log(empleado1.toString());
console.log(perosona1.toString()); 
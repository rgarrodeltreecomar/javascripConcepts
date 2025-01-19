class Persona {
    // este atributo estatico se accede de la misma manera que un metodo statico Persona.contadorObjetos
    static contadorObjtos = 0;
    // atributos para obejtos no lleva la palabra static
    email = "email@gmail.com";
    constructor(name, lastName, age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    // al llamar un atributo statico dentro del constructor se llama por el nombre de la clase Persona.contadorObjetos
        Persona.contadorObjtos++;
        console.log(`Se incremento el valor: ${Persona.contadorObjtos}`)
    }
    get fullName(){
        return `${this._name} ${this._lastName}`
    }
    set name(name){
        return this._name = name;
    }
    set lastName(lastName){
        return this._lastName = lastName;
    };
    set age(age){
       return this._age = age;
    };
    // el metodo static se accede desde la clase no del objeto Persona.saludar 
    static saludar(){
        console.log("Saludos staticos");
    }
    static saludarObjeto(persona){
        console.log(`te saluda: ${persona._name}`);
    };
}

class Empleado extends Persona {
constructor(name, lastName, age,sector,seniorIt){
    super(name, lastName, age)
    this.sector = sector;
    this.seniorIt =seniorIt;
    }
}

let padre = new Persona("Eduardo","Varela",Date().length);
//console.log(padre.fullName);

//console.log(padre);
let empleado = new Empleado("Rodrigo", "garro",24,"Tecnologia","Junior");
//console.log(empleado.fullName);
console.log(Persona.contadorObjtos);
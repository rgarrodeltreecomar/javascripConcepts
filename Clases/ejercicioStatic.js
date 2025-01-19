class Persona {
    // este atributo estatico se accede de la misma manera que un metodo statico Persona.contadorObjetos
    static contadorObjtos = 0;
    // atributos para obejtos no lleva la palabra static
    // metodo constante "static get" se declaran como funciones ya que los metodos los son
    static get MAX_OBJ(){
        return 5;
    } 
    constructor(name, lastName, age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        if(Persona.contadorObjtos < Persona.MAX_OBJ){
             this._id = ++Persona.contadorObjtos;
        }
        else{
            console.log("ya no se pueden crear mas objetos")
        }
       

    }
    get fullName(){
        return `ID: ${this._id} "${this._name} ${this._lastName}"`
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
let padre = new Persona("Julian", "Esmeraldo", 64);
let empleado = new Empleado("Eda", "Jarlisco", 12,"Front","Junior");

 let empleado2 = new Empleado("laton", "Jarlisco", 12,"Front","Junior");
 let empleado3 = new Empleado("JuanR", "Jarlisco", 12,"Front","Junior");
 let empleado4 = new Empleado("XD", "Jarlisco", 12,"Front","Junior");
 let empleado5 = new Empleado("Ronaldo", "Jarlisco", 12,"Front","Junior");
 console.log(empleado5);

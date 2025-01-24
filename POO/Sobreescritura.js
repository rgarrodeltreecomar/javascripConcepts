class Empleado {
    constructor(name, sueldo){
        this._name = name;
        this._sueldo = sueldo;
    }
    get name(){
        return this._name
    };
    set name(name){
        this._name = name;
    };
    get sueldo(){
        return this._sueldo;
    };
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    obetenerDetalles(){
        return `Nombre: ${this._name}, Salario: $${this._sueldo}`
    };

};

class Gerente extends Empleado {
   constructor(depto,name, sueldo){
    super(name,sueldo);
    this._depto = depto;
   };
   get depto(){
    return this._depto;
   };
   set depto(depto){
    this._depto = depto;
   };
   obetenerDetalles(){
    return `${super.obetenerDetalles()}, Departamento:${this._depto}`
   };
};

let empleado1 = new Empleado("Juan",3000);
//console.log(empleado1.obetenerDetalles());

let gerente1 = new Gerente("compras","Lucas", 7000);
//console.log(gerente1.obetenerDetalles());

let gerente2 = new Gerente("Cobranza", "Leo", 5000);

// Polimorfismo 

function determinarTipo(tipoObjeto){
console.log(tipoObjeto.obetenerDetalles());
if(tipoObjeto instanceof Gerente){
    console.log("Es de tipo Gerente");
}
else if(tipoObjeto instanceof Empleado){
    console.log("Es de tipo Gerente");
}
else if(tipoObjeto instanceof Object){
    console.log("Es de tipo objeto");
}
};



determinarTipo(gerente2);
determinarTipo(empleado1);
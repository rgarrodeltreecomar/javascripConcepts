class DisopositivoEntrada {
    constructor(tipoEntrada,marca){
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
    };
    get marca(){
        return this._marca;
    };
    set marca(marca){
    this._marca = marca;
    };
    get tipoEntrada(){
        return this._tipoEntrada
    };
    set tipoEntrada(tipoEntrada){
    this._tipoEntrada = tipoEntrada;
    };
};
class Raton extends DisopositivoEntrada {
    static contadorRaton = 0;
    constructor(tipoEntrada,marca){
    super(tipoEntrada,marca);
    this._idRaton = ++Raton.contadorRaton;
    };
    toString(){
        return `${this._idRaton} ${this._tipoEntrada} ${this._marca}`
    };
}; 
let raton1 = new Raton("Inalam","Dell");
class Teclado extends DisopositivoEntrada {
    static contadorTeclado = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    };
    toString(){
        return `${this._idTeclado} ${this.tipoEntrada} ${this.tipoEntrada}`
    }
};
let teclado1 = new Teclado("USB","Lg");
//console.log(teclado1)
class Monitor {
    static contadorMonitor = 0;
    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    };
    get marca(){
        return this._marca;
    };
    set marca(marca){
        this._marca = marca;
    };
    get idMonitor(){
        return this._idMonitor;
    };
    get tamaño(){
        return this._tamaño;
    };
    set tamaño(tamaño){
        this._tamaño = tamaño;
    };
    toString(){
        return `${this._idMonitor} ${this._marca} ${this._tamaño}`
    };
};
let monitor1 = new Monitor("Lenovo","Mediano");

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre,monitor,raton, teclado){
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
    
    };
    get idComputadora(){
        return this._idComputadora;
    };
    get nombre(){
        return this._nombre;
    };
    set nombre(nombre){
        this._nombre = nombre;
    };
    get monitor(){
        return this._monitor;
    };
    set monitor(monitor){
        this._monitor = monitor;
    };
    get teclado(){
        return this._teclado;
    };
    set teclado(teclado){
        this._teclado = teclado;
    };
    get raton(){
        return this._raton;
    };
    set raton(raton){
        this._raton = raton;
    };
    toString(){
        return `[ID:${this._idComputadora} Nombre:${this._nombre} Monitor${this._monitor} Tecl:${this._teclado} Mouse:${this._raton}]`
    }
};
class Orden {
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    };
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }
    mostrarOrden(){
        let orden = "";
        for(let pc of this._computadora){
            orden +=  `{${pc}}`
        }   
        return `IdOrden:${this._idOrden} Orden:${orden}`
    };
    toString(){
        return this.mostrarOrden();
    }
};

let computadora1 = new Computadora("PC",monitor1,raton1,teclado1);
console.log(computadora1.toString());
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
console.log(orden1.toString());


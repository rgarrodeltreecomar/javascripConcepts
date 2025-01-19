class Libro {
    static contadorLiros = 0;
    constructor(titulo,autor,precio){
        this._titulo = titulo;
        this._autor = autor;
        this._precio = precio;
        this._idLibro = ++Libro.contadorLiros;
    };
    get idLibro(){
        return this._idLibro;
    }
    get titulo(){
        return this._titulo
    };
    set titulo(titulo){
        this._titulo = titulo;
    };
    get autor(){
        return this._autor;
    };
    set autor(autor){
        this._autor = autor;

    };
    get precio(){
        return this._precio;
    };
    set precio(precio){
        this._precio = precio;
    };
    toString(){
        return `Id:${this._idLibro}, Titulo:${this._titulo}, Auth:${this._autor} $${this._precio}`
    }
};
let libro1 = new Libro("El Libro", "Rogelio",50);
let libro2 = new Libro("Javier", "Manolo",70);
let libro3 = new Libro("Resident", "Umbrella",100);
let libro4 = new Libro("Las Narnias", "cronica",100);
//console.log(libro1.toString());

class Prestamo{
    static contadorPrestados = 0;
    static get MAX_lIBROS(){
        return 3;
    };
    constructor(){
        this._idPrestamo = ++Prestamo.contadorPrestados;
        this._libros = [];
    };
    agregarLibro(libro){
        if(this._libros.length < Prestamo.MAX_lIBROS){
            this._libros.push(libro);
        }
        else{
        console.log(`se supero el maximo !${Prestamo.MAX_lIBROS}!`)
        }

    };
    calcularTotal(){
        let total = 0;
        for(let libro of this._libros){
        total += libro.precio;
        }
        return total;
    };
    mostrarPrestamo(){
        let prestamo = "";
        for(let libro of this._libros){
        prestamo += `{${libro.toString()}}`;
        }
        return `Id: ${this._idPrestamo} Total:$${this.calcularTotal()} ${prestamo}`
    };
};

let prestamo1 = new Prestamo();
prestamo1.agregarLibro(libro1);
prestamo1.agregarLibro(libro2);
prestamo1.agregarLibro(libro3);
prestamo1.agregarLibro(libro4);
console.log(prestamo1.mostrarPrestamo())

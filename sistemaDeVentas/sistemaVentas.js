class Producto {
    static  contadorProductos = 0;
    constructor(name,price ){
        this._name = name; 
        this._price = price;
        this._idProducto = ++Producto.contadorProductos;
    };
    get idProducto(){
        return this._idProducto;
    };
    get name(){
        return this._name;
    };
    set name(name){
    this._name = name;
    };
    get price(){
        return this._price;
    };
    set price(price){
    this._price = price;
    };
    toString(){
        return `idProduc: ${this._idProducto} Nombre:${this._name} $${this._price}`
    }
};

class Orden {
    static counterOrders = 0;
    static get MAX_PODUC(){
        return 5;   
    }
    constructor(){
        this._idOrden = ++Orden.counterOrders;
        this._productos = [];
        this._productosAdds = 0;
    };
    get idOrden(){
        return this._idOrden;
    };
   
    get orden(){
        return `${this._idOrden} `
    };
    addProductos(producto){
        if(this._productos.length < Orden.MAX_PODUC){
            this._productos.push(producto);  
        }
        else {
            console.log(`ya supero el maximo ${this._productosAdds}`);
            
        }
    }

    total(){
        let valor = 0;
        for(let producto of this._productos){
            valor += producto.price;
        }
        return valor;
    }
    mostrarOrden(){
    let ordenProductos = "";
    for(let producto of this._productos) {
        ordenProductos += ` {${producto.toString()}}`;
    }
    console.log(`N°:${this.idOrden} Total: $${this.total()} Productos:${ ordenProductos}`);
    };
    
};
let producto1 = new Producto("Coca cola",50);
let producto23 = new Producto("Manaos",50);
let producto32 = new Producto("Agua",25);
let producto0 = new Producto("Morron",50);
//console.log(producto1);
let orden1 = new Orden();
let orden2 = new Orden();

orden1.addProductos(producto1);
orden1.addProductos(producto23);
//console.log(orden1);
//console.log(orden1.mostrarOrden);
orden2.addProductos(producto1);
orden2.addProductos(producto32);
orden2.addProductos(producto0);
console.log(orden2.mostrarOrden());
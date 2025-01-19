// Funcion Constructora de Objetos

// Define una función constructora llamada Persona que servirá para crear objetos tipo Persona
function Persona(nombre1, apellido, edad, email, idioma) {
    this.nombre = nombre1;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.idioma = idioma;
    this.fullName = function() {        
        return `${this.nombre} ${this.apellido}`;   
    }
}


// Agregar un Prototype a la funcion constructora hace que la propiedad o metodo sea compartido por todas las instancias
// ejemplo de uso:
 Persona.prototype.tel = Number();


 let padre = new Persona('Juan', 'Perez', 50, "email@gmail.com", "ES");
 let madre = new Persona('Maria', 'Ledezma', 40, "mledezma@gmail.com", "ES");

 padre.tel = 1164313675;
 console.log(padre.tel);
 console.log(madre.tel);
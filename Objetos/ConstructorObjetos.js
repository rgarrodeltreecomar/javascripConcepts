// Funcion Constructora de Objetos

// Define una función constructora llamada Persona que servirá para crear objetos tipo Persona
function Persona(nombre1, apellido, edad, email, idioma) {
    // Asigna el valor recibido como parámetro 'nombre1' a la propiedad 'nombre' del objeto que se está creando
    this.nombre = nombre1;

    // Asigna el valor recibido como parámetro 'apellido' a la propiedad 'apellido' del objeto
    this.apellido = apellido;

    // Asigna el valor recibido como parámetro 'edad' a la propiedad 'edad' del objeto
    this.edad = edad;

    // Asigna el valor recibido como parámetro 'email' a la propiedad 'email' del objeto
    this.email = email;

    // Asigna el valor recibido como parámetro 'idioma' a la propiedad 'idioma' del objeto
    this.idioma = idioma;

    // funcion para mostrar un nombre completo
    this.fullName = function() {        
        return `${this.nombre} ${this.apellido}`;   
    }
}

// La palabra 'new' crea un nuevo objeto en memoria y llama al constructor Persona
// Aquí se crea un objeto 'padre' con los valores proporcionados
let padre = new Persona('Juan', 'Perez', 50, "email@gmail.com", "ES");

// Aquí se crea un objeto 'madre' con otros valores proporcionados
let madre = new Persona('Maria', 'Ledezma', 40, "mledezma@gmail.com", "ES");

// Muestra en consola el objeto 'padre', que es una instancia de Persona
console.log(padre);
// Resultado en consola:
// Persona {nombre: 'Juan', apellido: 'Perez', edad: 50, email: 'email@gmail.com', idioma: 'ES'}

// Muestra en consola el objeto 'madre', que es otra instancia de Persona
console.log(madre.fullName());
// Resultado en consola:
// Persona {nombre: 'Maria', apellido: 'Ledezma', edad: 40, email: 'mledezma@gmail.com', idioma: 'ES'}

let miString  = new String();
console.log(miString);

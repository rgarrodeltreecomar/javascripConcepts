

let persona1 = {
    name: 'Juan',
    lastName: 'Perez',
    fullName: function(title, tel) {
      return `${title}: ${this.name} ${this.lastName}, ${tel}`;
    }   
}; 
let persona2 = {
    name: 'Maria',
    lastName: 'Antonia'
};   

let persona3 = {
    name: 'Pedro',
    lastName: 'Del Rancho'
};  

// usamos call para llamar a la función fullName de persona1 con los datos de persona 2
// ya que tiene los mismos atributos(propiedades)
console.log(persona1.fullName.call(persona2, 'Sra', 123456789));

//usando el método apply
let arreglo = ['Sr', 987654321];
console.log(persona1.fullName.apply(persona3, arreglo));

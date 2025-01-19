//Escribe una función llamada mayorDeTres que reciba tres números y devuelva el mayor de ellos;

function mayorDeTres(n1,n2,n3){
 if(n1 > n2 &&  n1 > n3){
    console.log(`El mayor es el ${n1}`)
 }
 else if (n2 > n1 && n2 > n3){
  console.log(`el mayor es ${n2}`)
 }
else {
    console.log(`El mayor es el ${n3}`);
}
 

 
}
mayorDeTres(10,70,45);
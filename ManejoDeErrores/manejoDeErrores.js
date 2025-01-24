"use strict";
try {
  let x = 10;
  throw x
}
catch(error){
    console.log(error);
} 
finally{
    console.log("Este bloque de codigo siempre se ejecuta")
}
console.log("La ejecucion sigue")

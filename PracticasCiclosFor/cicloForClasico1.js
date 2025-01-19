// Escribe un programa que sume todos los números pares entre 1 y 100.
let num = 0;

    if(num >= 0 && num <= 100){
    for(let i = 1; i <= 100; i++ ){
        if(i % 2 == 0){
        let acu = num += i;
           console.log(` Total: {${acu} suma ${i}} `);
            
        }
        else{
            console.log(`Valor de i: ${i}`);
            
        }
    
    }
    }
    else{
        console.log("El numero ingresado no es valido");
    }
    console.log(`el total es ${num}`)

//Dado un string, cuenta cuántas vocales tiene.
let miString = "murciélago";
let vocalesNum = 0;
for(let i = 0; i <= miString.length; i++){
    if(/[aeiou]/.test(miString[i])){
        vocalesNum = vocalesNum + 1
    }

};
console.log(vocalesNum);

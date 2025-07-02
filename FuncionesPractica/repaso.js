function contarVocales(palabra) {
  const vocales = 'aeiouAEIOU';
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
      contador++;
    }
  }
  return contador;
}

console.log(contarVocales('Juan'));

function contarLetras(palabra) {
  let letras = 0;
  for (let i = 0; i < palabra.length; i++) {
    letras++;
  }
  return letras;
}
console.log(contarLetras('Sancho'));

function inversion(texto) {
  let textoInvertido = '';
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  return textoInvertido;
}

console.log(inversion('texto'));

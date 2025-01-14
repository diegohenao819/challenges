function practice(palabra) {
  const match = palabra.match(/_([a-z]+\.[a-z0-9]+)/i);

  return match[1] || null;
}

// console.log(practice("_dimensions.pdf.hack2023"))

// function sumaRecursiva(n) {
//     console.log(`Llamando a sumaRecursiva(${n})`); // Muestra cada llamada a la función

//     if (n === 1) {  // Caso base: cuando n es 1, se detiene
//         console.log(`Caso base alcanzado con n = ${n}`);
//         return 1;
//     }

//     // Mostrar lo que va a sumar antes de continuar
//     const resultado = n + sumaRecursiva(n - 1);
//     console.log(`Resultado parcial de sumaRecursiva(${n}): ${resultado}`);
//     return resultado;
// }

// console.log(sumaRecursiva(11)); // Resultado esperado: 15 (5+4+3+2+1)

// function contarAtras(n) {
//     console.log(n); // Mostrar el número actual

//     if (n === 1) {  // Caso base: si llega a 1, se detiene
//         console.log("¡Fin de la cuenta regresiva! 🎉");
//         return;
//     }

//     contarAtras(n - 1); // Llamada recursiva: reduce el número
// }

// // Ejemplo de uso
// contarAtras(5);

function invertirCadena(palabra) {
  if (palabra.length === 0) {
    return "";
  }
  // Imprimir el proceso para entenderlo mejor
  console.log(`Última letra: ${palabra[palabra.length - 1]}`);

  return palabra[palabra.length - 1] + invertirCadena(palabra.slice(0, -1));
}

console.log(invertirCadena("hola"));

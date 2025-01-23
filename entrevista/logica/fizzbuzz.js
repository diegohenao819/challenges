// - FizzBuzz: Imprimir números del 1 al 100, pero:
// Si el número es divisible por 3, imprime "Fizz".
// Si es divisible por 5, imprime "Buzz".
// Si es divisible por ambos, imprime "FizzBuzz".

function fizzbuzz(numero) {
  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(100);

// - Factorial: Calcular el factorial de un número.
// Ejemplo: 5! → 120

function factorial(numero) {
  if (numero < 0) {
    throw new Error(
      "\n \n \n *** El factorial de un número negativo no está definido.*** \n \n \n "
    );
  }

  if (numero === 1 || numero === 0) {
    return 1;
  }

  return numero * factorial(numero - 1);
}

console.log(factorial(-5));

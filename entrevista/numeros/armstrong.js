// - Números armstrong: Verificar si un número es un número armstrong.
// Ejemplo: 153 → true (1³ + 5³ + 3³ = 153)

function armstrong(numero) {
  let numeros = String(numero);
  let potencia = numeros.length;

  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    contador += Number(numeros[i]) ** potencia;
  }

  return contador === numero;
}

console.log(armstrong(9474));

// Número primo: Determinar si un número es primo.
// Ejemplo: 7 → true, 10 → false

function primo(numero) {
  if (numero <= 1) return false;
  if (numero === 2 || numero === 3) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) return false;
  }

  return true;
}

console.log(primo(4));
console.log(primo(11));

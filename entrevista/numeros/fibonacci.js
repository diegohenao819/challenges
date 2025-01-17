// Fibonacci: Generar la secuencia de Fibonacci hasta un número dado.
// Ejemplo: 5 → [0, 1, 1, 2, 3]

function fibo(numero) {
  let resultado = [0, 1];

  for (let i = 0; i < numero - 1; i++) {
    let pares = resultado[i] + resultado[i + 1];
    // if (pares >= numero) break;

    resultado.push(pares);
  }

  return resultado;
}

// function fibo(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     if (n === 2) return [0, 1];

//     let sequence = [0, 1];

//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }

//     return sequence;
// }

console.log(fibo(10));

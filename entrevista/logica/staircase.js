// - Juego de escalones (staircase problem): Calcular de cuántas maneras puedes subir una escalera con n escalones si puedes subir 1 o 2 a la vez.
// Ejemplo: n = 3 → 3 maneras (1+1+1, 1+2, 2+1)

function staircase(n) {
 let arreglo = []

  if (n === 1) return 1;

  if (n === 2) return 2;
  let a = 1, b = 2

  for (let i = 3; i <= n; i++) {
    let temp = a + b
    a = b
    b = temp
    arreglo.push(b)
  }

  return {
    suma: arreglo[arreglo.length -1],
    arreglo
    
  }
}

console.log(staircase(3));
console.log(staircase(6));

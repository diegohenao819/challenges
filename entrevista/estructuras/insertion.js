// - Insertion sort: Implementa el algoritmo de ordenamiento por inserción para ordenar un arreglo de números enteros en orden ascendente. Toma cada número y colócalo en su posición correcta dentro de la parte ya ordenada del arreglo.
// Entrada: [7, 3, 5, 1, 9] --> Salida: [1, 3, 5, 7, 9]

// [5] 3 8 1 2  → Toma 3 y lo inserta antes de 5 → [3, 5] 8 1 2
// [3, 5] 8 1 2 → Toma 8, ya está en su lugar → [3, 5, 8] 1 2
// [3, 5, 8] 1 2 → Toma 1 y lo coloca antes de 3 → [1, 3, 5, 8] 2
// [1, 3, 5, 8] 2 → Toma 2 y lo coloca antes de 3 → [1, 2, 3, 5, 8]

function insertion(arreglo) {
  for (let i = 1; i < arreglo.length; i++) {
    let key = arreglo[i];
    let j = i - 1;

    while (j >= 0 && key < arreglo[j]) {
      arreglo[j + 1] = arreglo[j];
      j--;
    }
    arreglo[j + 1] = key;
  }
  return arreglo;
}

console.log(insertion([3, 7, 1, 5, 9]));

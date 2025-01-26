// - Bubble Sort: Implementa el algoritmo de ordenamiento burbuja para ordenar un arreglo de números enteros en orden ascendente. Compara pares de elementos adyacentes e intercámbialos si están en el orden incorrecto.
// Entrada: [5, 3, 8, 1, 2] --> Salida: [1, 2, 3, 5, 8]

// Primera pasada:
// [5, 3, 8, 1, 2]  → Compara 5 y 3, intercambia → [3, 5, 8, 1, 2]
// [3, 5, 8, 1, 2]  → Compara 5 y 8, no cambia   → [3, 5, 8, 1, 2]
// [3, 5, 8, 1, 2]  → Compara 8 y 1, intercambia → [3, 5, 1, 8, 2]
// [3, 5, 1, 8, 2]  → Compara 8 y 2, intercambia → [3, 5, 1, 2, 8]

function bubble(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Reduce the range of the next pass
  } while (swapped);

  return arr;
}

console.log(bubble([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

// function bubble(arreglo) {
//   for (let i = 0; i < arreglo.length - 1; i++) {
//     for (let j = 0; j < arreglo.length - 1; j++) {
//         console.log("j: " + arreglo[j], "j++: " + arreglo[j + 1] )
//       if (arreglo[j] > arreglo[j + 1]) {
//         temp = arreglo[j];
//         arreglo[j] = arreglo[j + 1];
//         arreglo[j + 1] = temp;
//       }
//     }
//   }
//   return arreglo;
// }

// console.log(bubble([5, 3, 8, 1, 2]));  // Expected: [1, 2, 3, 5, 8]

// console.log(bubble([9, 7, 5, 3, 1]));  // Expected: [1, 3, 5, 7, 9]

// [ 8,  5, 3] --> 5, 8, 3 --> 5, 3, 8

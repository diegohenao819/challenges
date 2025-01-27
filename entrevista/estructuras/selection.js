// - Selection Sort: Implementa el algoritmo de ordenamiento por selección para ordenar un arreglo de números enteros en orden ascendente.
// Encuentra el número más pequeño en el arreglo y colócalo en la primera posición, luego repite el proceso con los siguientes elementos.
// Entrada: [29, 10, 14, 37, 13] --> Salida: [10, 13, 14, 29, 37]

// [5, 3, 8, 1, 2]  → Encuentra el más pequeño (1), lo intercambia con 5
// [1, 3, 8, 5, 2]  → Encuentra el siguiente más pequeño (2), lo intercambia con 3
// [1, 2, 8, 5, 3]  → Encuentra el siguiente más pequeño (3), lo intercambia con 8
// [1, 2, 3, 5, 8]  → Encuentra el siguiente más pequeño (5), ya está en su lugar

function selection(arreglo) {
  for (let i = 0; i < arreglo.length - 1; i++) {
    let min = Infinity;
    let indiceMin = i;
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[j] < arreglo[indiceMin]) {
        min = arreglo[j];
        indiceMin = j;
      }
    }
    if (i !== indiceMin) {
      [arreglo[i], arreglo[indiceMin]] = [arreglo[indiceMin], arreglo[i]];
    }
  }
  return arreglo;
}

console.log(selection([5, 3, 8, 1, 2]));

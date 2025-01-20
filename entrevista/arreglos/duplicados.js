// - Eliminar duplicados: Escribir una función para eliminar duplicados en un arreglo.
// Ejemplo: [1, 2, 2, 3] → [1, 2, 3]

function duplicados(arreglo) {
  return Array.from(new Set(arreglo));
}

console.log(duplicados([1, 2, 2, 3, 3, 3, 3, 3, 3, 3]));

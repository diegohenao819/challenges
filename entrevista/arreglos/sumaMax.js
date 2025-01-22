// - Subarreglo con suma máxima (Kadane's Algorithm): Encontrar la suma más grande de un subarreglo contiguo.
// Ejemplo: [-2,1,-3,4,-1,2,1,-5,4] → 6 ([4,-1,2,1])

function sumMax(arreglo) {
  let maxSuma = 0;
  let sumaActual = 0;
  let inicio = 0,
    tempInicio = 0,
    fin = 0;

  for (let i = 0; i < arreglo.length; i++) {
    sumaActual += arreglo[i];

    if (sumaActual > maxSuma) {
      maxSuma = sumaActual;
      inicio = tempInicio;
      fin = i;
    }

    if (sumaActual < 0) {
      sumaActual = 0;
      tempInicio = i + 1;
    }
  }

  return {
    suma: maxSuma,
    arreglo: arreglo.slice(inicio, fin + 1),
  };
}

// Prueba con el ejemplo
console.log(sumMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// { suma: 6, arreglo: [4, -1, 2, 1] }

console.log(sumMax([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 → [4, -1, 2, 1]
console.log(sumMax([3, -1, 2, -1, 5, -6])); // 8 → [3, -1, 2, -1, 5]
console.log(sumMax([-2, -1, 4, 5, -1, 2, 1, -10, 5])); // 11 → [4, 5, -1, 2, 1]
console.log(sumMax([8, -1, 3, 4, -6, 7])); // 15 → [8, -1, 3, 4]
console.log(sumMax([-3, 1, 2, 3, -1, 4, -10, 5])); // 9 → [1, 2, 3, -1, 4]

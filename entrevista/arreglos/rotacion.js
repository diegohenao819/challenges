// - Rotación de un arreglo: Rotar los elementos de un arreglo hacia la izquierda o la derecha.
// Ejemplo: [1, 2, 3, 4] (rotar a la derecha) → [4, 1, 2, 3]

function rotacion(arreglo, direction) {
  if (direction === "derecha") {
    return [arreglo[arreglo.length - 1], ...arreglo.slice(0, -1)];
  } else {
    solucion = [...arreglo.slice(1), arreglo[0]];
  }

  return solucion;
}

console.log(rotacion([1, 2, 3, 4], "derecha"));
console.log(rotacion([1, 2, 3, 4], "izquierda"));

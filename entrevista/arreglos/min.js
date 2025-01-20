// - Buscar el número máximo/mínimo: Encontrar el elemento más grande o más pequeño en un arreglo.
// Ejemplo: [10, 5, 3] → 10

function minMax(arreglo) {
  return (
    "Minimo es: " +
    Math.min(...arreglo) +
    "\n" +
    "Máximo es: " +
    Math.max(...arreglo)
  );
}

console.log(minMax([10, 5, 3, 1, 100]));

function detectBombs(grid) {
  // Obtener el número de filas y columnas
  let rows = grid.length;
  let cols = grid[0].length;

  // Crear una matriz del mismo tamaño llena de ceros para almacenar el resultado
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Recorrer la cuadrícula y contar bombas adyacentes
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Si la celda actual es una bomba
      if (grid[i][j]) {
        // Revisar todas las celdas vecinas, incluidas las diagonales
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const newRow = i + x;
            const newCol = j + y;

            // Verificar si la celda vecina está dentro de los límites
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              result[newRow][newCol]++; // Incrementar el contador de bombas adyacentes
            }
          }
        }
        // No contar la bomba actual como adyacente a sí misma
        result[i][j]--;
      }
    }
  }
  // Devolver la matriz resultante con las bombas adyacentes contadas
  return result;
}

console.log(
  detectBombs([
    [true, true, true],
    [true, true, true],
    [true, true],
    [true, true],
    [true, true],
  ])
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

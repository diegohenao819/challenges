function drawTable(data) {
    // Si el array está vacío, no hay nada que dibujar
    if (!data.length) return '';
  
    // 1. Tomamos las columnas a partir de las claves del primer objeto
    const columns = Object.keys(data[0]);
  
    // 2. Creamos el array de headers (con la primera letra en mayúsculas)
    const headers = columns.map(c => c[0].toUpperCase() + c.slice(1));
  
    // 3. Calculamos el ancho de cada columna (máx entre header y valores)
    const colWidths = columns.map((col, i) =>
      Math.max(
        ...data.map(row => String(row[col] ?? '').length),
        headers[i].length
      )
    );
  
    // 4. Funciones auxiliares para crear la línea separadora y las filas
    const buildSep  = () => '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+\n';
    const buildRow  = cells => '| ' + cells.map((c, i) => c.padEnd(colWidths[i])).join(' | ') + ' |\n';
  
    // 5. Construimos el resultado final
    const result =
      buildSep() +
      buildRow(headers) +
      buildSep() +
      data.map(obj => buildRow(columns.map(col => String(obj[col] ?? '')))).join('') +
      buildSep();
  
   
    return result;
  }
  
  





console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
//

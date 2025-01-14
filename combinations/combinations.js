
function generateGiftSets(gifts) {
    const result = [];

    function backtrack(current, start) {
        // Agregar cada combinación de un solo elemento en cuanto se crea
        if (current.length > 0) {
            result.push([...current]); // Clonamos para no modificar la referencia
        }

        // Recorrer desde el índice actual
        for (let i = start; i < gifts.length; i++) {
            current.push(gifts[i]);         // Elegir el juguete actual
            backtrack(current, i + 1);      // Explorar combinaciones con este juguete
            current.pop();                  // Retroceder para explorar otras combinaciones
        }
    }

    // Llamar con un array vacío y comenzar desde el índice 0
    backtrack([], 0);
    
    // Ordenar manualmente el resultado
    result.sort((a, b) => a.length - b.length); // Prioriza los más cortos primero
    return result;
}


console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

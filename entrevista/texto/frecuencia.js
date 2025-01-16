// - Frecuencia de caracteres: Contar la cantidad de veces que aparece cada carácter en una cadena.
// Ejemplo: "hello" → {h: 1, e: 1, l: 2, o: 1}

function frecuencia(palabra) {
  let result = {};

  for (let letra of palabra) {
    if (letra === " ") continue;
    result[letra] = (result[letra] || 0) + 1;
  }

  return result;
}

console.log(frecuencia("hello dear friend"));

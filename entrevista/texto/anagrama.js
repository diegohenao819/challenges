// Anagrama: Verificar si dos cadenas son anagramas.
// Ejemplo: "listen" y "silent" → true

function anagrama(uno, dos) {
  let result = false;

  if (uno.length !== dos.length) return false;

  let arreglouno = uno.split("").sort().join("");
  let arreglodos = dos.split("").sort().join("");

  return arreglouno === arreglodos;
}

console.log(anagrama("listen", "silent"));

// - Inversión de cadena: Escribir una función que invierta una cadena.✅
// Ejemplo: "hello" → "olleh"

function inversion(palabra) {
  return palabra.split("").reverse().join("");
}

console.log(inversion("hello"));

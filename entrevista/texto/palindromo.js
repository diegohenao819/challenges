

// Palíndromo: Verificar si una cadena es un palíndromo.
// Ejemplo: "racecar" → true, "hello" → false


function palindromo(palabra){
    return palabra.split("").reverse().join("") === palabra 
  
   
  }
  
  
  console.log(palindromo("ana"))
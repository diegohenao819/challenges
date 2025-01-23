// - Validar paréntesis balanceados: Determinar si una cadena tiene paréntesis balanceados.
// Ejemplo: "([])" → true, "(]" → false

function parentesis(entrada) {
    const stack = [];
    const pares = {
      ")": "(",
      "]": "[",
      "}": "{"
    };
  
    for (let char of entrada) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else if (char in pares) {
        if (stack.pop() !== pares[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

// Pruebas
console.log(parentesis("([])")); // true
console.log(parentesis("(]")); // false
console.log(parentesis("{[()]}")); // true
console.log(parentesis("({[)]}")); // false
console.log(parentesis("")); // true (cadena vacía es balanceada)

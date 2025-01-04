function removeSnow(s) {
  
  let arreglo = s.split("");

  function recursion(arreglo) {
    let contador = arreglo.length;

    for (let i = 0; i < arreglo.length - 1; i++) {
      if (arreglo[i] === arreglo[i + 1]) {
        arreglo.splice(i, 2);
        i--;
      }
    }

    if (contador !== arreglo.length) {
      return recursion(arreglo);
    } else {
      return arreglo;
    }
  }
  recursion(arreglo);

  return arreglo.join("");
}

console.log(removeSnow("zxxzoz")); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

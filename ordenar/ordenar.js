function fixPackages(packages) {
  let respuesta = [];

  for (let letra of packages) {
    if (letra === ")") {
      let temp = "";
      while (respuesta.length > 0 && respuesta[respuesta.length - 1] !== "(") {
        temp += respuesta.pop();
      }
      respuesta.pop();
      for (let c of temp) {
        respuesta.push(c);
      }
    } else {
      respuesta.push(letra);
    }
  }

  return respuesta.join("");
}

console.log(fixPackages("a(bc(def)g)h"));
// ➞ "agdefcbh"

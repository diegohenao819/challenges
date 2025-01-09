function inBox(box) {
  let resultado = false;

  for (let i = 0; i < box.length; i++) {
    if (i !== 0 && i !== box.length - 1 && box[i].includes("*")) {
      box[i].trim();
      let revisar = box[i].split("");
      console.log(revisar[revisar.length - 1]);
      if (revisar[0] === "#" && revisar[revisar.length - 1] === "#") {
        resultado = true;
      }
    }
  }

  return resultado;
}

console.log(inBox(["#*#", "###*", "###"]));
// ➞ false

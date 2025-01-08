function createXmasTree(height, ornament) {
  let resultado = [];

  for (let i = 1; i <= height; i++) {
    let sides = "_".repeat(height - i);
    resultado.push(sides + ornament.repeat(i * 2 - 1) + sides);
  }
  let final = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  resultado.push(final, final);

  return resultado.join("\n");
}

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

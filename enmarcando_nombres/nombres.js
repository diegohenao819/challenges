function createFrame(names) {
  let max = 0;
  let result = "";

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > max) {
      max = names[i].length;
    }
  }
  console.log(max);

  let border = "*".repeat(max + 4);
  let leftSide = "* ";
  let rightSide = " *";

  result += border + "\n";
  for (let i = 0; i < names.length; i++) {
    result +=
      leftSide +
      names[i] +
      " ".repeat(max - names[i].length) +
      rightSide +
      "\n";
  }
  result += border;

  console.log(result);
}

createFrame(["John", "Smith"]);

function organizeShoes(shoes) {
  let rightShoes = {};
  let leftShoes = {};
  let total = [];

  for (let { type, size } of shoes) {
    if (type === "R") {
      rightShoes[size] = (rightShoes[size] || 0) + 1;
    } else {
      leftShoes[size] = (leftShoes[size] || 0) + 1;
    }
  }

  for (let key in leftShoes) {
    let pairs = Math.min(leftShoes[key], rightShoes[key]);
    for (let i = 0; i < pairs; i++) {
      total.push(Number(key)); // Ensure the size is treated as a number
    }
  }

  return total;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
  { types: "I", size: 38 },
];

organizeShoes(shoes);

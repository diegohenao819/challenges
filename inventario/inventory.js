function organizeInventory(inventory) {
  let organized = {};

  for (let { category, name, quantity } of inventory) {
    if (!organized[category]) {
      organized[category] = {};
    }

    if (!organized[category][name]) {
      organized[category][name] = quantity;
    } else {
      organized[category][name] += quantity;
    }
  }

  return organized;
}

// *****************************************
const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

organizeInventory(inventory);

let out = {
  toys: {
    doll: 5,
    car: 5,
  },
  sports: {
    ball: 2,
    racket: 4,
  },
};

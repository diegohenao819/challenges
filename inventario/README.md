* Taken from: https://adventjs.dev/es/challenges/2024/3


# Organize Santa's Inventory 🎅

Santa Claus is preparing for the holiday season by reviewing the inventory of his workshop. The elves have recorded all the toys in an array of objects, but the data is a bit disorganized. Your mission is to help Santa organize the inventory!

## Problem Statement

You will receive an array of objects, where each object represents a toy and has the following properties:

- `name` (string): The name of the toy.
- `quantity` (integer): The quantity of this toy available.
- `category` (string): The category to which the toy belongs.

Your task is to write a function that processes this array and returns an object organizing the toys as follows:

1. The keys of the object will be the toy categories.
2. The values will be objects, where:
   - The keys are the names of the toys.
   - The values are the total quantities of each toy in that category.
3. If there are toys with the same name in the same category, their quantities should be summed.
4. If the input array is empty, the function should return an empty object (`{}`).

## Function Signature
```javascript
function organizeInventory(toyArray) {
  // Your code here
}
```



## Examples

### Example 1

Input:
```javascript
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
];

console.log(organizeInventory(inventory));
```

Output:
```javascript
{
  toys: {
    doll: 5,
    car: 5
  },
  sports: {
    ball: 2,
    racket: 4
  }
}
```

### Example 2

Input:
```javascript
const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
];

console.log(organizeInventory(inventory2));
```

Output:
```javascript
{
  education: {
    book: 15
  },
  art: {
    paint: 3
  }
}
```

## Edge Cases

- **Empty Input:**
  ```javascript
  const inventory3 = [];
  console.log(organizeInventory(inventory3));
  // Output: {}
  ```

## Instructions

1. Create the function `organizeInventory` that takes an array of toy objects as input.
2. Process the array to group the toys by category and sum their quantities if the names match within the same category.
3. Return the resulting organized object.

## Constraints

- Each object in the input array will have valid `name`, `quantity`, and `category` properties.
- `quantity` will always be a non-negative integer.

Good luck, and let’s make Santa proud! 🎁


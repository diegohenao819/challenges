function findMissingNumbers(nums) {
  let missing = [];

  let greatest = Math.max(...nums);

  for (let i = 1; i < greatest; i++) {
    if (!nums.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
// [3, 5]

function minMovesToStables(reindeer, stables) {
  let min = 0;

  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  for (let i = 0; i < stables.length; i++) {
    min += Math.abs(reindeer[i] - stables[i]);
  }
  return min;
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5]));
// -> 3)

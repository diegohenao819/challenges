function calculatePrice(ornaments) {
  const adornos = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  console.log("ninja")
  console.log(ornaments[0])
  
  for (let element of ornaments) {
    if (!adornos[element]) {
      return undefined;
    }
  }

  
  let total = 0;
  for (let i = 0; i < ornaments.length; i++) {
    const a = adornos[ornaments[i]];
    const b = adornos[ornaments[i + 1]] || 0;
    if (a < b) {
      total -= a;
    } else {
      total += a;
    }
  }

  return total;
}

console.log(calculatePrice("*o@"));
// 94

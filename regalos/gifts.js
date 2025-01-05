function fixGiftList(received, expected) {
  let missing = {};
  let extra = {};

  for (let i = 0; i < expected.length; i++) {
    for (let j = 0; j < received.length; j++) {
      if (expected[i] === received[j]) {
        expected.splice(i, 1);
        i--;
        received.splice(j, 1);
        j--;
      }
    }
  }

  for (let element of expected) {
    missing[element] = expected.filter((el) => el === element).length;
  }
  for (let element of received) {
    extra[element] = received.filter((el) => el === element).length;
  }

  return {
    missing: missing,
    extra: extra,
  };
}

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  )
);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

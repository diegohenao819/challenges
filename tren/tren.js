function moveTrain(board, mov) {
  const options = {
    "@": "locomotora",
    "o": "crash",
    "*": "eat",
    ".": "none",
    "default": "none",
  };

  for (let i = 0; i < board.length; i++) {
    if (board[i].includes("@")) {
      let cabeza = board[i].indexOf("@");

      if (mov === "U" && i > 0 ) {
       
        return options[board[i - 1][cabeza]] ?? options["default"];
      }
      if (mov === "D" && i < board.length -1) {
        return options[board[i+1][cabeza]]?? options["default"];
      }
      if (mov === "L" && cabeza > 0) {
        return options[board[i][cabeza - 1]] ?? options["default"];
      }
      if (mov === "R" && cabeza < board[0].length-1) {
        return options[board[i][cabeza + 1]] ?? options["default"];
      }
    }
  }

  return "none";
}

const board = [
    "·····", 
    "*····", 
    "@····", 
    "o····", 
    "o····"];

console.log(moveTrain(board, "D"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

function moveTrain(board, mov) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes("@")) {
      let cabeza = board[i].indexOf("@");
      let row = i;
      let column = cabeza;

      if (mov === "U") {
        row -= 1;
      }
      if (mov === "D") {
        row += 1;
      }
      if (mov === "L") {
        column -= 1;
      }
      if (mov === "R") {
        column += 1;
      }


      if (row < 0 || row >= board.length || column < 0 || column >= board[0].length) {
        return "crash";
      }


      let newPosition = board[row][column]

      if(newPosition === "*") return "eat" ;
      if(newPosition === "o") return "crash" ;
      if(newPosition === ".") return "none" ;


    }
    return "none"
  }
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

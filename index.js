const squares = document.querySelectorAll(".container div");
const names = document.getElementById("name");
const turn = document.getElementById("turn");

let gameover = false;
let currentPlayer = "";
names.textContent = "Player 1";

turn.textContent = `${names.textContent}'s Turn`;
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (gameover) return;
    if (square.textContent === "") {
      square.textContent = currentPlayer;

      if (checkwin()) {
        turn.textContent = `${names.textContent} WINS!!`;
        gameover = ture ;
        setTimeout(reset, 5000);
        return;
      }
      if (checkdraw()) {
        turn.textContent = `IT'S A DRAW`;
        gameover = ture ;
        setTimeout(reset, 5000);
        return;
      }

      if (currentPlayer === "O") {
        currentPlayer = "X";
        names.textContent = "Player 2";
        turn.textContent = `${names.textContent}'s Turn`;
      } else if (currentPlayer === "X") {
        currentPlayer = "O";
        names.textContent = "Player 1";
        turn.textContent = `${names.textContent}'s Turn`;
      }
    }
  });
});

function checkwin() {
  const win = [
    ["11", "12", "13"],
    ["21", "22", "23"],
    ["31", "32", "33"],
    ["11", "21", "31"],
    ["12", "22", "32"],
    ["13", "23", "33"],
    ["11", "22", "33"],
    ["13", "22", "31"],
  ];

  return win.some((pattern) => {
    const [a, b, c] = pattern.map(
      (id) => document.getElementById(id).textContent
    );
    return a === currentPlayer && a === b && a === c;
  });
}
function checkdraw() {
  const allSqauresfilled = Array.from(squares).every(
    (square) => square.textContent !== ""
  );
  return allSqauresfilled;
}
function reset() {
  location.reload();
}

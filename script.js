// 1. improve names
// 2. remove code duplication
// 3. introduce model layer
// 4. add unit tets
// 5. add git repository
// 6. add to GitHub

import hideInfoAboutWin from "./hideInfoAboutWin.js";
import showPlayerWin from "./showPlayerWin.js";
import testWin from "./checkWin.js";

const boardElements = [...document.querySelectorAll(".container")];
const setEventsBoard = () => {
  boardElements.forEach((boardElement, index) => {
    boardElement.addEventListener("click", boardElementClick.bind(null, index));
  });
};
setEventsBoard();

let tableSigns = ["", "", "", "", "", "", "", "", ""];

let player1 = {
  name: "Player 1",
  sign: "X",
};
let player2 = {
  name: "Player 2",
  sign: "O",
};

const setNamePlayers = () => {
  document.querySelector(".namePlayer1").addEventListener("click", () => {
    player1.name = prompt("Podaj imię - Player X");
    document.querySelector(".player1").textContent = player1.name;
  });
  document.querySelector(".namePlayer2").addEventListener("click", () => {
    player2.name = prompt("Podaj imię - Player O");
    document.querySelector(".player2").textContent = player2.name;
  });
};
setNamePlayers();

let currentPlayer = player1;
let winner = null;

function boardElementClick(i, event) {
  const boardElement = event.target;

  if (winner) return;

  if (tableSigns[i] == "") {
    boardElement.textContent = currentPlayer.sign;
    tableSigns.splice(i, 1, currentPlayer.sign);
  } else {
    alert("Wybierz inne pole");
    return;
  }

  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  const moveResult = testWin(tableSigns, [player1, player2]);

  if (!moveResult.isEnd && !moveResult.isWin) {
    return;
  }

  if (moveResult.isWin) {
    winner = moveResult.player;
    showPlayerWin(moveResult.player.name, resetBoard);
    return;
  }

  if (moveResult.isEnd) {
    resetBoard();
  }
}

const buttonReset = document.querySelector(".buttonReset");
buttonReset.addEventListener("click", resetBoard);

function resetBoard() {
  tableSigns = ["", "", "", "", "", "", "", "", ""];
  boardElements.forEach((boardElement) => {
    boardElement.textContent = "";
  });
  currentPlayer = player1;
  hideInfoAboutWin();
  winner = null;
}

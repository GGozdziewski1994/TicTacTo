import { checkWin } from './checkWin.js';

let tableSigns = ["X", "X", "X", "", "O", "", "O", "", "O"];
let player1 = {
  name: "Player 1",
  sign: "X",
};
let player2 = {
  name: "Player 2",
  sign: "O",
};
let players = [player1, player2];


test('Check win test result: ', () => {
  expect(checkWin(tableSigns, player1)).toBe(true);
});

test('Check win test result: ', () => {
  expect(checkWin(tableSigns, player2)).toBe(false);
});



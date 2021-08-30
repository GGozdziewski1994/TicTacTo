const checkWin = function (tableSigns, player) {
  const checkHorizontal = () => {
    for (let i = 0; i < 3; i++) {
      if (
        tableSigns[i * 3 + 0] == player.sign &&
        tableSigns[i * 3 + 1] == player.sign &&
        tableSigns[i * 3 + 2] == player.sign
      ) {
        return true;
      }
    }
    return false;
  };
  const checkVertical = () => {
    for (let i = 0; i < 3; i++) {
      if (
        tableSigns[i + 0] == player.sign &&
        tableSigns[i + 3] == player.sign &&
        tableSigns[i + 6] == player.sign
      ) {
        return true;
      }
    }
    return false;
  };
  const checkSlant = () => {
    return (
      (tableSigns[0] == player.sign &&
        tableSigns[4] == player.sign &&
        tableSigns[8] == player.sign) ||
      (tableSigns[2] == player.sign &&
        tableSigns[4] == player.sign &&
        tableSigns[6] == player.sign)
    );
  };
  return checkHorizontal() || checkVertical() || checkSlant();
};

function testWin(tableSigns, players) {
  for (let player of players) {
    if (!checkWin(tableSigns, player)) continue;

    const playerResultElement = document.querySelector(
      ".numberOfWinPlayer" + player.sign
    );
    let result = parseInt(playerResultElement.textContent);
    //if (isNaN(result)) result = 0;

    playerResultElement.textContent = result + 1;

    return {
      isEnd: true,
      isWin: true,
      player,
    };
  }

  if (tableSigns.every((boardElement) => boardElement !== ""))
    return {
      isEnd: true,
      isWin: false,
    };

  return {
    isEnd: false,
    isWin: false,
  };
}
module.exports = checkWin;


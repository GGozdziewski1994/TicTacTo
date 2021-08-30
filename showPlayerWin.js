export default function showPlayerWin(playerName, resetBoard){ 
    let infoShowWin = document.querySelector(".showWin");
    let buttonHideInfo = document.querySelector(".hideInfo");
    infoShowWin.textContent = "Win Player " + playerName;
    buttonHideInfo.textContent = "OK";
    buttonHideInfo.addEventListener("click", resetBoard);
    infoShowWin.style.visibility = "visible";
    buttonHideInfo.style.visibility = "visible";
}


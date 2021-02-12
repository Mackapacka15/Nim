function changeToRules() {
  document.querySelector(".rules").classList.toggle("hidden");
  document.querySelector(".menu").classList.toggle("hidden");
}
function changeToOpponentSelector() {
  document.querySelector(".menu").classList.toggle("hidden");
  document.querySelector(".Opponent-Selector").classList.toggle("hidden");
}
function changeToGame() {
  document.querySelector(".Opponent-Selector").classList.toggle("hidden");
  document.querySelector(".game-area").classList.toggle("hidden");
}

function opponentRandom() {
  changeToGame();
  let sticks = 0;
  sticks = Math.random() * 60 + 1;
}

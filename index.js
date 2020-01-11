let wins = 0;
let losses = 0;

function newBattle() {
  gameState = {
    target: Math.floor(Math.random() * 50) + 25,
    crystalValues: [
      Math.floor(Math.random() * 15 + 1),
      Math.floor(Math.random() * 15 + 1),
      Math.floor(Math.random() * 15 + 1)
    ],
    currentValue: 0
  };
  $("#target").text(gameState.target);
  $("#berriesUsed").text(gameState.currentValue);
  $("#winCount").text(wins);
  $("#lossCount").text(losses);
  return gameState;
}

$(document).ready(() => {
  let game = newBattle();

  $(".pokemon").onClick(() => {
    game.currentValue += game.crystalValues[this.value];
    $("#berriesUsed").text(game.currentValue);
    if (game.currentValue === game.target) {
      wins++;
      game = newBattle();
    } else if (game.currentValue >= game.target) {
      losses++;
      game = newBattle();
    }
  });
});

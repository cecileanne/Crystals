let wins = 0;
let losses = 0;

function newBattle() {
  gameState = {
    target: Math.floor(Math.random() * 50) + 25,
    crystalValues: [
      Math.ceil(Math.random() * 15),
      Math.ceil(Math.random() * 15),
      Math.ceil(Math.random() * 15)
    ],
    currentValue: 0
  };
  $("#target").text("Berries Needed: " + gameState.target);
  $("#berriesUsed").text("Berries Used: " + gameState.currentValue);
  $("#winCount").text("Gyms successfully defended: " + wins);
  $("#lossCount").text("Gyms lost: " + losses);
  return gameState;
}

$(document).ready(function() {
  let game = newBattle();

  $(".pokemon").click(function() {
    game.currentValue += game.crystalValues[this.value];
    $("#berriesUsed").text(game.currentValue);
    if (game.currentValue === game.target) {
      wins++;
      game = newBattle();
    } else if (game.currentValue >= game.target) {
      losses++;
      game = newGameBattle();
    }
  });
});

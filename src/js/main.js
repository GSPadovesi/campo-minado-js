import { InicializeGame } from "./game.js";
import { ChoiceDifficulty, GetStartButtonElement } from "./utils.js";

function Main() {
  ChoiceDifficulty();
  const startButton = GetStartButtonElement();
  if (startButton) {
    startButton.addEventListener("click", InicializeGame);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Main();
});

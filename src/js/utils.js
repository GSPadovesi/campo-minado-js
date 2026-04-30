import { configsGame, gameState, lifesGame } from "../state/gameState.js";

function GetDifficultyButtons() {
  return document.querySelectorAll("[data-difficulty]");
}

function GetBoardElement() {
  return document.getElementById("board");
}

function GetMenuElement() {
  return document.getElementById("menu");
}

function GetLoadingElement() {
  return document.getElementById("loading");
}

function GetStartButtonElement() {
  return document.getElementById("start-button");
}

function GetCellElement(row, col) {
  return document.querySelector(`button[data-row="${row}"][data-col="${col}"]`);
}

function ShowElement(element, displayValue = "block") {
  if (!element) return;
  element.style.display = displayValue;
}

function HideElement(element) {
  if (!element) return;
  element.style.display = "none";
}

function ShowLoading() {
  const loadingElement = GetLoadingElement();
  loadingElement?.classList.add("start");
}

function HideLoading() {
  const loadingElement = GetLoadingElement();
  loadingElement?.classList.remove("start");
}

function SyncDifficultySelection(selectedDifficulty) {
  const difficultyButtons = GetDifficultyButtons();
  if (difficultyButtons.length === 0) return;

  difficultyButtons.forEach((button) => {
    button.classList.toggle("selected", button.dataset.difficulty === selectedDifficulty);
  });
}

function SetDifficulty(difficulty) {
  if (!difficulty || !configsGame[difficulty]) return;

  gameState.difficulty = difficulty;
  gameState.config = { ...configsGame[difficulty] };
  gameState.lifes = lifesGame[difficulty];
  SyncDifficultySelection(difficulty);
}

function ChoiceDifficulty() {
  const difficultyButtons = GetDifficultyButtons();
  if (difficultyButtons.length === 0) return;

  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      SetDifficulty(button.dataset.difficulty);
    });
  });
}

export {
  GetBoardElement,
  GetMenuElement,
  GetLoadingElement,
  GetStartButtonElement,
  GetDifficultyButtons,
  GetCellElement,
  ShowElement,
  HideElement,
  ShowLoading,
  HideLoading,
  SyncDifficultySelection,
  SetDifficulty,
  ChoiceDifficulty
};

import { createBoardCells } from "./board.js";
import { ActiveCell } from './cell.js';
import { gameState, initialGameState } from '../state/gameState.js';
import {
  GetBoardElement,
  GetMenuElement,
  HideElement,
  ShowElement,
  ShowLoading,
  HideLoading,
  SetDifficulty
} from "./utils.js";

function IsGameFinished(cells) {
  return cells.every(cell => cell.isBomb || cell.revealed);
}

function GetCellFromTarget(target) {
  const row = target.getAttribute("data-row");
  const col = target.getAttribute("data-col");
  if (row === null || col === null) return null;

  return gameState.board.find((cell) => cell.row === Number(row) && cell.col === Number(col)) ?? null;
}

function RenderBoard(boardElement) {
  if (!boardElement) return;

  boardElement.replaceChildren();
  boardElement.style.display = "grid";
  boardElement.style.gridTemplateColumns = `repeat(${gameState.config.size}, 1fr)`;
  boardElement.style.gridTemplateRows = `repeat(${gameState.config.size}, 1fr)`;

  gameState.board = createBoardCells(Number(gameState.config.size));

  gameState.board.forEach((cell) => {
    const cellElement = document.createElement("button");
    cellElement.className = "cell-button";
    cellElement.setAttribute("data-row", cell.row);
    cellElement.setAttribute("data-col", cell.col);
    boardElement.appendChild(cellElement);
  });
}

function ResetGameState() {
  gameState.initialized = initialGameState.initialized;
  gameState.board = [];
  SetDifficulty(initialGameState.difficulty);

  const menuElement = GetMenuElement();
  const boardElement = GetBoardElement();
  HideElement(boardElement);
  ShowElement(menuElement, "flex");
}

function EndGame(type) {
  const boardElement = GetBoardElement();
  boardElement?.removeEventListener("click", ButtonClickHandler);
  ResetGameState();

  switch (type) {
    case "win":
      alert("Parabéns! Você ganhou!");
      return;
    case "lose":
      alert("Fim de jogo! Você ficou sem vidas!");
      return;
    default:
      alert("Fim de jogo!");
  }
}

function ButtonClickHandler(event) {
  const cellData = GetCellFromTarget(event.target);
  if (!cellData) return;

  const result = ActiveCell(cellData, gameState.board);

  if (result === "lose") {
    EndGame("lose");
    return;
  }

  if(result === "bomb") alert(`Você perdeu uma vida! Vidas restantes: ${gameState.lifes}`);

  if (IsGameFinished(gameState.board)) {
    EndGame("win");
    return
  } 
}

function InicializeGame() {
  if (gameState.initialized) return;

  const menuElement = GetMenuElement();
  const boardElement = GetBoardElement();
  if (!boardElement) return;

  HideElement(menuElement);
  ShowLoading();
  RenderBoard(boardElement);
  boardElement.addEventListener("click", ButtonClickHandler);
  gameState.initialized = true;

  setTimeout(() => {
    HideLoading();
    ShowElement(boardElement, "grid");
  }, 3000);
}

export { InicializeGame };

import { gameState } from "../state/gameState.js";
import { GetCellElement } from "./utils.js";

function RevealBombCell(cell) {
  const cellElement = GetCellElement(cell.row, cell.col);
  if (!cellElement) return;

  cellElement.textContent = "💣";
  cellElement.classList.add("bomb");
}

function RevealSafeCell(cell) {
  const cellElement = GetCellElement(cell.row, cell.col);
  if (!cellElement) return "ignored";

  cellElement.textContent = cell.count > 0 ? cell.count : "";
  cellElement.classList.add("revealed");

  return "revealed";
}

function CreateCellMap(cells) {
  return new Map(
    cells.map((currentCell) => [`${currentCell.row},${currentCell.col}`, currentCell])
  );
}

function GetNeighborCells(cell, cells) {
  const cellMap = CreateCellMap(cells);
  const neighbors = [];

  for (let row = -1; row <= 1; row++) {
    for (let col = -1; col <= 1; col++) {
      if (row === 0 && col === 0) continue;

      const neighbor = cellMap.get(`${cell.row + row},${cell.col + col}`);

      if(!neighbor || neighbor.isBomb) continue;

      if (neighbor) {
        neighbors.push(neighbor);
      }
    }
  }

  return neighbors;
}

function HandleBombCell(cell) {
  gameState.lifes -= 1;
  RevealBombCell(cell);

  if (gameState.lifes <= 0) {
    return "lose";
  }

  return "bomb";
}

function RevealNeighborCells(cell, cells) {
  const neighbors = GetNeighborCells(cell, cells);

  for (const neighbor of neighbors) {
    if (neighbor.revealed) continue;

    const result = ActiveCell(neighbor, cells);
    if (result === "lose") return result;
  }

  return "revealed";
}

function ActiveCell(cell, cells) {
  if (cell.revealed) return "ignored";

  cell.revealed = true;

  if (cell.isBomb) {
    return HandleBombCell(cell);
  }

  const revealResult = RevealSafeCell(cell);
  if (revealResult === "ignored") return revealResult;

  if (cell.count === 0) {
    return RevealNeighborCells(cell, cells);
  }

  return revealResult;
}

export { ActiveCell };

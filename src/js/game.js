import { createBoardCells } from './utils.js'


function InicializeGame() {
  const board = document.getElementById('board');
  const sizeSelect = document.getElementById("size");
  const sizeValue = sizeSelect?.options[sizeSelect.selectedIndex]?.value;
  const matrix = createBoardCells(Number(sizeValue))
  console.log(matrix)
}

export { InicializeGame }

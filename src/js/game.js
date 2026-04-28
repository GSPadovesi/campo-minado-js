import { createBoardCells } from './utils.js'


function InicializeGame() {
  const board = document.getElementById('board');
  const sizeSelect = document.getElementById("size");
  const sizeValue = sizeSelect?.options[sizeSelect.selectedIndex]?.value;
  const matrix = createBoardCells(Number(sizeValue))

  board.setAttribute('style', `grid-template-columns: repeat(${sizeValue}, 1fr); grid-template-rows: repeat(${sizeValue}, 1fr);`)

  matrix.forEach(cell => {
    const cellElement = document.createElement('button');
    cellElement.id = 'button';
    cellElement.setAttribute('data-row', cell.row);
    cellElement.setAttribute('data-col', cell.col);
    board.appendChild(cellElement);
  })

  console.log(matrix)
}

export { InicializeGame }

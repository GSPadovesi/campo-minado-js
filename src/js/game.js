import { createBoardCells } from './board.js'
import { ActiveCell } from './cell.js';

function finishGame(cells){
  return cells.every(cell => (cell.isBomb && !cell.revealed) || (!cell.isBomb && cell.revealed));
}

function InicializeGame() {
  const board = document.getElementById('board');
  const sizeSelect = document.getElementById("size");
  const sizeValue = sizeSelect?.options[sizeSelect.selectedIndex]?.value;
  const matrix = createBoardCells(Number(sizeValue));

  board.setAttribute('style', `grid-template-columns: repeat(${sizeValue}, 1fr); grid-template-rows: repeat(${sizeValue}, 1fr);`)

  matrix.forEach(cell => {
    const cellElement = document.createElement('button');
    cellElement.id = 'button';
    cellElement.setAttribute('data-row', cell.row);
    cellElement.setAttribute('data-col', cell.col);
    board.appendChild(cellElement);
  })

  const buttonClickHandler = (event) => {
    const target = event.target;
    const row = target.getAttribute('data-row');
    const col = target.getAttribute('data-col');
    const cellData = matrix.find(c => c.row === Number(row) && c.col === Number(col));
    ActiveCell(cellData, matrix);
    const finishedGame = finishGame(matrix);
    if (finishedGame) {
      alert('Congratulations! You won!');
      board.removeEventListener('click', buttonClickHandler);
    }
    return ;
  }

  board.addEventListener('click', buttonClickHandler);
}

export { InicializeGame }

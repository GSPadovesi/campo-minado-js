function placeBombs(cells) {
  const totalBomb = Math.floor(cells.length * 0.15);
  for(let index = 0; index < totalBomb; index++){
    const indexSort = Math.floor(Math.random() * cells.length);
    if(cells[indexSort].isBomb) {
      index--;
      continue;
    }
    cells[indexSort].isBomb = true;
  }

  return cells
}

function createBoardCells(size){
  const cells = [];
  const totalCells = size * size;

  for(let index = 0; index < totalCells; index++) cells.push({ row: Math.floor(index / size), col: index % size, isBomb: false, revealed: false, count: 0 })

  const newCells = placeBombs(cells);

  return newCells
}

export { createBoardCells }

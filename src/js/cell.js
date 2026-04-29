function ActiveCell(cell, cells) {
  if(cell.revealed) return;
  if(cell.isBomb) {
    inicialized = false;
    alert('Game Over!');
    return;
  };
  cell.revealed = true;
  const cellElement = document.querySelector(`button[data-row="${cell.row}"][data-col="${cell.col}"]`);
  cellElement.textContent = cell.count > 0 ? cell.count : '';
  cellElement.classList.add('revealed');

  if(cell.count === 0) {
    for(let row = -1; row <= 1; row++){
      for(let col = -1; col <= 1; col++){
        if(col === 0 && row === 0) continue
        const neighbor = cells.find(item => item.row === cell.row + row  && item.col === cell.col + col)
        if(neighbor && !neighbor.revealed){
          ActiveCell(neighbor, cells)
        }
      }
    }
  }

  return;
}

export { ActiveCell };
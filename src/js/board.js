
function createCells(size){
  return Array.from({ length: size * size }, (_, index) => ({ row: Math.floor(index / size), col: index % size, isBomb: false, revealed: false, count: 0 }))
}

function placeBombs(cells){
  const totalBombs = Math.floor(cells.length * 0.15);
  const shuffled = [...cells].sort(() => Math.random() - 0.5);
  const bombSet = new Set(shuffled.slice(0, totalBombs));

  return cells.map(cell => ({
    ...cell,
    isBomb: bombSet.has(cell),
  }));
}


function countBombs(cells) {
  const cellMap = new Map(cells.map(c => [`${c.row},${c.col}`, c]));

  return cells.map(cell => {
    if (cell.isBomb) return cell;

    let count = 0;
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        if (row === 0 && col === 0) continue;
        const neighbor = cellMap.get(`${cell.row + row},${cell.col + col}`);
        if (neighbor?.isBomb) count++;
      }
    }

    return { ...cell, count };
  });
}

function createBoardCells(size){
  const cells = createCells(size);
  const withBombs = placeBombs(cells);
  return countBombs(withBombs, size)
}

export { createBoardCells }

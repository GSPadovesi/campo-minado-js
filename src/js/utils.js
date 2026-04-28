
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


function countBombs(cells, size) {
  const cellMap = new Map(cells.map(c => [`${c.row},${c.col}`, c]));

  return cells.map(cell => {
    if (cell.isBomb) return cell;

    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const neighbor = cellMap.get(`${cell.row + i},${cell.col + j}`);
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

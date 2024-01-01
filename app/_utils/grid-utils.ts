const livingNeighbors = (i: number, j: number, grid: boolean[][]) => {
  return alive(i - 1, j - 1, grid) +
         alive(i - 1, j, grid ) +
         alive(i - 1, j + 1, grid) +
         alive(i, j - 1, grid) +
         alive(i, j + 1, grid) +
         alive(i + 1, j - 1, grid) +
         alive(i + 1, j, grid) +
         alive(i + 1, j + 1, grid);
}

const alive = (i: number, j: number, grid: boolean[][]) => {
  const sizeX = grid.length;
  const sizeY = grid[0].length;
  if (i >= 0 && i < sizeX && j >= 0 && j < sizeY ) {
    return grid[i][j] ? 1 : 0;
  } else {
    return 0;
  }
}

export const createEmptyGrid = (sizeX: number, sizeY: number) => {
  const g = Array.from({ length: sizeX }, () =>
    Array.from({ length: sizeY }, () => false)
  );
  return g;
}

export const iterate = (grid: boolean[][]) => {
  const sizeX = grid.length;
  const sizeY = grid[0].length;
  const newGrid = createEmptyGrid(sizeX, sizeY);
  let n: number;
  for (let i = 0; i < sizeX; i++) {
    for (let j = 0; j < sizeY; j++) {
      n = livingNeighbors(i, j, grid);
      if (grid[i][j]) {
        if (n === 2 || n === 3) {
          newGrid[i][j] = true;
        } else {
          newGrid[i][j] = false;
        }
      } else if (n === 3) {
          newGrid[i][j] = true;
      }
    }
  }
  return newGrid;
}

import { createEmptyGrid } from "./grid-utils";

const pentomino: WellKnownPatternConstructor = (grid) => {
  const sizeX = grid.length;
  const sizeY = grid[0].length;
  const newGrid = createEmptyGrid(sizeX, sizeY);
  const centerX = Math.floor(sizeX / 2);
  const centerY = Math.floor(sizeY / 2);
  newGrid[centerX][centerY] = true;
  newGrid[centerX][centerY - 1] = true;
  newGrid[centerX - 1][centerY] = true;
  newGrid[centerX - 1][centerY + 1] = true;
  newGrid[centerX + 1][centerY] = true;
  return newGrid
}

const glider: WellKnownPatternConstructor = (grid) => {
  const sizeX = grid.length;
  const sizeY = grid[0].length;
  const newGrid = createEmptyGrid(sizeX, sizeY);
  const centerX = Math.floor(sizeX / 4);
  const centerY = Math.floor(sizeY / 4);
  newGrid[centerX - 1][centerY] = true;
  newGrid[centerX][centerY + 1] = true;
  newGrid[centerX + 1][centerY - 1] = true;
  newGrid[centerX + 1][centerY] = true;
  newGrid[centerX + 1][centerY + 1] = true;
  return newGrid
}

const caterer: WellKnownPatternConstructor = (grid) => {
  const sizeX = grid.length;
  const sizeY = grid[0].length;
  const newGrid = createEmptyGrid(sizeX, sizeY);
  const centerX = Math.floor(sizeX / 2);
  const centerY = Math.floor(sizeY / 2);
  newGrid[centerX - 2][centerY - 1] = true;
  newGrid[centerX - 1][centerY - 3] = true;
  newGrid[centerX - 1][centerY + 1] = true;
  newGrid[centerX - 1][centerY + 2] = true;
  newGrid[centerX - 1][centerY + 3] = true;
  newGrid[centerX - 1][centerY + 4] = true;
  newGrid[centerX][centerY - 3] = true;
  newGrid[centerX][centerY + 1] = true;
  newGrid[centerX + 1][centerY - 3] = true;
  newGrid[centerX + 2][centerY] = true;
  newGrid[centerX + 3][centerY - 2] = true;
  newGrid[centerX + 3][centerY - 1] = true;
  return newGrid;
}

export type WellKnownPatternConstructor = (grid: boolean[][]) => boolean[][]

export enum WellKnownPattern {
  Pentomino,
  Glider,
  Caterer
}

export const wellKnownHandlers = new Map<WellKnownPattern, WellKnownPatternConstructor> (
  [
    [WellKnownPattern.Caterer, caterer],
    [WellKnownPattern.Glider, glider],
    [WellKnownPattern.Pentomino, pentomino],
  ]
)
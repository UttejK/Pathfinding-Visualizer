import { MAX_COLS, MAX_ROWS } from "./constants";
import { TGridType, TTileType } from "./types";

function retrieveHeuristicCost(currentTile: TTileType, endTile: TTileType) {
  const manhattanDistance = 1;
  const row = Math.abs(currentTile.row - endTile.row);
  const col = Math.abs(currentTile.col - endTile.col);
  return manhattanDistance * (row + col);
}

export function initHeuristicCost(grid: TGridType, endTile: TTileType) {
  const heuristicCost = [];
  for (let i = 0; i < MAX_ROWS; i++) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j++) {
      row.push(retrieveHeuristicCost(grid[i][j], endTile));
    }
    heuristicCost.push(row);
  }
  return heuristicCost;
}

export function initFunctionCost() {
  const functionCost = [];
  for (let i = 0; i < MAX_ROWS; i++) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j++) {
      row.push(Infinity);
    }
    functionCost.push(row);
  }
  return functionCost;
}

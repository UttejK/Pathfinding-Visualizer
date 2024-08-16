import { MAX_COLS, MAX_ROWS } from "./constants";
import { TGridType, TTileType } from "./types";

const createRow = (row: number, startTile: TTileType, endTile: TTileType) => {
  const currentRow = [];
  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      isPath: false,
      distance: Infinity,
      isStart: row === startTile.row && col === startTile.col,
      isTraversed: false,
      parent: null,
    });
  }
  return currentRow;
};

export const createGrid = (startTile: TTileType, endTile: TTileType) => {
  const grid: TGridType = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile));
  }
  return grid;
};

export const checkIfStartOrEnd = (row: number, col: number) => {
  return (
    (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
  );
};

const createNewGrid = (grid: TGridType, row: number, col: number) => {
  const newGrid = grid.slice();
};

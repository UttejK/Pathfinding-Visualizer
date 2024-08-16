import {
  END_TILE_CONFIGURATION,
  MAX_COLS,
  MAX_ROWS,
  START_TILE_CONFIGURATION,
  TILE_STYLE,
} from "./constants";
import { isEqual } from "./helpers";
import { TGridType, TTileType } from "./types";

export function resetGrid({
  grid,
  startTile = START_TILE_CONFIGURATION,
  endTile = END_TILE_CONFIGURATION,
}: {
  grid: TGridType;
  startTile?: TTileType;
  endTile?: TTileType;
}) {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col];
      tile.distance = Infinity;
      tile.isTraversed = false;
      tile.isPath = false;
      tile.parent = null;
      tile.isWall = false;

      if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
        const tileElement = document.getElementById(`${tile.row}-${tile.col}`);
        if (tileElement) {
          tileElement.className = TILE_STYLE;
        }
        if (tile.row === MAX_ROWS - 1) {
          tileElement?.classList.add("border-b");
        }
        if (tile.col === 0) {
          tileElement?.classList.add("border-l");
        }
      }
    }
  }
}

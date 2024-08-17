import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { TGridType, TSpeedType } from "./types";

export async function destroyWall(
  grid: TGridType,
  row: number,
  col: number,
  isRight: number,
  speed: TSpeedType
) {
  async function updateWall(row: number, col: number) {
    grid[row][col].isWall = false;
    document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  }
  if (isRight && grid[row][col + 1]) {
    await updateWall(row, col + 1);
  } else if (grid[row + 1][col]) {
    await updateWall(row + 1, col);
  } else {
    await updateWall(row, col);
  }
}

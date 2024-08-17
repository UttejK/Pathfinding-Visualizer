import { TGridType, TSpeedType, TTileType } from "../../../utils/types";
import { horizontalDivision } from "./horizontalDivision";
import { verticalDivision } from "./verticalDivision";

export async function recursiveDivision({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  setIsDisabled,
  speed,
}: {
  grid: TGridType;
  startTile: TTileType;
  endTile: TTileType;
  row: number;
  col: number;
  height: number;
  width: number;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: TSpeedType;
}) {
  if (height <= 1 || width <= 1) {
    return;
  }

  if (height > width) {
    await horizontalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      setIsDisabled,
      speed,
    });
  } else {
    await verticalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      setIsDisabled,
      speed,
    });
  }
}

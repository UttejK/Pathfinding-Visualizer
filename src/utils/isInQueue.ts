import { isEqual } from "./helpers";
import { TTileType } from "./types";

export function isInQueue(tile: TTileType, queue: TTileType[]) {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true;
  }
  return false;
}

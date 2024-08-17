import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { TAlgorithmType, TGridType, TTileType } from "./types";

export function runPathfindingAlgorithm({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: TAlgorithmType;
  grid: TGridType;
  startTile: TTileType;
  endTile: TTileType;
}) {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
}

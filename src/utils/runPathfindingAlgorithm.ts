import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { dfs } from "../lib/algorithms/pathfinding/dfs";
import { djikstra } from "../lib/algorithms/pathfinding/djikstra";
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
    case "DFS":
      return dfs(grid, startTile, endTile);
    case "DIJKSTRA":
      return djikstra(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
}

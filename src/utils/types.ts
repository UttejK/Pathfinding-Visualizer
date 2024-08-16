export type TAlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";

export type TMazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface IMazeSelectType {
  name: string;
  value: TMazeType;
}

export type TTileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  isStart: boolean;
  parent: TTileType | null;
};

export type TGridType = TTileType[][];

export type TSpeedType = 2 | 1 | 0.5;

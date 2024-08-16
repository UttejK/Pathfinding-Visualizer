import { ReactNode, createContext, useState } from "react";
import { TAlgorithmType, TGridType, TMazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

interface IPathfindingContextInterface {
  algorithm: TAlgorithmType;
  setAlgorithm: (algorithm: TAlgorithmType) => void;
  maze: TMazeType;
  setMaze: (maze: TMazeType) => void;
  grid: TGridType;
  setGrid: (grid: TGridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const CPathfindingContext = createContext<
  IPathfindingContextInterface | undefined
>(undefined);

export const PPathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<TAlgorithmType>("BFS");
  const [maze, setMaze] = useState<TMazeType>("NONE");
  const [grid, setGrid] = useState<TGridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <CPathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </CPathfindingContext.Provider>
  );
};

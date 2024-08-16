import { ReactNode, createContext, useState } from "react";
import { TTileType } from "../utils/types";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

interface ITileContextInterface {
  startTile: TTileType;
  setStartTile: (startTile: TTileType) => void;
  endTile: TTileType;
  setEndTile: (endTile: TTileType) => void;
}

export const CTileContext = createContext<ITileContextInterface | undefined>(
  undefined
);

export const PTileProvider = ({ children }: { children: ReactNode }) => {
  const [startTile, setStartTile] = useState<TTileType>(
    START_TILE_CONFIGURATION
  );
  const [endTile, setEndTile] = useState<TTileType>(END_TILE_CONFIGURATION);

  return (
    <CTileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </CTileContext.Provider>
  );
};

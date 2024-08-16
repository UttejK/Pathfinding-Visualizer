import { useContext } from "react";
import { CPathfindingContext } from "../context/PathfindingContext";

export const usePathfinding = () => {
  const context = useContext(CPathfindingContext);

  if (!context) {
    throw new Error(
      "usePathfinding must be used within a PPathfindingProvider"
    );
  }
  return context;
};

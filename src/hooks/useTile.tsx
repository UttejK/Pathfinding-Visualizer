import { useContext } from "react";
import { CTileContext } from "../context/TileContext";

export const useTile = () => {
  const context = useContext(CTileContext);

  if (!context) {
    throw new Error("useTile must be used within a PTileProvider");
  }
  return context;
};

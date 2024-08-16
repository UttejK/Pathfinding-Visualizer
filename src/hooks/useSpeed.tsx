import { useContext } from "react";
import { CSpeedContext } from "../context/SpeedContext";

export const useSpeed = () => {
  const context = useContext(CSpeedContext);
  if (!context) {
    throw new Error("useSpeed must be used within a PSpeedProvider");
  }
  return context;
};

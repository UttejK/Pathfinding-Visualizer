import { createContext, useState } from "react";
import { TSpeedType } from "../utils/types";

interface ISpeedContextInterface {
  speed: TSpeedType;
  setSpeed: (speed: TSpeedType) => void;
}

export const CSpeedContext = createContext<ISpeedContextInterface | undefined>(
  undefined
);

export const PSpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<TSpeedType>(0.5);

  return (
    <CSpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </CSpeedContext.Provider>
  );
};

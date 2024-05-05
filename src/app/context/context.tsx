import { createContext } from "react";

interface StoreContextType {
  isSideBarOpen: boolean;
  screenSize: number;
  isVideoScrolled: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
  setIsVideoScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const storeContext = createContext<StoreContextType>(
  {} as StoreContextType
);

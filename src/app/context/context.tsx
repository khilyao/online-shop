import { createContext } from "react";

interface StoreContextType {
  isSideBarOpen: boolean;
  isVideoScrolled: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideoScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const storeContext = createContext<StoreContextType>(
  {} as StoreContextType
);

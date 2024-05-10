import { createContext } from "react";

interface StoreContextType {
  isSideBarOpen: boolean;
  isVideoScrolled: boolean;
  isModalOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideoScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const storeContext = createContext<StoreContextType>(
  {} as StoreContextType
);

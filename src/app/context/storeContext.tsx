"use client";

import { ReactNode } from "react";
import { useState } from "react";
import { storeContext } from "./context";

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1280);
  const [isVideoScrolled, setIsVideoScrolled] = useState(false);

  const providerValue = {
    isSideBarOpen,
    setIsSideBarOpen,
    screenSize,
    setScreenSize,
    isVideoScrolled,
    setIsVideoScrolled,
  };

  return (
    <storeContext.Provider value={providerValue}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;

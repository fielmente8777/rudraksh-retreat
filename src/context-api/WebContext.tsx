"use client";
import { createContext, useContext, useState } from "react";
interface WebContextType {
  isOpenNavBar: boolean;
  setIsOpenNavBar: (open: boolean) => void;
}

const WebContext = createContext<WebContextType>({
  isOpenNavBar: false,
  setIsOpenNavBar: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}
export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  return (
    <WebContext.Provider value={{ isOpenNavBar, setIsOpenNavBar }}>
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }
  return context;
};

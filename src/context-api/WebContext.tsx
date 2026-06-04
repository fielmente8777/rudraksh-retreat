"use client";
import { createContext, useContext, useState } from "react";
interface WebContextType {
  current: number;
  total: number;
  setCurrent: (current: number) => void;
  setTotal: (total: number) => void;
  isOpenNavBar: boolean;
  setIsOpenNavBar: (open: boolean) => void;
}

const WebContext = createContext<WebContextType>({
  current: 1,
  total: 0,
  setCurrent: () => {},
  setTotal: () => {},
  isOpenNavBar: false,
  setIsOpenNavBar: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}
export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);

  return (
    <WebContext.Provider
      value={{
        isOpenNavBar,
        setIsOpenNavBar,
        total,
        setTotal,
        current,
        setCurrent,
      }}
    >
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

"use client"
import {
  createContext,
  useContext,
  useState,
} from "react";

type DropdownCtxType = {
  close: () => void;
  isOpen: boolean;
  toggle: () => void;
}

type DropdownProviderProps = {
  children: React.ReactNode
}

const DropdownCtx = createContext({} as DropdownCtxType);
export const useDropdownCtx = () => useContext(DropdownCtx)

export const DropdownProvider = ({ children }: DropdownProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const close = () => {
    setIsOpen(false)
  }

  const value = {
    close,
    isOpen,
    toggle,
  }

  return (
    <DropdownCtx.Provider value={value}>
      {children}
    </DropdownCtx.Provider>
  )
};

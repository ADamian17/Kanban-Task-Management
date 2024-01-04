"use client"
import { createContext, useContext, useState } from "react";

type ModalProviderProps = {
  children: React.ReactNode
}

type ModalCtxType = {
  closeModal: () => void;
  openModal: () => void;
  show: boolean;
}

const ModalCtx = createContext({} as ModalCtxType);
export const useModalCtx = () => useContext(ModalCtx)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [show, setShow] = useState(false)

  const closeModal = () => {
    setShow(false)
  }

  const openModal = () => {
    setShow(true)
  }

  const value = {
    show,
    closeModal,
    openModal
  }

  return (
    <ModalCtx.Provider value={value}>
      {children}
    </ModalCtx.Provider>
  )
};

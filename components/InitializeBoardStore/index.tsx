"use client"
import { UseBoardStoreState, useBoardStore } from "@/state/useBoardStore";
import { useRef } from "react";


const InitializeBoardStore: React.FC<UseBoardStoreState> = ({ boardId, boardName }) => {
  const isInitialized = useRef(false)

  if (!isInitialized.current) {
    useBoardStore.setState({ boardName, boardId });
    isInitialized.current = true
  }

  return null
};

export default InitializeBoardStore;
"use client"
import { useRef } from "react";
import useModalStore from "@/state/useModalStore";

type AddModalEmptyBoardsType = {

};

const AddModalEmptyBoards: React.FC<AddModalEmptyBoardsType> = (props) => {
  const isInitialized = useRef(false)

  if (!isInitialized.current) {
    useModalStore.setState({ modalTrigger: "add-board" });
    isInitialized.current = true
  }

  return null;
};

export default AddModalEmptyBoards;
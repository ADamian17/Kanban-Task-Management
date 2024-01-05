"use client"
import useModalStore from "@/state/useModalStore";

type AddModalEmptyBoardsType = {};

const AddModalEmptyBoards: React.FC<AddModalEmptyBoardsType> = (props) => {
  useModalStore.setState({ modalTrigger: "add-board" });

  return null;
};

export default AddModalEmptyBoards;
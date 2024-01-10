"use client"

import { deleteBoard } from "@/utils/board/deleteBoard";
import Button from "../UI/Button";

type DeleteBoardButtonType = {
  boardId: number | null
};

const DeleteBoardButton: React.FC<DeleteBoardButtonType> = ({ boardId }) => {
  const handleClick = () => {
    deleteBoard(boardId)
  }

  return (
    <Button
      variant="destructive"
      onClick={handleClick}
    >
      Delete
    </Button>
  )
};

export default DeleteBoardButton;
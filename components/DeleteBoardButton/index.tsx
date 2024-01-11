"use client"

import { deleteBoard } from "@/utils/board/deleteBoard";
import Button from "../UI/Button";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

type DeleteBoardButtonType = {
  boardId: number | null
};

const DeleteBoardButton: React.FC<DeleteBoardButtonType> = ({ boardId }) => {
  const handleClick = () => {
    deleteBoard(boardId)
    revalidateTag("dashboard")
    redirect("/dashboard/")
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
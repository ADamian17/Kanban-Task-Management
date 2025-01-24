"use client";
import React from "react";

import Modal from "@/components/ui/Modal";
import { useRouter } from "next/navigation";
import DeleteModalContent from "@/components/features/DeleteModalContent";
import { deleteBoardAction } from "./delete-board-action";
import { revalidateBoardAction } from "@/lib/utils/revalidate-board-Action";

type DeleteBoardContainerProps = {
  boardId: string;
  boardName: string;
  boardUri: string;
};

const DeleteBoardContainer: React.FC<DeleteBoardContainerProps> = ({ boardId, boardName, boardUri }) => {
  const router = useRouter();

  const handleClose = () => router.push(boardUri);

  const handleDelete = async () => {
    try {
      const data = { boardId }
      const deleteBoard = deleteBoardAction.bind(data);
      const res = await deleteBoard(data);

      if (typeof res === "object" && "error" in res) {
        return console.error(res?.error);
      }

      if (res?.deleteBoard?.success) {
        const pathname = '/';
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);

        router.push(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal show={true} onClose={handleClose}>
      <DeleteModalContent
        headline="Delete this board?"
        onCancel={handleClose}
        onDelete={handleDelete}
        subcopy={`Are you sure you want to delete the '${boardName}' board? This action will remove all columns and tasks and cannot be reversed.`}
      />
    </Modal>
  );
};

export default DeleteBoardContainer;

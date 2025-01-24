"use client";
import React from "react";

import { deleteTaskAction } from "./delete-task-action";
import { revalidateBoardAction } from "@/lib/utils/revalidate-board-Action";
import { useRouter } from "next/navigation";
import DeleteModalContent from "@/components/features/DeleteModalContent";
import Modal from "@/components/ui/Modal";

type DeleteTaskContainerType = {
  taskId: string;
  taskTitle: string;
  boardUri: string;
};

const DeleteTaskContainer: React.FC<DeleteTaskContainerType> = ({
  taskId,
  taskTitle,
  boardUri,
}) => {
  const router = useRouter();

  const handleClose = () => router.push(`/${boardUri}/task/${taskId}`);

  const handleDelete = async () => {
    try {
      const deleteTask = deleteTaskAction.bind({ id: taskId });
      const res = await deleteTask({ id: taskId });

      if (typeof res === "object" && "error" in res) {
        return console.error(res?.error);
      }

      if (res?.deleteTask?.success) {
        const pathname = `/${boardUri}`;
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);

        router.push(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={true} onClose={handleClose}>
      <DeleteModalContent
        headline="Delete this task?"
        onCancel={handleClose}
        onDelete={handleDelete}
        subcopy={`Are you sure you want to delete the '${taskTitle}' task and its subtasks? This action cannot be reversed.`}
      />
    </Modal>
  );
};

export default DeleteTaskContainer;

"use client";
import React, { FormEventHandler } from "react";
import { useRouter } from "next/navigation";

import { deleteTaskAction } from "./delete-task-action";
import { revalidateBoardAction } from "@/lib/utils/revalidate-board-Action";
import Button from "@/components/ui/Button";

type DeleteTaskFormProps = {
  pathname: string;
  taskId: string;
};

const DeleteTaskForm: React.FC<DeleteTaskFormProps> = ({ pathname, taskId }) => {
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const deleteTask = deleteTaskAction.bind({ id: taskId });
      const res = await deleteTask({ id: taskId });

      if (typeof res === "object" && "error" in res) {
        return console.error(res?.error);
      }

      if (res?.deleteTask?.success) {
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);

        router.push(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Button type="submit" variant="danger">
        delete
      </Button>
    </form>
  );
};

export default DeleteTaskForm;

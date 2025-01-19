"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/ui/Modal";
import EditTaskForm from "@/components/forms/task-forms/EditTaskForm";
import { GetTaskQuery } from "@/__generated__/graphql";

type DeleteTaskContainerType = {
  boardUri: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
};

const EditTaskContainer: React.FC<DeleteTaskContainerType> = ({
  boardUri,
  taskData,
  boardColumnsData,
}) => {
  const router = useRouter();

  const handleClose = () => router.push(`/${boardUri}/task/${taskData?.id}`);

  return (
    <Modal show={true} onClose={handleClose} title="Edit Task">
      <EditTaskForm
        pathname={`/${boardUri}`}
        taskData={taskData}
        boardColumnsData={boardColumnsData}
      />
    </Modal>
  );
};

export default EditTaskContainer;

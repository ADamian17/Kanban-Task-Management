"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { GetTaskQuery } from "@/__generated__/graphql";
import Modal from "@/components/ui/Modal";
import CreateTaskForm from "@/components/forms/task-forms/CreateTaskForm";

type DeleteTaskContainerType = {
  boardUri: string;
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
};

const NewTaskContainer: React.FC<DeleteTaskContainerType> = ({ boardUri, boardColumnsData }) => {
  const router = useRouter();

  const handleClose = () => router.push(`/${boardUri}/`);

  return (
    <Modal show={true} onClose={handleClose} title="Add New Task">
      <CreateTaskForm pathname={`/${boardUri}`} boardColumnsData={boardColumnsData} />
    </Modal>
  )
};

export default NewTaskContainer;

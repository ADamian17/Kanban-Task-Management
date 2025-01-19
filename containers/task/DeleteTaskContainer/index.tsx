"use client";
import React from "react";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useRouter } from "next/navigation";

import styles from "./DeleteTaskContainer.module.scss";
import DeleteTaskForm from "@/components/forms/task-forms/DeleteTaskForm";

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

  return (
    <Modal show={true} onClose={handleClose}>
      <div className={styles.modalContentWrapper}>
        <p className={styles.modalContentTitle}>Delete this task?</p>

        <p className={styles.modalContentCopy}>
          Are you sure you want to delete the &apos;{taskTitle}&apos; task and its subtasks? This
          action cannot be reversed.
        </p>

        <div className={styles.modalBtnsWrapper}>
          <DeleteTaskForm pathname={`/${boardUri}`} taskId={taskId} />

          <Button onClick={handleClose} variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTaskContainer;

"use client";
import React, { useState } from "react";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import Button from "@/components/ui/Button";
import CreateTaskForm from "@/components/forms/task-forms/CreateTaskForm";
import Modal from "@/components/ui/Modal";
import Plus from "@/components/icons/Plus";

import styles from "./AddNewTaskBtn.module.scss";

type AddNewTaskBtnType = {
  boardUri: string;
  columns: GetOneBoardByUriQuery["getOneBoard"]["columns"];
  isColumnsEmpty: boolean;
};

const AddNewTaskBtn: React.FC<AddNewTaskBtnType> = ({ boardUri, isColumnsEmpty, columns }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        disabled={isColumnsEmpty}
        className={styles.addNewTaskBtn}
        onClick={() => setShow(true)}
      >
        <Plus className={styles.actionIcon} />

        <span className={styles.actionText}>+ Add new task</span>
      </Button>

      <Modal show={show} onClose={handleClose} title="Add New Task">
        <CreateTaskForm pathname={boardUri} boardColumnsData={columns} />
      </Modal>
    </>
  );
};

export default AddNewTaskBtn;

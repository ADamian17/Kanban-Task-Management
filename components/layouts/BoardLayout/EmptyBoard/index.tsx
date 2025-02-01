"use client";
import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

import styles from './EmptyBoard.module.scss';
import NewColumnForm from "@/components/forms/NewColumnForm";

type EmptyBoardType = {
  boardId: string;
  pathname: string;
};

const EmptyBoard: React.FC<EmptyBoardType> = ({ boardId, pathname }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.headline}>This board is empty. Create a new column to get started.</p>

      <Button onClick={handleOpen} className={styles.btn}>+ Add New Column</Button>

      <Modal show={show} onClose={handleClose} title="Add New Column">
        <NewColumnForm boardId={boardId} pathname={pathname} />
      </Modal>
    </div>
  );
};

export default EmptyBoard;

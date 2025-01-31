"use client";
import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

import styles from './EmptyBoard.module.scss';

type EmptyBoardType = {
  boardId: string;
};

const EmptyBoard: React.FC<EmptyBoardType> = ({ boardId }) => {
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
        new column form {boardId}
      </Modal>
    </div>
  );
};

export default EmptyBoard;

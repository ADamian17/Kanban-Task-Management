"use client";
import React, { useState } from "react";

import Board from "@/components/icons/Board";
import Modal from "@/components/ui/Modal";

import styles from "./AddNewBoardBtn.module.scss";
import CreateBoardForm from "@/components/forms/board-forms/CreateBoardForm";

const AddNewBoardBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <button className={styles.addBoardBtn} onClick={() => setShow(true)}>
        <Board />
        <span>+ Create New Board</span>
      </button>

      <Modal show={show} onClose={handleClose} title="Add New Board">
        <CreateBoardForm />
      </Modal>
    </>
  );
};

export default AddNewBoardBtn;

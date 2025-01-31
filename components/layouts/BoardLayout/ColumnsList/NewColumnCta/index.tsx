"use client";
import React, { useState } from "react";

import Modal from "@/components/ui/Modal";

import styles from "./NewColumnCta.module.scss";

type NewColumnCtaProps = {
  boardId: string;
};

const NewColumnCta: React.FC<NewColumnCtaProps> = ({ boardId }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <button onClick={handleOpen} className={styles.newColumnCta}>+ New Column</button>

      <Modal show={show} onClose={handleClose} title="Add New Column">
        new column form {boardId}
      </Modal>
    </>
  );
};

export default NewColumnCta;

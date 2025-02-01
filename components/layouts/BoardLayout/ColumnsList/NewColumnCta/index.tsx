"use client";
import React, { useState } from "react";

import Modal from "@/components/ui/Modal";

import styles from "./NewColumnCta.module.scss";
import NewColumnForm from "@/components/forms/NewColumnForm";

type NewColumnCtaProps = {
  boardId: string;
  pathname: string;
};

const NewColumnCta: React.FC<NewColumnCtaProps> = ({ boardId, pathname }) => {
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
        <NewColumnForm boardId={boardId} pathname={pathname} />
      </Modal>
    </>
  );
};

export default NewColumnCta;

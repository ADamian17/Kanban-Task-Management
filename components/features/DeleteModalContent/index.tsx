"use client";
import React, { MouseEventHandler } from "react";

import styles from "./DeleteModalContent.module.scss";
import Button from "@/components/ui/Button";

type DeleteModalContentType = {
  headline: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onDelete: () => void;
  subcopy: string;
};

const DeleteModalContent: React.FC<DeleteModalContentType> = ({ headline, onCancel, onDelete, subcopy }) => {
  const onSubmit: MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (typeof onDelete === "function") onDelete();
  };

  return <div className={styles.modalContentWrapper}>
    <p className={styles.modalContentTitle}>{headline}</p>

    <p className={styles.modalContentCopy}>{subcopy}</p>

    <div className={styles.modalBtnsWrapper}>
      <form className={styles.deleteBtn} onSubmit={onSubmit}>
        <Button type="submit" variant="danger">
          delete
        </Button>
      </form>

      <Button onClick={onCancel} variant="secondary">
        Cancel
      </Button>
    </div>
  </div>
};

export default DeleteModalContent;
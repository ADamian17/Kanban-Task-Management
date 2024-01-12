import React from "react";

import DeleteModalButtons from "@/components/DeleteModalButtons";
import Modal from "@/components/UI/Modal";

import styles from "./DeleteBoard.module.scss";

type DeleteBoardType = {
  boardName: string
  boardId: number
};

const DeleteBoardContent: React.FC<DeleteBoardType> = ({ boardId, boardName }) => (
  <Modal>
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>Delete this board?</h2>

      <p className={styles.copy}>Are you sure you want to delete the {`'${boardName}'`} board? This action will remove all columns and tasks and cannot be reversed.</p>

      <DeleteModalButtons boardId={boardId} />
    </div>
  </Modal>
);

export default DeleteBoardContent;

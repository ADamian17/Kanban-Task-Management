import React from "react";

import styles from "./DeleteBoard.module.scss";
import ModalContent from "@/components/UI/Modal/ModalContent";
import Button from "@/components/UI/Button";
import { useBoardStore } from "@/state/useBoardStore";
import useModalStore from "@/state/useModalStore";
import DeleteModalButtons from "@/components/DeleteModalButtons";

type DeleteBoardType = {};

const DeleteBoard: React.FC<DeleteBoardType> = (props) => {
  const { boardId, boardName } = useBoardStore.getState()
  const { closeModal } = useModalStore.getState()

  return (
    <ModalContent>
      <h2>Delete this board?</h2>

      <p>Are you sure you want to delete the {`'${boardName}'`} board? This action will remove all columns and tasks and cannot be reversed.</p>

      <DeleteModalButtons boardId={boardId} />
    </ModalContent>
  )
};

export default DeleteBoard;
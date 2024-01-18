"use client"
import { deleteBoard } from "@/utils/board-actions/delete-board";
import Button from "@/components/UI/Button";
import CancelButton from "@/components/buttons/CancelButton";
import { useFormState } from "react-dom";

import styles from "./DeleteBoardButtons.module.scss";

type DeleteModalButtonsType = {
  boardId: number | null
};

const DeleteBoardButtons: React.FC<DeleteModalButtonsType> = ({ boardId }) => {
  const [formState, formAction] = useFormState(deleteBoard, { errorMsg: "" })

  return (
    <>
      {formState.errorMsg.length > 1 && <p className={styles.errorMsg}>{formState.errorMsg}</p>}

      <div className={styles.wrapper}>
        <form action={formAction} className={styles.deleteCta}>
          <input type="hidden" name="boardId" value={boardId as number} />
          <Button
            type="submit"
            variant="destructive"
          >
            Delete
          </Button>
        </form>

        <CancelButton />
      </div>
    </>
  )
}

export default DeleteBoardButtons;

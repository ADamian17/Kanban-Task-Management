import DeleteBoardButtons from "./DeleteBoardButtons";
import Modal from "@/components/UI/Modal";

import styles from "./DeleteBoardForm.module.scss";

type DeleteBoardFormType = {
  boardName?: string
  boardId?: number
};

const DeleteBoardForm: React.FC<DeleteBoardFormType> = ({ boardId, boardName }) => (
  <Modal>
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>Delete this board?</h2>

      <p className={styles.copy}>Are you sure you want to delete the {`'${boardName}'`} board? This action will remove all columns and tasks and cannot be reversed.</p>

      {
        boardId && <DeleteBoardButtons boardId={boardId} />
      }
    </div>
  </Modal>
);

export default DeleteBoardForm;

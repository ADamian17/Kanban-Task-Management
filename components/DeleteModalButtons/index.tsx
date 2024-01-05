import DeleteBoardButton from "../DeleteBoardButton";
import ModalCancelButton from "../ModalCancelButton";
import styles from "./DeleteModalButtons.module.scss";

type DeleteModalButtonsType = {
  boardId: number | null
};

const DeleteModalButtons: React.FC<DeleteModalButtonsType> = ({ boardId }) => {
  return (
    <div className={styles.wrapper}>
      <DeleteBoardButton boardId={boardId} />
      <ModalCancelButton />
    </div>
  )
};

export default DeleteModalButtons;
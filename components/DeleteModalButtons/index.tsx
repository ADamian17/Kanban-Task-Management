import ModalCancelButton from "../UI/Modal/modal-components/ModalCancelButton";
import styles from "./DeleteModalButtons.module.scss";

type DeleteModalButtonsType = {
  boardId: number | null
};

const DeleteModalButtons: React.FC<DeleteModalButtonsType> = (props) => {
  return (
    <div className={styles.wrapper}>
      <ModalCancelButton />
    </div>
  )
};

export default DeleteModalButtons;
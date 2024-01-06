import AddBoardForm from "@/components/Forms/AddBoardForm";
import ModalContent from "@/components/UI/Modal/ModalContent";

import styles from "./AddBoard.module.scss";


const AddBoard = () => {
  return (
    <ModalContent className={styles.addBoardContent}>
      <h2 className={styles.headline}>Add New Board</h2>

      <AddBoardForm />
    </ModalContent>
  )
};

export default AddBoard;
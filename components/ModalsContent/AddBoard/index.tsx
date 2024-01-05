import ModalContent from "@/components/UI/Modal/ModalContent";

import styles from "./AddBoard.module.scss";
import Button from "@/components/UI/Button";
import ButtonsGroup from "@/components/UI/ButtonsGroup";
import TextField from "@/components/UI/TextField";

type AddBoardType = {};

const AddBoard: React.FC<AddBoardType> = (props) => {
  return (
    <ModalContent className={styles.addBoardContent}>
      <h2 className={styles.headline}>Add New Board</h2>
      <form>
        <TextField placeholder="e.g. Web Design" />
        <br />
        <ButtonsGroup>
          <Button variant="secondary">+ Add New Column</Button>

          <Button type="submit">Create New Board</Button>
        </ButtonsGroup>
      </form>
    </ModalContent>
  )
};

export default AddBoard;
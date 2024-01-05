import BoardsMenu from "@/components/BoardsMenu";
import ThemeButtonToggle from "@/components/ThemeButtonToggle";
import ModalContent from "@/components/UI/Modal/ModalContent";

import styles from "./SelectBoard.module.scss";

type SelectBoardType = {};

const SelectBoard: React.FC<SelectBoardType> = (props) => {
  return (
    <ModalContent position="top" className={styles.selectBoardModal}>
      {/* <BoardsMenu /> */}
      <ThemeButtonToggle />
    </ModalContent>
  );
};

export default SelectBoard;
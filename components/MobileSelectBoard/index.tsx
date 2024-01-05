import { ComponentProps } from "react";

import Modal from "../UI/Modal";
import ThemeButtonToggle from "../ThemeButtonToggle";

import styles from "./MobileSelectBoard.module.scss";
import BoardsMenu from "../BoardsMenu";
import ModalTriggerWithChevron from "../ModalTriggerWithChevron";
import ModalContent from "../UI/Modal/ModalContent";

type MobileSelectBoardType = {} & ComponentProps<"div">;

const MobileSelectBoard: React.FC<MobileSelectBoardType> = ({ className, onClick, children, ...rest }) => {

  return (
    <Modal>
      <ModalTriggerWithChevron />

      <ModalContent position="top" className={styles.modal}>
        <BoardsMenu />

        <ThemeButtonToggle />
      </ModalContent>
    </Modal>
  )
};

export default MobileSelectBoard;
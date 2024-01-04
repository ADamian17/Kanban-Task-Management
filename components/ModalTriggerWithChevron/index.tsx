"use client"
import { useModalCtx } from "../UI/Modal/ModalProvider";
import Modal from "../UI/Modal";

type MobileSelectBoardType = {};

const ModalTriggerWithChevron: React.FC<MobileSelectBoardType> = (props) => {
  const { show } = useModalCtx()
  const icon = show ? "up" : "down";

  return (
    <Modal.Trigger>
      <svg
        width="1rem"
        height="0.7rem"
      >
        <use href={`/icons/icons-defs.svg#chevron-${icon}`}></use>
      </svg>
    </Modal.Trigger>
  )
};

export default ModalTriggerWithChevron;
"use client"

// import useModalStore from "@/state/useModalStore";
import ModalTrigger from "../UI/Modal/ModalTrigger";

type MobileSelectBoardType = {};

const ModalTriggerWithChevron: React.FC<MobileSelectBoardType> = (props) => {
  // const { modalTrigger } = useModalStore(state => state);

  // const icon = modalTrigger === "select-board" ? "up" : "down";

  return (
    <ModalTrigger
    // modalTrigger={"select-board"}
    >
      <svg
        width="1rem"
        height="0.7rem"
      >
        {/* <use href={`/icons/icons-defs.svg#chevron-${icon}`}></use> */}
      </svg>
    </ModalTrigger>
  )
};

export default ModalTriggerWithChevron;
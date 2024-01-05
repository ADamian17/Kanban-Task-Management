"use client"

import Modal from "@/components/UI/Modal";
import styles from "./ModalContainer.module.scss";
import useModalStore from "@/state/useModalStore";
import { useRef } from "react";

type ModalContainerType = {};

const ModalContainer: React.FC<ModalContainerType> = (props) => {
  const { modals, modalTrigger, closeModal } = useModalStore(state => state);
  const ModalContent = modalTrigger && modals[modalTrigger]
  const modalRef = useRef(null)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log((e.target as HTMLElement).id);

    if ((e.target as HTMLElement).id !== "modal-content") {
      closeModal()
    }
  }

  return (ModalContent &&
    <Modal onClick={handleClick} ref={modalRef.current}>
      <ModalContent />
    </Modal>
  )
};

export default ModalContainer;
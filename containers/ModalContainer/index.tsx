"use client"

import Modal from "@/components/UI/Modal";
import styles from "./ModalContainer.module.scss";
import useModalStore from "@/state/useModalStore";
import { useRef } from "react";

type ModalContainerType = {};

const ModalContainer: React.FC<ModalContainerType> = (props) => {
  const { modals, modalTrigger, closeModal } = useModalStore(state => state);
  const ModalContent = modalTrigger && modals[modalTrigger]

  return (ModalContent &&
    <Modal onClick={closeModal}>
      <ModalContent />
    </Modal>
  )
};

export default ModalContainer;
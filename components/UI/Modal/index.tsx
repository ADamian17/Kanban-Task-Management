import { ComponentProps } from "react";

import ModalContent from "./ModalContent";

import styles from "./Modal.module.scss";

type ModalType = {
  children: React.ReactNode
} & ComponentProps<"div">;

const Modal = ({ children, onClick, ...rest }: ModalType) => {
  return (
    <div
      className={`${styles.modal}`}
      {...rest}
    >
      <div className={`${styles.modalBackdrop}`}
        onClick={onClick}
      />

      {children}
    </div>
  )
}

export default Modal;
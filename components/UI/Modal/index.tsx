import { ComponentPropsWithRef } from "react";

import ModalContent from "./ModalContent";

import styles from "./Modal.module.scss";

type ModalType = {
  children: React.ReactNode
} & ComponentPropsWithRef<"div">;

const Modal = ({ children, onClick, ref, ...rest }: ModalType) => {
  return (
    <div
      className={`${styles.modal}`}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Modal;
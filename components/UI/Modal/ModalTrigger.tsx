"use client"
import { ComponentProps, forwardRef } from "react";
import styles from "./Modal.module.scss"
import { useModalCtx } from "./ModalProvider";

type ModalTriggerProps = {
  children: React.ReactNode
} & ComponentProps<"button">;

const ModalTrigger = ({ children, className, onClick, ...rest }: ModalTriggerProps) => {
  const { show, openModal } = useModalCtx();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);

    openModal()
  }

  return (
    <button
      className={`${styles.modalTrigger} ${className}`} {...rest}
      data-is-modal-open={show}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};

ModalTrigger.displayName = "ModalTrigger"

export default ModalTrigger;
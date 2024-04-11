"use client"
import { ComponentProps } from "react";
// import useModalStore, { ModalTriggerType } from "@/state/useModalStore";

import styles from "./Modal.module.scss"

type ModalTriggerProps = {
  children: React.ReactNode
  // modalTrigger: ModalTriggerType;
} & ComponentProps<"button">;

const ModalTrigger = ({
  children,
  className,
  onClick,
  // modalTrigger, 
  ...rest
}: ModalTriggerProps) => {
  // const { openModal } = useModalStore(state => state);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);

    // openModal(modalTrigger)
  }

  return (
    <button
      className={`${styles.modalTrigger} ${className}`} {...rest}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};

export default ModalTrigger;
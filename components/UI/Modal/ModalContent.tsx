"use client";
import { ElementRef, useRef } from "react";
import { useModalCtx } from "./ModalProvider";

import styles from "./Modal.module.scss";

type ModalContentType = {
  children: React.ReactNode
  position?: "top" | "center";
  className?: string
};

const ModalContent = ({
  children,
  className,
  position = "center",
}: ModalContentType) => {
  const { show, closeModal } = useModalCtx();
  const ref = useRef<ElementRef<"div">>(null)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === ref.current) {
      closeModal()
    }
  }

  return (
    <>
      {
        show && (
          <div
            className={`${styles.modal} ${styles[position]} ${className}`}
            onClick={handleClick}
            ref={ref}
          >
            <div className={styles.modalContent}>
              {children}
            </div>
          </div>
        )
      }
    </>
  )
};

export default ModalContent;
"use client";
import React, { MouseEventHandler, useRef } from "react";

import styles from "./Modal.module.scss";
import { isNil } from "lodash";

type ModalType = {
  children: React.ReactNode;
  onClose?: () => void;
  show: boolean;
  title?: string;
  position?: "center" | "top";
  modalClassName?: string;
  className?: string;
};

const Modal: React.FC<ModalType> = ({ show, children, onClose, title, position = "center", className, modalClassName }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleModalClose: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== wrapperRef.current) return;

    if (typeof onClose === "function") onClose();
  };

  return (
    <>
      {show && (
        <div
          ref={wrapperRef}
          className={`${styles.modalWrapper} ${styles[position]} ${className}`}
          onClick={handleModalClose}
          id="modal-wrapper"
        >
          <div className={`${styles.modal} ${modalClassName}`}>
            {!isNil(title) && <p className={styles.title}>{title}</p>}

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

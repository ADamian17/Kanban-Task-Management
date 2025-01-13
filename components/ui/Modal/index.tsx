"use client";
import React, { MouseEventHandler, useRef } from "react";

import styles from "./Modal.module.scss";

type ModalType = {
  show: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

const Modal: React.FC<ModalType> = ({ show, children, onClose }) => {
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
          className={styles.modalWrapper}
          onClick={handleModalClose}
          id="modal-wrapper"
        >
          <div className={styles.modal}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;

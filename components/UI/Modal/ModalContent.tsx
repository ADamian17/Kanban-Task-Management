"use client";

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
}: ModalContentType) => (
  <div id="modal-content" className={`${styles.modalContent} ${styles[position]} ${className}`}>
    {children}
  </div>
)

export default ModalContent;

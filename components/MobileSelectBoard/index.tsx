"use client"
import React, { ComponentProps, ElementRef, useRef, useState } from "react";

import styles from "./MobileSelectBoard.module.scss";
import { createPortal } from "react-dom";
import ThemeButtonToggle from "../ThemeButtonToggle";

type MobileSelectBoardType = {};

const MobileSelectBoard: React.FC<MobileSelectBoardType & ComponentProps<"svg">> = ({ className, onClick, ...rest }) => {
  const [show, setShow] = useState(false)
  const modalRef = useRef<ElementRef<"dialog">>(null)
  const icon = show ? "up" : "down";

  const handleOpen: React.MouseEventHandler<SVGSVGElement> = (e) => {
    if (onClick) onClick(e)

    setShow(true)
    modalRef.current?.showModal()
  }

  const handleClose: React.MouseEventHandler<HTMLDialogElement> = (e) => {
    console.log(e.target);

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );

    if (!isInDialog) {
      setShow(false)
      modalRef?.current?.close()
    }
  }

  const modal = (
    <dialog ref={modalRef} className={`${styles.modal} ${show && styles.show}`} onClick={handleClose}>
      <p className={styles.modalHeadline}>all boards (3)</p>

      <ThemeButtonToggle />
    </dialog>
  );

  return (
    <>
      <svg
        className={`${styles.icon}`}
        onClick={handleOpen}
        {...rest}
      >
        <use href={`/icons/icons-defs.svg#chevron-${icon}`}></use>
      </svg>
      {
        createPortal(
          modal,
          document.getElementById("modal") as HTMLElement
        )
      }
    </>
  )
};

export default MobileSelectBoard;
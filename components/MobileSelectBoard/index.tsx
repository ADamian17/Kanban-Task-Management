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
    if ((e.target as HTMLElement).id === "toggle-theme-switch") return;

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

      <ul className={styles.boardList}>
        <li className={styles.boardItem}>
          <h3 className={`${styles.copy} ${styles.active}`}>
            <svg>
              <use href={`/icons/icons-defs.svg#board`}></use>
            </svg>

            Platform Launch
          </h3>
        </li>

        <li className={styles.boardItem}>
          <h3 className={`${styles.copy}`}>
            <svg>
              <use href={`/icons/icons-defs.svg#board`}></use>
            </svg>

            Marketing Plan
          </h3>
        </li>

        <li className={styles.boardItem}>
          <h3 className={`${styles.copy}`}>
            <svg>
              <use href={`/icons/icons-defs.svg#board`}></use>
            </svg>

            Roadmap
          </h3>
        </li>

        <li className={styles.boardItem}>
          <h3 className={`${styles.copy} ${styles.withPurpleText}`}>
            <svg>
              <use href={`/icons/icons-defs.svg#board`}></use>
            </svg>

            + Create New Board
          </h3>
        </li>
      </ul>

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
        show && createPortal(
          modal,
          document.getElementById("modal") as HTMLElement
        )
      }
    </>
  )
};

export default MobileSelectBoard;
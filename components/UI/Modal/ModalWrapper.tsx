"use client"
import { ComponentProps } from "react";
import { useRouter } from 'next/navigation'

import styles from "./Modal.module.scss";

type ModalWrapperType = {
  children: React.ReactNode
} & ComponentProps<"div">;

const ModalWrapper = ({ children, onClick, ...rest }: ModalWrapperType) => {
  const router = useRouter()

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    onClick && onClick(e)
    router.back()
  }

  return (
    <div
      className={`${styles.modal}`}
      {...rest}
    >
      <div className={`${styles.modalBackdrop}`}
        onClick={handleClick}
      />

      {children}
    </div>
  )
}

export default ModalWrapper;
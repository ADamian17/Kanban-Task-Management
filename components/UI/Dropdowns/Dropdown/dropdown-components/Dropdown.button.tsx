"use client"
import { ComponentProps, forwardRef, useEffect } from "react";
import { useDropdownCtx } from "./Dropdown.provider";

import styles from "./Dropdown.module.scss"

type DropdownButtonProps = {
  children: React.ReactNode
} & ComponentProps<"button">;

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(({ children, className, ...rest }, btnRef) => {
  const { toggle, close } = useDropdownCtx();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (btnRef && typeof btnRef === "object" && e.target !== btnRef.current) {
        close()
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => document.removeEventListener("click", handleOutsideClick)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    toggle();
    (e.target as HTMLElement), focus()
  }

  return (
    <button
      className={`${styles.dropdownButton} ${className}`}
      onClick={handleClick}
      ref={btnRef}
      {...rest}
    >
      {children}
    </button>
  );
})

DropdownButton.displayName = "DropdownButton"

export default DropdownButton;
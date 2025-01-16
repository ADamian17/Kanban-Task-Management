"use client"
import { ComponentProps, RefObject, useEffect } from "react";
import { useDropdownCtx } from "./Dropdown.provider";

import styles from "./Dropdown.module.scss"

type DropdownButtonProps = ComponentProps<"button"> & {
  ref: RefObject<HTMLButtonElement | null>
};

const DropdownButton: React.FC<DropdownButtonProps> = ({ children, className, ref, ...rest }) => {
  const { toggle, close } = useDropdownCtx();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref && typeof ref === "object" && e.target !== ref.current) {
        close()
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => document.removeEventListener("click", handleOutsideClick)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    toggle();
    (e.target as HTMLElement).focus()
  }

  return (
    <button
      className={`${styles.dropdownButton} ${className}`}
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}

export default DropdownButton;

"use client"
import { useDropdownCtx } from "./Dropdown.provider";

import styles from "./Dropdown.module.scss"

type DropdownMenuProps = {
  children: React.ReactNode
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const { isOpen } = useDropdownCtx();

  return (
    <>
      {
        isOpen && (
          <div className={styles.dropdownMenu}>
            {children}
          </div>
        )
      }
    </>
  )
}

export default DropdownMenu
"use client"
import { ElementRef, useRef } from "react";
import Dropdown from "../Dropdown";
import styles from "./KebabDropdown.module.scss";

type KebabDropdownProps = {
  children: React.ReactNode
  className?: string
}

const KebabDropdown = ({ children, className }: KebabDropdownProps) => {
  const btnRef = useRef<ElementRef<"button">>(null)

  return (
    <Dropdown>
      <Dropdown.Button ref={btnRef} className={styles.kebabMenuButton}>
        <svg className={styles.icon}>
          <use href="/icons/icons-defs.svg#kebab-menu"></use>
        </svg>
      </Dropdown.Button>

      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default KebabDropdown;
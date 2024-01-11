"use client"
import { ElementRef, useRef } from "react";
import Dropdown from "../Dropdown";
import styles from "./KebabDropdown.module.scss";
import ModalTrigger from "../../Modal/ModalTrigger";
import { ModalTriggerType } from "@/state/useModalStore";
import Link from "next/link";

type KebabDropdownItem = {
  label: string,
  isDelete: boolean,
  uri: string;
}

type KebabDropdownProps = {
  className?: string
  menuItems: KebabDropdownItem[]
}

const KebabDropdown = ({ className, menuItems }: KebabDropdownProps) => {
  const btnRef = useRef<ElementRef<"button">>(null)

  return (
    <Dropdown>
      <Dropdown.Button ref={btnRef} className={styles.kebabMenuButton}>
        <svg className={styles.icon}>
          <use href="/icons/icons-defs.svg#kebab-menu"></use>
        </svg>
      </Dropdown.Button>

      <Dropdown.Menu>
        <ul className={styles.kebabMenuItems}>
          {
            menuItems && menuItems.map((menuItem, idx) => (
              <li
                key={menuItem.label + "-" + idx}
              >
                <Link passHref href={menuItem.uri} className={`${styles.menuItem} ${menuItem.isDelete && styles.redTxt}`}>
                  {menuItem?.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default KebabDropdown;

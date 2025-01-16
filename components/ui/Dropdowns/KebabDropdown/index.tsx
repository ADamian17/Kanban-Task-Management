"use client"
import { ComponentRef, useRef } from "react";
import Link from "next/link";

import Dropdown from "../Dropdown";

import styles from "./KebabDropdown.module.scss";
import DropdownButton from "../Dropdown/dropdown-components/Dropdown.button";
import DropdownMenu from "../Dropdown/dropdown-components/Dropdown.menu";
import ThreeDots from "@/components/icons/ThreeDots";

type KebabDropdownItem = {
  label: string,
  isDelete?: boolean,
  uri: string;
}

type KebabDropdownProps = {
  className?: string
  menuItems: KebabDropdownItem[]
}

const KebabDropdown = ({ menuItems }: KebabDropdownProps) => {
  const btnRef = useRef<ComponentRef<"button">>(null)

  return (
    <Dropdown>
      <DropdownButton ref={btnRef} className={styles.kebabMenuButton}>
        <ThreeDots className={styles.icon} />
      </DropdownButton>

      <DropdownMenu>
        <ul className={styles.kebabMenuItems}>
          {
            menuItems && menuItems.map((menuItem, idx) => (
              <li
                key={menuItem.label + "-" + idx}
              >
                <Link
                  className={`${styles.menuItem} ${menuItem.isDelete && styles.redTxt}`}
                  href={menuItem.uri}
                >
                  {menuItem?.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </DropdownMenu>
    </Dropdown>
  )
}

export default KebabDropdown;

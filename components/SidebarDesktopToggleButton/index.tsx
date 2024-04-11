"use client"
import Image from "next/image";

import styles from "./SidebarDesktopToggleButton.module.scss";
import useSidebarStore from "@/state/useSidebarStore";

const SidebarDesktopToggleButton = () => {
  const { setIsOpen, isOpen } = useSidebarStore(state => state)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <button className={`${styles.container} ${isOpen && styles.isOpen}`} onClick={handleClick}>
      <Image
        src="/icons/sidebar-toggle-button.svg"
        width={56}
        height={48}
        alt="button icon"
      />
    </button>
  )
};

export default SidebarDesktopToggleButton;

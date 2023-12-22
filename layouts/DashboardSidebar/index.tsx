"use client"
import React from 'react';

import LogoDesktop from '@/components/LogoDesktop';

import styles from "./DashboardSidebar.module.scss";
import useSidebarStore from '@/state/useSidebarStore';
import ThemeButtonToggle from '@/components/ThemeButtonToggle';

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardSidebar({ children }: DashboardLayoutProps) {
  const { isOpen, setIsOpen } = useSidebarStore(state => state);

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <aside className={`${styles.sideBar} ${isOpen && styles.isOpen}`}>
      <LogoDesktop />

      <section className={styles.sideBarMenu}>
        <div className={styles.sideBarMenuItems}>
          {children}
        </div>

        <ThemeButtonToggle />

        <button className={styles.hideSidebarButton} onClick={handleClose}>
          <svg>
            <use href='/icons/icons-defs.svg#eye-slash'></use>
          </svg>
          <h3>Hide Sidebar</h3>
        </button>
      </section>
    </aside>
  )
}

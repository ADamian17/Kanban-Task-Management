"use client"
import React from 'react';

import LogoDesktop from '@/components/LogoDesktop';

import styles from "./DashboardSidebar.module.scss";
import useSidebarStore from '@/state/useSidebarStore';

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardSidebar({ children }: DashboardLayoutProps) {
  const { isOpen } = useSidebarStore(state => state);

  return (
    <aside className={`${styles.sideBar} ${isOpen && styles.isOpen}`}>
      <LogoDesktop />

      <section className={styles.sideBarMenu}>
        {children}
      </section>
    </aside>
  )
}

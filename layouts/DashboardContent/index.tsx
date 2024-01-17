"use client"
import useSidebarStore from '@/state/useSidebarStore';

import styles from "./DashboardContent.module.scss";

type DashboardContentProps = {
  children: React.ReactNode
}

const DashboardContent = ({ children }: DashboardContentProps) => {
  const { isOpen } = useSidebarStore(state => state);

  return (
    <section className={`${styles.dashContent} ${isOpen && styles.isOpen}`}>
      {children}
    </section>
  )
}

export default DashboardContent;
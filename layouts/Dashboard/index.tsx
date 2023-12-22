import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const MobileSelectBoard = dynamic(() => import('@/components/MobileSelectBoard'), { ssr: false });

import { getBoards } from '@/utils/getBoards';
import Button from '@/components/UI/Button'
import DashboardSidebar from '../DashboardSidebar';
import SidebarDesktopToggleButton from '@/components/SidebarDesktopToggleButton';

import styles from "./Dashboard.module.scss";

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // const data = await getBoards()

  return (
    <main className={styles.dashboard}>
      <DashboardSidebar>
        links
      </DashboardSidebar>

      <header className={styles.dashboardHeader}>
        <figure className={styles.logo}>
          <Image
            src="/icons/kanban-mobile.svg"
            width="24"
            height="25"
            alt='kanban icon'
          />

          <figcaption className={styles.headline}>
            <h2>Platform Launch</h2>

            <MobileSelectBoard />
          </figcaption>
        </figure>

        <Button className={styles.cta} disabled>
          <svg>
            <use href="/icons/icons-defs.svg#plus"></use>
          </svg>

          <span>Add new Task</span>
        </Button>

        <svg className={styles.kebabMenu}>
          <use href="/icons/icons-defs.svg#kebab-menu"></use>
        </svg>
      </header>

      <section>
        {children}
      </section>

      <SidebarDesktopToggleButton />
    </main>
  )
}

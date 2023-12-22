import React from 'react';
import Image from 'next/image';

import Button from '@/components/UI/Button'
const MobileSelectBoard = dynamic(() => import('@/components/MobileSelectBoard'), { ssr: false });

import styles from "./Dashboard.module.scss";
import dynamic from 'next/dynamic';
import LogoDesktop from '@/components/LogoDesktop';

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className={styles.dashboard}>
      <aside className={`${styles.sideBar} ${styles.isOpen}`}>
        <LogoDesktop />

        <section>
          links
        </section>
      </aside>

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
        section
      </section>

      {/* 

      <section>
        {children}
      </section> */}
    </main>
  )
}

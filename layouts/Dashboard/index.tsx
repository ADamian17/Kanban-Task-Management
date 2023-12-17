import React from 'react';
import Image from 'next/image';

import Button from '@/components/UI/Button'

import styles from "./Dashboard.module.scss";

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
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

            <svg>
              <use href="/icons/icons-defs.svg#chevron-down"></use>
            </svg>
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

      <section>{children}</section>
    </main>
  )
}

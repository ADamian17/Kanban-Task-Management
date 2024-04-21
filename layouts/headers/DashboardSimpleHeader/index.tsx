"use client"
import Image from "next/image";
import Link from "next/link";

import styles from "./DashboardSimpleHeader.module.scss";
import useThemeStore from "@/state/useThemeStore";

const DashboardSimpleHeader = ({ count }: { count: number | null }) => {
  const { theme } = useThemeStore(state => state)
  const disableCta = Boolean(count && count <= 0)

  return (
    <header className={styles.dashboardHeader}>
      <Link href="/dashboard/" className={styles.logo}>
        <picture className={styles.icon}>
          <source
            media="(max-width: 678px)"
            srcSet="/icons/kanban-mobile.svg"
            width={24}
            height={25}
          />

          <Image
            src={`/icons/kanban-desktop-${theme}.svg`}
            width={153}
            height={25}
            alt='kanban icon'
            priority
          />
        </picture>
      </Link>

      <Link
        className={`${styles.cta} ${disableCta && styles.disableCta}`}
        href="/dashboard/add-board"
      >
        + Add new Board
      </Link>
    </header>
  );
}

export default DashboardSimpleHeader;

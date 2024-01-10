"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from "./BoardsMenu.module.scss"

type BoardsMenuItemType = {
  name: string
  uri: string
}

const BoardsMenuItem: React.FC<BoardsMenuItemType> = ({ name, uri }) => {
  const pathname = usePathname()

  return (
    <li className={styles.boardItem}>
      <Link href={uri} className={styles.link}>
        <h3 className={`${styles.copy} ${uri === pathname && styles.active}`}>
          <svg>
            <use href={`/icons/icons-defs.svg#board`}></use>
          </svg>

          {name}
        </h3>
      </Link>
    </li>
  );
}

export default BoardsMenuItem;

"use client"
import React from 'react'

import { usePathname } from 'next/navigation'

import styles from "./BoardsMenu.module.scss"
import Link from 'next/link'
import { setUrl } from '@/utils/setUrl'

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

"use server"
import Link from "next/link";

import { getBoards } from "@/utils/board/getBoards";
import BoardsMenuItem from "./BoardsMenuItem";

import styles from "./BoardsMenu.module.scss"

const BoardsMenu = async () => {
  const data = await getBoards()
  const boardCount = data?.boards?.length

  const boardList = data?.boards && data?.boards.map(board => (
    <BoardsMenuItem
      key={`${board?.id} ${board?.name}`}
      name={board?.name}
      uri={board?.uri}
    />
  ))

  return (
    <div className={styles.boardContainer}>
      <p className={styles.headline}>all boards ({boardCount})</p>

      <ul className={styles.boardList}>
        {boardList}

        <li className={styles.boardItem}>
          <Link href="/add-board" className={styles.link}>
            <h3 className={`${styles.copy} ${styles.withPurpleText}`}>
              <svg>
                <use href={`/icons/icons-defs.svg#board`}></use>
              </svg>

              + Create New Board
            </h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BoardsMenu;

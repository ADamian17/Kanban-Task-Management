import React from "react";
import Link from "next/link";

import { AllBoardsDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/execute-api-req";

import styles from "./BoardsNavigation.module.scss";
import Board from "@/components/icons/Board";

type BoardsNavigationProps = {
  boardId: string;
}

const BoardsNavigation: React.FC<BoardsNavigationProps> = async ({ boardId }) => {
  const { getAllBoards } = await executeApiReq(AllBoardsDocument);

  const boardsCount = getAllBoards?.count ?? 0;
  const allBoards = getAllBoards?.nodes ?? [];

  return (
    <div className={styles.boardsNavigationWrapper}>
      <p className={styles.boardsCount}>all boards ({boardsCount})</p>

      <ul className={styles.boardsList}>
        {allBoards.map((board) => (
          <li key={board?.id}>
            <Link href={board?.uri ?? ""} className={`${styles.boardsListItem} ${board?.id === boardId ? styles.active : ""}`.trim()}>
              <Board />

              <span>{board?.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.addBoardBtn}>
        <Board />
        <span>+ Create New Board</span>
      </button>
    </div>
  )
};

export default BoardsNavigation;

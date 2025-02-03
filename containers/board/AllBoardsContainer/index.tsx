import React from "react";
import Link from "next/link";

import { AllBoardsQuery } from "@/__generated__/graphql";

import styles from "./AllBoardsContainer.module.scss";
import Board from "@/components/icons/Board";

type AllBoardsContainerType = {
  boardData: AllBoardsQuery["getAllBoards"]
};

const AllBoardsContainer: React.FC<AllBoardsContainerType> = ({ boardData }) => (
  <div className={styles.allBoardWrapper}>
    <h3 className={styles.headline}>
      <Board />
      <span>My boards | {boardData?.count}</span>
    </h3>

    <ul className={styles.boardsList}>
      {(boardData?.nodes ?? []).map((board) => (
        <li key={board?.id} className={styles.board}>
          <div className={styles.boardNameWrapper}>
            <Link key={board?.id} href={board?.uri ?? ""} className={styles.boardName}>
              {board?.name}
            </Link>
          </div>

          <div className={styles.boardNameContent}>
            <p>columns: {board?.columns.count}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default AllBoardsContainer;

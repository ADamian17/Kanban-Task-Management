import React from "react";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import BoardLayoutHeader from "./BoardLayoutHeader";
import ColumnsList from "./ColumnsList";
import EmptyBoard from "./EmptyBoard";

import styles from "./BoardLayout.module.scss";

type BoardLayoutType = {
  boardData: GetOneBoardByUriQuery["getOneBoard"];
  children: React.ReactNode;
};

const BoardLayout: React.FC<BoardLayoutType> = ({ boardData, children }) => {
  const { columns, id: boardId, uri } = boardData;

  return (
    <main className={styles.boardLayoutMain}>
      <BoardLayoutHeader boardData={boardData} />

      <section className={styles.boardLayoutContent}>
        <aside className={styles.sidebar}>
          board layout aside
        </aside>

        {columns.count <= 0 ? <EmptyBoard boardId={boardId} /> : <ColumnsList columns={columns} boardUri={uri ?? ''} />}
      </section>

      {children}
    </main>
  )
};

export default BoardLayout;

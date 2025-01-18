import React from "react";
import Link from "next/link";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import ButtonLink from "@/components/ui/ButtonLink";
import ColumnsList from "./ColumnsList";
import EmptyBoard from "./EmptyBoard";

import styles from "./BoardLayout.module.scss";

type BoardLayoutType = {
  boardData: GetOneBoardByUriQuery["getOneBoard"];
  children: React.ReactNode;
};

const BoardLayout: React.FC<BoardLayoutType> = ({ boardData, children }) => {
  const { columns, id: boardId, uri, name } = boardData;
  const isColumnsEmpty = columns.count <= 0;

  return (
    <main className={styles.boardLayoutMain}>
      <header className={styles.boardLayoutHeader}>
        <div>
          <Link href="/">Boards</Link>

          <span className={styles.boardName}>{name}</span>
        </div>

        <ButtonLink href={`${uri}task/new`} text="Add new Task" disabled={isColumnsEmpty} />
      </header>

      <section className={styles.boardLayoutContent}>
        <aside className={styles.sidebar}>
          board layout aside
        </aside>

        {isColumnsEmpty ? <EmptyBoard boardId={boardId} /> : <ColumnsList columns={columns} boardUri={uri ?? ''} />}
      </section>

      {children}
    </main>
  )
};

export default BoardLayout;

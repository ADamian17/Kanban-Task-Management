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
  const { columns, id: boardId, uri } = boardData;
  const isColumnsEmpty = columns.count <= 0;

  return (
    <>
      <header className={styles.boardLayoutHeader}>
        <Link href="/" style={{ display: "inline-block", marginRight: "auto" }}>Boards</Link>

        <ButtonLink href={`${uri}task/new`} text="Add new Task" disabled={isColumnsEmpty} />
      </header>

      <main className={styles.boardLayoutMain}>
        {isColumnsEmpty ? <EmptyBoard boardId={boardId} /> : <ColumnsList columns={columns} boardUri={uri ?? ''} />}
      </main>

      {children}
    </>
  )
};

export default BoardLayout;
